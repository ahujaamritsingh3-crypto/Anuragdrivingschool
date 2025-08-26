// ================================
// Splash Screen
// ================================
window.addEventListener("load", () => {
  const splash = document.getElementById("splash");
  setTimeout(() => {
    splash.classList.add("hidden");
  }, 2000); // 2 seconds
});

// ================================
// Mobile Hamburger Menu
// ================================
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const navLinks = document.querySelector("nav");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuBtn.classList.toggle("open");
    });
  }

  // ================================
  // Contact Form Validation
  // ================================
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = contactForm.querySelector("input[type='text']");
      const email = contactForm.querySelector("input[type='email']");
      const phone = contactForm.querySelector("input[type='tel']");
      const message = contactForm.querySelector("textarea");

      if (!name.value.trim() || !email.value.trim() || !phone.value.trim() || !message.value.trim()) {
        alert("⚠️ Please fill in all fields.");
        return;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.value.match(emailPattern)) {
        alert("⚠️ Please enter a valid email address.");
        return;
      }

      const phonePattern = /^[0-9]{10}$/;
      if (!phone.value.match(phonePattern)) {
        alert("⚠️ Please enter a valid 10-digit phone number.");
        return;
      }

      alert("✅ Thank you, " + name.value + "! Your message has been sent.");
      contactForm.reset();
    });
  }
});

// // ================================
// // Booking Form -> WhatsApp (no delay, pre-filled)
// // ================================
// document.addEventListener("DOMContentLoaded", () => {
//   const bookingForm = document.getElementById("bookingForm");

//   if (!bookingForm) return;

//   bookingForm.addEventListener("submit", function (e) {
//     e.preventDefault();

//     // 1) Collect values
//     const name = (document.getElementById("name")?.value || "").trim();
//     const phone = (document.getElementById("phone")?.value || "").trim();
//     const date  = (document.getElementById("date")?.value || "").trim();
//     const time  = (document.getElementById("time")?.value || "").trim();
//     const packageType = (document.getElementById("package")?.value || "").trim();

//     // 2) Your WhatsApp number — digits only (country code + number, NO +, NO spaces)
//     let whatsappNumber = "917767077000"; // <-- replace with yours
//     whatsappNumber = whatsappNumber.replace(/\D/g, "");

//     // 3) Build message and encode
//     const msgLines = [
//       "Hello, I would like to book a driving lesson.",
//       `👤 Name: ${name}`,
//       `📞 Phone: ${phone}`,
//       `📅 Date: ${date}`,
//       `⏰ Time: ${time}`,
//       `🚗 Package: ${packageType}`
//     ];
//     const encoded = encodeURIComponent(msgLines.join("\n"));

//     // 4) Primary + fallback URLs
//     const urlPrimary  = `https://wa.me/${whatsappNumber}?text=${encoded}`;
//     const urlFallback = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encoded}`;

//     // 5) Open immediately (keeps user gesture -> avoids popup blockers)
//     // Prefer same-tab redirect for reliability on mobile/desktop
//     try {
//       // Try primary
//       window.location.href = urlPrimary;

//       // As a safety net, switch to fallback shortly after (still works in same tab)
//       setTimeout(() => {
//         if (document.visibilityState === "visible") {
//           // If we are still on this page, try fallback
//           window.location.href = urlFallback;
//         }
//       }, 1200);
//     } catch {
//       // Last resort: create a link and click it
//       const a = document.createElement("a");
//       a.href = urlFallback;
//       a.rel = "noreferrer";
//       document.body.appendChild(a);
//       a.click();
//       a.remove();
//     }
//   });
// });

