class MyExampleWebpackPlugin {
  apply(compiler) {
    // console.log(compiler);
    compiler.hooks.environment.tap("MyPlugin", () => {
      console.log("environment");
    });
    compiler.hooks.afterEnvironment.tap("MyPlugin", () => {
      console.log("afterEnvironment");
    });
    compiler.hooks.entryOption.tap("MyPlugin", (context, entry) => {
      console.log("entryOption", context, entry);
    });
    compiler.hooks.afterPlugins.tap("MyPlugin", (stats) => {
      console.log("afterPlugins");
    });
    compiler.hooks.afterResolvers.tap("MyPlugin", (stats) => {
      console.log("afterResolvers");
    });
    compiler.hooks.beforeRun.tapAsync("MyPlugin", (stats, callback) => {
      console.log("beforeRun");
      callback();
    });
    compiler.hooks.run.tapAsync("MyPlugin", (stats, callback) => {
      console.log("run");
      callback();
    });
    compiler.hooks.normalModuleFactory.tap(
      "MyPlugin",
      (normalModuleFactory) => {
        console.log("normalModuleFactory");
      }
    );
    compiler.hooks.contextModuleFactory.tap(
      "MyPlugin",
      (contextModuleFactory) => {
        console.log("contextModuleFactory");
      }
    );
    compiler.hooks.beforeCompile.tapAsync("MyPlugin", (params, callback) => {
      console.log("beforeCompile");
      params["MyPlugin - data"] = "important stuff my plugin will use later";
      callback();
    });
    compiler.hooks.compile.tap("MyPlugin", (params) => {
      console.log("compile");
    });
    compiler.hooks.thisCompilation.tap(
      "MyPlugin",
      (compilation, compilationParams) => {
        console.log("thisCompilation");
      }
    );
    // @ts-ignore
    compiler.hooks.compilation.tap(
      "MyPlugin",
      (compilation, compilationParams) => {
        // console.log("thisCompilation", compilation);
        compilation.hooks.optimizeChunkAssets.tap("MyPlugin", (chunks) => {
          console.log(chunks);
        });
      }
    );
    compiler.hooks.done.tap(
      "MyPlugin",
      (
        stats /* stats is passed as an argument when done hook is tapped.  */
      ) => {
        console.log("done");
      }
    );
  }
}

module.exports = MyExampleWebpackPlugin;
