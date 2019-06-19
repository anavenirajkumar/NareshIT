// Register Button
let empId = 100;
$('#register').click(function() {
    let employee = {
        empId : empId,
        employeeName :$('#emp_name').val(),
        empAge :  $('#emp_age').val(),
        designation : $('#emp_desg').val(),
        jobLocation : $('#job_location').val()
    };
    displayFormData(employee);
    empId++;
    clearFormFields();
});

// display Form Data
let displayFormData = (employee) => {
    let tableBody = $('#table_body');
    let tableRow = '';
    tableRow = `<tr>
                    <td>${employee.empId}</td>
                    <td>${employee.employeeName}</td>
                    <td>${employee.empAge}</td>
                    <td>${employee.designation}</td>
                    <td>${employee.jobLocation}</td>
                </tr>`;
    tableBody.append(tableRow);
};

// clearFormFields
let clearFormFields = () => {
    $('#emp_name').val('');
    $('#emp_age').val('');
    $('#emp_desg').val('');
    $('#job_location').val('');
};