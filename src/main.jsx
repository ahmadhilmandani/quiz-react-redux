// import React from 'react'
import ReactDOM from 'react-dom/client'

import { store } from './store/store.js'

import './styles/index.css'

import router from './router/router.jsx'
import { Provider } from 'react-redux'
import { RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      {/* <React.StrictMode> */}
        <RouterProvider router={router} />
      {/* </React.StrictMode> */}
    </Provider>
    <ReactQueryDevtools />
  </QueryClientProvider>
)
