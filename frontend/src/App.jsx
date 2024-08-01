import React, { Fragment, memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout'
import Home from './page/home'
import CreateUser from './page/create'
import CreateProduct from './page/create/CreateProducts'

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='/create' element={<CreateUser />} />
          <Route path='/create-product' element={<CreateProduct />} />
        </Route>
      </Routes>
    </Fragment>
  )
}

export default memo(App)