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

		catName.textContent = data.cats[catId].name;
		catImg.src = data.cats[catId].imgUrl;
		clickCounter.textContent = data.cats[catId].clickCount;

	},

	init: function() {
		viewList.init();
		viewCat.init();
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
		const list = document.createElement('ol');
//TODO: Make the function set other cat after click on the list
		list.addEventListener('click', function(e) {
			octopus.addCat(e.target.value);

		 // catImg.src = cats[e.target.value].pictureUrl;
		 // clickCounter.textContent = cats[e.target.value].counter;
		});
	}
};


octopus.init();
