const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
};

const displayCountries = countries => {
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h2>Name: ${country.name.common}</h2>
            <h4>Capital: ${country.capital ? country.capital[0] : 'No Capital'}</h4>
            <button onclick="loadCountriesDetails('${country.cca2}')" class="btn">Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    });
};

loadCountries();

const loadCountriesDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data[0]))
};

const displayDetails = (detail) => {
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
        <h3>Name: ${detail.name.common}</h3>
        <h4>CCA3: ${detail.cca3}</h4>
        <p>Continents: ${detail.continents}</p>
        <img src="${detail.flags.png}" />
    `;
}