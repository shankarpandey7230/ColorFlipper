const colors = ['green', 'blue', 'rgba(133, 122, 200)', '#f15025'];

const btn = document.getElementById('btn');
const colorspan = document.querySelector('.color');
btn.addEventListener('click', function () {
  const randomNumber = Math.floor(Math.random() * colors.length);
  //   const randomNumber = 2;
  console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  colorspan.textContent = colors[randomNumber];
});
