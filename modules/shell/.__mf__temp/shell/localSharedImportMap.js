
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    import {loadShare} from "@module-federation/runtime";
    const importMap = {
      
        "@radix-ui/react-avatar": async () => {
          let pkg = await import("__mf__virtual/shell__prebuild___mf_0_radix_mf_2_ui_mf_1_react_mf_2_avatar__prebuild__.js");
            return pkg;
        }
      ,
        "@radix-ui/react-collapsible": async () => {
          let pkg = await import("__mf__virtual/shell__prebuild___mf_0_radix_mf_2_ui_mf_1_react_mf_2_collapsible__prebuild__.js");
            return pkg;
        }
      ,
        "@radix-ui/react-dialog": async () => {
          let pkg = await import("__mf__virtual/shell__prebuild___mf_0_radix_mf_2_ui_mf_1_react_mf_2_dialog__prebuild__.js");
            return pkg;
        }
      ,
        "@radix-ui/react-dropdown-menu": async () => {
          let pkg = await import("__mf__virtual/shell__prebuild___mf_0_radix_mf_2_ui_mf_1_react_mf_2_dropdown_mf_2_menu__prebuild__.js");
            return pkg;
        }
      ,
        "@radix-ui/react-separator": async () => {
          let pkg = await import("__mf__virtual/shell__prebuild___mf_0_radix_mf_2_ui_mf_1_react_mf_2_separator__prebuild__.js");
            return pkg;
        }
      ,
        "@radix-ui/react-slot": async () => {
          let pkg = await import("__mf__virtual/shell__prebuild___mf_0_radix_mf_2_ui_mf_1_react_mf_2_slot__prebuild__.js");
            return pkg;
        }
      ,
        "@radix-ui/react-tooltip": async () => {
          let pkg = await import("__mf__virtual/shell__prebuild___mf_0_radix_mf_2_ui_mf_1_react_mf_2_tooltip__prebuild__.js");
            return pkg;
        }
      ,
        "class-variance-authority": async () => {
          let pkg = await import("__mf__virtual/shell__prebuild__class_mf_2_variance_mf_2_authority__prebuild__.js");
            return pkg;
        }
      ,
        "clsx": async () => {
          let pkg = await import("__mf__virtual/shell__prebuild__clsx__prebuild__.js");
            return pkg;
        }
      ,
        "react": async () => {
          let pkg = await import("__mf__virtual/shell__prebuild__react__prebuild__.js");
            return pkg;
        }
      ,
        "react-dom": async () => {
          let pkg = await import("__mf__virtual/shell__prebuild__react_mf_2_dom__prebuild__.js");
            return pkg;
        }
      ,
        "react-router": async () => {
          let pkg = await import("__mf__virtual/shell__prebuild__react_mf_2_router__prebuild__.js");
            return pkg;
        }
      ,
        "tailwind-merge": async () => {
          let pkg = await import("__mf__virtual/shell__prebuild__tailwind_mf_2_merge__prebuild__.js");
            return pkg;
        }
      
    }
      const usedShared = {
      
          "@radix-ui/react-avatar": {
            name: "@radix-ui/react-avatar",
            version: "1.1.11",
            scope: ["default"],
            loaded: false,
            from: "shell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"@radix-ui/react-avatar"}' must be provided by host`);
              }
              usedShared["@radix-ui/react-avatar"].loaded = true
              const {"@radix-ui/react-avatar": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^1.1.11",
              
            }
          }
        ,
          "@radix-ui/react-collapsible": {
            name: "@radix-ui/react-collapsible",
            version: "1.1.12",
            scope: ["default"],
            loaded: false,
            from: "shell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"@radix-ui/react-collapsible"}' must be provided by host`);
              }
              usedShared["@radix-ui/react-collapsible"].loaded = true
              const {"@radix-ui/react-collapsible": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^1.1.12",
              
            }
          }
        ,
          "@radix-ui/react-dialog": {
            name: "@radix-ui/react-dialog",
            version: "1.1.15",
            scope: ["default"],
            loaded: false,
            from: "shell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"@radix-ui/react-dialog"}' must be provided by host`);
              }
              usedShared["@radix-ui/react-dialog"].loaded = true
              const {"@radix-ui/react-dialog": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^1.1.15",
              
            }
          }
        ,
          "@radix-ui/react-dropdown-menu": {
            name: "@radix-ui/react-dropdown-menu",
            version: "2.1.16",
            scope: ["default"],
            loaded: false,
            from: "shell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"@radix-ui/react-dropdown-menu"}' must be provided by host`);
              }
              usedShared["@radix-ui/react-dropdown-menu"].loaded = true
              const {"@radix-ui/react-dropdown-menu": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^2.1.16",
              
            }
          }
        ,
          "@radix-ui/react-separator": {
            name: "@radix-ui/react-separator",
            version: "1.1.8",
            scope: ["default"],
            loaded: false,
            from: "shell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"@radix-ui/react-separator"}' must be provided by host`);
              }
              usedShared["@radix-ui/react-separator"].loaded = true
              const {"@radix-ui/react-separator": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^1.1.8",
              
            }
          }
        ,
          "@radix-ui/react-slot": {
            name: "@radix-ui/react-slot",
            version: "1.2.4",
            scope: ["default"],
            loaded: false,
            from: "shell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"@radix-ui/react-slot"}' must be provided by host`);
              }
              usedShared["@radix-ui/react-slot"].loaded = true
              const {"@radix-ui/react-slot": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^1.2.4",
              
            }
          }
        ,
          "@radix-ui/react-tooltip": {
            name: "@radix-ui/react-tooltip",
            version: "1.2.8",
            scope: ["default"],
            loaded: false,
            from: "shell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"@radix-ui/react-tooltip"}' must be provided by host`);
              }
              usedShared["@radix-ui/react-tooltip"].loaded = true
              const {"@radix-ui/react-tooltip": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^1.2.8",
              
            }
          }
        ,
          "class-variance-authority": {
            name: "class-variance-authority",
            version: "0.7.1",
            scope: ["default"],
            loaded: false,
            from: "shell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"class-variance-authority"}' must be provided by host`);
              }
              usedShared["class-variance-authority"].loaded = true
              const {"class-variance-authority": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^0.7.1",
              
            }
          }
        ,
          "clsx": {
            name: "clsx",
            version: "2.1.1",
            scope: ["default"],
            loaded: false,
            from: "shell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"clsx"}' must be provided by host`);
              }
              usedShared["clsx"].loaded = true
              const {"clsx": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^2.1.1",
              
            }
          }
        ,
          "react": {
            name: "react",
            version: "19.2.0",
            scope: ["default"],
            loaded: false,
            from: "shell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"react"}' must be provided by host`);
              }
              usedShared["react"].loaded = true
              const {"react": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^19.2.0",
              
            }
          }
        ,
          "react-dom": {
            name: "react-dom",
            version: "19.2.0",
            scope: ["default"],
            loaded: false,
            from: "shell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"react-dom"}' must be provided by host`);
              }
              usedShared["react-dom"].loaded = true
              const {"react-dom": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^19.2.0",
              
            }
          }
        ,
          "react-router": {
            name: "react-router",
            version: "7.9.6",
            scope: ["default"],
            loaded: false,
            from: "shell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"react-router"}' must be provided by host`);
              }
              usedShared["react-router"].loaded = true
              const {"react-router": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^7.9.6",
              
            }
          }
        ,
          "tailwind-merge": {
            name: "tailwind-merge",
            version: "3.4.0",
            scope: ["default"],
            loaded: false,
            from: "shell",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"tailwind-merge"}' must be provided by host`);
              }
              usedShared["tailwind-merge"].loaded = true
              const {"tailwind-merge": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^3.4.0",
              
            }
          }
        
    }
      const usedRemotes = [
                {
                  entryGlobalName: "remote-module1",
                  name: "remote-module1",
                  type: "module",
                  entry: "http://localhost:3003/remote_bundle.js",
                  shareScope: "default",
                }
          ,
                {
                  entryGlobalName: "local-module1",
                  name: "local-module1",
                  type: "module",
                  entry: "http://localhost:3001/remote_bundle.js",
                  shareScope: "default",
                }
          ,
                {
                  entryGlobalName: "local-module2",
                  name: "local-module2",
                  type: "module",
                  entry: "http://localhost:3002/remote_bundle.js",
                  shareScope: "default",
                }
          
      ]
      export {
        usedShared,
        usedRemotes
      }
      