const menuToggle = document.querySelector(".menu-toggle");
const primaryNavigation = document.querySelector("#primary-navigation");
const inquiryTypeSelect = document.querySelector("#inquiry-type");
const familyInquiryFields = document.querySelector("#family-fields");
const contactForm = document.querySelector(".contact-form");
const footerYear = document.querySelector("#current-year");

if (footerYear) {
  footerYear.textContent = String(new Date().getFullYear());
}

if (menuToggle && primaryNavigation) {
  const setMenuOpen = (isOpen) => {
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );
    primaryNavigation.classList.toggle("is-open", isOpen);
  };

  menuToggle.addEventListener("click", () => {
    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isExpanded);
  });

  primaryNavigation.addEventListener("click", (event) => {
    if (event.target instanceof Element && event.target.closest("a")) {
      setMenuOpen(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
      setMenuOpen(false);
      menuToggle.focus();
    }
  });
}

if (inquiryTypeSelect && familyInquiryFields) {
  inquiryTypeSelect.addEventListener("change", () => {
    familyInquiryFields.hidden = inquiryTypeSelect.value !== "family";
  });
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}
