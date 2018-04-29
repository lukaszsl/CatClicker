const data = {
	cats: [
		{
			name: 'James',
			clickCount: 0,
			imgUrl: 'img/cat1.jpg'
		},
		{
			name: 'Tim',
			clickCount: 0,
			imgUrl: 'img/cat2.jpg'
		},
		{
			name: 'Sam',
			clickCount: 0,
			imgUrl: 'img/cat3.jpg'
		},
		{
			name: 'Sandy',
			clickCount: 0,
			imgUrl: 'img/cat4.jpg'
		},
		{
			name: 'Roger',
			clickCount: 0,
			imgUrl: 'img/cat5.jpg'
		}
	]
};


const octopus = {
	init: function() {
		viewList.init();
		viewCat.init();
		viewCat.render();
		this.increaseCounter();
	},

	addList: function() {
		const listContainer = document.querySelector('.list');
		const list = document.createElement('ol');

		listContainer.appendChild(list);

		for (let i=0; i<5; i++) {
			let listNode = document.createElement('li');
			listNode.textContent = data.cats[i].name;
			listNode.value = i;
			list.appendChild(listNode);
		}
	},

	addCat: function(catId = 0) {
		const catName = document.querySelector('.cat__name');
		const catImg = document.querySelector('.cat__img');
		const clickCounter = document.querySelector('.clicks-counter');
		this.catId = catId;

		catName.textContent = data.cats[catId].name;
		catImg.src = data.cats[catId].imgUrl;
		clickCounter.textContent = data.cats[catId].clickCount;
	},

	increaseCounter: function() {
		const catImg = document.querySelector('.cat__img');
		const clicksCounter = document.querySelector('.clicks-counter');

		catImg.addEventListener('click', function(e) {
			for(let i=0; i<data.cats.length; i++) {
				if(`file:///Users/lukaszsliczner/Desktop/udacity/FEND/exercises/CatClicker/${data.cats[i].imgUrl}` === e.target.src) {
					data.cats[i].clickCount++;
					clicksCounter.textContent = data.cats[i].clickCount;
				}
			}
		});
	}
};


const viewList = {
	init: function() {
		octopus.addList();
	}
};


const viewCat = {
	init: function() {
		octopus.addCat();
	},

	render: function() {
		const listContainer = document.querySelector('.list');

		listContainer.addEventListener('click', function(e) {
			octopus.addCat(e.target.value);
		});
	}
};


octopus.init();
