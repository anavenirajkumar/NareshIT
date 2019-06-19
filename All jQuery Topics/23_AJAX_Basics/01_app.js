// Javascript AJAX
$('#js-ajax-btn').click(function() {

   // Create an AJAX Request
   let xhttp = new XMLHttpRequest();

   // Prepare the AJAX Request
    xhttp.open('GET','https://api.myjson.com/bins/f4h39',true);

    // Send th AJAX Request
    xhttp.send();

    // Track the AJAX Request
    xhttp.onreadystatechange = function() {
        // if Server is Ready with Response & successful response
        if(xhttp.readyState === 4 && xhttp.status === 200){
            let data = xhttp.responseText;
            let persons = JSON.parse(data);
            processData(persons);
        }
    };
});

// JQuery AJAX
$('#jquery-btn').click(function() {
    $.ajax({
        method : 'GET',
        url : 'https://api.myjson.com/bins/szvhh',
        type : 'json',
        success : function(data) {
            let persons = data;
           processData(persons);
        }
    });
});

// process the Data
let processData = (persons) => {
    let tableBody = $('#table_body');
    let tableRows = '';
    for(let person of persons){
        tableRows += `<tr>
                        <td>${person.id}</td>
                        <td>${person.first_name}</td>
                        <td>${person.last_name}</td>
                        <td>${person.email}</td>
                        <td>${person.gender}</td>
                        <td>${person.ip_address}</td>
                        <td>${person.country}</td>
                        <td>${person.City}</td>
                     </tr>`;
    }
    tableBody.empty().append(tableRows);
};