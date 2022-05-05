import React, {useEffect} from 'react'
import Logins from './components/Logins'

function App() {
   
  useEffect(() => {
    const hash = window.location.hash;
    if(hash) {
      const token = hash.substring(1).split('&')[0].split('=')[1];
      console.log(token);
    }
  }, [])
  return (
    <div>
      <Logins></Logins>
    </div>
  )
}

export default App