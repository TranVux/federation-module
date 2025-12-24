import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import './index.css'
const RemotePage2 = React.lazy(() => import('@/pages/remote-page2'))

const router = createBrowserRouter([
  {
    path: 'remote2/teset2',
    element: (
      <React.Suspense fallback={<>Loading.....</>}>
        <RemotePage2 />
      </React.Suspense>
    ),
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
