module HelloWorldSapUi5 {
    export class MainView  {

        public getControllerName(): string {
            return "newuibcn.views.main";
        }
        public createContent(mainController: MainController) {


            var button = new sap.ui.commons.Button(
                {
                    text: "click!",
                    press: ()=> {
                        alert(mainController.getText);
                    }
                }
                );

            return button;

        }

    }
}

sap.ui.jsview("newuibcn.views.main", new HelloWorldSapUi5.MainView());