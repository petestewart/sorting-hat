

const clickEvents = () => {
    document.querySelector('#start').addEventListener('click', showForm);
    document.querySelector('#studentForm').addEventListener('submit', getName);
}

const expelStudent = (e) => {
    console.log('before splicing', students);
    const buttonId = e.target.id;
    const studentNumber = buttonId.slice(6);
    if (i>0) {students.splice(studentNumber, 1);
    } else if (i===0) {
        students.splice(studentNumber);
    } //SPLICE WITH 1 ARGUMENT DOESN'T WORK ON ITEM 0?
    console.log('after splicing:', students);
    buildCards();
}



const addExpelClickEvents = () => {
    for (i=0; i<students.length; i++) {
        let buttonId = `#expel${i}`;
        document.getElementById(buttonId).addEventListener('click', expelStudent);
    }
}

const showForm = () => {
    formArea.style.display = 'block';
}

const getName = (e) => {
    const studentName = e.target[0].value;
    addStudent (studentName);
}

const printToDom = (selector, textToPrint) => {
    const selectedDiv = document.querySelector(selector);
    selectedDiv.innerHTML = textToPrint;
    addExpelClickEvents();
}

const addStudent = (name) => {
    const newStudentName = name;
    let newStudentHouse = '';
    const newHouseNumber = Math.floor(Math.random() * 4) + 1;
    if (newHouseNumber === 1) {
         newStudentHouse = 'Gryffindor';
    } else if (newHouseNumber === 2) {
         newStudentHouse = 'Hufflepuff';
    } else if (newHouseNumber === 3) {
         newStudentHouse = 'Ravenclaw';
    } else if (newHouseNumber === 4) {
         newStudentHouse = 'Slytherin';
    };
    const newEntry = {
        name: newStudentName,
        house: newStudentHouse
    };
    students.push(newEntry);
    buildCards(); 
}

const buildCards = () => {
    console.log('buildCards', students)
    let domString = '';
    for (i=0;i<students.length;i++) {
        domString += `
        <div class="card text-center" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${students[i].name}</h5>
              <p class="card-text">${students[i].house}</p>
              <button href="#" class="btn btn-primary" id="#expel${i}">Expel</button>
            </div>
          </div>
        `
    }
    printToDom('#cardsArea', domString)
}




init = () => {
    formArea.style.display = 'none';
    clickEvents();
    console.log('students array', students)
}

const students=[];
init();



    

// const form = document.forms[0];

// form.addEventListener("submit", function(event) {
//   event.preventDefault();
// })