import React from 'react'
import ReactDOM from 'react-dom/client'

import { store } from './store/store.js'

import './styles/index.css'

import router from './router/router.jsx'
import { Provider } from 'react-redux'
import { RouterProvider } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
