declare var sap;
class Bootstrapper {

    public static init() {

        sap.ui.getCore().attachInitEvent(() => {

            var view = sap.ui.view('helloWorldView', { type: sap.ui.core.mvc.ViewType.JS, viewName: "newuibcn.views.main" });

            view.placeAt("content");

        });

    }

}

Bootstrapper.init();

