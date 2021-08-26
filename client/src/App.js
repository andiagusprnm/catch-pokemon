import { useContext, useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './css/Global.css'
import { Home } from './pages/Home'
import { DetailPokemon } from './pages/DetailPokemon'
import { MyPokemonList } from './pages/MyPokemonList'
import { CatchPokemon } from './pages/CatchPokemon'

import { UserContext } from './context/UserContext'
import { PokemonContext } from './context/PokemonContext'
import { setHeader } from './helper/SetDefaultHeader'
import { API } from './url'
import { ProtectedRoute } from './ProtectedRoute'

function App() {
  const { state, dispatch } = useContext(UserContext)
  const { pokemonState, dispatchPokemon } = useContext(PokemonContext)
  console.log(pokemonState)


  useEffect(() => {
    const authorization = async () => {
      try {
        const metadata = {
          method: 'GET',
          headers: setHeader({
            'Content-Type': 'application/json'
          })
        }
        const result = await (await fetch(`${API}/authorization`, metadata)).json()
        localStorage.setItem('token', result?.user.token)
        const { user: { token, ...rest } } = result
        dispatch({
          type: 'login',
          payload: rest
        })
      } catch (error) {
        console.log(error)
      }
    }
    const getAllPokemon = async () => {
      try {
        const data = await (await fetch(`${API}/pokemons`)).json()
        dispatchPokemon({
          type: 'login',
          payload: data.results
        })
      } catch (error) {
        console.log(error)
      }
    }
    authorization()
    getAllPokemon()
  }, [])


  return (
    <BrowserRouter>
      <Switch>
        <Route path="/pokemon/:id" component={ DetailPokemon } />
        <Route path="/" exact component={ Home } />
        <ProtectedRoute path="/mypokemon" component={ MyPokemonList } auth={ state.isLogin } />
        <ProtectedRoute path="/catch-pokemon" component={ CatchPokemon } auth={ state.isLogin } />
      </Switch>
    </BrowserRouter>
  )
}

export default App
