

const input = document.getElementById('inputData');
const addBtn = document.getElementById('addBtn');
const drawBtn = document.getElementById('drawBtn');
const home = document.getElementById('home');
const winnerPlaceholder = document.getElementById('win-name');
const modalBg = document.querySelector('.modal');
const modalWin = document.querySelector('.modal-body');
const modalCloseBtn = document.getElementById('close-btn');
let dataBase = [];
let idCounter = 0;


//random generator
const randomGen = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}


// populating the html upon creation,removal, or any update
const populate = () => {
    home.innerHTML = '';
    dataBase.forEach((element, index) => {
        const entry = `${element.input} `;
        const removeIcon = `-`;

        const li = document.createElement('li');
        li.setAttribute('class', `${index}`);
        const removebtn = document.createElement('div');
        removebtn.setAttribute('class', `remove ${index}`);
        removebtn.append(removeIcon);
        li.append(entry);
        li.append(removebtn);
        home.append(li);
        removebtn.addEventListener('click', () => {
            removeF(index);
        });
    });
}
//this will remove selected array at the id index
const removeF = (id) => {
    dataBase.splice(id, 1);
    populate();
    console.log('removed triggered');

}





// we check to make sure the correct input has been entered and call the populate funtion
const checkInputData = (e) => {
    let myObj = {};
    e.preventDefault();
    if (input.value) {
        myObj = {
            input: `${input.value}`,
            id: idCounter,
        };
        dataBase.push(myObj)
        // adding to our id counter which will be added to each object inside dataBase array
        idCounter++;
        //call the populate funtion here
        populate();
        input.value = '';

    } else {
        alert('Please enter valid input')
    }

}

// open modal and display the winnder
const displayWinner = (winner) => {

    winnerPlaceholder.textContent = `${winner} is selected!`;
    modalBg.setAttribute('style', `display:block;`)
    modalWin.setAttribute('style', `display:flex;`)

}





addBtn.addEventListener('click', (e) => {
    checkInputData(e);

})
drawBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(dataBase);
    const beginning = 0;
    const ending = dataBase.length - 1;
    const chosenIndex = randomGen(beginning, ending);
    console.log(chosenIndex);
    const winner = dataBase[chosenIndex].input;
    displayWinner(winner);
    removeF(chosenIndex);

});

modalCloseBtn.addEventListener('click', () => {
    modalBg.setAttribute('style', `display:none;`)
    modalWin.setAttribute('style', `display:none;`)

});


// just a debug tool for the 
document.querySelector('.class').addEventListener('click', () => {
    console.log(dataBase);
})







