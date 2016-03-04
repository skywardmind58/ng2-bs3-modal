"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var modal_1 = require('./modal');
var ModalFooterComponent = (function () {
    function ModalFooterComponent(modal) {
        this.modal = modal;
        this.showDefaultButtons = false;
    }
    __decorate([
        core_1.Input('show-default-buttons'), 
        __metadata('design:type', Boolean)
    ], ModalFooterComponent.prototype, "showDefaultButtons", void 0);
    ModalFooterComponent = __decorate([
        core_1.Component({
            selector: 'modal-footer',
            styles: ["\n        .btn[hidden] { display: none; }\n    "],
            template: "\n        <div class=\"modal-footer\">\n            <ng-content></ng-content>\n            <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" (click)=\"modal.dismiss()\" [hidden]=\"!showDefaultButtons\">Close</button>\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"modal.close()\" [hidden]=\"!showDefaultButtons\">Save</button>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [modal_1.ModalComponent])
    ], ModalFooterComponent);
    return ModalFooterComponent;
}());
exports.ModalFooterComponent = ModalFooterComponent;
//# sourceMappingURL=modal-footer.js.map