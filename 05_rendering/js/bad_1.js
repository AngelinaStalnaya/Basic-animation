var element = document.querySelector(".block");
var animationId;
var leftpos = 0;
var toppos = 0;
var increment = true;

function animation() {
  if (leftpos <= 200 && toppos <= 150 && increment) {
      leftpos += 200 / 1500 * 24;
      toppos += 150 / 1500 * 24;
      element.style.transform = 'translate(' + leftpos + 'px,' + toppos + 'px)';
      increment = true;
    } else {
      leftpos -= 200 / 1500 * 24;
      toppos -= 150 / 1500 * 24;
      element.style.transform = 'translate(' + leftpos + 'px,' + toppos + 'px)';
      increment = false;
    };
    if (leftpos <= 0 && toppos <= 0) {
      increment = true;
    };
  animationId = requestAnimationFrame(animation);
};

element.addEventListener("mouseover", function() {
  animationId = requestAnimationFrame(animation);
});

element.addEventListener("mouseleave", function() {
  cancelAnimationFrame(animationId);
  element.style.transform = 'translate(0px, 0px)';
  leftpos = 0;
  toppos = 0;
});
