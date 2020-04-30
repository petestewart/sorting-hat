

const clickEvents = () => {
    document.querySelector('#start').addEventListener('click', showForm);
    document.querySelector('#studentForm').addEventListener('submit', getName);
}

const showForm = () => {
    formArea.style.display = 'block';
}


const getName = (event) => {
    const studentName = event.target[0].value;
    buildCard (studentName);
}

const buildCard = (name) => {
    console.log(name);
}


init = () => {
    formArea.style.display = 'none';
    clickEvents();
}

init();


    

// const form = document.forms[0];

// form.addEventListener("submit", function(event) {
//   event.preventDefault();
// })