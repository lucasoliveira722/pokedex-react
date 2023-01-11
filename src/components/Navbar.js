import React, { useContext } from 'react';
import FavoriteContext from '../contexts/favoritesContext';

export default function Navbar() {

  const { favoritePokemons } = useContext(FavoriteContext)
  const logoImg = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'

  return (
    <nav>
      <div>
        <img
          alt='PokéAPI'
          src={logoImg}
          className='navbar-img'
        />
      </div>
      <div>{favoritePokemons.length}❤️</div>
    </nav>
  );
}
