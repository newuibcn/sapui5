var Bootstrapper = (function () {
    function Bootstrapper() {
    }
    Bootstrapper.init = function () {
        sap.ui.getCore().attachInitEvent(function () {
            alert("carregat");
            var view = sap.ui.view('helloWorldView', { type: sap.ui.core.mvc.ViewType.JS, viewName: "newuibcn.views.main" });
            alert("creada vista");
            view.placeAt("content");
            alert("despres placeAt");
        });
    };
    return Bootstrapper;
})();

Bootstrapper.init();
//# sourceMappingURL=bootstrapper.js.map
