const images = document.querySelectorAll('.main-img'),
			counter = document.querySelector('.clicks-counter'),
			cat1Name = document.querySelector('#cat1 h2');
			cat2Name = document.querySelector('#cat2 h2');

let clicks = 0;

catsNames = {
	cat1: 'James',
	cat2: 'Jorge'
}

cat1Name.innerText = catsNames.cat1;
cat2Name.innerText = catsNames.cat2;

images.forEach( element => {
	element.addEventListener('click', function() {
		clicks++;
		counter.innerText = clicks;
	});
});
