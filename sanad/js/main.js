/* ============================================
   سند  — Shared JavaScript
   ============================================ */

// --- Mobile Nav ---
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".nav-toggle");
  const overlay = document.querySelector(".nav-overlay");
  const sheet = document.querySelector(".nav-sheet");
  const closeBtn = document.querySelector(".nav-sheet-close");

  if (toggle && overlay && sheet) {
    function openNav() {
      overlay.classList.add("open");
      sheet.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    function closeNav() {
      overlay.classList.remove("open");
      sheet.classList.remove("open");
      document.body.style.overflow = "";
    }

    toggle.addEventListener("click", openNav);
    closeBtn.addEventListener("click", closeNav);
    overlay.addEventListener("click", closeNav);

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && sheet.classList.contains("open")) {
        closeNav();
      }
    });
  }

  // --- FAQ Accordion ---
  document.querySelectorAll(".faq-question").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".faq-item");
      var isOpen = item.classList.contains("open");

      // Close all siblings
      var siblings = item.parentElement.querySelectorAll(".faq-item");
      siblings.forEach(function (s) {
        s.classList.remove("open");
      });

      if (!isOpen) {
        item.classList.add("open");
      }
    });
  });

  // --- OS Selector (Download page) ---
  var osBtns = document.querySelectorAll(".os-btn");
  osBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      osBtns.forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      // Dispatch custom event for potential update
      document.dispatchEvent(
        new CustomEvent("oschange", { detail: { os: btn.dataset.os } }),
      );
    });
  });

  // --- Help Center Search ---
  var searchInput = document.querySelector('.hero-search input[type="search"]');
  var helpCards = document.querySelectorAll(".help-categories > a");
  if (searchInput && helpCards.length) {
    searchInput.addEventListener("input", function () {
      var q = this.value.trim().toLowerCase();
      helpCards.forEach(function (a) {
        var text = a.textContent.toLowerCase();
        a.style.display = !q || text.includes(q) ? "" : "none";
      });
    });
  }

  // --- Active nav link ---
  var currentPath = window.location.pathname.replace(/\/$/, "") || "/index";
  document.querySelectorAll(".top-nav-menu a").forEach(function (a) {
    var href = a.getAttribute("href").replace(/\/$/, "") || "/index";
    if (currentPath === href || currentPath + ".html" === href) {
      a.classList.add("active");
    }
  });
});
