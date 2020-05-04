const students=[];
const voldermortsArmy=[];
const filterButtons = `
    Display:
    <div class="btn-group" role="group" aria-label="HouseFilters">
    <button type="button" class="btn btn-dark" id="showAll">All Students</button>
    <button type="button" class="btn btn-secondary" id="Gryffindor">Gryffindor</button>
    <button type="button" class="btn btn-secondary" id="Hufflepuff">Hufflepuff</button>
    <button type="button" class="btn btn-secondary" id="Ravenclaw">Ravenclaw</button>
    <button type="button" class="btn btn-secondary" id="Slytherin">Slytherin</button>
    <button type="button" class="btn btn-secondary" id="Voldermort">Voldermort's Army</button>
    </div>
    `

const clickEvents = () => {
    document.querySelector('#start').addEventListener('click', showForm);
    document.querySelector('#studentForm').addEventListener('submit', getName);
}

const expelStudent = (e) => {
    const buttonId = e.target.id;
    const studentNumber = buttonId.slice(6);
    let expelledStudent = '';
    if (i>0) {
        expelledStudent = students.splice(studentNumber, 1);
    } else if (i===0) {
        expelledStudent = students.splice(studentNumber);
    } // BECAUSE SPLICE WITH '1' ARGUMENT DOESN'T WORK ON INDEX 0 FOR SOME REASON?
    voldermortsArmy.push(expelledStudent[0]);
    showStudents();
}

const addExpelClickEvents = () => {
    for (i=0; i<students.length; i++) {
        let buttonId = `#expel${i}`;
        document.getElementById(buttonId).addEventListener('click', expelStudent);
    }
}

// ** vv (This is moving the page up each time for some reason) vv
const filterStudents = (e) => {
    const houseFilter = e.target.id;
    let domString = '<div class="row" id="card-grid">';
    for (i=0;i<students.length;i++) {
        if (students[i].house === houseFilter)
        {
            domString += `
                <div class="card text-center card-${students[i].house}" style="width: 18rem;">
                    <div class="card-body">
                    <h5 class="card-title">${students[i].name}</h5>
                    <p class="card-text">${students[i].house}</p>
                    </div>
                </div>
            `
        };
    }
    domString += "</div>";
    printToDom('#cardsArea', domString);
}

const addFilterClickEvents = () => {
    document.getElementById('showAll').addEventListener('click', showStudents);
    document.getElementById('Gryffindor').addEventListener('click', filterStudents);
    document.getElementById('Hufflepuff').addEventListener('click', filterStudents);
    document.getElementById('Ravenclaw').addEventListener('click', filterStudents);
    document.getElementById('Slytherin').addEventListener('click', filterStudents);
    document.getElementById('Voldermort').addEventListener('click', displayExpelled);
}

const showForm = () => {
    formArea.style.display = 'block';
}

const getName = (e) => {
    const studentName = e.target[0].value;
    addStudent (studentName);
    document.getElementById("studentForm").reset();
}

const printToDom = (selector, textToPrint) => {
    const selectedDiv = document.querySelector(selector);
    selectedDiv.innerHTML = textToPrint;
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
    showStudents(); 
}

const showStudents = () => {
    let domString = '<div class="row" id="card-grid">';
    for (i=0;i<students.length;i++) {
        domString += `
            <div class="card text-center card-${students[i].house}" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${students[i].name}</h5>
                <p class="card-text">${students[i].house}</p>
                <button href="#" class="btn btn-primary" id="#expel${i}">Expel</button>
                </div>
            </div>
        `
    };
    domString += "</div>";
    printToDom('#cardsArea', domString);
    printToDom('#filtersArea', filterButtons);
    addFilterClickEvents();
    addExpelClickEvents();
}

const displayExpelled = () => {
    let domString = '<div class="row" id="card-grid">';
    for (i=0;i<voldermortsArmy.length;i++) {
        domString += `
            <div class="card text-center bg-danger card-${voldermortsArmy[i].house}" style="width: 18rem;">
                <div class="card-body">
                <h5 class="card-title">${voldermortsArmy[i].name}</h5>
                </div>
            </div>
        `
    };
    domString += "</div>";
    printToDom('#cardsArea', domString);
    addFilterClickEvents();
}

init = () => {
    formArea.style.display = 'none';
    clickEvents();
}

init();
