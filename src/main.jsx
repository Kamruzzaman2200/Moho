import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes.jsx'
import { AuthProvider } from './AuthProvider/AuthProvider.jsx'
import { CartProvider } from './contexts/CartContext.jsx'
import { OrderProvider } from './contexts/OrderContext.jsx'
import { MenuProvider } from './contexts/MenuContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <MenuProvider>
        <CartProvider>
          <OrderProvider>
            <RouterProvider router={router} />
          </OrderProvider>
        </CartProvider>
      </MenuProvider>
    </AuthProvider>
  </StrictMode>,
)
