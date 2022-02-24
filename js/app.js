const loadData = () => {
    fetch('https://restcountries.com/v2/all')
        .then(response => response.json())
        .then(data => displayData(data));
};

loadData();

const displayData = (data) => {
    const flagGrid = document.getElementById('flag-grid');
    data.forEach(country => {
        // console.log(country);
        const flag = document.createElement('div');
        flag.classList.add('country-container');
        flag.innerHTML = `
            <img class="flag-img" src = ${country.flags.svg}>
        `;
        const revealBtn = document.createElement('button');
        revealBtn.innerText = 'Reveal name';
        flag.appendChild(revealBtn);
        revealBtn.addEventListener('click', () => {
            const h3 = document.createElement('h3');
            h3.innerText = country.name;
            flag.removeChild(revealBtn);
            flag.appendChild(h3);
        });
        flagGrid.appendChild(flag);
    });
};
const validateName = () => {
    console.log(document.getElementById('input').value);
}