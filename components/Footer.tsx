"use client";

import { useState, FormEvent } from "react";

export default function Footer() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // No backend is wired up yet — this only gives visual confirmation.
    // Hook this up to a form service or your own API before going live.
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <footer id="lien-he" className="site-footer">
      <div className="wrap section">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              TAM CÚC
              <br />
              <span className="accent">ĐƯƠNG THỜI</span>
            </div>
            <p className="footer-desc">
              Một xưởng nhỏ ở Hà Nội in lại những trò chơi giấy của người Việt. Tam cúc là bộ đầu tiên.
            </p>
            <div className="footer-contact">
              <a href="mailto:hello@tamcucduongthoi.vn">hello@tamcucduongthoi.vn</a>
              <a href="tel:+84900000000">090 000 0000</a>
              <span>Ngõ 12 Hàng Bột, Đống Đa, Hà Nội</span>
            </div>
            <div className="footer-social">
              <a href="#lien-he">Instagram</a>
              <a href="#lien-he">Facebook</a>
              <a href="#lien-he">TikTok</a>
            </div>
          </div>
          <div>
            <h6 className="footer-form-title">Gửi lời nhắn</h6>
            <form className="footer-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="tc-name">Tên</label>
                <input className="input" id="tc-name" name="name" type="text" placeholder="Tên của bạn" required />
              </div>
              <div className="field">
                <label htmlFor="tc-email">Email</label>
                <input className="input" id="tc-email" name="email" type="email" placeholder="ban@email.com" required />
              </div>
              <div className="field">
                <label htmlFor="tc-msg">Lời nhắn</label>
                <textarea className="input" id="tc-msg" name="message" placeholder="Bạn cần hỏi gì?" />
              </div>
              <button className="btn btn-primary" type="submit" style={{ justifySelf: "start" }}>
                {sent ? "Đã gửi, cảm ơn bạn" : "Gửi lời nhắn"}
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="copy">© 2026 Tam Cúc Đương Thời</span>
          <a href="#lien-he">Chính sách đổi trả</a>
          <a href="#lien-he">Vận chuyển</a>
        </div>
      </div>
    </footer>
  );
}
