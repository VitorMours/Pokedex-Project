// main.js é o arquivo responsável por criar os eventlistener
// do projeto, em criar a referência aos elementos e tags do projeto
// e por fazer a entrega dos dados requisitados pela api, para o front-end
let apiBase = "https://pokeapi.co/api/v2/pokemon";

// Finished: app variables and classes
let btn = document.getElementById("search-button");
let nome = document.getElementById("nome-pokemon");
let peso = document.getElementById("peso-pokemon");
let experiencia = document.getElementById("experience-pokemon");
let imagem = document.getElementById("sprite-pokemon");
let stats = document.getElementById("stats-cell");
let abilities = document.getElementById("abilities-cell");

// Finished
class Pokemon{
  constructor(data_dict){
    this._name=data_dict.name;
    this._weight=data_dict.weight;
    this._base_experience=data_dict.base_experience;
    this._abilities=data_dict.abilities;
    this._sprite=data_dict.sprites;
    this._stats=data_dict.stats;
    this.getFrontSprite();
  }
  
  // Getters
  get name(){
    return this._name;
  }
  get weight(){
    return this._weight;
  }
  get base_experience(){
    return this._base_experience;
  }
  get abilities(){
    return this._abilities;
  }
  get sprite(){
    return this._sprite;
  }
  get stats(){
    return this._stats;
  }

  // Manipulating Abstract attributes
  getFrontSprite(){
    this._sprite=this._sprite.front_default;
  }
}

// Finished: Event Listener
btn.addEventListener("click", () => {
  fetchData();
});

// Finished: Function created to fetch the API data 
function fetchData(){
  let pokemon = document.getElementById("isearch");
  data = callApi(pokemon.value);
}

// FINISHED
async function callApi(pokemon){
  try{    
    fetch(`${apiBase}/${pokemon}`)
    .then( response => response.json())
    .then((data) => getJsonInformation(data));
  }catch(e){
      throw new Error("Response problem");
  }
}

// Finished: Getting the data and passing to an attribute dict
function getJsonInformation(json){
  attribute_list = ["name",
                      "weight",
                      "base_experience",
                      "abilities",
                      "sprites",
                      "stats"];
  attribute_dict = {};
  attribute_list.forEach((nome) => {
      attribute_dict[`${nome}`] = json[`${nome}`]
  });
  showPokemon(attribute_dict);
}

function showPokemon(data_dict){
  let pokemon = new Pokemon(data_dict);

  nome.innerHTML = pokemon["name"];
  peso.innerHTML = pokemon["weight"];
  experiencia.innerHTML = pokemon["base_experience"]

  //pokemon["stats"].forEach((item, index, array) => {console.log(item)});
  //pokemon["stats"].forEach((item, index, array) => {console.log(item.stat)});

  imagem.src = pokemon["sprite"];
  imagem.alt = pokemon["name"];

  addingCompoudingValuesOnTable(abilities, pokemon["abilities"]);
  addingCompoudingValuesOnTable(stats, pokemon["stats"]);
}


function addingCompoudingValuesOnTable(domElement, data_dict){




}




function autocompleteByName(){


}









