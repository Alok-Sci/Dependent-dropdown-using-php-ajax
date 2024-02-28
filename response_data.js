
// load country data on DOM content load 
let xhttp = new XMLHttpRequest();
xhttp.open('GET', 'get_data.php?request_data=country', true);
xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
        let countryData = JSON.parse(this.responseText);
        console.log(countryData)

        // insert dropdown items for country 
        populateCountry(countryData);
    }
};
xhttp.send();

// on country selection 
document.querySelector('#countries').addEventListener('change', function () {
    let selectedCountry = this.value;

    if (selectedCountry !== '') {
        // enable state dropdown 
        document.querySelector('#states').disabled = false;
        console.log("enable state");

        // request data 
        xhttp.open('GET', `get_data.php?request_data=state&country=${selectedCountry}`, true);
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let stateData = JSON.parse(this.responseText);

                // insert dropdown items for state 
                populateState(stateData);
            }
        };
        xhttp.send();
    }
    else {
        document.querySelector('#states').disabled = true;
        document.querySelector('#cities').disabled = true;
        console.log("disable state");
    }
});

// on country selection 
document.querySelector('#states').addEventListener('change', function () {
    let selectedCountry = document.querySelector('#countries').value;
    let selectedState = this.value;

    if (selectedState !== '') {
        // enable state dropdown 
        document.querySelector('#cities').disabled = false;
        console.log("enable state");

        // request data 
        xhttp.open('GET', `get_data.php?request_data=city&country=${selectedCountry}&state=${selectedState}`, true);
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                let cityData = JSON.parse(this.responseText);
                populateCity(cityData);
            }
        };
        xhttp.send();
    }
    else {
        document.querySelector('#cities').disabled = true;
        console.log("disable state");
    }
});



function populateCountry(countries) {
    console.log("loading countries...", countries);

    let dropdown = document.querySelector('#countries');
    dropdown.innerText = '';

    let option = document.createElement('option');
    option.value = '';
    option.setAttribute('disabled', 'disabled');
    option.setAttribute('selected', 'selected');
    option.innerText = '--Select country--';
    dropdown.appendChild(option);

    countries.forEach(country => {
        let option = document.createElement('option');
        option.value = option.innerText = country;

        dropdown.appendChild(option);
        console.log("appended ", option, " to country");
    });
}
function populateState(states) {
    console.log("loading states...", states);

    let dropdown = document.querySelector('#states');
    dropdown.innerText = '';

    let option = document.createElement('option');
    option.value = '';
    option.setAttribute('disabled', 'disabled');
    option.setAttribute('selected', 'selected');
    option.innerText = '--Select state--';
    dropdown.appendChild(option);

    states.forEach(state => {
        let option = document.createElement('option');
        option.value = option.innerText = state;

        dropdown.appendChild(option);
        console.log("appended ", option, " to state");
    });
}
function populateCity(cities) {
    console.log("loading cities...", cities);

    let dropdown = document.querySelector('#cities');
    dropdown.innerText = '';

    let option = document.createElement('option');
    option.value = '';
    option.setAttribute('disabled', 'disabled');
    option.setAttribute('selected', 'selected');
    option.innerText = '--Select state--';
    dropdown.appendChild(option);

    cities.forEach(city => {
        let option = document.createElement('option');
        option.value = option.innerText = city;

        dropdown.appendChild(option);
        console.log("appended ", option, " to city");
    });
}