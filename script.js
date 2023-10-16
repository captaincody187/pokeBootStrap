funcT = () => {
    const pokemonName = document.getElementById('pokemon-name').value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
  
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Pokemon not found - check your connection and try again!');
        }
        return response.json();
      })
      .then(data => {
        const pokemonInfo = document.getElementById('pokemon-info');
        if (data.sprites && data.sprites.front_default) {
          pokemonInfo.innerHTML = `
            <h2>${data.name}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}">
            <p>Height: ${data.height}</p>
            <p>Weight: ${data.weight}</p>
            <p>Types: ${data.types.map(type => type.type.name).join(', ')}</p>
          `;
        } else {
          pokemonInfo.innerHTML = 'Pokemon data is incomplete or not found.';
        }
      })
      .catch(error => {
        console.error(error);
        const pokemonInfo = document.getElementById('pokemon-info');
        pokemonInfo.innerHTML = 'Pokemon not found - check your connection and try again!';
      });
  };
  