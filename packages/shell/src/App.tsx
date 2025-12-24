import React, { StrictMode } from 'react'
import { createBrowserRouter, Outlet } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import { AppSidebar } from './components/app-sidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './components/ui/breadcrumb'
import { Separator } from './components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from './components/ui/sidebar'

function Layout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

const RemotePage1 = React.lazy(
  () => import('remote-module1/pages/remote-page1')
)

const RemotePage2 = React.lazy(
  () => import('remote-module2/pages/remote-page2')
)

const RemotePage3 = React.lazy(
  () => import('remote-module3/pages/remote-page3')
)

const Component1 = () => {
  return (
    <React.Suspense fallback={<>Loading Page 1.....</>}>
      <RemotePage1 />
    </React.Suspense>
  )
}

const Component2 = () => {
  return (
    <React.Suspense fallback={<>Loading Page 2.....</>}>
      <RemotePage2 />
    </React.Suspense>
  )
}

const Component3 = () => {
  return (
    <React.Suspense fallback={<>Loading Page 3.....</>}>
      <RemotePage3 />
    </React.Suspense>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { path: 'remote1/test1', Component: Component1 },
      {
        path: 'remote2/test2',
        Component: Component2,
      },
      {
        path: 'remote3/test3',
        Component: Component3,
      },
    ],
  },
])

const App = () => {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}

export default App
