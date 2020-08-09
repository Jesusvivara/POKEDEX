import React, { useState } from 'react';
import Card from './components/card';
import './App.css';



function App() {
  const [types] = useState(["Grass", "Poison", "Fire", "Water", "Flying", "Bug", "Normal"])
  const [pokemons] = useState([{
    // types: ["Grass", "Poison", "Fire", "Water", "Flying", "Bug", "Normal"],
    "id": 1,
    "name": {
      "english": "Bulbasaur",
      "japanese": "フシギダネ",
      "chinese": "妙蛙种子",
      "french": "Bulbizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "sprite": "https://www.pokexperto.net/3ds/sprites/pokedex/animados/bulbasaur-2.gif",
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 49,
      "SpAttack": 65,
      "SpDefense": 65,
      "Speed": 45
    }
  },
  {
    "id": 2,
    "name": {
      "english": "Ivysaur",
      "japanese": "フシギソウ",
      "chinese": "妙蛙草",
      "french": "Herbizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "sprite": "https://www.pokexperto.net/3ds/sprites/pokedex/animados/ivysaur-2.gif",
    "base": {
      "HP": 60,
      "Attack": 62,
      "Defense": 63,
      "SpAttack": 80,
      "SpDefense": 80,
      "Speed": 60
    }
  },
  {
    "id": 3,
    "name": {
      "english": "Venusaur",
      "japanese": "フシギバナ",
      "chinese": "妙蛙花",
      "french": "Florizarre"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "sprite": "https://www.pokexperto.net/3ds/sprites/pokedex/animados/venusaur.gif",
    "base": {
      "HP": 80,
      "Attack": 82,
      "Defense": 83,
      "SpAttack": 100,
      "SpDefense": 100,
      "Speed": 80
    }
  },
  {
    "id": 4,
    "name": {
      "english": "Charmander",
      "japanese": "ヒトカゲ",
      "chinese": "小火龙",
      "french": "Salamèche"
    },
    "type": [
      "Fire"
    ],
    "sprite": "https://www.pokexperto.net/3ds/sprites/pokedex/animados/charmander-2.gif",
    "base": {
      "HP": 39,
      "Attack": 52,
      "Defense": 43,
      "SpAttack": 60,
      "SpDefense": 50,
      "Speed": 65
    }
  },
  {
    "id": 5,
    "name": {
      "english": "Charmeleon",
      "japanese": "リザード",
      "chinese": "火恐龙",
      "french": "Reptincel"
    },
    "type": [
      "Fire"
    ],
    "sprite": "https://www.pokexperto.net/3ds/sprites/pokedex/animados/charmeleon-2.gif",
    "base": {
      "HP": 58,
      "Attack": 64,
      "Defense": 58,
      "SpAttack": 80,
      "SpDefense": 65,
      "Speed": 80
    }
  },
  {
    "id": 6,
    "name": {
      "english": "Charizard",
      "japanese": "リザードン",
      "chinese": "喷火龙",
      "french": "Dracaufeu"
    },
    "type": [
      "Fire",
      "Flying"
    ],
    "sprite": "https://www.pokexperto.net/3ds/sprites/pokedex/animados/charizard-2.gif",
    "base": {
      "HP": 78,
      "Attack": 84,
      "Defense": 78,
      "SpAttack": 109,
      "SpDefense": 85,
      "Speed": 100
    }
  },
  {
    "id": 7,
    "name": {
      "english": "Squirtle",
      "japanese": "ゼニガメ",
      "chinese": "杰尼龟",
      "french": "Carapuce"
    },
    "type": [
      "Water"
    ],
    "sprite": "https://www.pokexperto.net/3ds/sprites/pokedex/animados/squirtle-2.gif",
    "base": {
      "HP": 44,
      "Attack": 48,
      "Defense": 65,
      "SpAttack": 50,
      "SpDefense": 64,
      "Speed": 43
    }
  },
  {
    "id": 8,
    "name": {
      "english": "Wartortle",
      "japanese": "カメール",
      "chinese": "卡咪龟",
      "french": "Carabaffe"
    },
    "type": [
      "Water"
    ],
    "sprite": "https://www.pokexperto.net/3ds/sprites/pokedex/animados/wartortle-2.gif",
    "base": {
      "HP": 59,
      "Attack": 63,
      "Defense": 80,
      "SpAttack": 65,
      "SpDefense": 80,
      "Speed": 58
    }
  },
  {
    "id": 9,
    "name": {
      "english": "Blastoise",
      "japanese": "カメックス",
      "chinese": "水箭龟",
      "french": "Tortank"
    },
    "type": [
      "Water"
    ],
    "sprite": "https://www.pokexperto.net/3ds/sprites/pokedex/animados/blastoise-2.gif",
    "base": {
      "HP": 79,
      "Attack": 83,
      "Defense": 100,
      "SpAttack": 85,
      "SpDefense": 100,
      "Speed": 78
    }
  },
  {
    "id": 10,
    "name": {
      "english": "Caterpie",
      "japanese": "キャタピー",
      "chinese": "绿毛虫",
      "french": "Chenipan"
    },
    "type": [
      "Bug"
    ],
    "sprite": "https://www.pokexperto.net/3ds/sprites/pokedex/animados/caterpie-2.gif",
    "base": {
      "HP": 45,
      "Attack": 30,
      "Defense": 35,
      "SpAttack": 20,
      "SpDefense": 20,
      "Speed": 45
    }
  },
  {
    "id": 11,
    "name": {
      "english": "Metapod",
      "japanese": "トランセル",
      "chinese": "铁甲蛹",
      "french": "Chrysacier"
    },
    "type": [
      "Bug"
    ],
    "sprite": "https://www.pokexperto.net/3ds/sprites/pokedex/animados/metapod.gif",
    "base": {
      "HP": 50,
      "Attack": 20,
      "Defense": 55,
      "SpAttack": 25,
      "SpDefense": 25,
      "Speed": 30
    }
  },
  {
    "id": 12,
    "name": {
      "english": "Butterfree",
      "japanese": "バタフリー",
      "chinese": "巴大蝶",
      "french": "Papilusion"
    },
    "type": [
      "Bug",
      "Flying"
    ],
    "sprite": "https://www.pokexperto.net/3ds/sprites/pokedex/animados/butterfree.gif",
    "base": {
      "HP": 60,
      "Attack": 45,
      "Defense": 50,
      "SpAttack": 90,
      "SpDefense": 80,
      "Speed": 70
    }
  },
  {
    "id": 13,
    "name": {
      "english": "Weedle",
      "japanese": "ビードル",
      "chinese": "独角虫",
      "french": "Aspicot"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "sprite": "https://www.pokexperto.net/3ds/sprites/pokedex/animados/weedle.gif",
    "base": {
      "HP": 40,
      "Attack": 35,
      "Defense": 30,
      "SpAttack": 20,
      "SpDefense": 20,
      "Speed": 50
    }
  },
  {
    "id": 14,
    "name": {
      "english": "Kakuna",
      "japanese": "コクーン",
      "chinese": "铁壳蛹",
      "french": "Coconfort"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "sprite": "https://www.pokexperto.net/3ds/sprites/pokedex/animados/kakuna.gif",
    "base": {
      "HP": 45,
      "Attack": 25,
      "Defense": 50,
      "SpAttack": 25,
      "SpDefense": 25,
      "Speed": 35
    }
  },
  {
    "id": 15,
    "name": {
      "english": "Beedrill",
      "japanese": "スピアー",
      "chinese": "大针蜂",
      "french": "Dardargnan"
    },
    "type": [
      "Bug",
      "Poison"
    ],
    "sprite": "https://www.pokexperto.net/3ds/sprites/pokedex/animados/beedrill.gif",
    "base": {
      "HP": 65,
      "Attack": 90,
      "Defense": 40,
      "SpAttack": 45,
      "SpDefense": 80,
      "Speed": 75
    }
  },
  {
    "id": 16,
    "name": {
      "english": "Pidgey",
      "japanese": "ポッポ",
      "chinese": "波波",
      "french": "Roucool"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "sprite": "https://www.pokexperto.net/3ds/sprites/pokedex/animados/pidgey.gif",
    "base": {
      "HP": 40,
      "Attack": 45,
      "Defense": 40,
      "SpAttack": 35,
      "SpDefense": 35,
      "Speed": 56
    }
  },
  {
    "id": 17,
    "name": {
      "english": "Pidgeotto",
      "japanese": "ピジョン",
      "chinese": "比比鸟",
      "french": "Roucoups"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "sprite": "https://www.pokexperto.net/3ds/sprites/pokedex/animados/pidgeotto.gif",
    "base": {
      "HP": 63,
      "Attack": 60,
      "Defense": 55,
      "SpAttack": 50,
      "SpDefense": 50,
      "Speed": 71
    }
  },
  {
    "id": 18,
    "name": {
      "english": "Pidgeot",
      "japanese": "ピジョット",
      "chinese": "大比鸟",
      "french": "Roucarnage"
    },
    "type": [
      "Normal",
      "Flying"
    ],
    "sprite": "https://www.pokexperto.net/3ds/sprites/pokedex/animados/pidgeot.gif",
    "base": {
      "HP": 83,
      "Attack": 80,
      "Defense": 75,
      "SpAttack": 70,
      "SpDefense": 70,
      "Speed": 101
    }
  },
  {
    "id": 19,
    "name": {
      "english": "Rattata",
      "japanese": "コラッタ",
      "chinese": "小拉达",
      "french": "Rattata"
    },
    "type": [
      "Normal"
    ],
    "sprite": "https://www.pokexperto.net/3ds/sprites/pokedex/animados/rattata.gif",
    "base": {
      "HP": 30,
      "Attack": 56,
      "Defense": 35,
      "SpAttack": 25,
      "SpDefense": 35,
      "Speed": 72
    }
  },
  {
    "id": 20,
    "name": {
      "english": "Raticate",
      "japanese": "ラッタ",
      "chinese": "拉达",
      "french": "Rattatac"
    },
    "type": [
      "Normal"
    ],
    "sprite": "https://www.pokexperto.net/3ds/sprites/pokedex/animados/raticate.gif",
    "base": {
      "HP": 55,
      "Attack": 81,
      "Defense": 60,
      "SpAttack": 50,
      "SpDefense": 70,
      "Speed": 97
    }
  }]);
  const [typeSelected, setTypeSelected] = useState("Todos");
  const [pokemonSearch, setPokemonSearch] = useState("");


  const handleTypeSelected = (event) => {
    setTypeSelected(event.target.value)
  }
  const handlepokemonSearch = (event) => {
    setPokemonSearch(event.target.value)
  }

  return (
    <div className="container">
      <div className="filters">
        {/* este hook se usa para poner los tipos de pokemon y buscarlos dentro del estado que tenemos  */}
        <select onChange={handleTypeSelected} >
          <option key={0} value="Todos">Todos</option>
          {types.map((type, index) => {
            return (
              <option key={index + 1} value={type}>{type}</option>
            )
          })
          }
        </select>
      </div>

      <div className="filters">
        <form onChange={handlepokemonSearch}>
          <input type="text"
            placeholder="Poke Search..."
            name="pokemon"
          />

          {/* <Inputtxt/> */}
        </form>
      </div>
      <div className="App">
        {
          pokemons.filter(pokemon => { return typeSelected === "Todos" ? true : pokemon.type.includes(typeSelected) })
            // pokemons.filter(pokemon => pokemon.name.english.includes(pokemonSearch))
            .filter((pokemon) => {
              return pokemon.name.english === "" ? true : pokemon.name.english.toLowerCase().includes(pokemonSearch.toLowerCase())
            })
            .map(pokemon => {
              return (<Card name={pokemon.name.english} image={pokemon.sprite} base={pokemon.base} types={pokemon.type} id={pokemon.id} />)
            })
        }
      </div>
    </div>
  );
}

export default App;
