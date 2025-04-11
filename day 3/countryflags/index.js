
let container = document.getElementsByClassName("container")[0];
for(let i=0; i!= data.length; i++) {
    const myObj = data[i];
    const myhtml =`
        <div class = "card">
            <img src="${myObj.flags.png}" alt="${myObj.flags.svg}" height=220 width=380>
            <h3>${myObj.name.common}</h3>
            <p><b>Population:</b> ${myObj.population}</p>
            <p><b>Capital:</b> ${myObj.capital}</p>
            <p><b>Region:</b> ${myObj.region}</p>

        </div>`;
    container.innerHTML += myhtml;
}