"use strict";

const DATA = [
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m1.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "8 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f1.png",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m2.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Тетяна",
		"last name": "Мороз",
		photo: "./img/trainers/trainer-f2.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
	},
	{
		"first name": "Сергій",
		"last name": "Коваленко",
		photo: "./img/trainers/trainer-m3.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
	},
	{
		"first name": "Олена",
		"last name": "Лисенко",
		photo: "./img/trainers/trainer-f3.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
	},
	{
		"first name": "Андрій",
		"last name": "Волков",
		photo: "./img/trainers/trainer-m4.jpg",
		specialization: "Бійцівський клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
	},
	{
		"first name": "Наталія",
		"last name": "Романенко",
		photo: "./img/trainers/trainer-f4.jpg",
		specialization: "Дитячий клуб",
		category: "спеціаліст",
		experience: "3 роки",
		description:
			"Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
	},
	{
		"first name": "Віталій",
		"last name": "Козлов",
		photo: "./img/trainers/trainer-m5.jpg",
		specialization: "Тренажерний зал",
		category: "майстер",
		experience: "10 років",
		description:
			"Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
	},
	{
		"first name": "Юлія",
		"last name": "Кравченко",
		photo: "./img/trainers/trainer-f5.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
	},
	{
		"first name": "Олег",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-m6.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "12 років",
		description:
			"Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
	},
	{
		"first name": "Лідія",
		"last name": "Попова",
		photo: "./img/trainers/trainer-f6.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
	},
	{
		"first name": "Роман",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m7.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
	},
	{
		"first name": "Анастасія",
		"last name": "Гончарова",
		photo: "./img/trainers/trainer-f7.jpg",
		specialization: "Басейн",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
	},
	{
		"first name": "Валентин",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-m8.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
	},
	{
		"first name": "Лариса",
		"last name": "Петренко",
		photo: "./img/trainers/trainer-f8.jpg",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "7 років",
		description:
			"Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
	},
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m9.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "11 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f9.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m10.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Наталія",
		"last name": "Бондаренко",
		photo: "./img/trainers/trainer-f10.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "8 років",
		description:
			"Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
	},
	{
		"first name": "Андрій",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m11.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
	},
	{
		"first name": "Софія",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-f11.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "6 років",
		description:
			"Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
	},
	{
		"first name": "Дмитро",
		"last name": "Ковальчук",
		photo: "./img/trainers/trainer-m12.png",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
	},
	{
		"first name": "Олена",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-f12.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "5 років",
		description:
			"Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
	},
];
//функція пошуку тренера за повним им'ям
const findTrainer = (fullName) => {
    return DATA.find(trainer => `${trainer["last name"]} ${trainer["first name"]}` === fullName) || {};
};

//пошук необхідних даних
const trainersCardsContainer = document.querySelector('.trainers-cards__container');
const trainerCardTemplate = document.querySelector('#trainer-card').content;
const sorting = document.querySelector('.sorting');
const sidebar = document.querySelector('.sidebar');
const submitFilters = document.querySelector('.filters__submit');

let filteredData = [];

// відображення блоку сортування та фільтрування та відображення карток при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
	sorting.removeAttribute('hidden');
	sidebar.removeAttribute('hidden');
	filteringData(DATA);
	renderCards(filteredData);
});

//функция disableScroll для блокування/розблокування скролу сторінки
let scrollPosition = null;

const disableScroll = () => {
	scrollPosition = window.scrollY;
	document.body.style.width = '100%';
	document.body.style.overflow = 'hidden';
	document.body.style.position = 'fixed';
	document.body.style.top = `-${scrollPosition}px`;
};

const enableScroll = () => {
	document.body.style.width = '';
	document.body.style.overflow = '';
	document.body.style.position = '';
	document.body.style.top = '';
	window.scrollTo(0, scrollPosition);
};

//рендкр карток з модальними вікнами при клику 
const clonedData = [...DATA];

const renderCards = (arr) => {

	arr.forEach(trainer => {
		const trainerCard = trainerCardTemplate.cloneNode(true);
		trainerCard.querySelector('.trainer__img').src = trainer.photo;
		trainerCard.querySelector('.trainer__name').innerText = `${trainer["last name"]} ${trainer["first name"]}`;
		trainersCardsContainer.append(trainerCard);
	});

	const showMoreButtonCollection = document.querySelectorAll('.trainer__show-more');
	const modalWindowTemplate = document.querySelector('#modal-template').content;

	trainersCardsContainer.addEventListener('click', (event) => {

		if (event.target === event.currentTarget) {
			return;
		}

		let modalWindow = null;

		showMoreButtonCollection.forEach(el => {
			if (event.target !== el) {
				return;
			};

			if (event.target === el) {
				modalWindow = modalWindowTemplate.cloneNode(true);
				modalWindow.querySelector('.modal__img').src = event.target.closest('.trainer').querySelector('.trainer__img').src;
				modalWindow.querySelector('.modal__name').innerText = event.target.closest('.trainer').querySelector('.trainer__name').innerText;
				const modalPointCollection = modalWindow.querySelectorAll('.modal__point');
				modalPointCollection.forEach(element => {
					const modificator = element.className.split('--')[1];
					element.innerText = `${modalWindow.querySelector(`.modal__point--${modificator}`).innerText.split(': ')[0]}: ${findTrainer(modalWindow.querySelector('.modal__name').innerText)[modificator]}`;
				});
				modalWindow.querySelector('.modal__text').innerText = `${findTrainer(modalWindow.querySelector('.modal__name').innerText).description}`;

                trainersCardsContainer.append(modalWindow);
				disableScroll();
			};
		});

		if (event.target.closest('.modal__close') || event.target === document.querySelector('.modal')) {
			event.target.closest('.modal').remove();
			enableScroll();
		};
	});
};

renderCards(DATA);

// сортування карток
const allSortingButtons = document.querySelectorAll('.sorting__btn');
const sortingButtonsTitle = document.querySelector('.sorting__title');

const sortingData = (data) => {

	allSortingButtons.forEach((button) => {
		if (button.classList.contains("sorting__btn--active")) {
			const key = button.textContent.trim().toLowerCase();
			switch (key) {
				case 'за прізвищем':
					data.sort((a, b) => a['last name'].localeCompare(b['last name']));
                    trainersCardsContainer.innerHTML = '';
                    renderCards(DATA);
					break;
				
				case 'за досвідом':
					data.sort((a, b) => parseInt(b['experience']) - parseInt(a['experience']));
                    trainersCardsContainer.innerHTML = '';
                    renderCards(DATA);
					break;
				
				case 'за замовчуванням':
                    trainersCardsContainer.innerHTML = '';
                    renderCards(clonedData);
					filteringData(DATA);
				break;
			};
		};
	});
};

// сортування карток по кліку
sorting.addEventListener('click', (event) => {
    if (event.target === event.currentTarget || event.target === sortingButtonsTitle) {
		return;
	}

	document.querySelector('.sorting__btn--active')?.classList.remove('sorting__btn--active');

	event.target.classList.add('sorting__btn--active');
	const target = event.target;
	if (target.closest('button')) {
		allSortingButtons.forEach((button) => {
			button.classList.remove('sorting__btn--active');
		});
		allSortingButtons.forEach((button) => {
			if (button === target) {
				button.classList.add('sorting__btn--active');
				sortingData(filteredData);
			};
		});
		trainersCardsContainer.innerHTML = '';
		renderCards(filteredData);
	};
});

// фільтрація карток
const filteringData = (data) => {
	const allInput = sidebar.querySelectorAll('input');
	const value = [];

	allInput.forEach((element) => {
		if (element.type === "radio" && element.checked) {
			value.push(sidebar.querySelector(`label[for="${element.id}"]`).innerText.trim().toLowerCase());
		}
	})

	filteredData = data.filter((element) => {
		const elementValue1 = element.specialization.toLowerCase();
		const elementValue2 = element.category.toLowerCase();

		return (elementValue1 === value[0] || value[0] === 'всі') &&
			(elementValue2 === value[1] || value[1] === 'всі');
	});
};

// виведення відфільтрованих карток за кліком
sidebar.addEventListener('click', (event) => {
	if (event.target === submitFilters || event.target.closest('.filters__submit')) {
		event.preventDefault();

		filteringData(DATA);
		sortingData(filteredData);
		trainersCardsContainer.innerHTML = '';
		renderCards(filteredData);
	};
});

// прелоудер
window.addEventListener('load', () => {
    const header = document.querySelector(".page-header");
    const preloaderHTML = '<div id="preloader"><img src="./img/fitness_preloader.gif" alt="Loading..."></div>';
    header.insertAdjacentHTML('afterend', preloaderHTML);
    const preloaderElement = document.querySelector("#preloader");
    
    setTimeout(() => {
        preloaderElement.style.display = 'none';
        renderCards(DATA);
    }, 3500);
});