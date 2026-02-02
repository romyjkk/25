const kevImage = document.querySelector(".kev img");

const firework1 = document.querySelector(".firework-1");
const firework2 = document.querySelector(".firework-2");

const heart = document.querySelector(".heart");

const numTwo = document.querySelector(".num-2");
const numFive = document.querySelector(".num-5");

const numTwoSrc = "img/2-1.svg";
const numTwoAltSrc = "img/2-2.svg";

const numFiveSrc = "img/5-1.svg";
const numFiveAltSrc = "img/5-2.svg";

const neutralSrc = "img/kev-neutral1.svg";
const pleasedSrc = "img/kev-pleased1.svg";
const surprisedSrc = "img/kev-surprised.svg";
const happySrc = "img/kev-happy.svg";

const clickMeButton = document.getElementById("click-me");

const music = new Audio("audio/happy-birthday.mp3");

gsap.set(kevImage, { y: 40 });
gsap.set(firework1, { scale: 0.0 });
gsap.set(firework2, { scale: 0.0 });
gsap.set(heart, { scale: 0.0 });
gsap.set(
  [
    ".h",
    ".a",
    ".p",
    ".p-2",
    ".y",
    ".b",
    ".i-2",
    ".r",
    ".t",
    ".h-2",
    ".d",
    ".a-2",
    ".y-2",
  ],
  { opacity: 0 },
);

function changeNumTwo() {
  numTwo.src = numTwoSrc;

  setTimeout(() => {
    numTwo.src = numTwoAltSrc;
  }, 500);
}

setInterval(changeNumTwo, 1000);

function changeNumFive() {
  numFive.src = numFiveSrc;

  setTimeout(() => {
    numFive.src = numFiveAltSrc;
  }, 1500);
}

setInterval(changeNumFive, 1000);

clickMeButton.addEventListener("click", () => {
  music.play();
  setTimeout(() => {
    kevImage.src = surprisedSrc;
  }, 1000);

  setTimeout(() => {
    kevImage.src = happySrc;
  }, 4000);

  let tl = gsap.timeline();
  tl.to(kevImage, { duration: 1, scale: 0.6, ease: "power1.inOut" });
  tl.to(kevImage, { duration: 1, y: 0, ease: "power1.inOut" }, 0);
  tl.to(clickMeButton, { duration: 1, opacity: 0, ease: "power1.inOut" }, 0);
  tl.to(".k", { duration: 0.5, opacity: 1, ease: "power1.inOut" }, 1);
  tl.to(".e", { duration: 0.5, opacity: 1, ease: "power1.inOut" }, 1.5);
  tl.to(".v", { duration: 0.5, opacity: 1, ease: "power1.inOut" }, 2);
  tl.to(".i", { duration: 0.5, opacity: 1, ease: "power1.inOut" }, 2.5);
  tl.to(".n", { duration: 0.5, opacity: 1, ease: "power1.inOut" }, 3);
  tl.to(".num-2", { duration: 0.5, opacity: 1, ease: "power1.inOut" }, 3.5);
  tl.to(".num-5", { duration: 0.5, opacity: 1, ease: "power1.inOut" }, 4);
  tl.to(firework1, { duration: 0.5, scale: 1, ease: "power1.inOut" }, 4);
  tl.to(firework2, { duration: 0.5, scale: 1, ease: "power1.inOut" }, 4.2);
  tl.to(
    [
      kevImage,
      ".k",
      ".e",
      ".v",
      ".i",
      ".n",
      ".num-2",
      ".num-5",
      firework1,
      firework2,
    ],
    { duration: 0.5, opacity: 0, ease: "power1.inOut" },
    8,
  );
  tl.to(
    ".h",
    { duration: 0.5, scale: 1, opacity: 1, ease: "power1.inOut" },
    8.5,
  );
  tl.to(".a", { duration: 0.5, scale: 1, opacity: 1, ease: "power1.inOut" }, 9);
  tl.to(
    ".p",
    { duration: 0.5, scale: 1, opacity: 1, ease: "power1.inOut" },
    9.5,
  );
  tl.to(
    ".p-2",
    { duration: 0.5, scale: 1, opacity: 1, ease: "power1.inOut" },
    10,
  );
  tl.to(
    ".y",
    { duration: 0.5, scale: 1, opacity: 1, ease: "power1.inOut" },
    10.5,
  );
  tl.to(
    ".b",
    { duration: 0.5, scale: 1, opacity: 1, ease: "power1.inOut" },
    11,
  );
  tl.to(
    ".i-2",
    { duration: 0.5, scale: 1, opacity: 1, ease: "power1.inOut" },
    11.5,
  );
  tl.to(
    ".r",
    { duration: 0.5, scale: 1, opacity: 1, ease: "power1.inOut" },
    12,
  );
  tl.to(
    ".t",
    { duration: 0.5, scale: 1, opacity: 1, ease: "power1.inOut" },
    12.5,
  );
  tl.to(
    ".h-2",
    { duration: 0.5, scale: 1, opacity: 1, ease: "power1.inOut" },
    13,
  );
  tl.to(
    ".d",
    { duration: 0.5, scale: 1, opacity: 1, ease: "power1.inOut" },
    13.5,
  );
  tl.to(
    ".a-2",
    { duration: 0.5, scale: 1, opacity: 1, ease: "power1.inOut" },
    14,
  );
  tl.to(
    ".y-2",
    { duration: 0.5, scale: 1, opacity: 1, ease: "power1.inOut" },
    14.5,
  );
  tl.to(
    [
      ".h",
      ".a",
      ".p",
      ".p-2",
      ".y",
      ".b",
      ".i-2",
      ".r",
      ".t",
      ".h-2",
      ".d",
      ".a-2",
      ".y-2",
    ],
    { duration: 0.5, opacity: 0, ease: "power1.inOut" },
    16,
  );

  tl.to(heart, { duration: 1, scale: 1, ease: "bounce.out" }, 17);

  setTimeout(() => {
    clickMeButton.style.display = "none";
  }, 1000);
});
