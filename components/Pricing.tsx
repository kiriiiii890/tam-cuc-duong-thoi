"use client";

import { PRODUCTS } from "@/lib/products";
import { formatCurrency } from "@/lib/format";
import { useCart } from "./cart/CartProvider";

const product = PRODUCTS[0];

const FEATURES = [
  "32 quân bài in offset, phủ UV chống trầy",
  "Hộp đựng thiết kế riêng, kèm mã QR dẫn luật chơi",
  "Sổ tay nhỏ kể lại câu chuyện từng nhân vật",
  "Đóng gói cẩn thận trong túi quà — sẵn sàng để tặng",
];

export default function Pricing() {
  const { addItem } = useCart();

  return (
    <section id="goi-mua" className="pricing">
      <div className="wrap section pricing-layout">
        <div className="pricing-copy">
          <h2 className="pricing-title uses-webfont">Sẵn sàng mang Tam Cúc Đương Thời về nhà?</h2>
          <p className="pricing-lead">
            Một bộ bài đầy đủ 32 quân, hộp đựng riêng và cuốn sách nhỏ giới thiệu luật chơi — món quà
            vừa hoài niệm, vừa rất hôm nay.
          </p>
          <ul className="pricing-features">
            {FEATURES.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
        <div className="pricing-card">
          <div className="pricing-card-price">{formatCurrency(product.price)}</div>
          <p className="pricing-card-caption">Giá đặt trước · số lượng giới hạn</p>
          <button
            type="button"
            className="btn btn-block pricing-btn-primary"
            onClick={() => addItem(product)}
          >
            Đặt bài ngay
          </button>
          <a className="btn btn-block pricing-btn-secondary" href="#">
            Nhắn tin tư vấn
          </a>
          <div className="pricing-card-contact">
            <p className="pricing-card-contact-label">Liên hệ đặt hàng:</p>
            <p>Zalo / Hotline: 09xx xxx xxx</p>
            <p>Instagram: @tamcucduongthoi</p>
            <p className="pricing-card-contact-note">
              (thay các thông tin này bằng kênh liên hệ thật của bạn)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
