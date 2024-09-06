

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === " ") {
    scrollToTop();
  }
};

export const handleScroll = () => {
  const backToTopButton = document.getElementById("backToTop") as HTMLButtonElement;
  if (backToTopButton) {
    if (window.scrollY > 100) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  }
};