
sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function (BaseController) {
        "use strict";

        return BaseController.extend("com.app.centrallibrary.controller.BookData", {
            onInit: function () {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.attachRoutePatternMatched(this.onBookDetailsLoad, this);
            },
            //Loading the book details
            onBookDetailsLoad: function (oEvent) {

                const { BookId } = oEvent.getParameter("arguments");
                this.ID = BookId;
                const sRouterName = oEvent.getParameter("name");
                const oForm = this.getView().byId("idBookDetailsObjectPage");

                oForm.bindElement(`/Book(${BookId})`, {
                    //expand: 'address,personalInfo'
                });
            },
            onbackpage: function () {
                window.history.back();
            }
        });
    }
);
