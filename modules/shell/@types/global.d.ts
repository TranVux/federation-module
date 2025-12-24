///<reference types="react" />

declare module 'local-module1/pages/*' {
  const Component: React.ComponentType<any>
  export default Component
}

declare module 'local-module2/pages/*' {
  const Component: React.ComponentType<any>
  export default Component
}

declare module 'remote-module1/pages/*' {
  const Component: React.ComponentType<any>
  export default Component
}
