export const sections = document.querySelectorAll('.section');
function makeActive(className) {
    sections.forEach((item) => {
      if (item.classList.contains(className)) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }
  export{makeActive};