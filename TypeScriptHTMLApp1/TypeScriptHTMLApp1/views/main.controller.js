var HelloWorldSapUi5;
(function (HelloWorldSapUi5) {
    var MainController = (function () {
        function MainController() {
        }
        MainController.prototype.onInit = function () {
        };

        MainController.prototype.onBeforeRendering = function () {
        };

        MainController.prototype.onAfterRendering = function () {
        };

        MainController.prototype.onExit = function () {
        };

        Object.defineProperty(MainController.prototype, "getText", {
            get: function () {
                return "Hello world SAPUI5!!!!!";
            },
            enumerable: true,
            configurable: true
        });
        return MainController;
    })();
    HelloWorldSapUi5.MainController = MainController;
})(HelloWorldSapUi5 || (HelloWorldSapUi5 = {}));
sap.ui.controller("newuibcn.views.main", new HelloWorldSapUi5.MainController());
//# sourceMappingURL=main.controller.js.map
