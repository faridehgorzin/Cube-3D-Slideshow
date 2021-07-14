let x = 0,bool = false,interval;

const rotate = () => {
  const cubes = document.querySelectorAll(".cube");
  Array.from(cubes).forEach(
    (cube) => (cube.style.transform = `rotateY(${x}deg)`)
  );
};

const changeplaypause = () => {
  const i = document.querySelector(".pause-play i");
  const cls = i.classList[1];
  if (cls === "fa-play") {
    i.classList.remove("fa-play");
    i.classList.add("fa-pause");
  }else{
    i.classList.remove("fa-pause");
    i.classList.add("fa-play");
  }
};

const playpause = () => {
  if (!bool) {
    interval = setInterval(() => {
      x -= 90;
      rotate();
    }, 3000);
    bool = true;
    changeplaypause();
  } else {
    bool = false;
    changeplaypause();
    clearInterval(interval);
 }
};

document.querySelector(".arrow-left").addEventListener("click", () => {
  x += 90;
  rotate();
  if(bool)
  playpause();
});

document.querySelector(".arrow-left").addEventListener("mouseover", () => {
  x += 25;
  rotate();
  if(bool)
  playpause();
});

document.querySelector(".arrow-left").addEventListener("mouseout", () => {
  x -= 25;
  rotate();
  if(bool)
  playpause();
});

document.querySelector(".arrow-right").addEventListener("click", () => {
  x -= 90;
  rotate();
  if(bool)
  playpause();
});

document.querySelector(".arrow-right").addEventListener("mouseover", () => {
  x += 25;
  rotate();
  if(bool)
  playpause();
});
document.querySelector(".arrow-right").addEventListener("mouseout", () => {
  x -= 25;
  rotate();
  if(bool)
  playpause();
});

document.querySelector(".pause-play").addEventListener("click", () => {
  playpause();
});
