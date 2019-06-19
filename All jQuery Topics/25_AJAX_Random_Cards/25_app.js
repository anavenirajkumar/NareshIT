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
    let cardRow = $('#card-row');
    let imageAddress = person.picture.large;
    let fullName = person.name.first + " " + person.name.last;
    let age = person.dob.age;
    let card = `<div class="col-md-3 mt-5">
                   <div class="card t_card text-center">
                        <div class="card-body">
                            <img src="${imageAddress}" class="img-fluid img-thumbnail rounded-circle w-50 t_img">
                            <h3 class="text-teal mt-2">${fullName}</h3>
                            <ul class="list-group">
                                <li class="list-group-item list-group-item-action list-group-item-light">
                                    Street : ${person.location.street}
                                </li>
                                <li class="list-group-item list-group-item-action list-group-item-light">
                                    City : ${person.location.city}
                                </li>
                                <li class="list-group-item list-group-item-action list-group-item-light">
                                    State : ${person.location.state}
                                </li>
                                <li class="list-group-item list-group-item-action list-group-item-light">
                                    Post Code : ${person.location.postcode}
                                </li>
                            </ul>
                            <div class="d-flex justify-content-between">
                                <div class="p-3">
                                    <i class="fab fa-facebook-f fa-2x text-teal"></i>
                                </div>
                                <div class="p-3">
                                    <i class="fab fa-twitter fa-2x text-teal"></i>
                                </div>
                                <div class="p-3">
                                    <i class="fab fa-github fa-2x text-teal"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
    cardRow.append(card);
};