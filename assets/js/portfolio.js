const mySiema = new Siema(
  {
      selector: '.slide1',
      duration: 200,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: true,
      rtl: false,
      onInit: () => {},
      onChange: () => {},
    }
);
setInterval(() => mySiema.next(), 3000)

const mySiema2 = new Siema(
  {
      selector: '.slide2',
      duration: 200,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: true,
      rtl: false,
      onInit: () => {},
      onChange: () => {},
    }
);
setInterval(() => mySiema2.next(), 3000)

const mySiema3 = new Siema(
  {
      selector: '.slide3',
      duration: 200,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      multipleDrag: true,
      threshold: 20,
      loop: true,
      rtl: false,
      onInit: () => {},
      onChange: () => {},
    }
);
setInterval(() => mySiema3.next(), 3000)


// document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
// document.querySelector('.next').addEventListener('click', () => mySiema.next());
