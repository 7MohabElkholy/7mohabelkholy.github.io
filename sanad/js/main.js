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

  // --- Video Overlay ---
  var videoOverlay = document.getElementById("videoOverlay");
  if (!videoOverlay) {
    videoOverlay = document.createElement("div");
    videoOverlay.className = "video-overlay";
    videoOverlay.id = "videoOverlay";
    videoOverlay.innerHTML =
      '<div class="video-overlay-inner">' +
      '<button class="video-overlay-close" aria-label="إغلاق">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>' +
      "</button>" +
      '<div class="video-overlay-player"></div>' +
      "</div>";
    document.body.appendChild(videoOverlay);
  }

  var playerContainer = videoOverlay.querySelector(".video-overlay-player");
  var videoCloseBtn = videoOverlay.querySelector(".video-overlay-close");
  var currentIframe = null;

  function getEmbedUrl(url) {
    var match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)/,
    );
    return match
      ? "https://www.youtube.com/embed/" + match[1] + "?autoplay=1&rel=0"
      : null;
  }

  function openVideo(url) {
    var embedUrl = getEmbedUrl(url);
    if (!embedUrl) return;
    currentIframe = document.createElement("iframe");
    currentIframe.src = embedUrl;
    currentIframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    currentIframe.allowFullscreen = true;
    playerContainer.appendChild(currentIframe);
    videoOverlay.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeVideo() {
    videoOverlay.classList.remove("open");
    document.body.style.overflow = "";
    if (currentIframe) {
      currentIframe.src = "";
      currentIframe.remove();
      currentIframe = null;
    }
  }

  document.querySelectorAll(".video-card[data-video]").forEach(function (card) {
    card.addEventListener("click", function () {
      openVideo(card.dataset.video);
    });
  });

  videoCloseBtn.addEventListener("click", closeVideo);
  videoOverlay.addEventListener("click", function (e) {
    if (e.target === videoOverlay) closeVideo();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && videoOverlay.classList.contains("open")) {
      closeVideo();
    }
  });
});
