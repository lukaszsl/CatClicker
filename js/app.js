const listContainer = document.querySelector('.list');
const list = document.createElement('ol');
const links = document.querySelectorAll('a');
const catImg = document.querySelector('.cat__img');
const clickCounter = document.querySelector('.clicks-counter');

listContainer.appendChild(list);

function Cat(name, pictureUrl, number, counter=0) {
	this.name = name;
	this.pictureUrl = pictureUrl;
	this.number = number;
	this.counter = counter;
}

let cat1 = new Cat('James', 'img/cat1.jpg', 1);
let cat2 = new Cat('Tim', 'img/cat2.jpg', 2);
let cat3 = new Cat('Sam', 'img/cat3.jpg', 3);
let cat4 = new Cat('Sandy', 'img/cat4.jpg', 4);
let cat5 = new Cat('Roger', 'img/cat5.jpg', 5);

const cats = [cat1, cat2, cat3, cat4, cat5];

// Add links to the list
for (let i=0; i<5; i++) {
	let listNode = document.createElement('li');
	listNode.textContent = cats[i].name;
	listNode.value = i;
	list.appendChild(listNode);
}

// Add event listener to list nodes. Main cat image source get path from images array.
list.addEventListener('click', function(e) {
	catImg.src = cats[e.target.value].pictureUrl;
	clickCounter.textContent = cats[e.target.value].counter;
});

catImg.addEventListener('click', function(e) {
	for(let i=0; i<cats.length; i++) {
		if(`file:///Users/lukaszsliczner/Desktop/udacity/FEND/exercises/CatClicker/${cats[i].pictureUrl}` === e.target.src) {
			cats[i].counter++;
			clickCounter.textContent = cats[i].counter;
		}
	}
});
