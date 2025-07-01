    async function creatElements(){
        let divContainer = document.createElement('div')
        divContainer.className = "cardsPokemons"
        let pictureImg = document.createElement('img')
        pictureImg.className = "pokemonImg"
        let idNumber = document.createElement('p')
        idNumber.className = "pokemonId"
        let nameH2 = document.createElement('h2')
        nameH2.className = "pokemonName"
        let typePokemon = document.createElement('p')
        typePokemon.className = "typePokemon"
    } 

    let button = document.getElementById('loadingPokemon')
    button.onclick = function(){
        getData()
    }

   function getData (){
    count:541
    next:"https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20"
    previous:null

    const url = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=$20"
    
        fetch(url)
        .then((response) =>{
            console.log(response)
            return response.json()
        })

        .then((data) => {
            for (const pokemons of data.results) {
                console.log(pokemons, "pokemons")   
                let getId = pokemons.id
                console.log(getId)
                console.log(pokemons)

                let getName = pokemons.name 
                let getUrl = pokemons.url
                console.log(getName)
                console.log(getUrl)
            }
        })
        .catch((error) =>{
            console.log(error)
        })
    }

