import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/pages/Home/HomePage'
import FoodPage from './components/pages/Food/FoodPage'
import CartPage from './components/pages/Cart/CartPage'
import LoginPage from './components/pages/Login/LoginPage'
import RegisterPage from './components/Register/RegisterPage'
import AuthRoute from './components/AuthRoute/AuthRoute'
import CheckoutPage from './components/pages/Checkout/CheckoutPage'
import PaymentPage from './components/Payment/PaymentPage'
import OrderTrackPage from './components/pages/OrderTrack/OrderTrackPage'
import ProfilePage from './components/pages/Profile/ProfilePage'
import OrdersPage from './components/Orders/OrdersPage'

export default function AppRoutes() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/search/:searchTerm' element={<HomePage/>}/>
        <Route path='/tag/:tag' element={<HomePage/>}/>
        <Route path='/food/:id' element={<FoodPage/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/checkout' element={<AuthRoute>
          <CheckoutPage/>
        </AuthRoute>}/>
        <Route path='/payment' element={<AuthRoute>
          <PaymentPage/>
        </AuthRoute>}/>
        <Route path='/track/:orderId' element={<AuthRoute>
          <OrderTrackPage/>
        </AuthRoute>}/>
        <Route path='/profile' element={<AuthRoute>
          <ProfilePage/>
        </AuthRoute>}/>
        <Route path='/orders/:filter?' element={<AuthRoute>
          <OrdersPage/>
        </AuthRoute>}/>
    </Routes>
        
  )
}
