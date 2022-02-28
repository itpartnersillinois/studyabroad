function search() {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var results = '';
            var countries = JSON.parse(this.responseText);
            countries.sort((a, b) => (a.name > b.name) ? 1 : -1)
            countries.forEach(country => {
                var term = document.getElementById('term').value;
                var theme = document.getElementById('theme').value;
                var region = document.getElementById('region').value;
                var show = (term == '' || country.futuredatefilter.includes(term)) && 
                    (theme == '' || country.themes.includes(theme)) && 
                    (region == '' || country.region === region);
                if (show) {
                    if (country.url.startsWith('http')) {
                        results = results + `<div><h2><a href='${country.url}' tabindex=-1>${country.name}</a></h2><a href='${country.url}'><div class='image' style='background-image: url(/img/country/${country.imageurl})'>`;
                    } else {
                        results = results + `<div><h2><a href='/countries/${country.url}/index.html' tabindex=-1>${country.name}</a></h2><a href='/countries/${country.url}/index.html'><div class='image' style='background-image: url(/img/country/${country.imageurl})'>`;
                    }
                    results = results + `<div class='dates'>${country.futuredates.join(', ')}</div><div class='hidden'>`;
                    results = results + `<p>Deadline to Apply: ${country.deadline}</p>`;
                    results = results + `<p>Estimated Cost: ${country.cost}</p>`;
                    results = results + `<p>Credits: ${country.credits}</p>`;
                    results = results + `<p>Click for more information</p>`;
                    results = results + `</div></div></a></div>`;
                }
            });
            document.getElementById('results').innerHTML = results;
        }
    };
    xmlhttp.open('GET', '/js/countries.js', true);
    xmlhttp.send();
}

window.onload = (event) => {
    search();
};

document.addEventListener("DOMContentLoaded", function(event) { 
    document.getElementById('term').addEventListener('change', search);
    document.getElementById('region').addEventListener('change', search);
    document.getElementById('theme').addEventListener('change', search);
});
