const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
const displayCountries = (countries) =>{
    const div = document.getElementById('country-container');
    countries.forEach(country => {
        // console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <h4>Capital: ${country.capital}</h4>
            <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `;
        div.appendChild(countryDiv);
    });
}
const loadCountryDetail = (code) =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))
}
const displayCountryDetail = (details) =>{
    const div = document.getElementById('country-detail');
    div.innerHTML = `
        <img src="${details.flags.png}" alt="">
        <h5>Continents: ${details.continents[0]}</h5>
        
        <p>Area: ${details.area} SquareKM</p>
        <p>Population: ${details.population}</p>
    `;
    console.log(details);
}
loadCountries();