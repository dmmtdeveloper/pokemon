import type { FavoritePokemon } from "@interfaces/favorite-pokemons";
import { createSignal, Show, type Component } from "solid-js";

interface Props {
  pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {
  const [isVisible, setIsVisible] = createSignal(true);
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const deleteFavorite = () => {
    const favorites = JSON.parse(
      localStorage.getItem("favorites") ?? "[]"
    ) as FavoritePokemon[];

    const newFavorites = favorites.filter((p) => p.id !== pokemon.id);

    localStorage.setItem("favorites", JSON.stringify(newFavorites));
    setIsVisible(false)
  };

  return (
    <Show when={isVisible()}>
      <div class="flex flex-col justify-center items-center pt-10">
        <a href={`/pokemons/${pokemon.name}`}>
          <img src={imageUrl} alt={pokemon.name} width={100} />
          <p class="capitaliza">
            #{pokemon.id} {pokemon.name}
          </p>
        </a>

        <button onClick={deleteFavorite} class="text-red-400 cursor-pointer">
          Borrar
        </button>
      </div>
    </Show>
  );
};
