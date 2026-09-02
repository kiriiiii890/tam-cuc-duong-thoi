(() => {
  "use strict";

  const FAQ_DATA = [
    ["Chưa từng chơi tam cúc thì bắt đầu thế nào?", "Trong hộp có tờ luật gấp bốn trang: thứ bậc bộ tướng, cách kết đôi kết ba, cách tính điểm và ba tình huống thường gặp. Đọc năm phút là vào được ván đầu."],
    ["Bộ bài có bao nhiêu lá, có đúng tam cúc truyền thống không?", "Đúng 32 lá, chia hai màu đỏ và đen, thứ bậc giữ nguyên như tam cúc cổ. Chỉ phần hình vẽ là mới."],
    ["Giấy có bền không, chơi lâu có xù mép?", "Giấy ivory 300gsm cán mờ hai mặt, bo góc 3 mm. Chơi thường xuyên vài trăm ván mép vẫn phẳng, miễn là không để hộp ẩm."],
    ["Đơn hàng giao trong bao lâu?", "Nội thành Hà Nội và TP.HCM 1–2 ngày, các tỉnh khác 2–4 ngày. Gói hai bộ và combo được miễn phí vận chuyển."],
    ["Có đổi trả được không?", "Trong 7 ngày kể từ khi nhận, nếu hộp còn nguyên seal. Nếu bài bị lỗi in, chúng tôi đổi bộ mới và chịu phí gửi hai chiều."],
    ["Mua làm quà tặng thì có gói không?", "Mỗi hộp đã kèm thiệp trắng để viết tay. Nếu cần gói giấy và dây buộc, chọn ô \"gói quà\" ở bước thanh toán."]
  ];

  function buildFaq() {
    const list = document.getElementById("faq-list");
    if (!list) return;

    FAQ_DATA.forEach(([q, a], i) => {
      const item = document.createElement("div");
      item.className = "faq-item";

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "faq-q";
      btn.setAttribute("aria-expanded", "false");

      const qText = document.createElement("span");
      qText.className = "q-text";
      qText.textContent = q;

      const sign = document.createElement("span");
      sign.className = "q-sign";
      sign.textContent = "+";

      btn.appendChild(qText);
      btn.appendChild(sign);

      const answer = document.createElement("p");
      answer.className = "faq-a";
      answer.textContent = a;
      answer.hidden = true;

      btn.addEventListener("click", () => {
        const isOpen = !answer.hidden;
        list.querySelectorAll(".faq-a").forEach((el) => { el.hidden = true; });
        list.querySelectorAll(".faq-q").forEach((el) => {
          el.setAttribute("aria-expanded", "false");
          el.querySelector(".q-sign").textContent = "+";
        });
        if (!isOpen) {
          answer.hidden = false;
          btn.setAttribute("aria-expanded", "true");
          sign.textContent = "–";
        }
      });

      item.appendChild(btn);
      item.appendChild(answer);
      list.appendChild(item);
    });
  }

  function setupStickyBar() {
    const bar = document.getElementById("sticky-bar");
    if (!bar) return;
    const THRESHOLD = 520;

    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      bar.classList.toggle("is-visible", y > THRESHOLD);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function setupContactForm() {
    const form = document.getElementById("contact-form");
    const submitBtn = document.getElementById("contact-submit");
    if (!form || !submitBtn) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // No backend is wired up yet — this only gives visual confirmation.
      // Hook this up to a form service (e.g. Formspree) or your own API
      // before going live.
      submitBtn.textContent = "Đã gửi, cảm ơn bạn";
      submitBtn.disabled = true;
      form.reset();
    });
  }

  function setupImageFallback() {
    // assets/img/poster-tam-cuc.png and assets/img/hero-ink.png ship as
    // placeholders until the real exports are dropped in — hide the
    // broken-image icon rather than show it.
    document.querySelectorAll("img").forEach((img) => {
      img.addEventListener("error", () => { img.style.display = "none"; }, { once: true });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    buildFaq();
    setupStickyBar();
    setupContactForm();
    setupImageFallback();
  });
})();
