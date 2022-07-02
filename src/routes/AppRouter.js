import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PokeHome } from '../views/PokeHome/PokeHome'

export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <PokeHome/> } />
        </Routes>
    </div>
  )
}
