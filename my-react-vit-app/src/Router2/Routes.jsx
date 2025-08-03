import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { router } from './AppRoutes'

const Routes = () => {
  return (
    <div>
      <RouterProvider router = {router}></RouterProvider>
    </div>
  )
}

export default Routes
