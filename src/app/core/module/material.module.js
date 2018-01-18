"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var flex_layout_1 = require("@angular/flex-layout");
var animations_1 = require("@angular/platform-browser/animations");
var material_1 = require("@angular/material");
var router_1 = require("@angular/router");
var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                flex_layout_1.FlexLayoutModule,
                animations_1.BrowserAnimationsModule,
                router_1.RouterModule,
                material_1.MatButtonModule,
                material_1.MatMenuModule,
                material_1.MatToolbarModule,
                material_1.MatIconModule,
                material_1.MatCardModule,
                material_1.MatProgressBarModule,
                material_1.MatRadioModule,
                material_1.MatExpansionModule,
                material_1.MatSidenavModule,
                material_1.MatTabsModule,
                material_1.MatListModule,
                material_1.MatGridListModule,
                material_1.MatDialogModule,
            ],
            exports: [
                flex_layout_1.FlexLayoutModule,
                common_1.CommonModule,
                forms_1.FormsModule,
                animations_1.BrowserAnimationsModule,
                router_1.RouterModule,
                material_1.MatButtonModule,
                material_1.MatMenuModule,
                material_1.MatToolbarModule,
                material_1.MatIconModule,
                material_1.MatCardModule,
                material_1.MatProgressBarModule,
                material_1.MatRadioModule,
                material_1.MatExpansionModule,
                material_1.MatSidenavModule,
                material_1.MatTabsModule,
                material_1.MatListModule,
                material_1.MatGridListModule,
                material_1.MatDialogModule,
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
