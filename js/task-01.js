const list = document.querySelectorAll(".item");
console.log(`Number of categories: ${list.length}`);

const titles = document.querySelectorAll("h2");

titles.forEach((element) => {
  console.log(`Category: ${element.innerText}`);
  console.log(`Elements: ${element.nextElementSibling.children.length}`);
});
