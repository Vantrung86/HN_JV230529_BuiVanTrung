let isButton = document.querySelector('.save_data');
let isTbody = document.querySelector('tbody');
let isName = document.querySelector('#name');
let isEmail = document.querySelector('#email');
let isPhone = document.querySelector('#phone');
let isAddress = document.querySelector('#address');
let sortButton = document.querySelector('.sort_name');
let btnSearch = document.querySelector('.btn_search');
let isInput = document.querySelector('.search input')

let students = [
    {
        id: crypto.randomUUID(),
        name: 'rikkei',
        email: 'rikkei@gmail.com',
        phone: '0823868888',
        address: 'hà nội',
        gender: 'nam',
    },
    {
        id: crypto.randomUUID(),
        name: 'academy',
        email: 'academy@gmail.com',
        phone: '0828638888',
        address: 'HCM',
        gender: 'nu',
    }
];

function showstudent() {
    let result = '';
    for(let i = 0; i < students.length; i++){
        result = result + ` <tr>
                                <td>${i + 1}</td>
                                <td>${students[i].name}</td>
                                <td>${students[i].email}</td>
                                <td>${students[i].phone}</td>
                                <td>${students[i].address}</td>
                                <td>${students[i].gender}</td>
                                <td>
                                    <button type="button" data-id="${students[i].id}" class="btn btn-blue">edit</button>
                                    <button type="button" data-id="${students[i].id}" class="btn btn-danger">delete</button>
                                </td>
                            </tr>`
    }
    isTbody.innerHTML = result
}
showstudent();


function addStudent() {
    let nameSelector = isName.value;
    let emailSelector = isEmail.value;
    let phoneSelector = isPhone.value;
    let addressSelector = isAddress.value;
    let genderSelector = document.querySelector('.sex:checked').value;
    if(isButton.classList.contains('update')){
        let idUpdate = isButton.getAttribute('data-id');
        let indexUpdate = students.findIndex(
            function(item){
                return item.id === idUpdate
            }
        ) 
        students[indexUpdate].name = nameSelector;
        students[indexUpdate].email = emailSelector;
        students[indexUpdate].phone = phoneSelector;
        students[indexUpdate].address = addressSelector;
        students[indexUpdate].sex = genderSelector;
        showstudent();
        document.querySelector('form').reset();
        isButton.classList.remove('update');
        isButton.removeAttribute('data-id')
    }
    else{
        let newObj = {
            id: crypto.randomUUID(),
            name: nameSelector,
            email: emailSelector,
            phone: phoneSelector,
            address: addressSelector,
            gender: genderSelector
        }
        students.push(newObj);
        showstudent();
        document.querySelector('form').reset();
    }
}
isButton.addEventListener('click', addStudent);


function deleteStudent(event) {
    let clicked = event.target;
    if(clicked.classList.contains('btn-danger')){
        let idDelete = clicked.getAttribute('data-id');
        let indexDelete = students.findIndex(
            function (item) {
                return item.id === idDelete
            }
        )
        students.splice(indexDelete, 1);
        showstudent();
        document.querySelector('form').reset();
    }
    else if(clicked.classList.contains('btn-blue')){
        let idEdit = clicked.getAttribute('data-id');
        let indexEdit = students.findIndex(
            function (item) {
                return item.id === idEdit
            }
        )
        isName.value = students[indexEdit].name;
        isEmail.value = students[indexEdit].email;
        isPhone.value = students[indexEdit].phone;
        isAddress.value = students[indexEdit].address;
        document.querySelector(`input[value=${students[indexEdit].gender}]`).checked = true;
        isButton.classList.add('update');
        isButton.setAttribute('data-id', idEdit)
    }
}
isTbody.addEventListener('click', deleteStudent);


// sắp xếp
function SortStudent(){
    students.sort(
        function(a, b){
            let nameA = a.name.toLowerCase();
            let nameB = b.name.toLowerCase();
            if (nameA < nameB){
                return -1
            }
            else if(nameA > nameB){
                return 1
            }
            else{
                return 0
            }
        }
    )
    showstudent();
}
sortButton.addEventListener('click', SortStudent);


// tìm kiếm
function SearchClick(){
    let search = isInput.value.toLowerCase();
    let studentsFilter = students.filter(
        function(studentsItem){
            return studentsItem.name.toLowerCase().includes(search);
        }
    )
    let result = '';
    for (let i = 0; i < studentsFilter.length; i++) {
        result = result + `<tr>
                            <td>${i + 1}</td>
                            <td>${studentsFilter[i].name}</td>
                            <td>${studentsFilter[i].email}</td>
                            <td>${studentsFilter[i].phone}</td> 
                            <td>${studentsFilter[i].address}</td>
                            <td>${studentsFilter[i].gender}</td>
                            <td>
                                <button data-id ="${studentsFilter[i].id}" class="btn btn-blue">Edit</button>
                                <button data-id ="${studentsFilter[i].id}" class="btn btn-danger">Delete</button>
                            </td>                    
                        </tr>`
    }
    isTbody.innerHTML = result;
}
btnSearch.addEventListener('click', SearchClick)