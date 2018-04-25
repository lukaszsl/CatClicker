const img = document.querySelector('.main-img'),
			counter = document.querySelector('.clicks-counter');

let clicks = 0;

img.addEventListener('click', function() {
	clicks++;
	counter.innerText = clicks;
});
