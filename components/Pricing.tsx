"use client";

import { PRODUCTS } from "@/lib/products";
import { formatCurrency } from "@/lib/format";
import { useCart } from "./cart/CartProvider";

export default function Pricing() {
  const { addItem } = useCart();

  return (
    <section id="goi-mua" className="pricing">
      <div className="wrap section">
        <h6 className="section-kicker">05 — Gói mua</h6>
        <div className="pricing-grid">
          {PRODUCTS.map((product) => (
            <div className={`price-card${product.featured ? " featured" : ""}`} key={product.id}>
              {product.featured && <div className="badge">ĐƯỢC CHỌN NHIỀU NHẤT</div>}
              <div className="tag">{product.tag}</div>
              <div className="price">{formatCurrency(product.price)}</div>
              <div className="sub">{product.sub}</div>
              <ul>
                {product.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <button
                type="button"
                className={`btn btn-block ${product.featured ? "btn-primary" : "btn-secondary"}`}
                onClick={() => addItem(product)}
              >
                Thêm vào giỏ
              </button>
            </div>
          ))}
        </div>
        <p className="pricing-fine">Thanh toán chuyển khoản, thẻ hoặc COD. Đổi trả trong 7 ngày nếu hộp còn nguyên seal.</p>
      </div>
    </section>
  );
}
