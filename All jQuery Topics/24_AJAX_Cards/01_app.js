// Call AJAX
let callAJAX = () => {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            let person = data.results[0];
            displayPerson(person);
        }
    });
};

setInterval(callAJAX,1000);

// display data on Card
let displayPerson = (person) => {
    let imageAddress = person.picture.large;
    let fullName = person.name.first + " " + person.name.last;
    let age = person.dob.age;
    $('#person_img').attr('src',imageAddress);
    $('#person_name').text(fullName.toUpperCase());
    $('#person_age').text(age + ' Yrs');
};