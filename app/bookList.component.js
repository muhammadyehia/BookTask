(function () {
    "use strict";
    var app = angular.module("bookApp");
    var bookListController = function () {
        var model = this;
        model.$onInit = function () {
            model.currentBookIndex = 0;
            model.showAddModel = false;
            model.books = [];
        }
        model.deleteBook = function (id) {
            var deleteByID = function (value) {
                return value.ID != id;
            }
            model.books = model.books.filter(deleteByID);
        };
        model.addBook = function (title, author) {
            model.books.push({
                ID: model.currentBookIndex,
                Title: title,
                Author: author
            });
            model.currentBookIndex++;
        }
        model.showAddPopUp = function () {
            model.showAddModel = true;
        };
        model.hideAddPopUp = function () {
            model.showAddModel = false;
        };
    };
    app.component("bookList", {
        templateUrl: "app/bookList.component.html",
        controllerAs: "model",
        controller: [bookListController]
    });
} ());
