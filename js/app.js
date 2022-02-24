const loadData = () => {
    fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => displayData(data));
};

loadData();

const displayData = (data) => {
    const countryGrid = document.getElementById('country-grid');
    data.forEach(country => {
        console.log(country);
        const flag = document.createElement('div');
        flag.innerHTML = `
            <img src = ${country.flags.svg}>
        `
        countryGrid.appendChild(flag);
    });
}