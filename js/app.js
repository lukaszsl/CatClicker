const listContainer = document.querySelector('.list');
const list = document.createElement('ol');
const links = document.querySelectorAll('a');
const catImg = document.querySelector('.cat__img');

listContainer.appendChild(list);

function Cat(name, pictureUrl) {
	this.name = name;
	this.pictureUrl = pictureUrl;
}

let cat1 = new Cat('James', 'img/cat1.jpg');
let cat2 = new Cat('Tim', 'img/cat2.jpg');
let cat3 = new Cat('Sam', 'img/cat3.jpg');
let cat4 = new Cat('Sandy', 'img/cat4.jpg');
let cat5 = new Cat('Roger', 'img/cat5.jpg');

const cats = [cat1, cat2, cat3, cat4, cat5];

let images = [
	'img/cat1.jpg',
	'img/cat2.jpg',
	'img/cat3.jpg',
	'img/cat4.jpg',
	'img/cat5.jpg'
];

// Add links to the list
for (let i=0; i<5; i++) {
	let listNode = document.createElement('li');
	listNode.textContent = cats[i].name;
	listNode.value = i;
	list.appendChild(listNode);
}

// Add event listener to list nodes. Main cat image source get path from images array.
	list.addEventListener('click', function(e) {
		catImg.src = images[e.target.value];
		console.log(e.target.value)
	});



// images.forEach( element => {
// 	element.addEventListener('click', function(e) {
// 		if(e.target.id === "cat1-img") {
// 			clicksCounter1++;
// 			counters[0].innerText = clicksCounter1;
// 		} else if(e.target.id === "cat2-img") {
// 			clicksCounter2++;
// 			counters[1].innerText = clicksCounter2;
// 		}
// 	});
// });
