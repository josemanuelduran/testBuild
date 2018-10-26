webpackJsonp([8],{

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentsPageModule", function() { return PaymentsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payments_component__ = __webpack_require__(611);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PaymentsPageModule = /** @class */ (function () {
    function PaymentsPageModule() {
    }
    PaymentsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__payments_component__["a" /* PaymentsPageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__payments_component__["a" /* PaymentsPageComponent */]),
                __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["b" /* TranslateModule */]
            ],
        })
    ], PaymentsPageModule);
    return PaymentsPageModule;
}());

//# sourceMappingURL=payments.component.module.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentsPageComponent = /** @class */ (function () {
    function PaymentsPageComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaymentsPageComponent.prototype.ngOnInit = function () {
    };
    PaymentsPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'fwf-page-payments',template:/*ion-inline-start:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\payments\payments.component.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <!--Android pushes buttons to the left even if start attribute is present.\n            Check demo: http://ionicframework.com/docs/v2/components/#buttons-in-components-->\n        <!--If placing the menuToggle in a navbar or toolbar, it should be placed as a child of the <ion-navbar> or <ion-toolbar>, and not in the <ion-buttons> element\n        http://ionicframework.com/docs/v2/api/components/menu/MenuToggle/-->\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title>\n            {{ "PAYMENTS_PAGE.TITLE" | translate}}\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button\n                    icon-only\n                    clear\n                    (click)="openSearchBox()">\n                <ion-icon name="search"></ion-icon>\n            </button>        \n            <button ion-button\n                    icon-only\n                    clear\n                    *ngIf="hasAddPermission"\n                    (click)="addPayment()">\n                <ion-icon name="add"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n    <img src="assets/img/png/under-construction.png"/>\n\n</ion-content>\n'/*ion-inline-end:"C:\DEVELOPMENT\FootballWithFriends\FWF-client\footballwithfriends\src\app\pages\payments\payments.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], PaymentsPageComponent);
    return PaymentsPageComponent;
}());

//# sourceMappingURL=payments.component.js.map

/***/ })

});
//# sourceMappingURL=8.js.map