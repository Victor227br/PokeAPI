const body = document.querySelector('body')
const cardsContainer = document.getElementById('cardsContainer')
   
  async function createElements(pokemon){
        let boxCards = document.createElement('div')
        boxCards.className = "box__Cards"
        let divPictureImg = document.createElement('div')
        divPictureImg.className = "box__Cards--img"
        let pictureImg = document.createElement('img')
        pictureImg.src = pokemon.img
        let divIdNumber = document.createElement('div')
        divIdNumber.className = "box__divIdPokemon"
        let idNumber = document.createElement('p')
        idNumber.className = "box__IdPokemon"
        idNumber.textContent = `#${pokemon.id}`;
        let nameH2 = document.createElement('h2')
        nameH2.className = "box__NamePokemon"
        nameH2.textContent =  pokemon.name

        let containerType = document.createElement('div')
        containerType.className = "box__DivType"
        containerType.style.backgroundColor = typeColors[pokemon.type]
        let typePokemon = document.createElement('p')
        typePokemon.className = "box__type"
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

    let button = document.getElementById('buttonLoading')
    button.onclick = function(){
        getData()
    }

    async function getData (){
      const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=$20"
        await fetch(url)
    
        .then((response) =>{
             console.log(response)
             return response.json()
        })

        .then(async(data) => {
         for (const pokemons of data.results) {
            await fetch(pokemons.url)
              .then((pokemonData) => {
                return pokemonData.json()
                })  
                .then((dados) => {

                  const pokemon = {
                    img: dados.sprites.front_default,
                    id: dados.id,
                    name: dados.name,
                    type: dados.types[0].type.name
            };
                        createElements(pokemon)
                     console.log(pokemon , "objeto") 
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

