import React,{Suspense,lazy} from 'react'
import { Route, Routes } from 'react-router-dom'
//import Table from '../pages/Table'
import Details from '../pages/Details'
const Table=lazy(()=>import('../pages/Table'))
const MainRoutes = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
            <Route path='/' element={<Table/>}/>
            <Route path='/:id' element={<Details/>}/>
        </Routes>
        </Suspense>
    </div>
  )
}

export default MainRoutes