class PokemonDetails extends HTMLElement {
    // constructor() {
    //     super();
    // }

    get name() {
        return this.getAttribute("name");
    }

    set name(val) {
        if (val) {
            this.setAttribute("name", val);
        }
        else {
            this.removeAttribute("name");
        }
    }

    async connectedCallback () {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.name}`);
        const pokemon = await response.json();
        const title = document.createElement("h2");
        title.innerText = pokemon.name;
        this.appendChild(title);
        const image = document.createElement("img");
        image.src = pokemon.sprites.front_default;
        image.classList.add("pokemon-image");
        this.appendChild(image);
        const p = document.createElement("p");
        const b = document.createElement("b");
        b.innerText = "Type: ";
        if (pokemon.types.length > 1) {
            b.innerText = "Types: ";
        }
        const types = pokemon.types.map(t => t.type.name);
        p.appendChild(b);
        p.append(types.join(", "))
        this.appendChild(p);

    }
}

customElements.define("pokemon-details", PokemonDetails);