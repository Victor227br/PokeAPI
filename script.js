const body = document.querySelector('body')
const cardsContainer = document.getElementById('pokedex')
   
function createElements(pokemon){
  let boxCards = document.createElement('div')
  boxCards.className = "pokedex__pokemon"
  let divPictureImg = document.createElement('div')
  divPictureImg.className = "pokemon__image-wrapper"
  let pictureImg = document.createElement('img')
  pictureImg.className = "pokemon__img"
  pictureImg.src = pokemon.img
  let divIdNumber = document.createElement('div')
  divIdNumber.className = "pokemon__box-id"
  let idNumber = document.createElement('p')
  idNumber.className = "pokemon__id"
  idNumber.textContent = `#${pokemon.id}`;
  let nameH2 = document.createElement('h2')
  nameH2.className = "pokemon__name"
  nameH2.textContent =  pokemon.name
  let containerType = document.createElement('div')
  containerType.className = "pokemon__background-type"
  containerType.style.backgroundColor = typeColors[pokemon.type]
  let typePokemon = document.createElement('p')
  typePokemon.className = "pokemon__type"
  typePokemon.textContent = pokemon.type

 divIdNumber.appendChild(idNumber)
 divPictureImg.appendChild(pictureImg)
 containerType.appendChild(typePokemon)
 boxCards.appendChild(divPictureImg);
 boxCards.appendChild(divIdNumber);
 boxCards.appendChild(nameH2);
 boxCards.appendChild(containerType);
 cardsContainer.appendChild(boxCards)
 } 

let button = document.getElementById('button__loading')
    button.onclick = function(){
     getData()
}

let offset = 0;
const limit = 40;

async function getData (){     
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`   
    offset += limit;  
    await fetch(url)

    .then( async(response) =>{
      console.log(response)
      return await response.json()
        })

    .then(async(data) => {
        for(const pokemons of data.results) {
         await fetch(pokemons.url)

         .then(async(pokemonData) => {
            return await pokemonData.json()
            })  

            .then((dados) => {
              const pokemon = {
                img: dados.sprites.front_default,
                id: dados.id,
                name: dados.name,
                type: dados.types[0].type.name
            };
                createElements(pokemon)

                })
            }
        })
        .catch((error) =>{
            console.log(error)
        })
    }

const typeColors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD'
};

