document.getElementById("trigger").onclick = function() {
  open()
};

function open() {
  document.getElementById("top-menu").classList.toggle("show");
}


const countDownDate = new Date("May 25, 2020 13:37:25").getTime();


const x = setInterval(function() {

  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


document.querySelector('.arrow-left')
  .addEventListener('click', slideImg);


  const imgArray = [
    '../img/ford.jpg',
    '../img/bmw.jpg',
    '../img/tesla.jpg',
    '../img/chevrolet.jpg',
    '../img/yamaha.jpg',
    '../img/ferrari.jpg'
  ];
  let currImgidx = 0;
  
  function slideImg() {
    currImgidx++;
    if (currImgidx > imgArray.length -1) {
      currImgidx = 0
    }
    const img = document.querySelector('.partners img');
    img.src = imgArray[currImgidx]
  }  
    
   