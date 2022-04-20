import PokeCard from "./PokeCard";

const all_pokemon = [
  { id: 10, name: "Charizard", weight: 90 },
  { id: 11, name: "Bulbasaur", weight: 6.9 },
  { id: 12, name: "Mewtwo", weight: 122 },
  { id: 13, name: "Mega beedrill", weight: 65 },
];

const PokemonList = () => {
  return (
    <div>
      {
        <ul>
          {all_pokemon.map((poke) => (
            <PokeCard poke={poke} />
          ))}
        </ul>
      }
    </div>
  );
};

export default PokemonList;
