async function getPoke() {
    try {

    const choice  = document.getElementById("myInput").value;
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + choice);
    const pokemon = await response.json();
    document.getElementById("sprite").src = pokemon.sprites.front_default;
    document.getElementById("name").innerHTML = pokemon.name;
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
    document.getElementById("secondName").innerHTML = dex[1].name;
    document.getElementById("second").src = dex[1].sprites.front_default;
    document.getElementById("thirdName").innerHTML = dex[2].name;
    document.getElementById("third").src = dex[2].sprites.front_default;

    console.log(dex);


    } catch (error) {
        console.error(error);
    }
  }