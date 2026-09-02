"use client";

import { useCart } from "./CartProvider";
import { formatCurrency } from "@/lib/format";

export default function CartDrawer() {
  const { items, isOpen, closeCart, subtotal, setQty, removeItem } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={closeCart} />
      <aside className="cart-drawer" role="dialog" aria-modal="true" aria-label="Giỏ hàng">
        <div className="cart-drawer-head">
          <h3>Giỏ hàng</h3>
          <button type="button" className="cart-drawer-close" onClick={closeCart} aria-label="Đóng giỏ hàng">
            ✕
          </button>
        </div>

        <div className="cart-drawer-body">
          {items.length === 0 ? (
            <p className="cart-empty">Giỏ hàng đang trống.</p>
          ) : (
            items.map((item) => (
              <div className="cart-item" key={item.id}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">{formatCurrency(item.price)} / bộ</div>
                  <div className="cart-item-controls">
                    <div className="qty-stepper">
                      <button type="button" onClick={() => setQty(item.id, item.qty - 1)} aria-label="Giảm số lượng">
                        −
                      </button>
                      <span>{item.qty}</span>
                      <button type="button" onClick={() => setQty(item.id, item.qty + 1)} aria-label="Tăng số lượng">
                        +
                      </button>
                    </div>
                    <button type="button" className="cart-item-remove" onClick={() => removeItem(item.id)}>
                      Xóa
                    </button>
                  </div>
                </div>
                <div className="cart-item-total">{formatCurrency(item.price * item.qty)}</div>
              </div>
            ))
          )}
        </div>

        <div className="cart-drawer-foot">
          <div className="cart-subtotal-row">
            <span className="cart-subtotal-label">Tạm tính</span>
            <span className="cart-subtotal-value">{formatCurrency(subtotal)}</span>
          </div>
          <button
            type="button"
            className="btn btn-primary btn-block"
            disabled={items.length === 0}
            onClick={() => alert("Thanh toán sẽ sớm có mặt — hiện mới quản lý giỏ hàng.")}
          >
            Thanh toán
          </button>
          <p className="cart-drawer-note">Giỏ hàng được lưu trên trình duyệt này.</p>
        </div>
      </aside>
    </>
  );
}
