import {BrowserRouter, Route, Router, Routes, Navigate} from 'react-router-dom'
import { Dashboard } from '../pages'

export const Routex = () => {
  return(
    <BrowserRouter>
      <Routes>

        <Route path='/pagina-inicial' element={ <Dashboard/> }/>
        <Route path='*' element={ <Navigate replace to='/pagina-inicial' /> }/>

      </Routes>
    </BrowserRouter>
  )
}