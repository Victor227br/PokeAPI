const body = document.querySelector('body')
   
  async function createElements(getName){
        let divContainer = document.createElement('div')
        divContainer.className = "cardsPokemon"
        let pictureImg = document.createElement('img')
        pictureImg.className = "pokemonImg"
        let idNumber = document.createElement('p')
        idNumber.className = "pokemonId"
        let nameH2 = document.createElement('h2')
        nameH2.className = "pokemonName"
        nameH2.textContent =  getName
        let typePokemon = document.createElement('p')
        typePokemon.className = "typePokemon"

        divContainer.appendChild(pictureImg)
        divContainer.appendChild(nameH2)
        divContainer.appendChild(idNumber)
        body.appendChild(divContainer)
    } 

    let button = document.getElementById('loadingPokemon')
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
                    console.log(dados,'dados')
                    let getName = dados.name
                    let getId = dados.id
                    let getType = dados.types[0].type.name
                    let getImg = document.getElementsByClassName("pokemonImg")
                    getImg.src = dados.sprites['front_default']
                    console.log(getName)
                    console.log(getId)
                    console.log(dados)
                    console.log(getType , 'tipo')

                    //createElements(getName )
                    let pokemon = {
                        img : getImg ,
                        name : getName,
                        id : getId,
                        type : getType
                     }              

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

