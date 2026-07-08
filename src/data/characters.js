async function fetchPokemon() {
    let arrLength = 12;
    let pokemonArr = [];
    
    function getRandomId(max) {
        return Math.floor(Math.random() * max) + 1
    }
    
    try {

        for (let i=0; i < arrLength; i++) {
            let id = getRandomId(1000);
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)  
            
            if (!response.ok) {
                throw new Error("Couldn't fetch resource");
            }
            const data = await response.json();
            const pokemonSprite = data.sprites.front_default;
            const pokemonName = data.species.name;
            
            pokemonArr.push({id: id, name: pokemonName, image: pokemonSprite});
        }    
    }

    catch(error) {
        console.log(error);
    }

    return pokemonArr;
}

//const arr = await fetchPokemon();

export default fetchPokemon