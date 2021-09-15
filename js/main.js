
function getSecondPokemon(id) {
    $.getJSON(`https://pokeapi.co/api/v2/pokemon/${id}`, function(response, status){
        if(status==='success'){
            PokeInfoSec(response);
        }else{
            return false;
        }
    })
}

function getPokemon(id) {
    $.getJSON(`https://pokeapi.co/api/v2/pokemon/${id}`, function(response, status){
        if(status==='success'){
            updatePokemon(response)
        }else{
            return false;
        }
    })
}


function UpdateAbility(habilidades) {
    let arrayHabilidades = [];
    for (let habilidad of habilidades) {
        arrayHabilidades.push(habilidad.ability.name);
    }
    return arrayHabilidades;
}

function PokeInfo(poke) {
    try{
        containerPoke.textContent = poke.name;
        imagen.setAttribute('src', poke.sprites.front_default);
        imagen2.setAttribute('src', poke.sprites.back_default);
        imagen3.setAttribute('src', poke.sprites.front_shiny);
        pokeId.textContent = "Poke ID: " + poke.id;
        let ability = UpdateAbility(poke.abilities)
        abilities.innerHTML = ability.toString();
    }catch(e){
        
    }
    
}

function PokeInfoSec(poke) {
    pokeEvolve.textContent = poke.name;
    imagenEvo.setAttribute('src', poke.sprites.front_default);
    imagenEvo2.setAttribute('src', poke.sprites.back_default);
    imagenEvo3.setAttribute('src', poke.sprites.front_shiny);
    let ability = UpdateAbility(poke.abilities)
    abilitiesEvo.innerHTML = "Abilities </br>" + ability.toString();
}

function updatePokemon(item) {
    try {
        PokeInfo(item);
        getSecondPokemon(item.id+1)
    } catch (error) {
    }
    
    
}
search.addEventListener('change', () => {
    const res = getPokemon(search.value.toLowerCase());
    updatePokemon(res);
})



const init = () => {
    const firstPokemon = getPokemon(25);
    updatePokemon(firstPokemon);
}
document.addEventListener('DOMContentLoaded', init)