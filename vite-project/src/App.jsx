import { Route, Routes } from 'react-router-dom'
import './App.css'
import CardProps from './Components/CardProps'
import Form from './Components/Form'
import Card from './Components/Card'

function App() {
  return (
    <>
      <Routes>
        <Route path="/Card" element={<CardProps />}></Route>
        <Route path="/myCard" element={<Card />}></Route>
        <Route path="/Form" element={<Form />}></Route>
      </Routes >
    </>
  )
}

export default App
