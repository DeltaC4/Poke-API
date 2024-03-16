async function getPoke() {
    try {

    const choiceValue  = document.getElementById("myInput").value;
    const choice = choiceValue.toLowerCase();
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + choice);
    const pokemon = await response.json();
    document.getElementById("sprite").src = pokemon.sprites.front_default;
    document.getElementById("name").innerHTML = pokemon.name;
    document.getElementById("bioSingle").innerHTML = pokemon.stats[0].base_stat + 
    " " + pokemon.stats[0].stat.name + "<br>" + pokemon.stats[1].base_stat + 
    " " + pokemon.stats[1].stat.name + "<br>" + pokemon.stats[2].base_stat + 
    " " + pokemon.stats[2].stat.name;
    console.log(pokemon);

    } catch (error) {
        // console.error(error);
        document.getElementById("name").innerHTML = "Not a Pokemon!";
        document.getElementById("sprite").src = "";
    }
  }

  async function getThreeRan() {
    try {

      let dex = [];
      for (let index = 0; index < 3; index++) {
        const rand = Math.floor(Math.random() * 100);
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + rand);
        const pokemon = await response.json(); 
        dex[index] = pokemon;
      }

    document.getElementById("firstName").innerHTML = dex[0].name;
    document.getElementById("first").src = dex[0].sprites.front_default;
    document.getElementById("bio0").innerHTML = dex[0].stats[0].base_stat + 
    " " + dex[0].stats[0].stat.name + "<br>" + dex[0].stats[1].base_stat + 
    " " + dex[0].stats[1].stat.name + "<br>" + dex[0].stats[2].base_stat + 
    " " + dex[0].stats[2].stat.name;

    document.getElementById("secondName").innerHTML = dex[1].name;
    document.getElementById("second").src = dex[1].sprites.front_default;
    document.getElementById("bio1").innerHTML = dex[1].stats[0].base_stat + 
    " " + dex[1].stats[0].stat.name + "<br>" + dex[1].stats[1].base_stat + 
    " " + dex[1].stats[1].stat.name + "<br>" + dex[1].stats[2].base_stat + 
    " " + dex[1].stats[2].stat.name;

    document.getElementById("thirdName").innerHTML = dex[2].name;
    document.getElementById("third").src = dex[2].sprites.front_default;
    document.getElementById("bio2").innerHTML = dex[2].stats[0].base_stat + 
    " " + dex[2].stats[0].stat.name + "<br>" + dex[2].stats[1].base_stat + 
    " " + dex[2].stats[1].stat.name + "<br>" + dex[2].stats[2].base_stat + 
    " " + dex[2].stats[2].stat.name;

    console.log(dex);


    } catch (error) {
        console.error(error);
    }
  }