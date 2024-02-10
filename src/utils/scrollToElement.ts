export const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }

  window.scroll({
    top: element.offsetTop - 100,
    behavior: "smooth",
  });
};
