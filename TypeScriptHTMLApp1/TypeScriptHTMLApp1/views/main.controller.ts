module HelloWorldSapUi5 {
    export class MainController {
        
        public onInit(): void {
        }

        public onBeforeRendering(): void {
        }

        public onAfterRendering(): void {
        }

        public onExit(): void {
        }

        public get getText(): string {
            return "Hello world SAPUI5!!!!!";
        }


    }
}
sap.ui.controller("newuibcn.views.main", new HelloWorldSapUi5.MainController()); 