async function createPagination(total, amount) {
    console.log(total);
    console.log(amount);
    const pages = Math.ceil(total / amount);
    const paginationDiv = document.getElementById("pages");
    paginationDiv.innerHTML = "";
    const leftArrow = document.createElement("a");
    leftArrow.innerHTML = "&laquo;";
    paginationDiv.appendChild(leftArrow);
    for (let i = 0; i < pages; i++) {
        const a = document.createElement("a");
        a.innerText = i + 1;
        a.onclick = async function changeToPage() {
            const current = document.getElementsByClassName("active")[0];
            current.classList.remove("active");
            this.classList.add("active");
            const pokemonJson = await getPokemonJson(i * amount, amount);
            await fillTable(pokemonJson.results);
        };
        // a.onclick = await changeToPage(a, i * amount, amount);
        if (i === 0) {
            a.classList.add("active");
        }
        paginationDiv.appendChild(a);
        if (i === 4) {
            break;
        }
    }
    const rightArrow = document.createElement("a");
    rightArrow.innerHTML = "&raquo;";
    paginationDiv.appendChild(rightArrow);
}
