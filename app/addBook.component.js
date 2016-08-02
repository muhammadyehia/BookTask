(function () {
    "use strict";
    var app = angular.module("bookApp");
    var addBookController = function () {
        var model = this;
         model.$onInit = function () {
             document.getElementById("bookTitle").focus();
         };
        model.cancel=function () {
               model.parent.hideAddPopUp();
        };
        model.save = function () {
            var isValid = true;
            if (!model.Title || !model.Author ) {
                isValid = false;
            }
            if (isValid) {
               model.parent.addBook(model.Title,model.Author)
               model.parent.hideAddPopUp();
            }
            // We should return false to stop form submit event propagation.
            return false;
        }
    };
    app.component("addBook", {
        templateUrl: "app/addBook.component.html",
        controllerAs: "model",
        controller: [addBookController],
      require:{
          "parent":"^bookList"
      }
    });
} ());
