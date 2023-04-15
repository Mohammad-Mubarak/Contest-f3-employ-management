let employees = [];

document.querySelector("#add_user").addEventListener('click', addEmployee);


function addEmployee(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const profession = document.getElementById("profession").value;
  const age = document.getElementById("age").value;


  if (name.trim() === '' || profession.trim() === '' || age.trim() === '') {
    document.getElementById("error").innerHTML = "Error : Please Make sure All the fields are filled before in an employee !";
    document.getElementById("success").innerHTML = "";
    return
  }


    const id = employees.length + 1;

    const employee = { id, name, profession, age };

    employees.push(employee);
    document.getElementById("success").innerHTML = "Succes :Employee Added!";
    document.getElementById("error").innerHTML = "";

    displayEmployee();

  document.querySelector("form").reset();

}




function displayEmployee() {

  const addedEmployeesContainer = document.getElementById("addedEmployee");
  addedEmployeesContainer.innerHTML = ' ';

if(employees.length==0){
  addedEmployeesContainer.innerHTML = ' <p id="initial">You have 0 Employees</p>';
  return  
}
  employees.forEach(employee => {
    const employeeOuterContainer = document.createElement('div');
    employeeOuterContainer.className = 'employeeOuterContainer';


    const employeeCard = document.createElement('div');
    employeeCard.className = 'empCard';


    const idSpan = document.createElement('span');
    idSpan.innerText = `${employee.id}.`;
    employeeCard.appendChild(idSpan);

    const nameSpan = document.createElement('span');
    nameSpan.textContent = `Name : ${employee.name}`;
    employeeCard.appendChild(nameSpan);

    const professionSpan = document.createElement('span');
    professionSpan.textContent = `Profession : ${employee.profession}`;
    employeeCard.appendChild(professionSpan);

    const ageSpan = document.createElement('span');
    ageSpan.textContent = `Age : ${employee.age}`;
    employeeCard.appendChild(ageSpan);

    employeeOuterContainer.appendChild(employeeCard);

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-employee-button';
    deleteButton.textContent = 'Delete';


    deleteButton.addEventListener('click', () => {
      const index = employees.findIndex(emp => emp.id === employee.id);
      employees.splice(index, 1);

      displayEmployee();
    });


    employeeOuterContainer.appendChild(deleteButton);

    addedEmployeesContainer.appendChild(employeeOuterContainer);

  });

}