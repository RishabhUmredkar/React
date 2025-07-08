import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from '../Layout/AppRoutes'

const RoutesIntro = () => {
  return (
    <div>
      <RouterProvider router = {routes}></RouterProvider>
    </div>
  )
}

export default RoutesIntro
