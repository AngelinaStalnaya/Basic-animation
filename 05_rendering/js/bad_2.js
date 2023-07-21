var block = document.querySelector('.block');
block.style.height = '200px';
block.style.width = '200px';
var animationId;
var increment = true;

function animate() {
  var block = document.querySelector('.block');

  let height = +block.style.height.replace('px','');
  let width = +block.style.width.replace('px','');

  if (height <= 450 && width <= 450 && increment) {
      height += 450 / 1500 * 11;
      width += 450 / 1500 * 11;
      increment = true;
    } else {
      height -= 450 / 1500 * 11;
      width -= 450 / 1500 * 11;
      increment = false;
    };
    if (height <= 200 && width <= 200) {
      increment = true;
    };

   block.style.height = height + 'px'
   block.style.width = width + 'px'

  animationId = requestAnimationFrame(animate);
};

animationId = requestAnimationFrame(animate);
