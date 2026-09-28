// ================================
// OFFERWAX - MAIN JAVASCRIPT
// ================================

document.addEventListener("DOMContentLoaded", () => {

  // ----------------
  // Banner Auto Slide
  // ----------------

  const banners = [
    {
      badge: "START EARNING",
      title: "Complete offers. Earn rewards.",
      text: "Choose an offer, follow the required steps and earn rewards."
    },
    {
      badge: "HOW TO USE OFFERWAX",
      title: "Earn with Offerwax in simple steps.",
      text: "Select an offer, complete the instructions and track your progress."
    },
    {
      badge: "TRENDING",
      title: "Discover high-paying offers.",
      text: "Check trending campaigns and choose the offer that works for you."
    }
  ];

  let bannerIndex = 0;

  const badge = document.querySelector(".banner-badge");
  const bannerTitle = document.querySelector(".banner h1");
  const bannerText = document.querySelector(".banner p");

  function changeBanner() {

    if (!badge || !bannerTitle || !bannerText) return;

    bannerIndex++;

    if (bannerIndex >= banners.length) {
      bannerIndex = 0;
    }

    badge.textContent = banners[bannerIndex].badge;
    bannerTitle.textContent = banners[bannerIndex].title;
    bannerText.textContent = banners[bannerIndex].text;
  }

  setInterval(changeBanner, 4000);


  // ----------------
  // Horizontal Offers
  // ----------------

  const offerRows = document.querySelectorAll(".offer-scroll");

  offerRows.forEach((row) => {

    let startX = 0;
    let scrollStart = 0;

    row.addEventListener("touchstart", (e) => {

      startX = e.touches[0].pageX;
      scrollStart = row.scrollLeft;

    });

    row.addEventListener("touchmove", (e) => {

      const x = e.touches[0].pageX;
      const distance = startX - x;

      row.scrollLeft = scrollStart + distance;

    });

  });


  // ----------------
  // Offer Buttons
  // ----------------

  const offerButtons = document.querySelectorAll(".small-btn");

  offerButtons.forEach((button) => {

    button.addEventListener("click", () => {

      const offerId = button.dataset.offer;

      if (offerId) {
        window.location.href =
          "offer.html?id=" + encodeURIComponent(offerId);
      }

    });

  });


  // ----------------
  // Bottom Navigation
  // ----------------

  const navItems = document.querySelectorAll(".nav-item");

  navItems.forEach((item) => {

    item.addEventListener("click", () => {

      navItems.forEach((nav) => {
        nav.classList.remove("active");
      });

      item.classList.add("active");

    });

  });


  // ----------------
  // Referral Payout
  // ----------------

  const payoutInput =
    document.querySelector("#referralPayout");

  const payoutPreview =
    document.querySelector("#payoutPreview");

  if (payoutInput && payoutPreview) {

    payoutInput.addEventListener("input", () => {

      let amount =
        Number(payoutInput.value) || 0;

      if (amount < 0) amount = 0;

      payoutPreview.textContent =
        "₹" + amount;

    });

  }


  // ----------------
  // Share & Earn
  // ----------------

  const generateLinkBtn =
    document.querySelector("#generateLink");

  const shareLink =
    document.querySelector("#shareLink");

  if (generateLinkBtn && shareLink) {

    generateLinkBtn.addEventListener("click", () => {

      const referralCode =
        "OW" +
        Math.random()
          .toString(36)
          .substring(2, 8)
          .toUpperCase();

      const link =
        window.location.origin +
        "/claim.html?ref=" +
        referralCode;

      shareLink.value = link;

    });

  }


  // ----------------
  // Copy Share Link
  // ----------------

  const copyBtn =
    document.querySelector("#copyLink");

  if (copyBtn && shareLink) {

    copyBtn.addEventListener("click", async () => {

      if (!shareLink.value) return;

      try {

        await navigator.clipboard.writeText(
          shareLink.value
        );

        copyBtn.textContent = "Copied ✓";

        setTimeout(() => {
          copyBtn.textContent = "Copy Link";
        }, 1500);

      } catch (error) {

        shareLink.select();
        document.execCommand("copy");

      }

    });

  }


  // ----------------
  // Tracking UI Demo
  // ----------------

  const trackingSteps =
    document.querySelectorAll(".step");

  trackingSteps.forEach((step) => {

    step.addEventListener("click", () => {

      /*
       Real tracking status will later
       come from affiliate/API/backend.

       We do NOT mark real conversions
       complete from the browser alone.
      */

      console.log(
        "Tracking step selected:",
        step.dataset.step
      );

    });

  });


  // ----------------
  // Withdraw Button
  // ----------------

  const withdrawBtn =
    document.querySelector(".withdraw-btn");

  if (withdrawBtn) {

    withdrawBtn.addEventListener("click", () => {

      window.location.href =
        "withdraw.html";

    });

  }


  // ----------------
  // Notification Button
  // ----------------

  const notificationBtn =
    document.querySelector("#notificationBtn");

  if (notificationBtn) {

    notificationBtn.addEventListener("click", () => {

      window.location.href =
        "notifications.html";

    });

  }


  // ----------------
  // Profile Button
  // ----------------

  const profileBtn =
    document.querySelector("#profileBtn");

  if (profileBtn) {

    profileBtn.addEventListener("click", () => {

      window.location.href =
        "profile.html";

    });

  }

});


// ================================
// Utility Functions
// ================================

function formatMoney(amount) {

  const number =
    Number(amount) || 0;

  return "₹" +
    number.toLocaleString("en-IN");

}


function openOffer(offerId) {

  window.location.href =
    "offer.html?id=" +
    encodeURIComponent(offerId);

}


function goToPage(page) {

  window.location.href = page;

}
