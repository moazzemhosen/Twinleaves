import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Table from '../pages/Table'
import Details from '../pages/Details'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Table/>}/>
            <Route path='/:id' element={<Details/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes