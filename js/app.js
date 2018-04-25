const images = document.querySelectorAll('.main-img'),
			counters = document.querySelectorAll('.clicks-counter'),
			cat1Name = document.querySelector('#cat1 h2');
			cat2Name = document.querySelector('#cat2 h2');

let clicksCounter1 = 0,
		clicksCounter2 = 0;

catsNames = {
	cat1: 'James',
	cat2: 'Jorge'
}

cat1Name.innerText = catsNames.cat1;
cat2Name.innerText = catsNames.cat2;

images.forEach( element => {
	element.addEventListener('click', function(e) {
		if(e.target.id === "cat1-img") {
			clicksCounter1++;
			counters[0].innerText = clicksCounter1;
		} else if(e.target.id === "cat2-img") {
			clicksCounter2++;
			counters[1].innerText = clicksCounter2;
		}
	});
});
