var HelloWorldSapUi5;
(function (HelloWorldSapUi5) {
    var MainView = (function () {
        function MainView() {
        }
        MainView.prototype.getControllerName = function () {
            return "newuibcn.views.main";
        };
        MainView.prototype.createContent = function (mainController) {
            var button = new sap.ui.commons.Button({
                text: "click!",
                press: function () {
                    alert(mainController.getText);
                }
            });

            return button;
        };
        return MainView;
    })();
    HelloWorldSapUi5.MainView = MainView;
})(HelloWorldSapUi5 || (HelloWorldSapUi5 = {}));

alert("Entro a la creacio de la vista");
sap.ui.jsview("newuibcn.views.main", new HelloWorldSapUi5.MainView());
//# sourceMappingURL=main.view.js.map
