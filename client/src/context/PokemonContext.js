import { createContext, useReducer } from 'react'

const PokemonContext = createContext()

const initial = {
  pokemon: []
}

const reducer = (state, action) => {
  const {type, payload} = action
  switch (type) {
    case 'login':
    case 'price':
    case 'login_success':
      return {
        pokemon: payload
      }
    case 'logout':
      return {
        pokemon: []
      }
    default:
      throw new Error('Error')
  }
}

const PokemonContextProvider = ({ children }) => {
  const [pokemonState, dispatchPokemon] = useReducer(reducer, initial)

  return (
    <PokemonContext.Provider value={{ pokemonState, dispatchPokemon }} >
     { children }
    </PokemonContext.Provider>
  )
}

export { PokemonContext, PokemonContextProvider }
