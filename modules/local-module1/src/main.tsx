import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import './index.css'
const LocalPage1 = React.lazy(() => import('@/pages/local-page1'))

const router = createBrowserRouter([
  {
    path: 'local1/teset1',
    element: (
      <React.Suspense fallback={<>Loading.....</>}>
        <LocalPage1 />
      </React.Suspense>
    ),
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
