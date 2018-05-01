const data = {
	cats:[
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
	],

	currentCat: undefined
};


const octopus = {
	init: function() {
		viewList.init();
		viewCat.init();
		viewCat.render();
		viewAdmin.init();
		this.increaseCounter();
		this.saveNewCatsData();
	},



	addCat: function(catId = 0) {
		const catName = document.querySelector('.cat__name');
		const catImg = document.querySelector('.cat__img');
		const clickCounter = document.querySelector('.clicks-counter');
		this.catId = catId;

		data.currentCat = data.cats[catId];

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
	},

	saveNewCatsData: function() {
		const listContainer = document.querySelector('.list');
		const saveBtn = document.querySelector('.save');
		const catName = document.querySelector('#name');
		const catImgUrl = document.querySelector('#imgUrl');
		const catClicks = document.querySelector('#clicks');

		saveBtn.addEventListener('click', function(e){
			e.preventDefault();
			data.currentCat.name = catName.value;
			data.currentCat.clickCounter = catClicks.value;
			data.currentCat.imgUrl = catImgUrl.value;
			viewList.render();
			viewCat.render();
		});
	}
};


const viewList = {
	init: function() {
		this.render();
	},

	render: function() {
		const listContainer = document.querySelector('.list');
		const list = document.createElement('ol');
		listContainer.innerHTML = '';
		listContainer.appendChild(list);

		for (let i=0; i<5; i++) {
			let listNode = document.createElement('li');
			listNode.textContent = data.cats[i].name;
			listNode.value = i;
			list.appendChild(listNode);
		}
	},
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

const viewAdmin = {
	init: function() {
		const adminForm = document.querySelector('.admin__form');
		const adminBtn = document.querySelector('.admin__btn');
		const cancelBtn = document.querySelector('.cancel');

		adminForm.classList.add('hide');
		// Show/Hide admin panel after click on admin button
		adminBtn.addEventListener('click', function(){
			adminForm.classList.toggle('hide');
		});
		// Hide admin panel after click on cancel button
		cancelBtn.addEventListener('click', function(e){
			e.preventDefault();
			adminForm.classList.add('hide');
		});
	},

	// showForm: function() {
	// 	const adminForm = document.querySelector('.admin__form');
	// 	if(adminForm.classList.contains('hide')) {
	// 		adminForm.classList.remove('hide');
	// 	}
	// },
	//
	// hideForm: function() {
	// 	const adminForm = document.querySelector('.admin__form');
	// 	if(!adminForm.classList.contains('hide')) {
	// 		adminForm.classList.add('hide');
	// 	}
	// }
};


octopus.init();
