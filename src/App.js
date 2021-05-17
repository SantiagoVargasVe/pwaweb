import React, { useEffect, useState } from 'react'
import Card from './Components/Card'
import './styles/App.css'
function App() {
  const [characters, setCharacters] = useState()
  useEffect(() => {
    console.log('Navegador ONLINE ?')
    console.log(!window.navigator.onLine)
    const url = `https://rickandmortyapi.com/api/character/?page=1`
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        let info = data.results
        setCharacters(info)
        localStorage.setItem('characters', info)
      })
  }, [])

  if (characters) {
    let elements = characters.map((character) => <Card id={character.id} />)

    return (
      <div>
        <h1 className="name">Santiago Vargas Vega</h1>
        <div div className="App">
          {elements}
        </div>
      </div>
    )
  } else {
    return 'Loading'
  }
}

export default App
