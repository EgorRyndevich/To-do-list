//Root
const root = document.querySelector('#root')

//Data
const todos = [
    {
        title: 'Drink',
        text: 'I nedd to drink now',
        time: '15.00',
    },
    {
        title: 'Eat',
        text: 'I nedd to eat now',
        time: '12.00',
    }
]

//App
render(todos)

function createCard(todo) {
    const card = document.createElement('div')
    const cardTitle = document.createElement('h1')
    const cardText = document.createElement('p')
    const cardTime = document.createElement('p')
    const cardBtnAdd = document.createElement('div')

    root.className = 'flex items-center justify-center px-4 py-3 sm:px-6 sm:flex sm:flex-col'
    card.className = 'w-80 h-48 border-2 mt-5 rounded-md bg-green-500 hover:bg-green-400 text-white'
    cardTitle.className = 'text-lg leading-6 font-medium text-white mt-5 text-2xl ml-6'
    cardText.className = 'mt-2 text-lg ml-6 text-white'
    cardTime.className = 'mt-2 text-lg ml-6 text-white'
    cardBtnAdd.className = 'w-36 h-10  ml-6 mt-4 border-2 rounded bg-green-400 hover:bg-green-500 text-center p-1.5 animate-bounce'
    cardTitle.textContent = todo.title
    cardText.textContent = todo.text
    cardTime.textContent = todo.time

    cardBtnAdd.textContent = 'Right Now!'


    card.append(cardTitle, cardText, cardTime, cardBtnAdd)
    root.append(card)
}

function creatInputButton() {
    const buttonNewCard = document.createElement('a');
    buttonNewCard.className = 'w-80 h-20 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500 md:py-4 md:text-lg md:px-10 cursor-pointer mb-4 mt-5 animate-pulse'
    buttonNewCard.textContent = 'Add new';
    buttonNewCard.onclick = setInput;
    root.append(buttonNewCard);
}

function setInput() {
    const cardTitle = document.createElement('h2');
    const cardText = document.createElement('p');
    const cardTime = document.createElement('p');

    let obj = {};

    obj.title = prompt('Enter title');
    obj.text = prompt('Enter text');
    obj.time = prompt('Enter time');
}

creatInputButton();


function render(modal){
    modal.forEach(obj =>{
        createCard(obj)
    } ) 
}