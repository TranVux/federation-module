import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import './index.css'
const LocalPage2 = React.lazy(() => import('@/pages/local-page2'))

const router = createBrowserRouter([
  {
    path: 'local2/teset2',
    element: (
      <React.Suspense fallback={<>Loading.....</>}>
        <LocalPage2 />
      </React.Suspense>
    ),
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
