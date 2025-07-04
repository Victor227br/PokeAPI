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
                    let getImg = document.getElementsByClassName("pokemonImg")
                    getImg.src = dados.sprites['front_default']
                    console.log(getName)
                    console.log(getId)
                   // console.log(getType)

                    createElements(getName )

                    let pokemon = {
                        name : getName,
                        id : getId
                     }

                     console.log(pokemon , "objeto")
                    
                })
            }
        })
        .catch((error) =>{
            console.log(error)
        })
    }

