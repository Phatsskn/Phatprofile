function renderYearExp(){
    const date = new Date();
    const year = date.getFullYear();
    const yearExp = year - 2017;
    document.getElementById("year-exp").innerHTML = yearExp;
}

function renderThisYear(){
    const date = new Date();
    const year = date.getFullYear();
    const footer = document.getElementById("year");
    footer.innerHTML = year;
}

var init = () => {
    renderYearExp();
    renderThisYear();
}