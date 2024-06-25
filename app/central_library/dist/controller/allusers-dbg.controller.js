sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function (Controller) {
        "use strict";

        return Controller.extend("com.app.centrallibrary.controller.allusers", {
            onInit: function () {

            },

            onpressBackuser: function () {
                window.history.back();
              }
        });
    }
);