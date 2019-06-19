let employee = {
    id : 1,
    name : 'John',
    age : 40,
    designation : 'Manager'
};

let tableBody = document.querySelector('#table_body');

// without Template String (back tick)
let htmlString = "<tr>" + "\n" +
                    "<td>" + employee.id + "</td>" + "\n" +
                    "<td>" + employee.name + "</td>" + "\n" +
                    "<td>" + employee.age + "</td>" + "\n" +
                    "<td>" + employee.designation + "</td>" + "\n" +
                 "</tr>";
//tableBody.innerHTML = htmlString;

// with Template String (back tick)
let templateString = `<tr>
                         <td>${employee.id}</td>
                         <td>${employee.name}</td>
                         <td>${employee.age}</td>
                         <td>${employee.designation}</td>
                      </tr>`;
tableBody.innerHTML = templateString;