window.onload = function showSome() {
  show();
};

export function show(type = "") {
  const itemList = document.querySelectorAll(".currency");
  console.log(type);
  if (type === "all") {
    itemList.forEach((item) => item.classList.add("active"));
  }
  itemList.forEach((item, i) => {
    if (i >= 22) {
      return;
    } else {
      item.classList.add("active");
    }
  });
}
export function reveal() {
  console.log("dziala reveal");
  const itemList = document.querySelectorAll(".currency");
  itemList.forEach((item) => {
    let windowheight = window.innerHeight;
    let revealtop = item.getBoundingClientRect().top;
    let revealpoint = 20;

    if (revealtop < windowheight - revealpoint) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
