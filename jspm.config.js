SystemJS.config({
  nodeConfig: {
    "paths": {
      "ngc2-exercise-example/": "src/"
    }
  },
  devConfig: {
    "map": {
      "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
      "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
      "readline": "github:jspm/nodelibs-readline@0.2.0-alpha",
      "typescript": "npm:typescript@1.8.10",
      "path": "github:jspm/nodelibs-path@0.2.0-alpha"
    },
    "packages": {
      "github:jspm/nodelibs-buffer@0.2.0-alpha": {
        "map": {
          "buffer-browserify": "npm:buffer@4.7.0"
        }
      },
      "npm:buffer@4.7.0": {
        "map": {
          "ieee754": "npm:ieee754@1.1.6",
          "base64-js": "npm:base64-js@1.1.2",
          "isarray": "npm:isarray@1.0.0"
        }
      }
    }
  },
  transpiler: false,
  packages: {
    "app": {
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        }
      }
    }
  },
  typescriptOptions: {
    "target": "es5",
    "module": "commonjs",
    "noImplicitAny": false,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true
  },
  map: {
    "@angular/http": "npm:@angular/http@2.0.0-rc.3"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.0.0-rc.3",
    "@angular/common": "npm:@angular/common@2.0.0-rc.3",
    "@angular/compiler": "npm:@angular/compiler@2.0.0-rc.3",
    "@angular/core": "npm:@angular/core@2.0.0-rc.3",
    "@angular/platform-browser": "npm:@angular/platform-browser@2.0.0-rc.3",
    "@angular/router@3.0.0-alpha.8": "npm:@angular/router@3.0.0-alpha.8",
    "angular-common": "npm:@angular/common@2.0.0-rc.3",
    "angular-compiler": "npm:@angular/compiler@2.0.0-rc.3",
    "angular-core": "npm:@angular/core@2.0.0-rc.3",
    "angular-platform-browser": "npm:@angular/platform-browser@2.0.0-rc.3",
    "angular-platform-browser-dynamic": "npm:@angular/platform-browser-dynamic@2.0.0-rc.3",
    "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
    "http": "npm:@angular/http@2.0.0-rc.3",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "process": "github:jspm/nodelibs-process@0.2.0-alpha",
    "router": "npm:@angular/router@2.0.0-rc.2",
    "ts": "github:frankwallis/plugin-typescript@4.0.16",
    "es6-promise": "npm:es6-promise@3.2.1",
    "es6-shim": "npm:es6-shim@0.33.13",
    "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.16",
    "reflect-metadata": "npm:reflect-metadata@0.1.2",
    "rxjs": "npm:rxjs@5.0.0-beta.6",
    "zone.js": "npm:zone.js@0.6.12"
  },
  packages: {
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:es6-shim@0.33.13": {
      "map": {}
    },
    "npm:reflect-metadata@0.1.2": {
      "map": {}
    },
    "github:frankwallis/plugin-typescript@4.0.16": {
      "map": {
        "typescript": "npm:typescript@1.8.10"
      }
    }
  }
});
