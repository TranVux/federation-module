///<reference types="react" />

declare module "remote-module1/pages/*" {
  const Component: React.ComponentType<any>;
  export default Component;
}

declare module "remote-module2/pages/*" {
  const Component: React.ComponentType<any>;
  export default Component;
}
