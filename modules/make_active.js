function makeActive(className) {
    sections.forEach((item) => {
      if (item.classList.contains(className)) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }