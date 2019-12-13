(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/article/articleform/articleform.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/article/articleform/articleform.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <span> <img src='../assets/Photos/tealogo.jpg' width=20% height=20% /></span>\r\n    <p></p>\r\n</div>\r\n<div class=\"row\">\r\n        <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"SaveEntity()\">儲存</button> \r\n        </div>\r\n        <div class=\"col\">\r\n                <button type=\"button\" class=\"btn btn-default\" onclick=\"location.href='#/articlelist';\">返回</button>   \r\n        </div>  \r\n</div>\r\n<p></p>    \r\n\r\n<div class=\"body-content\">\r\n\r\n        <table class=\"table table-bordered table-striped\">\r\n                <tbody>\r\n            \r\n                    <tr>\r\n                        <td>\r\n                            ID:\r\n                        </td>\r\n                        <TD>\r\n                                {{Entity.Id}}\r\n                        </TD>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                               標題:\r\n                        </td>\r\n                        <td>\r\n                                <input [(ngModel)]=\"Entity.Title\" #ctrl=\"ngModel\" required name=\"title\"  #fullName=\"ngModel\"  class=\"form-control\"  required> \r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            備註:\r\n                        </td>\r\n                        <td>\r\n                               \r\n                                <textarea class=\"form-control\" \r\n                                name=\"comment\"\r\n                                rows=\"2\"\r\n                                [(ngModel)]=\"Entity.Comment\"\r\n                                #message='ngModel'\r\n                                ></textarea>\r\n                        </td>\r\n                    </tr>\r\n                                     \r\n               \r\n                    <tr>\r\n                        <td colspan=\"2\">\r\n                            文章圖片上傳:\r\n                        \r\n                                <div class=\"center\">\r\n                                        <ngx-file-drop dropZoneLabel=\"Drop files here\" (onFileDrop)=\"dropped($event)\" \r\n                                        (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\r\n                                            <ng-template ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\">\r\n                                              拖曳或是選擇要上傳的圖片(必須小於4mb)\r\n                                              <button type=\"button\" (click)=\"openFileSelector()\">Browse Files</button>\r\n                                            </ng-template>\r\n                                        </ngx-file-drop>\r\n                                       \r\n                                </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr *ngIf=\"Entity.Pages !== null && Entity.Pages !== undefined\">\r\n                        <td colspan=\"2\">\r\n                            <div>\r\n                                    <button type=\"button\" class=\"btn btn-xs btn-primary\" (click)=\"autopage()\">自動命名文章</button>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"2\">\r\n                                <ul *ngFor=\"let i of Entity.Pages; let x = index\" class=\"list-group\">\r\n                                    <li class=\"list-group-item\">\r\n                                        <img [src]=\"i.Image_Url\"   class=\"img-thumbnail\" > <p></p>\r\n                                        名稱:<input [(ngModel)]=\"i.Name\" #ctrl=\"ngModel\"  name=\"imagename\" class=\"form-control\"/> <p></p>\r\n                                        備註: <input [(ngModel)]=\"i.Comment\" #ctrl=\"ngModel\"  name=\"imageComment\" type=\"text\"  class=\"form-control\"/><p></p>\r\n                                        <button type=\"button\" class=\"btn btn-danger btn-xs\" (click) =\"RemoveImage(x)\">刪除圖片</button>\r\n                                    </li>\r\n                                </ul>\r\n                        </td>\r\n                    </tr>    \r\n                </tbody>   \r\n        </table>\r\n            \r\n\r\n\r\n\r\n</div>\r\n\r\n    \r\n    \r\n  \r\n     <hr>\r\n     <div class=\"row\">\r\n            <div class=\"col\">\r\n                    <button type=\"button\" class=\"btn btn-primary\" (click)=\"SaveEntity()\">儲存</button> \r\n            </div>\r\n            <div class=\"col\">\r\n                    <button type=\"button\" class=\"btn btn-default\" onclick=\"location.href='#/articlelist';\">返回</button>   \r\n            </div>  \r\n    </div>\r\n\r\n   \r\n\r\n\r\n<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-scale-multiple\"\r\n>\r\n  <p style=\"font-size: 20px; color: white\">處理中...</p>\r\n</ngx-spinner>\r\n\r\n \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/article/articlelist/articlelist.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/article/articlelist/articlelist.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <span> <img src='../assets/Photos/tealogo.jpg' width=20% height=20% /></span>\r\n    <p></p>\r\n</div>\r\n \r\n<div class=\"d-flex\">\r\n        <div>\r\n                <button type=\"button\" class=\"btn btn-success\" onclick=\"location.href='#/teaportal';\">返回管理頁面</button>  \r\n        </div>\r\n        <div class=\"ml-auto\">\r\n                <button type=\"button\" class=\"btn btn-primary\" onclick=\"location.href='#/articleform';\">新增文章</button>\r\n        </div>\r\n</div>\r\n<p></p>\r\n\r\n<table class=\"table table-bordered table-striped table-hover\">\r\n    <tr>\r\n        <th>\r\n            ID\r\n        </th>\r\n        <th>\r\n            文章標題\r\n        </th>\r\n        <th>\r\n            備註\r\n        </th>    \r\n        <th>\r\n            \r\n        </th>\r\n       \r\n    </tr>\r\n    \r\n       \r\n        <tbody> \r\n            <tr *ngFor = 'let item of List ' >\r\n                <td>\r\n                    {{item.Id}}\r\n                </td>\r\n                <td>{{ item.Title}}\r\n                      \r\n                </td>\r\n                <td>{{ item.Comment }}</td>\r\n              \r\n                <td>\r\n                       <div class=\"btn-group\">\r\n                            <button type=\"button\" class=\"btn btn-sm btn-success\" (click) = openform(item.Id)>編輯文章</button>    |\r\n                            <button type=\"button\" class=\"btn btn-sm btn-danger\" (click) = delete(item.Id)>刪除文章</button>    |\r\n                            <button type=\"button\" class=\"btn btn-sm btn-info\" (click) = showarticle(item.Id)>展示文章</button>\r\n                       </div>                    \r\n                </td>\r\n              \r\n                \r\n            </tr>\r\n        </tbody>\r\n       \r\n</table>\r\n\r\n  <div>\r\n        <button type=\"button\" class=\"btn btn-success\" onclick=\"location.href='#/teaportal';\">返回管理頁面</button>   \r\n        <p></p>\r\n  </div>\r\n\r\n<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-scale-multiple\"\r\n>\r\n  <p style=\"font-size: 20px; color: white\">處理中...</p>\r\n</ngx-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/article/articleshow/articleshow.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/article/articleshow/articleshow.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span> <img src='../assets/Photos/tealogo.jpg' width=20% height=20% /></span>\r\n<form>\r\n  <div class=\"form-group\">\r\n      <div> \r\n          <label>選擇文章: </label>\r\n          <select (change)=\"filterForArticles($event.target.value)\" class=\"form-control\">\r\n            <option value=\"-1\">--選擇--</option>\r\n            <option *ngFor=\"let item of List; let i = index\" value={{i}}>\r\n              {{item.Title}} | {{item.Comment}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n        <br>\r\n        \r\n        <carousel  interval=\"0\">\r\n                <slide *ngFor=\"let item of Entity.Pages\">\r\n                  <img [src]=\"item.Image_Url\" alt=\"Pages\" style=\"display: block; width: 100%;\">\r\n                  <div class=\"carousel-caption d-none d-md-block\">\r\n                    <h3>{{item.Name}}</h3>\r\n                    <p>{{item.Comment}}</p>\r\n                  </div>\r\n                </slide> \r\n        </carousel>\r\n        \r\n\r\n  </div>\r\n</form>\r\n\r\n<div>\r\n  推廣網頁QR\r\n  <a href='https://leecloud.blob.core.windows.net/image/qr.jpg' download=\"TeaQR.jpg\"><img src='https://leecloud.blob.core.windows.net/image/qr.jpg' width=20% height=20% /></a>\r\n</div>\r\n\r\n<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-scale-multiple\"\r\n>\r\n  <p style=\"font-size: 20px; color: white\">處理中...</p>\r\n</ngx-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/bcform/bcform.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/bcform/bcform.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div>\r\n    <span><img src='../assets/Photos/inhublogo.png' width=10% height=10% /></span>\r\n    <p></p>\r\n</div>\r\n\r\n<div class=\"nav navbar-nav navbar-right\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"SaveEntity()\">儲存</button> | \r\n        <button type=\"button\" class=\"btn btn-default\" onclick=\"location.href='#/bccenter';\">返回</button>   \r\n        <p></p>    \r\n</div>\r\n\r\n<div class=\"body-content\">\r\n\r\n        <table class=\"table table-bordered table-striped\">\r\n                <tbody>\r\n            \r\n                    <tr>\r\n                        <td>\r\n                            ID:\r\n                        </td>\r\n                        <TD>\r\n                                {{Entity.Id}}\r\n                        </TD>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                                商務中心名稱:\r\n                        </td>\r\n                        <td>\r\n                                <input [(ngModel)]=\"Entity.Name\" #ctrl=\"ngModel\" required name=\"entityname\"  #fullName=\"ngModel\" required> \r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            介紹:\r\n                        </td>\r\n                        <td>\r\n                                <!--<input type=\"textarea\" rows=\"4\" [(ngModel)]=\"Entity.Intro\" #ctrl=\"ngModel\" required name=\"Intro\" class=\"form-control\"> -->\r\n                                <textarea class=\"form-control\" \r\n                                name=\"intro\"\r\n                                rows=\"4\"\r\n                                [(ngModel)]=\"Entity.Intro\"\r\n                                #message='ngModel'\r\n                                ></textarea>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                               營業時間: <button type=\"button\" class=\"btn btn-info\" (click)=\"openBusinessHourModal()\">編輯</button>\r\n                        </td>\r\n                        <td>\r\n                            <div fxLayout=\"column\" fxLayoutAlign=\" none\">\r\n                                <div fxFlex=\"100\" fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" fxLayout.xs=\"column\">\r\n                                  <div *ngFor=\"let i of Entity.BusinessHours\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"33\" fxFlex.lg=\"33\" fxFlex.xl=\"33\">\r\n                                      {{i.Day}} : {{i.StartTime}} - {{i.EndTime}}\r\n                                  </div> \r\n                                </div>\r\n                              </div>\r\n            \r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            電話:\r\n                        </td>\r\n                        <td>\r\n                                <input [(ngModel)]=\"Entity.Phone\" #ctrl=\"ngModel\" name=\"phone\"> \r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            地址:\r\n                        </td>\r\n                        <td>\r\n                                <input [(ngModel)]=\"Entity.Address\" #ctrl=\"ngModel\" name=\"address\" class=\"form-control\"> \r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"2\">\r\n                                <table>\r\n                                        <tr>\r\n                                                <td>\r\n                                                        最低價格:\r\n                                                    </td>\r\n                                                    <td>\r\n                                                            <input type=\"number\" [(ngModel)]=\"Entity.MinPrice\" #ctrl=\"ngModel\" name=\"minprice\" class=\"form-control\"> \r\n                                                    </td>\r\n                                                    <td>\r\n                                                          ~\r\n                                                    </td>\r\n                                                    <td>\r\n                                                        最高價格:\r\n                                                    </td>\r\n                                                    <td>\r\n                                                            <input type=\"number\" [(ngModel)]=\"Entity.MaxPrice\" #ctrl=\"ngModel\" name=\"maxprice\" class=\"form-control\"> \r\n                                                </td>\r\n                                        </tr>\r\n                                    </table>\r\n                                 \r\n                        </td>\r\n                      \r\n                    </tr>\r\n                    <tr>\r\n                            <td>\r\n                                電子郵件:\r\n                            </td>\r\n                            <td>\r\n                                    <input [(ngModel)]=\"Entity.Email\" #ctrl=\"ngModel\" name=\"Email\"> \r\n                            </td>\r\n                    </tr>\r\n                    <tr>\r\n                            <td>\r\n                                網站:\r\n                            </td>\r\n                            <td>\r\n                                    <input [(ngModel)]=\"Entity.WebSite\" #ctrl=\"ngModel\" name=\"Website\"> \r\n                            </td>\r\n                    </tr>\r\n                    <tr>\r\n                            <td>\r\n                                設備:  <button type=\"button\" class=\"btn btn-info\" (click)=\"openModal()\">編輯</button>\r\n                            </td>\r\n                            <td>\r\n                                      \r\n                \r\n                                        <div fxLayout=\"column\" fxLayoutAlign=\" none\">\r\n                                                <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-around stretch\" fxLayout.xs=\"column\">\r\n                                                  <div *ngFor=\"let i of Entity.Features\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"33\" fxFlex.lg=\"33\" fxFlex.xl=\"33\">\r\n                                                       {{i.Name}} <img  [src]=\"i.Image_Url\" style=\"height: 50px; width: 50px;\">\r\n                                                  </div>\r\n                                                </div>\r\n                                        </div>\r\n                                            \r\n                                            \r\n                            </td>\r\n                        </tr>\r\n                    <tr>\r\n                        <td>\r\n                            座標:\r\n                        </td>\r\n                        <td>\r\n                            <input [(ngModel)]=\"Entity.Coordinates\" #ctrl=\"ngModel\" name=\"Coordinates\"> \r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"2\">\r\n                                <google-map\r\n                                height=\"500px\"\r\n                                width=\"100%\"\r\n                                [zoom]=\"zoom\"\r\n                                [center]=\"center\"\r\n                                [options]=\"options\"\r\n                                >\r\n                                <map-marker\r\n                                    *ngFor=\"let marker of markers\"\r\n                                    [position]=\"marker.position\"\r\n                                    [label]=\"marker.label\"\r\n                                    [title]=\"marker.title\"\r\n                                    [options]=\"marker.options\"\r\n                                    (mapClick)=\"opengooglemap()\"\r\n                                >\r\n                                </map-marker>\r\n                            \r\n                            \r\n                                </google-map>\r\n                        </td>\r\n                    </tr>\r\n               \r\n                    <tr>\r\n                        <td colspan=\"2\">\r\n                            圖片:\r\n                        \r\n                                <div class=\"center\">\r\n                                        <ngx-file-drop dropZoneLabel=\"Drop files here\" (onFileDrop)=\"dropped($event)\" \r\n                                        (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\r\n                                            <ng-template ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\">\r\n                                              拖曳或是選擇要上傳的圖片\r\n                                              <button type=\"button\" (click)=\"openFileSelector()\">Browse Files</button>\r\n                                            </ng-template>\r\n                                        </ngx-file-drop>\r\n                                       \r\n                                </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td colspan=\"2\">\r\n                                <ul *ngFor=\"let i of Entity.Images; let x = index\" class=\"list-group\">\r\n                                    <li class=\"list-group-item\">\r\n                                        <img [src]=\"i.Image_Url\"   class=\"img-thumbnail\" > <p></p>\r\n                                        名稱:<input [(ngModel)]=\"i.Name\" #ctrl=\"ngModel\"  name=\"imagename\" class=\"form-control\"/> <p></p>\r\n                                        備註: <input [(ngModel)]=\"i.Comment\" #ctrl=\"ngModel\"  name=\"imageComment\" type=\"text\"  class=\"form-control\"/><p></p>\r\n                                        <button type=\"button\" class=\"btn btn-danger btn-xs\" (click) =\"RemoveImage(x)\">Remove</button>\r\n                                    </li>\r\n                                </ul>\r\n                        </td>\r\n                    </tr>    \r\n                </tbody>   \r\n                </table>\r\n            \r\n\r\n\r\n\r\n</div>\r\n\r\n    \r\n    \r\n  \r\n     <hr>\r\n    <div class=\"nav navbar-nav navbar-right\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"SaveEntity()\">儲存</button> | \r\n            <button type=\"button\" class=\"btn btn-default\" onclick=\"location.href='#/bccenter';\">返回</button>       \r\n    </div>\r\n\r\n   \r\n\r\n\r\n<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-scale-multiple\"\r\n>\r\n  <p style=\"font-size: 20px; color: white\">處理中...</p>\r\n</ngx-spinner>\r\n\r\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/bcformmodal/bcformmodal.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/bcformmodal/bcformmodal.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header table-hover\">\n        \n</div>\n          <div class=\"modal-body\">\n\n          <div fxLayout=\"column\" fxLayoutAlign=\" none\">\n            <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-around stretch\" fxLayout.xs=\"column\">\n              <div *ngFor=\"let i of list; let x = index\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"33\" fxFlex.lg=\"33\" fxFlex.xl=\"33\">\n                  <input [(ngModel)]=\"i.Checked\" type=\"checkbox\"/> {{i.Name}} <img  [src]=\"i.Image_Url\" style=\"height: 50px; width: 50px;\">\n              </div>\n            </div>\n          </div>\n                  \n          </div>\n          <div class=\"modal-footer\">\n                 <button type=\"button\" class=\"btn btn-primary\" (click)=\"Save()\">儲存</button>  \n                <button type=\"button\" class=\"btn btn-secondary\" (click)=\"bsModalRef.hide()\">取消</button>\n          </div>\n    ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/bclist/bclist.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/bclist/bclist.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <span><img src='../assets/Photos/inhublogo.png' width=10% height=10% /></span>\r\n    <p></p>\r\n</div>\r\n\r\n<button type=\"button\" class=\"btn btn-primary\" onclick=\"location.href='#/bcform';\">新增</button>\r\n<p></p>\r\n<ng-template #popTemplate> <div [innerHtml]=\"pophtml\"></div></ng-template>\r\n<table class=\"table table-bordered table-striped\">\r\n    <tr>\r\n        <th>\r\n            ID\r\n        </th>\r\n        <th>\r\n            名稱\r\n        </th>\r\n        <th>\r\n            網站\r\n        </th>\r\n        <th>\r\n            地址\r\n        </th>\r\n      \r\n        <th>\r\n            \r\n        </th>\r\n    </tr>\r\n    \r\n       \r\n        <tbody> \r\n            <tr *ngFor = 'let item of List ' [tooltip]=\"popTemplate\" (mouseover)='popup(item)'>\r\n                <td>\r\n                    {{item.Id}}\r\n                </td>\r\n                <td>{{ item.Name}}\r\n                      \r\n                </td>\r\n                <td> <a href= 'https://{{item.WebSite}}' target=\"_blank\"> {{item.WebSite}} </a></td>\r\n                <td>{{ item.Address}}</td>\r\n                <td>\r\n                        <button type=\"button\" class=\"btn btn-primary\" (click) = showform(item.Id)>展示</button>    |\r\n                        <button type=\"button\" class=\"btn btn-info\" (click) = openform(item.Id)>編輯</button>    |\r\n                        <button type=\"button\" class=\"btn btn-danger\" (click) = delete(item.Id)>刪除</button>\r\n                </td>\r\n                \r\n                \r\n            </tr>\r\n        </tbody>\r\n       \r\n</table>\r\n\r\n\r\n\r\n<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-scale-multiple\"\r\n>\r\n  <p style=\"font-size: 20px; color: white\">處理中...</p>\r\n</ngx-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/bcshow/bcshow.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/bcshow/bcshow.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div>\r\n    <span><img src='../assets/Photos/inhublogo.png' width=10% height=10% /></span>\r\n    <p></p>\r\n</div>\r\n\r\n<div class=\"nav navbar-nav navbar-right\">\r\n         <button type=\"button\" class=\"btn btn-default\" onclick=\"location.href='#/bccenter';\">返回</button>   \r\n        <p></p>    \r\n</div>\r\n\r\n<div class=\"body-content\">\r\n\r\n    <table class=\"table table-bordered table-striped\">\r\n            <tbody>\r\n                <tr>\r\n                    <td colspan=\"2\">\r\n                           \r\n                        <carousel>\r\n                                <slide *ngFor=\"let item of Entity.Images\">\r\n                                <img [src]=\"item.Image_Url\" alt=\"Image\" style=\"display: block; width: 100%;\">\r\n                                <div class=\"carousel-caption d-none d-md-block\">\r\n                                    <h3>{{item.Name}}</h3>\r\n                                    <p>{{item.Comment}}</p>\r\n                                </div>\r\n                                </slide> \r\n                        </carousel>\r\n        \r\n\r\n                    </td>\r\n                </tr>\r\n        \r\n                <tr>\r\n                    <td>\r\n                        ID:\r\n                    </td>\r\n                    <TD>\r\n                            {{Entity.Id}}\r\n                    </TD>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                            商務中心名稱:\r\n                    </td>\r\n                    <td>\r\n                        <b><h1 class=\"h4\">{{Entity.Name}} </h1></b>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        介紹:\r\n                    </td>\r\n                    <td>\r\n                            {{Entity.Intro}} \r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                           營業時間: \r\n                    </td>\r\n                    <td>\r\n                        <div fxLayout=\"column\" fxLayoutAlign=\" none\">\r\n                            <div fxFlex=\"100\" fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" fxLayout.xs=\"column\">\r\n                              <div *ngFor=\"let i of Entity.BusinessHours\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"33\" fxFlex.lg=\"33\" fxFlex.xl=\"33\">\r\n                                  {{i.Day}} : {{i.StartTime}} - {{i.EndTime}}\r\n                              </div> \r\n                            </div>\r\n                          </div>\r\n        \r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        電話:\r\n                    </td>\r\n                    <td>\r\n                            {{Entity.Phone}}   \r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td>\r\n                        地址:\r\n                    </td>\r\n                    <td>\r\n                            {{Entity.Address}}   \r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan=\"2\">\r\n                            <table>\r\n                                    <tr>\r\n                                            <td>\r\n                                                    最低價格:\r\n                                                </td>\r\n                                                <td>\r\n                                                        {{Entity.MinPrice}}     \r\n                                                </td>\r\n                                                <td>\r\n                                                      ~\r\n                                                </td>\r\n                                                <td>\r\n                                                    最高價格:\r\n                                                </td>\r\n                                                <td>\r\n                                                        {{Entity.MaxPrice}}       \r\n                                                </td>\r\n                                    </tr>\r\n                                </table>\r\n                             \r\n                    </td>\r\n                  \r\n                </tr>\r\n                <tr>\r\n                        <td>\r\n                            電子郵件:\r\n                        </td>\r\n                        <td>\r\n                                {{Entity.Email}}         \r\n                        </td>\r\n                </tr>\r\n                <tr>\r\n                        <td>\r\n                            網站:\r\n                        </td>\r\n                        <td>\r\n                                {{Entity.WebSite}}     \r\n                        </td>\r\n                </tr>\r\n                <tr>\r\n                        <td>\r\n                            設備: \r\n                        </td>\r\n                        <td>\r\n                                  \r\n            \r\n                                    <div fxLayout=\"column\" fxLayoutAlign=\" none\">\r\n                                            <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-around stretch\" fxLayout.xs=\"column\">\r\n                                              <div *ngFor=\"let i of Entity.Features\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"33\" fxFlex.lg=\"33\" fxFlex.xl=\"33\">\r\n                                                   {{i.Name}} <img  [src]=\"i.Image_Url\" style=\"height: 50px; width: 50px;\">\r\n                                              </div>\r\n                                            </div>\r\n                                    </div>\r\n                                        \r\n                                        \r\n                        </td>\r\n                    </tr>\r\n               \r\n                <tr>\r\n                    <td colspan=\"2\">\r\n                            <google-map\r\n                            height=\"500px\"\r\n                            width=\"100%\"\r\n                            [zoom]=\"zoom\"\r\n                            [center]=\"center\"\r\n                            [options]=\"options\"\r\n                            >\r\n                            <map-marker\r\n                                *ngFor=\"let marker of markers\"\r\n                                [position]=\"marker.position\"\r\n                                [label]=\"marker.label\"\r\n                                [title]=\"marker.title\"\r\n                                [options]=\"marker.options\"\r\n                                (mapClick)=\"opengooglemap()\"\r\n                            >\r\n                            </map-marker>\r\n                        \r\n                        \r\n                            </google-map>\r\n                    </td>\r\n                </tr>\r\n           \r\n              \r\n            </tbody>   \r\n            </table>\r\n        \r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-scale-multiple\"\r\n>\r\n  <p style=\"font-size: 20px; color: white\">處理中...</p>\r\n</ngx-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/businesshourmodal/businesshourmodal.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/businesshourmodal/businesshourmodal.component.html ***!
  \*************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header table-hover\">\r\n        \r\n    </div>\r\n              <div class=\"modal-body\">\r\n    \r\n              <div fxLayout=\"column\" fxLayoutAlign=\" none\">\r\n                <div fxFlex=\"100\" fxLayout=\"column\" fxLayoutAlign=\"space-around stretch\" fxLayout.xs=\"column\">\r\n                  <div *ngFor=\"let i of list; let x = index\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"33\" fxFlex.lg=\"33\" fxFlex.xl=\"33\">\r\n                      {{i.Day}} : <input [(ngModel)]=\"i.StartTime\" #ctrl=\"ngModel\" name=\"strttime\"> -\r\n                      <input [(ngModel)]=\"i.EndTime\" #ctrl=\"ngModel\" name=\"endtime\"> \r\n                  </div> \r\n                </div>\r\n              </div>\r\n                      \r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                     <button type=\"button\" class=\"btn btn-primary\" (click)=\"Save()\">儲存</button>  \r\n                    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"bsModalRef.hide()\">取消</button>\r\n              </div>\r\n        \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/requestmodal/requestmodal.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/requestmodal/requestmodal.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>requestmodal works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart.component.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/products\" routerLinkActive=\"active\"><img src=\"app/Services/Model/Photos/product.jpg\" alt=\"product Icon\" style=\"width:50px;height:50px;\">返回產品線</a>\r\n<p>\r\n \r\n<h3>數量: {{count}}  總價: {{totalamount}} 運費: {{shipmentfee}}</h3>\r\n \r\n \r\n  <div class='table-responsive'>\r\n            <table class='table table-dark'>\r\n                <thead>\r\n                    <tr>\r\n                        <th>產品</th>\r\n                        <th>數量</th>\r\n                        <th>價格</th>\r\n                        <th></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor='let product of sumuplist'>\r\n                        <td>{{ product.Name}}<img [src]='product.Photo'></td>\r\n                        <td>{{ product.Volume}}</td>\r\n                        <td>{{ product.SellPrice }}</td>  \r\n                        <td><button class=\"btn btn-info\" (click)=\"add(product)\">增加</button>   \r\n                         <button class=\"btn btn-warning\" (click)=\"remove(product)\">減少</button></td>     \r\n                    </tr>\r\n                    <tr *ngIf=\"shipmentfee > 0 && sumuplist.length\">\r\n                        <td>運費</td>\r\n                        <td></td>\r\n                        <td>{{ shipmentfee }}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n   </div>\r\n\r\n\r\n     <div class='panel'  *ngIf='sumuplist && sumuplist.length'>\r\n        <div class=\"form-group\">\r\n             <div class=\"form-group\">\r\n                <label>姓名:</label>\r\n                <input type='text' [(ngModel)]='Name' />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>地址:</label>\r\n                <input type='text' [(ngModel)]='Address' size=\"100\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>電話:</label>\r\n                <input type='text' [(ngModel)]='Phone' />\r\n            </div>\r\n             <div class=\"form-group\">\r\n                <label>Email:</label>\r\n                <input type='text' [(ngModel)]='Email' size=\"80\"/>\r\n            </div>\r\n             <div class=\"form-group\">\r\n                <label>備註:</label>\r\n                <input type='text' [(ngModel)]='Note' size=\"80\"/>\r\n            </div>\r\n             <h3>數量: {{count}}  總價: {{totalamount}} 運費: {{shipmentfee}}</h3>\r\n             \r\n                 <h5>付款方式(滿兩千免運費)</h5>\r\n                 <input type=\"radio\" [(ngModel)]=\"paymenttype\"  name=\"paymenttype\" value=\"貨到付款\"/>貨到付款 <br>\r\n                 <input type=\"radio\" [(ngModel)]=\"paymenttype\"  name=\"paymenttype\" value=\"信用卡\"/>信用卡(專員會與您聯絡信用卡付費方式) \r\n            \r\n             <p>\r\n             <hr>\r\n             <button class=\"btn btn-primary\" (click)=\"submitorder()\">確認訂購</button>\r\n         </div>\r\n\r\n         \r\n     </div>\r\n\r\n    \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/adimage/adimage.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/adimage/adimage.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <span> <img src='../assets/Photos/tealogo.jpg' width=20% height=20% /></span>\n  <p></p>\n</div>\n\n<h1> 藏家頁面廣告管理系統</h1>\n\n\n<div class=\"d-flex\">\n  <div>\n          <button type=\"button\" class=\"btn btn-success\" onclick=\"location.href='#/teaportal';\">返回管理頁面</button>\n  </div>\n  <div class=\"ml-auto\">\n           <button type=\"button\" class=\"btn btn-primary\" (click)=\"SaveEntity()\">儲存</button>\n  </div>\n</div>\n<p></p>\n\n\n  <div class=\"center\">\n    <ngx-file-drop dropZoneLabel=\"Drop files here\" (onFileDrop)=\"dropped($event)\"\n    (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\n        <ng-template ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\">\n          拖曳或是選擇要上傳的圖片(必須小於4mb)\n          <button type=\"button\" (click)=\"openFileSelector()\">Browse Files</button>\n        </ng-template>\n    </ngx-file-drop>\n</div>\n\n<table class=\"table table-borderless table-striped\">\n   <tbody>\n\n  <tr>\n      <td colspan=\"2\">\n              <ul *ngFor=\"let i of list; let x = index\" class=\"list-group\">\n                  <li class=\"list-group-item\">\n                      <img [src]=\"i.Image_Url\"   class=\"img-thumbnail\" > <p></p>\n                      名稱:<input [(ngModel)]=\"i.Name\" #ctrl=\"ngModel\"  name=\"imagename\" class=\"form-control\"/> <p></p>\n                      備註: <input [(ngModel)]=\"i.Comment\" #ctrl=\"ngModel\"  name=\"imageComment\" type=\"text\"  class=\"form-control\"/><p></p>\n                      圖片連結: <input [(ngModel)]=\"i.Target_Url\" #ctrl=\"ngModel\"  name=\"targeturl\" type=\"text\"  class=\"form-control\"/><p></p>\n                      <button type=\"button\" class=\"btn btn-danger btn-xs\" (click) =\"RemoveImage(x)\">刪除圖片</button>\n                  </li>\n              </ul>\n      </td>\n  </tr>\n   </tbody>\n</table>\n\n\n\n\n<ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-scale-multiple\"\n>\n  <p style=\"font-size: 20px; color: white\">處理中...</p>\n</ngx-spinner>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/invlist/invlist.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/invlist/invlist.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n        <span> <img src='../assets/Photos/tealogo.jpg' width=20% height=20% /></span>\r\n        <p></p>\r\n    </div>\r\n    \r\n    <h1>所有客戶庫存表</h1>   \r\n    <div>\r\n            <button type=\"button\" class=\"btn btn-success\" onclick=\"location.href='#/teaportal';\">返回管理頁面</button>   \r\n            <p></p>\r\n    </div>\r\n    <div class=\"form form-row\">\r\n        <label>搜尋:</label>\r\n        <input type=\"string\" placeholder=\"編號或名稱\" class=\"form form-control\"\r\n        [(ngModel)]='Search'\r\n        style=\"width: 8em;\"\r\n        /> \r\n    </div>\r\n    <p></p>\r\n    <table class=\"table table-bordered table-striped table-hover\">\r\n        <tr>\r\n            <th>\r\n                客戶編號\r\n            </th>\r\n            <th>\r\n                客戶名稱\r\n            </th>\r\n            <th>\r\n                地址\r\n            </th>    \r\n            <th>\r\n                電話\r\n            </th>\r\n            <th>\r\n\r\n            </th>\r\n        </tr>\r\n        \r\n           \r\n            <tbody> \r\n                <tr *ngFor = 'let item of list' >\r\n                    <td>\r\n                        {{item.ClientId}}\r\n                    </td>\r\n                    <td>{{ item.ClientName}}\r\n                          \r\n                    </td>\r\n                    <td>{{ item.Address}}</td>\r\n                    <td>\r\n                        {{item.Phone}}\r\n                    </td>\r\n                  \r\n                    <td>\r\n                        <button type=\"button\" class=\"btn btn-sm btn-success\" (click) = showEntity(item.ClientId)>庫藏內容</button> |\r\n                        <button type=\"button\" class=\"btn btn-sm btn-info\" (click) = showUserEntity(item.ClientId)>藏家頁面</button> |\r\n                        <button type=\"button\" class=\"btn btn-sm btn-warning\" (click) = copyEncodeUrl(item)>複製藏家連結{{item.Message}}</button>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n           \r\n    </table>\r\n    \r\n    <div>\r\n            <button type=\"button\" class=\"btn btn-success\" onclick=\"location.href='#/teaportal';\">返回管理頁面</button>   \r\n            <p></p>\r\n    </div>\r\n    \r\n    <ngx-spinner\r\n      bdColor=\"rgba(51,51,51,0.8)\"\r\n      size=\"medium\"\r\n      color=\"#fff\"\r\n      type=\"ball-scale-multiple\"\r\n    >\r\n      <p style=\"font-size: 20px; color: white\">處理中...</p>\r\n    </ngx-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/invshow/invshow.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/invshow/invshow.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span> <img src='../assets/Photos/tealogo.jpg' width=20% height=20% /></span>\r\n<p></p>\r\n\r\n\r\n<carousel  >\r\n  <slide *ngFor=\"let item of AdImages\">\r\n    <a [href] = \"item.Target_Url\" target=\"_blank\">\r\n\r\n    <img [src]=\"item.Image_Url\" alt=\"Pages\" style=\"display: block; width: 100%;\">\r\n    <div class=\"carousel-caption d-none d-md-block\" style=\"color: black;\">\r\n        <h3>{{item.Name}}</h3>\r\n        <p>{{item.Comment}}</p>\r\n      </div>\r\n\r\n      </a>\r\n  </slide>\r\n</carousel>\r\n<p></p>\r\n<form>\r\n    <div *ngIf=\"IsManager\">\r\n           <button type=\"button\" class=\"btn btn-info\" onclick=\"location.href='#/clientlist';\">返回列表</button>\r\n           <p></p>\r\n   </div>\r\n\r\n  <div class=\"form-group\">\r\n        <table class=\"table table-bordered table-striped\">\r\n                <tbody>\r\n\r\n                    <tr>\r\n\r\n                        <td>\r\n                            客戶編號:\r\n                        </td>\r\n                        <TD>\r\n                                {{Entity.ClientId}}\r\n                        </TD>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                               客戶名稱:\r\n                        </td>\r\n                        <td>\r\n                            <b><h1 class=\"h4\">{{Entity.ClientName}} </h1></b>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            地址:\r\n                        </td>\r\n                        <td>\r\n                                {{Entity.Address}}\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            電話:\r\n                        </td>\r\n                        <td>\r\n                            {{Entity.Phone}}\r\n                        </td>\r\n                </tbody>\r\n        </table>\r\n        <div *ngIf=\"IsManager\">\r\n            <table class=\"table table-bordered table-striped table-hover\">\r\n                <tr>\r\n                    <th>\r\n                        序號\r\n                    </th>\r\n                    <th>\r\n                       產品編號\r\n                    </th>\r\n                    <th>\r\n                        產品名稱\r\n                    </th>\r\n                    <th>\r\n                        入庫數量\r\n                    </th>\r\n                    <th>\r\n                        單位\r\n                    </th>\r\n                    <th>\r\n                        出庫數量\r\n                    </th>\r\n                    <th>\r\n                        庫存量\r\n                  </th>\r\n                </tr>\r\n\r\n\r\n                    <tbody>\r\n                        <tr *ngFor = 'let item of Entity.Inventories; let x = index  ' >\r\n                            <td>\r\n                                {{ x  + 1 }}\r\n                            </td>\r\n                            <td>\r\n                                {{item.ProductId}}\r\n                            </td>\r\n                            <td>\r\n                                {{ item.ProductName}}\r\n                            </td>\r\n                            <td>{{ item.Stock }}</td>\r\n\r\n                            <td>\r\n                                {{ item.Unit }}\r\n                            </td>\r\n                            <td>\r\n                                {{ item.Return}}\r\n                            </td>\r\n                            <td>\r\n                                {{ item.NotReturn}}\r\n                            </td>\r\n\r\n                        </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                            <tr>\r\n                              <td>總計</td>\r\n                              <td>\r\n\r\n                                </td>\r\n                                <td>\r\n\r\n                                </td>\r\n                                <td>\r\n                                    {{ stock_sum }}\r\n\r\n                                </td>\r\n\r\n                                <td>\r\n\r\n                                </td>\r\n                                <td>\r\n                                    {{ return_sum}}\r\n                                </td>\r\n                                <td>\r\n                                    {{ notreturn_sum }}\r\n                                </td>\r\n                            </tr>\r\n                    </tfoot>\r\n\r\n            </table>\r\n        </div>\r\n        <div *ngIf=\"!IsManager\">\r\n            <table class=\"table table-bordered table-striped table-hover\">\r\n                <tr>\r\n                        <th>\r\n                                序號\r\n                            </th>\r\n                            <th>\r\n                               產品編號\r\n                            </th>\r\n                            <th>\r\n                                產品名稱\r\n                            </th>\r\n                            <th>\r\n                                入庫數量\r\n                            </th>\r\n                            <th>\r\n                                單位\r\n                            </th>\r\n                            <th>\r\n                                出庫數量\r\n                            </th>\r\n                            <th>\r\n                                庫存量\r\n                          </th>\r\n                </tr>\r\n\r\n\r\n                    <tbody>\r\n                        <tr *ngFor = 'let item of userInvertories; let x = index;' >\r\n                            <td>\r\n                                {{ x  + 1 }}\r\n                            </td>\r\n                            <td>\r\n                                {{item.ProductId}}\r\n                            </td>\r\n                            <td>\r\n                                {{ item.ProductName}}\r\n                            </td>\r\n                            <td>{{ item.Stock }}</td>\r\n\r\n                            <td>\r\n                                {{ item.Unit }}\r\n                            </td>\r\n                            <td>\r\n                                {{ item.Return}}\r\n                            </td>\r\n                            <td>\r\n                                {{ item.NotReturn}}\r\n                            </td>\r\n\r\n                        </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                            <tr>\r\n                              <td>總計</td>\r\n                              <td>\r\n\r\n                                </td>\r\n                                <td>\r\n\r\n                                </td>\r\n                                <td>\r\n                                    {{ stock_sum }}\r\n\r\n                                </td>\r\n\r\n                                <td>\r\n\r\n                                </td>\r\n                                <td>\r\n                                    {{ return_sum}}\r\n                                </td>\r\n                                <td>\r\n                                    {{ notreturn_sum }}\r\n                                </td>\r\n                            </tr>\r\n                          </tfoot>\r\n\r\n            </table>\r\n        </div>\r\n\r\n\r\n        <h2>近六月溫濕度資料表</h2>\r\n        <carousel  interval=\"0\">\r\n                <slide *ngFor=\"let item of images\">\r\n                  <img [src]=\"item.ImageUrl\" alt=\"Pages\" style=\"display: block; width: 100%;\">\r\n                  <div class=\"carousel-caption d-none d-md-block\">\r\n                  </div>\r\n                </slide>\r\n        </carousel>\r\n\r\n        <div *ngIf=\"IsManager\">\r\n            <p></p>\r\n                <button type=\"button\" class=\"btn btn-info\" onclick=\"location.href='#/clientlist';\">返回列表</button>\r\n                <p></p>\r\n        </div>\r\n  </div>\r\n</form>\r\n\r\n\r\n\r\n<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-scale-multiple\"\r\n>\r\n  <p style=\"font-size: 20px; color: white\">處理中...</p>\r\n</ngx-spinner>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/invupload/invupload.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/invupload/invupload.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n<div>\n        <span> <img src='../assets/Photos/tealogo.jpg' width=20% height=20% /></span>\n        <p></p>\n</div>\n\n<div>\n      <button type=\"button\" class=\"btn btn-success\" onclick=\"location.href='#/teaportal';\">返回管理頁面</button>   \n      <p></p>\n</div>\n\n<h2>上傳普洱茶倉儲Excel檔案(.xlsx):(部分更新:適用於少部分藏家更新 其他藏家資料不更動)</h2>\n\n<div class=\"body-content\">\n        <div class=\"center\">\n                <ngx-file-drop dropZoneLabel=\"Drop files here\" (onFileDrop)=\"dropped3($event)\" accept=\".xlsx\"\n                (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\n                    <ng-template ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\">\n                      拖曳或是選擇要上傳的Excel檔案 => 部分更新 (請確定格式正確)\n                      <button type=\"button\" (click)=\"openFileSelector()\">Browse Files</button>\n                    </ng-template>\n                    \n                </ngx-file-drop>\n               \n        </div>\n</div>\n<hr>\n\n<h2>上傳普洱茶倉儲Excel檔案(.xlsx):(全部更新:將會覆蓋掉之前紀錄 重新更新資料庫)</h2>\n\n<div class=\"body-content\">\n        <div class=\"center\">\n                <ngx-file-drop dropZoneLabel=\"Drop files here\" (onFileDrop)=\"dropped($event)\" accept=\".xlsx\"\n                (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\n                    <ng-template ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\">\n                      拖曳或是選擇要上傳的Excel檔案 => 全部更新 (請確定格式正確)\n                      <button type=\"button\" (click)=\"openFileSelector()\">Browse Files</button>\n                    </ng-template>\n                    \n                </ngx-file-drop>\n               \n        </div>\n</div>\n<hr>\n<h2>上傳普洱茶倉儲溫度紀錄照片(.jpg):</h2>\n<div class=\"body-content\">\n        <div class=\"center\">\n                <ngx-file-drop dropZoneLabel=\"Drop files here\" (onFileDrop)=\"dropped2($event)\" \n                (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\n                    <ng-template ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\">\n                      拖曳或是選擇要上傳的照片(請勿超過4MB)\n                      <button type=\"button\" (click)=\"openFileSelector()\">Browse Files</button>\n                    </ng-template>\n                    \n                </ngx-file-drop>\n               \n        </div>\n</div>\n                        \n\n\n\n<ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-scale-multiple\"\n>\n  <p style=\"font-size: 20px; color: white\">處理中...</p>\n</ngx-spinner>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/login/login.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/login/login.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span> <img src='../assets/Photos/tealogo.jpg' width=20% height=20% /></span>\n<p></p>\n<span> <img src='../assets/Photos/title2.jpg' width=100% height=100% /></span>\n<p></p>\n\n<div>\n    <mat-card class=\"example-card\">\n        <mat-card-header>\n          <mat-card-title>管理員登入</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <form class=\"example-form\">\n            <table class=\"example-full-width\" cellspacing=\"0\">\n              <tr>\n                <td>\n                  <mat-form-field class=\"example-full-width\">\n                  <input matInput placeholder=\"Username\" [(ngModel)]=\"username\" name=\"username\" required>\n                  </mat-form-field>\n                </td>\n              </tr>\n              <tr>\n              <td><mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Password\" [(ngModel)]=\"password\"type=\"password\" name=\"password\" required>\n              </mat-form-field></td>\n            </tr></table>\n          </form>\n          <mat-spinner [style.display]=\"showSpinner ? 'block' : 'none'\"></mat-spinner>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-raised-button (click)=\"login()\" color=\"primary\">登入</button>\n        </mat-card-actions>\n      </mat-card>\n</div>\n\n  \n\n<ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-scale-multiple\"\n>\n  <p style=\"font-size: 20px; color: white\">驗證登入中...</p>\n</ngx-spinner>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/portal/portal.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/portal/portal.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span> <img src='../assets/Photos/tealogo.jpg' width=20% height=20% /></span>\n<p></p>\n<span> <img src='../assets/Photos/title2.jpg' width=100% height=100% /></span>\n<p></p>\n\n<div style=\"text-align:center;\">\n        <h2>普洱茶倉系統管理頁面</h2> <h3>(登入者:{{User}} , 登入時間: {{LogInTime}})   <button mat-raised-button (click)=\"logout()\" color=\"primary\">登出</button> </h3>\n</div>\n\n\n\n<div class=\"container\"  >\n        <div id=\"rcorners1a\" >\n                        <div class=\"row\" id =\"frontbackground\" >\n                                        <h3>庫存系統</h3>\n                                 </div>\n                                 <div class=\"row\"   id =\"frontbackground\"  >\n                                   <div class=\"col\">\n                                                 <button class=\"button\"  onclick=\"location.href='#/clientlist';  \"><i class=\"fa fa-address-book\" ></i> 庫存列表 </button>\n                                   </div>\n                                   <div class=\"col\">\n                                                 <button class=\"button\" onclick=\"location.href='#/uploadinvfile';\"><i class=\"fa fa-cloud-upload\"></i> 上傳檔案 (更新時間: {{LastUpdateTime}})</button>\n                                   </div>\n                                 </div>\n                                 <div class=\"row\"   id =\"frontbackground\" >\n                                         <hr>\n                        </div>\n        </div>\n        <div id=\"rcorners1a\">\n                        <div class=\"row\" style=\"background-color:lightcyan;\">\n                                        <h3>推廣系統</h3>\n                                </div>\n                                <div class=\"row\" style=\"background-color:lightcyan;\" >\n                                  <div class=\"col\">\n                                        <button class=\"button\"  onclick=\"window.open('#/articleshow', '_blank'); \"><i class=\"fa fa-book\" ></i> 推廣文章連結 </button>\n                                  </div>\n                                  <div class=\"col\">\n                                         <button class=\"button\"  onclick=\"location.href='#/articlelist';\"><i class=\"fa fa-cloud-upload\" ></i>推廣文章管理 </button>\n                                  </div>\n                                  <div class=\"col\">\n                                    <button class=\"button\"  onclick=\"location.href='#/adimage';\"><i class=\"fa fa-cloud-upload\" ></i>藏家頁面廣告管理 </button>\n                                 </div>\n                                </div>\n                                <div class=\"row\" style=\"background-color:lightcyan;\">\n                                                <hr>\n                                 </div>\n\n        </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerlog.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerlog.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <span> <img src='../assets/Photos/logo.jpg' width=20% height=20% /></span>\r\n    <p></p>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <label>搜尋:</label>\r\n    <input type=\"string\"\r\n    [(ngModel)]='Search'\r\n    style=\"width: 6em;\"\r\n    /> \r\n</div>\r\n\r\n<div class=\"loader\" id=\"loader\"></div>\r\n\r\n<table class=\"table table-bordered table-striped\">\r\n    <tr>\r\n        <th>\r\n            顧客姓名\r\n        </th>\r\n        <th>\r\n            電話\r\n        </th>\r\n        <th>\r\n            Email\r\n        </th>\r\n        <th>\r\n            通話紀錄\r\n        </th>\r\n        <th>\r\n            備註 (後續追蹤)\r\n        </th>\r\n        <th>\r\n            時間\r\n        </th>\r\n    </tr>\r\n    \r\n        <tr>\r\n            <td>\r\n                <input type=\"string\"\r\n                [(ngModel)]='Name'\r\n                style=\"width: 6em;\"\r\n                /> \r\n            </td>\r\n            <td>\r\n                <input type=\"string\"\r\n                [(ngModel)]='PhoneNumber'\r\n                style=\"width: 6em;\"\r\n                /> \r\n            </td>\r\n            <td>\r\n                <input type=\"string\"\r\n                [(ngModel)]='Email'  \r\n                /> \r\n            </td>\r\n            <td>\r\n                <textarea [(ngModel)]='Note' class=\"form-control\" >\r\n\r\n                </textarea>\r\n            </td>\r\n            <td  class=\"warning\">\r\n                <textarea [(ngModel)]='Comment' class=\"form-control\">\r\n\r\n                </textarea>\r\n            </td>\r\n            <td>\r\n                \r\n            </td>\r\n            <td>\r\n                <button class=\"btn btn-primary\" (click) = 'addlog()'>\r\n                    新增\r\n                 </button>\r\n                \r\n            </td>\r\n        </tr>\r\n\r\n        <tbody> \r\n            <tr *ngFor = 'let item of logList | paginate: { itemsPerPage: 10, currentPage: p} '>\r\n                \r\n                <td>{{ item.Name}}</td>\r\n                <td>{{ item.PhoneNumber }}</td>\r\n                <td>{{ item.Email}}\r\n                    <button *ngIf='item.Email' type=\"button\" class=\"btn btn-success\" (click)=\"openEmailModal(item)\">Email</button>\r\n                </td>\r\n                <td>{{ item.Note}}</td>\r\n                <td class=\"warning\">{{ item.Comment}}</td>\r\n                <td>{{ item.RecordTime}}</td>\r\n                <td>\r\n                        <button class=\"btn btn-danger\" (click) = 'DeleteLog(item.RowKey, item.Name)' >\r\n                                刪除\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-info\" (click)=\"openModal(item)\">編輯</button>\r\n                      \r\n                </td>\r\n\r\n            </tr>\r\n        </tbody>\r\n        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n   \r\n</table>\r\n\r\n{{modalMessage}}");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/emailmodal/emailmodal.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/emailmodal/emailmodal.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header table-hover\">\n  <h4 class=\"modal-title pull-left\">{{Name}}</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n<table class=\"table table-bordered\">\n<tr>\n  <td>\n    Email \n  </td>\n  <td>\n    {{Email}}\n  </td>\n</tr>\n\n<tr>\n<td>\n   標題\n</td>\n<td>\n<input type=\"string\"\n[(ngModel)]='Subject'\n />  \n</td>\n</tr>\n\n<tr class=\"info\">\n<td>\n    訊息\n</td>\n<td>\n   <textarea [(ngModel)]='Content' class=\"form-control\" rows=\"5\">\n\n   </textarea>\n</td>\n</tr>\n \n<tr >\n   \n        <td>\n            <button class=\"btn btn-primary\" (click) = 'EmailOut()'>\n               寄出\n             </button>\n            \n        </td>\n\n  </tr>\n</table> \n\n\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">取消</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu.component.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu.component.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\r\n  menu {{count}}\r\n  <button class=\"delete\"\r\n(click)=\"countShopList()\">carriot</button>\r\n\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/products.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products.component.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a routerLink=\"/cart\" routerLinkActive=\"active\"><img src=\"/assets/Photos/cart.jpg\" alt=\"cart Icon\" style=\"width:50px;height:50px;\">  購物車(結帳)</a>\r\n<p>\r\n<span class=\"badge\">數量: {{count}} </span>\r\n<span class=\"badge\">總價: {{totalprice}} </span>\r\n<div class=\"grid grid-pad\">\r\n  <div *ngFor=\"let product of products\" class=\"col-1-4\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n      <span *ngIf=\"product.Promotion\" > <img   src=\"app/Services/Model/Photos/onsale.jpg\" width=\"100\" height=\"100\"> </span> \r\n      <img [src]='product.Photo'> <b> {{product.Name}}</b>\r\n      <h4 class=\"label label-primary\"> 價格: NT {{product.Price}} </h4> &nbsp;   \r\n      <button class=\"btn btn-info\" (click)=\"add(product)\">加入購物車</button> \r\n      </div>\r\n      <div class=\"panel-body\">{{product.Description}}</div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/stoneweight.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/stoneweight.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span><img src='../assets/Photos/NHCC.jpg' width=100% height=40% /></span>\r\n<table class=\"table table-bordered table-striped\">\r\n    <tr>\r\n        <th>\r\n            編號\r\n        </th>\r\n        <th>\r\n            空氣重量\r\n        </th>\r\n        <th>\r\n            水中重量\r\n        </th>\r\n        <th>\r\n            物體比重\r\n        </th>\r\n    </tr>\r\n    \r\n        <tr>\r\n            <td>\r\n    \r\n            </td>\r\n            <td>\r\n                <input type=\"number\"\r\n                [(ngModel)]='airweight'\r\n                style=\"width: 6em;\"\r\n                /> \r\n            </td>\r\n            <td>\r\n                <input type=\"number\"\r\n                [(ngModel)]='waterweight'  \r\n                style=\"width: 6em;\"\r\n                /> \r\n            </td>\r\n            <td>\r\n                {{caculateweightrate()}}\r\n            </td>\r\n            <td>\r\n                <button class=\"btn btn-primary\" (click) = 'addintolist()'>\r\n                    新增\r\n                 </button>\r\n            </td>\r\n        </tr>\r\n\r\n    <tbody> \r\n        <tr *ngFor = 'let item of weightList'>\r\n            \r\n            <td>{{ item.id}}</td>\r\n            <td>{{ item.airweight }}</td>\r\n            <td>{{ item.waterweight}}</td>\r\n            <td>{{ item.ratioweight}}</td>\r\n            \r\n        </tr>\r\n    </tbody>\r\n   \r\n\r\n\r\n</table>\r\n\r\n<table *ngIf=\"weightList?.length > 0\">\r\n    <tr>\r\n        <td>\r\n            Email: \r\n        </td>\r\n        <td>\r\n            <input type=\"string\"\r\n            [(ngModel)]='emailaddress'  \r\n            style=\"width: 15em;\"\r\n            /> \r\n        </td>\r\n        <td>\r\n            <span></span>\r\n        </td>\r\n        <td>\r\n            <button class=\"btn btn-info\" (click) = 'emailout()'>\r\n                寄出\r\n             </button>\r\n        </td>\r\n    </tr>\r\n</table>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Model/EmailMessage.ts":
/*!***************************************!*\
  !*** ./src/app/Model/EmailMessage.ts ***!
  \***************************************/
/*! exports provided: EmailMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailMessage", function() { return EmailMessage; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var EmailMessage = /** @class */ (function () {
    function EmailMessage() {
    }
    return EmailMessage;
}());



/***/ }),

/***/ "./src/app/Services/customerlog.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Services/customerlog.service.ts ***!
  \*************************************************/
/*! exports provided: CustomerlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerlogService", function() { return CustomerlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    }),
    params: null,
    withCredentials: false
};
var CustomerlogService = /** @class */ (function () {
    function CustomerlogService(http) {
        this.http = http;
        //url:string = "https://localhost:44347/api/CustomerLogApi/"; 
        this.url = "https://leecloud.azurewebsites.net/api/CustomerLogApi/";
    }
    CustomerlogService.prototype.PostCustomerLog = function (c) {
        return this.http.post(this.url, c, httpOptions);
    };
    CustomerlogService.prototype.GetAllCustomerLog = function () {
        return this.http.get(this.url);
    };
    CustomerlogService.prototype.GetAllCustomerLogByKey = function (key) {
        return this.http.get(this.url + key);
    };
    CustomerlogService.prototype.DeleteCustomerLog = function (rowkey) {
        return this.http.delete(this.url + rowkey);
    };
    CustomerlogService.prototype.UpdateCustomerLog = function (c) {
        return this.http.put(this.url + '5', c, httpOptions);
    };
    CustomerlogService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CustomerlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CustomerlogService);
    return CustomerlogService;
}());



/***/ }),

/***/ "./src/app/Services/emailservice.ts":
/*!******************************************!*\
  !*** ./src/app/Services/emailservice.ts ***!
  \******************************************/
/*! exports provided: EmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailService", function() { return EmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
        'Content-Type': 'application/json'
    }),
    params: null,
    withCredentials: false
};
var EmailService = /** @class */ (function () {
    function EmailService(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]("default message");
        this.currentMessage = this.messageSource.asObservable();
    }
    EmailService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    EmailService.prototype.sendemail = function (to, subject, message) {
        var _this = this;
        var web = 'http://leecloud.azurewebsites.net/api/';
        //var web = 'http://localhost:49740/api/';
        var from = "bio.china@msa.hinet.net";
        var webkey = 'adsfasd3w243l2q51230-48-gfd321qm4mndvdcuoisadjq2w3;4;lr8';
        var url = "Email?from=" + from + "&to=" + to + "&subject=" + encodeURIComponent(subject) + "&message=" + encodeURIComponent(message) + "&webkey=" + webkey;
        var urlstring = web + url;
        //let body = JSON.stringify({ "from":from,"to":to,"subject":encodeURIComponent(subject),"message":encodeURIComponent(message),"webkey":webkey });
        var urlSearchParams = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["URLSearchParams"]();
        urlSearchParams.append('from', from);
        urlSearchParams.append('to', to);
        urlSearchParams.append('subject', encodeURIComponent(subject));
        urlSearchParams.append('message', encodeURIComponent(message));
        urlSearchParams.append('webkey', webkey);
        var body2 = urlSearchParams.toString();
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'text/plain' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({ headers: headers });
        return this.http.get(urlstring, options)
            .subscribe(function (res) { return _this.extractData = res.json(); });
    };
    EmailService.prototype.SendEmailMessage = function (message) {
        var web = 'http://leecloud.azurewebsites.net/api/Email';
        //var web = 'http://localhost:49740/api/Email';
        var from = "bio.china@msa.hinet.net";
        var webkey = 'adsfasd3w243l2q51230-48-gfd321qm4mndvdcuoisadjq2w3;4;lr8';
        message.ApiKey = webkey;
        return this.httpclient.post(web, message, httpOptions);
    };
    EmailService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    EmailService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof _angular_http__WEBPACK_IMPORTED_MODULE_1__["Response"]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    EmailService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
    ]; };
    EmailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/Services/list-email.service.ts":
/*!************************************************!*\
  !*** ./src/app/Services/list-email.service.ts ***!
  \************************************************/
/*! exports provided: ListEmailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEmailService", function() { return ListEmailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_emailservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Services/emailservice */ "./src/app/Services/emailservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ListEmailService = /** @class */ (function () {
    function ListEmailService(emailservice) {
        this.emailservice = emailservice;
        this.List = [];
    }
    ListEmailService.prototype.generateDateTime = function () {
        var dateobj = new Date();
        var month = dateobj.getMonth() + 1;
        var day = dateobj.getDate();
        var year = dateobj.getFullYear();
        var hour = dateobj.getHours();
        var min = dateobj.getMinutes();
        var sec = dateobj.getSeconds();
        var ordernumber = year + "-" + month + "-" + day + "-" + hour + "-" + min + "-" + sec;
        return ordernumber;
    };
    ListEmailService.prototype.SendWeightEmail = function (sendlist, emailaddress, subject) {
        this.WeightList = sendlist;
        this.Email = emailaddress;
        this.Subject = subject + this.generateDateTime();
        var htmlstring = "<table width='80%' border='1px solid #dddddd'>" +
            "<thead>" +
            "<tr align='left'>" +
            "<th>編號</th>" +
            "<th>空氣重量</th>" +
            "<th>水中重量</th>" +
            "<th>物體比重</th>" +
            "</tr>" +
            "</thead>" +
            "<tbody>";
        for (var _i = 0, _a = this.WeightList; _i < _a.length; _i++) {
            var p = _a[_i];
            htmlstring += "<tr align='left'>" +
                "<td>" +
                p.id +
                "</td><td>" +
                p.airweight +
                "</td><td>" +
                p.waterweight +
                "</td><td>" +
                p.ratioweight +
                "</td>";
        }
        htmlstring += "</tbody></table>";
        //     this.emailservice.sendemail(this.Email, this.Subject, htmlstring)
        //     .subscribe(
        //                res  => console.log(res),
        //                error =>  console.log(<any>error))
        //    ; 
        alert(" 比重結果已送出至 Email 服務已停止使用!! " + this.Email + " 請繼續使用或更新重來");
    };
    ListEmailService.ctorParameters = function () { return [
        { type: _Services_emailservice__WEBPACK_IMPORTED_MODULE_1__["EmailService"] }
    ]; };
    ListEmailService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_Services_emailservice__WEBPACK_IMPORTED_MODULE_1__["EmailService"]])
    ], ListEmailService);
    return ListEmailService;
}());



/***/ }),

/***/ "./src/app/Services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

//import { Hero } from './hero';

var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.productUrl = 'https://www.googleapis.com/books/v1/volumes?q=floresdelmal&filter=full'; // URL to web api
        this.products = [
            //{Id: 6, Promotion:true,  Name: '經典禮盒(促銷價活動 $2400 進行中!!)', Description: '組合包裝內含:帝王蟹殼素膠囊 *2盒 (60粒/盒) 中華甲殼素牙膏 140克/支 ●帝王蟹殼素膠囊● 成分： HFP 帝王蟹殼素(270mg)、維生素C(15mg)、麥芽糊精(15mg) 內容量:300MG*60粒 使用方式: 一般保養 每天2粒 加強保養 每次2粒 每天2~3次 ●中華甲殼素牙膏● 成 份：HFP高分子水溶性甲殼素、天然纖維素然薄荷、活性氟化物（符合國家標準CNS-15492）包裝容量：140克/支', Price:2400, Photo:'app/Services/Model/Photos/itemE.jpg'}, 
            { Id: 1, Name: '中華甲殼素', Description: 'HFP®-Chitosan為天然多醣體構成，具活性胺基，是唯一帶正電之動物性纖維素，能吸附帶負電之不好物質，屬食品故不會產生副作用及毒性。它是利用創新的美國專利技術純化(專利號碼5730876)，達到高分子水溶性的狀態，使人體好吸收，此外更通過美國食品暨藥物管理局FDA認證實驗室(認證號碼：2030950)檢驗通過：無重金屬與農藥殘留。', Price: 3600, Photo: '/assets/Photos/itemA.jpg' },
            { Id: 2, Name: '昕華聖康', Description: '成 分HFP-Chitosan、葡萄子、DHA、葡萄糖酸鋅、酵母硒、B胡蘿蔔素、冬蟲夏草 容 量 每粒膠囊360 mg，每瓶60粒 建議用量 每日3次，每次1粒', Price: 1500, Photo: '/assets/Photos/cart.jpg' },
            { Id: 3, Name: '昕華益骨', Description: '人體會自行合成膠原蛋白，但隨著年齡增長，合成速度趕不上分解的速度，適時補充可以保持靈活自如的行動力。中華生物科技採用葡萄糖胺+一型膠原蛋白+活性二型膠原蛋白 。', Price: 1800, Photo: '/assets/Photos/itemC.jpg' },
            { Id: 4, Name: '中華甲殼素牙膏', Description: 'HFP®-Chitosan、天然纖維素膠、天然薄荷、活性氟化物800 ppm（符合國家標準CNS-15492）。', Price: 200, Photo: '/assets/Photos/itemF.jpg' },
            //{Id: 7, Name: '綠纖維雙層面膜', Description: '一盒5片裝 超保溼、淨白、抗皺全效合一 市售之面膜皆無法跳脫傳統功效，導致市場混亂產品好壞難辨，本公司突破傳統觀念，利用綠纖維奈米科技，推出具有「醫美級」的雙面膜。綠色創新層主要含有負離子、遠紅外線、鍺與甲殼素等成分。榮獲台灣、美國與中國四項專利，並通過SGS檢驗安全品質認證。獨創雙面膜設計，一面讓臉部做SPA，一面敷臉，徹底活化肌膚細胞，使菁華液100%完全吸收，使用遠紅外，將面膜功效發揮淋漓盡致，讓消費者臉部更加健康與自然！', Price: 800, Photo:'app/Services/Model/Photos/itemH.png'}, 
            { Id: 5, Name: '蟹殼素環保潔淨布(買1送1)', Description: '環保素材之六大特色◆ 可自然分解不會造成環境污染 ◆吸水性超強、好沖洗、不殘留髒污 ◆除塵力強 輕輕一抹 光亮如新 ◆可避免細菌滋生 ◆質地柔軟 不會刮傷家具 ◆價格低廉、可重複使用 材 質：天然木纖維複合蟹殼素 用 途：汽車、玻璃、傢具、餐桌、冰箱、流理台等的擦拭與清潔 包 裝：3片/包', Price: 90, Photo: '/assets/Photos/itemG.jpg' },
        ];
    }
    ProductService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.productUrl)
            .toPromise()
            .then(function (response) {
            return response.json();
        })
            .catch(this.handleError);
    };
    ProductService.prototype.getSamples = function () {
        return this.products;
    };
    ProductService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }
    ]; };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/Services/shop-cart.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Services/shop-cart.service.ts ***!
  \***********************************************/
/*! exports provided: ShopCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopCartService", function() { return ShopCartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ShopCartService = /** @class */ (function () {
    function ShopCartService() {
        this.shopList = [];
    }
    ShopCartService.prototype.add = function (product) {
        this.shopList.push(product);
    };
    ShopCartService.prototype.remove = function (product) {
        if (this.shopList.length > 0) {
            var i = this.shopList.indexOf(product);
            if (i != -1) {
                this.shopList.splice(i, 1);
            }
        }
    };
    ShopCartService.prototype.con = function () {
        return this.shopList.length;
    };
    ShopCartService.prototype.totalamount = function () {
        var total = 0;
        this.shopList.forEach(function (p) {
            total += p.Price;
        });
        return total;
    };
    ShopCartService.prototype.sumup = function () {
        this.sumupList = [];
        if (this.shopList.length > 0) {
            for (var _i = 0, _a = this.shopList; _i < _a.length; _i++) {
                var p = _a[_i];
                if (this.sumupList.indexOf(p) === -1) {
                    p.Volume = 1;
                    p.SellPrice = p.Price;
                    this.sumupList.push(p);
                }
                else {
                    var vol = this.sumupList[this.sumupList.indexOf(p)].Volume;
                    vol++;
                    this.sumupList[this.sumupList.indexOf(p)].Volume = vol;
                    this.sumupList[this.sumupList.indexOf(p)].SellPrice = p.Price * vol;
                }
            }
        }
    };
    ShopCartService.prototype.gethtml = function () {
        var htmlstring = '';
        if (this.sumupList.length > 0) {
            htmlstring = "<table width='80%' border='1px solid #dddddd'>" +
                "<thead>" +
                "<tr align='left'>" +
                "<th>產品</th>" +
                "<th>數量</th>" +
                "<th>價格</th>" +
                "</tr>" +
                "</thead>" +
                "<tbody>";
            for (var _i = 0, _a = this.sumupList; _i < _a.length; _i++) {
                var p = _a[_i];
                htmlstring += "<tr align='left'>" +
                    "<td>" +
                    p.Name +
                    "</td><td>" +
                    p.Volume +
                    "</td><td>" +
                    p.SellPrice +
                    "</td>";
            }
            htmlstring += "</tbody></table>";
        }
        return htmlstring;
    };
    ShopCartService.prototype.generateordernumber = function () {
        var dateobj = new Date();
        var month = dateobj.getMonth() + 1;
        var day = dateobj.getDate();
        var year = dateobj.getFullYear();
        var hour = dateobj.getHours();
        var min = dateobj.getMinutes();
        var sec = dateobj.getSeconds();
        var ordernumber = year + "-" + month + "-" + day + "-" + hour + "-" + min + "-" + sec;
        return "BC" + ordernumber;
    };
    ShopCartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ShopCartService);
    return ShopCartService;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = '';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n  <div class=\"container\">\n \n  <h1 class=\"lead\"> {{title}}</h1>\n\n  <router-outlet></router-outlet>\n  </div>\n",
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/shared/shared.module */ "./src/app/core/shared/shared.module.ts");
/* harmony import */ var _Services_product_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Services/product.service */ "./src/app/Services/product.service.ts");
/* harmony import */ var _Services_shop_cart_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Services/shop-cart.service */ "./src/app/Services/shop-cart.service.ts");
/* harmony import */ var _Services_emailservice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Services/emailservice */ "./src/app/Services/emailservice.ts");
/* harmony import */ var _Services_list_email_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Services/list-email.service */ "./src/app/Services/list-email.service.ts");
/* harmony import */ var _Services_customerlog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Services/customerlog.service */ "./src/app/Services/customerlog.service.ts");
/* harmony import */ var _clientinventory_invservice_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./clientinventory/invservice.service */ "./src/app/clientinventory/invservice.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./products.component */ "./src/app/products.component.ts");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./menu.component */ "./src/app/menu.component.ts");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cart.component */ "./src/app/cart.component.ts");
/* harmony import */ var _stoneweight_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./stoneweight.component */ "./src/app/stoneweight.component.ts");
/* harmony import */ var _customerlog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./customerlog.component */ "./src/app/customerlog.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _emailmodal_emailmodal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./emailmodal/emailmodal.component */ "./src/app/emailmodal/emailmodal.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _businesscenter_businesscenter_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./businesscenter/businesscenter.module */ "./src/app/businesscenter/businesscenter.module.ts");
/* harmony import */ var _article_article_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./article/article.module */ "./src/app/article/article.module.ts");
/* harmony import */ var _clientinventory_clientinventory_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./clientinventory/clientinventory.module */ "./src/app/clientinventory/clientinventory.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








//import './rxjs-extensions';
//import { InMemoryDataService }  from './in-memory-data.service';
//Services






//Components















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_22__["NgxPaginationModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__["NgbModule"],
                _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    {
                        path: '',
                        redirectTo: '/stoneweight',
                        pathMatch: 'full'
                    },
                    {
                        path: 'products',
                        component: _products_component__WEBPACK_IMPORTED_MODULE_15__["ProductsComponent"]
                    },
                    {
                        path: 'cart',
                        component: _cart_component__WEBPACK_IMPORTED_MODULE_17__["CartComponent"]
                    },
                    {
                        path: 'stoneweight',
                        component: _stoneweight_component__WEBPACK_IMPORTED_MODULE_18__["StoneweightComponent"]
                    },
                    {
                        path: 'customerlog',
                        component: _customerlog_component__WEBPACK_IMPORTED_MODULE_19__["CustomerlogComponent"]
                    }
                ]),
                _businesscenter_businesscenter_module__WEBPACK_IMPORTED_MODULE_25__["BusinesscenterModule"],
                _article_article_module__WEBPACK_IMPORTED_MODULE_26__["ArticleModule"],
                _clientinventory_clientinventory_module__WEBPACK_IMPORTED_MODULE_27__["ClientinventoryModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"],
                _products_component__WEBPACK_IMPORTED_MODULE_15__["ProductsComponent"],
                _menu_component__WEBPACK_IMPORTED_MODULE_16__["MenuComponent"],
                _cart_component__WEBPACK_IMPORTED_MODULE_17__["CartComponent"],
                _stoneweight_component__WEBPACK_IMPORTED_MODULE_18__["StoneweightComponent"],
                _customerlog_component__WEBPACK_IMPORTED_MODULE_19__["CustomerlogComponent"],
                _customerlog_component__WEBPACK_IMPORTED_MODULE_19__["ModalContentComponent"],
                _emailmodal_emailmodal_component__WEBPACK_IMPORTED_MODULE_21__["EmailmodalComponent"]
            ],
            entryComponents: [_customerlog_component__WEBPACK_IMPORTED_MODULE_19__["ModalContentComponent"], _emailmodal_emailmodal_component__WEBPACK_IMPORTED_MODULE_21__["EmailmodalComponent"]],
            providers: [
                _Services_product_service__WEBPACK_IMPORTED_MODULE_8__["ProductService"],
                _Services_shop_cart_service__WEBPACK_IMPORTED_MODULE_9__["ShopCartService"],
                _Services_emailservice__WEBPACK_IMPORTED_MODULE_10__["EmailService"],
                _Services_list_email_service__WEBPACK_IMPORTED_MODULE_11__["ListEmailService"],
                _Services_customerlog_service__WEBPACK_IMPORTED_MODULE_12__["CustomerlogService"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
                _clientinventory_invservice_service__WEBPACK_IMPORTED_MODULE_13__["InvserviceService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_20__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_20__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article/article.module.ts":
/*!*******************************************!*\
  !*** ./src/app/article/article.module.ts ***!
  \*******************************************/
/*! exports provided: ArticleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleModule", function() { return ArticleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _articleform_articleform_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./articleform/articleform.component */ "./src/app/article/articleform/articleform.component.ts");
/* harmony import */ var _articlelist_articlelist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./articlelist/articlelist.component */ "./src/app/article/articlelist/articlelist.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _articleshow_articleshow_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./articleshow/articleshow.component */ "./src/app/article/articleshow/articleshow.component.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/shared/shared.module */ "./src/app/core/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};















var ArticleModule = /** @class */ (function () {
    function ArticleModule() {
    }
    ArticleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_articleform_articleform_component__WEBPACK_IMPORTED_MODULE_2__["ArticleformComponent"], _articlelist_articlelist_component__WEBPACK_IMPORTED_MODULE_3__["ArticlelistComponent"], _articleshow_articleshow_component__WEBPACK_IMPORTED_MODULE_12__["ArticleshowComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_8__["NgxFileDropModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_9__["NgxSpinnerModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_13__["CarouselModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([
                    {
                        path: 'articleform', component: _articleform_articleform_component__WEBPACK_IMPORTED_MODULE_2__["ArticleformComponent"]
                    },
                    {
                        path: 'articlelist', component: _articlelist_articlelist_component__WEBPACK_IMPORTED_MODULE_3__["ArticlelistComponent"]
                    },
                    {
                        path: 'articleform/:id', component: _articleform_articleform_component__WEBPACK_IMPORTED_MODULE_2__["ArticleformComponent"]
                    },
                    {
                        path: 'articleshow', component: _articleshow_articleshow_component__WEBPACK_IMPORTED_MODULE_12__["ArticleshowComponent"]
                    },
                    {
                        path: 'articleshow/:id', component: _articleshow_articleshow_component__WEBPACK_IMPORTED_MODULE_12__["ArticleshowComponent"]
                    }
                ])
            ]
        })
    ], ArticleModule);
    return ArticleModule;
}());



/***/ }),

/***/ "./src/app/article/articleform/articleform.component.css":
/*!***************************************************************!*\
  !*** ./src/app/article/articleform/articleform.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUvYXJ0aWNsZWZvcm0vYXJ0aWNsZWZvcm0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/article/articleform/articleform.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/article/articleform/articleform.component.ts ***!
  \**************************************************************/
/*! exports provided: ArticleformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleformComponent", function() { return ArticleformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_articlemodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/articlemodel */ "./src/app/article/model/articlemodel.ts");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/service.service */ "./src/app/article/service/service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../core/shared/service/authservice.service */ "./src/app/core/shared/service/authservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var ArticleformComponent = /** @class */ (function () {
    function ArticleformComponent(service, spinner, route, authservice, router) {
        this.service = service;
        this.spinner = spinner;
        this.route = route;
        this.authservice = authservice;
        this.router = router;
        this._entity = new _model_articlemodel__WEBPACK_IMPORTED_MODULE_1__["Article"]();
        this.files = [];
        console.log(this.route.snapshot.paramMap.get('id'));
    }
    Object.defineProperty(ArticleformComponent.prototype, "Entity", {
        get: function () {
            return this._entity;
        },
        set: function (value) {
            this._entity = value;
        },
        enumerable: true,
        configurable: true
    });
    ArticleformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.checktoken().subscribe(function (val) {
            if (val !== 'OK') {
                alert('權限不足或失效 請重新登入');
                _this.router.navigate(['login']);
            }
        });
        this.spinner.show();
        var ID = this.route.snapshot.paramMap.get('id');
        if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(ID)) {
            this.AddNew();
            this.spinner.hide();
        }
        else {
            this.service.getEntityById(ID).subscribe(function (val) {
                _this.Entity = val;
                _this.spinner.hide();
            }, function (err) {
                alert('Not Found');
                _this.spinner.hide();
            });
        }
    };
    ArticleformComponent.prototype.AddNew = function () {
        var newEntity = new _model_articlemodel__WEBPACK_IMPORTED_MODULE_1__["Article"]();
        var now = new Date;
        var utc_timestamp = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
        newEntity.Id = 'tea' + '-' + utc_timestamp.toString();
        this.Entity = newEntity;
    };
    ArticleformComponent.prototype.SaveEntity = function () {
        var _this = this;
        if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.Entity.Title)) {
            alert('請輸入名稱');
            return;
        }
        this.spinner.show();
        this.service.postEntity(this.Entity).subscribe(function (res) {
            alert('儲存完畢');
            // if (isNullOrUndefined(this.Entity.Coordinates) !== true) {
            //  this.addMarker();
            // }
            _this.spinner.hide();
            window.open('#/articlelist', '_self');
        }, function (err) {
            alert(err);
            _this.spinner.hide();
        });
    };
    ArticleformComponent.prototype.dropped = function (files) {
        var _this = this;
        this.files = files;
        var _loop_1 = function (droppedFile) {
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    // Here you can access the real file
                    console.log(droppedFile.relativePath, file);
                    if (file.size > 4194304) {
                        alert(file.name + ' 已經大於4mb,請縮小後再上傳');
                        return;
                    }
                    // You could upload it like this:
                    var formData = new FormData();
                    formData.append(file.name, file, droppedFile.relativePath);
                    _this.spinner.show();
                    _this.service.postImage(formData).subscribe(function (val) {
                        var newImage = new _model_articlemodel__WEBPACK_IMPORTED_MODULE_1__["Page"]();
                        newImage.Name = 'Page';
                        newImage.Image_Url = val;
                        if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(_this.Entity.Pages)) {
                            var images = [];
                            images.push(newImage);
                            _this.Entity.Pages = images;
                        }
                        else {
                            _this.Entity.Pages.push(newImage);
                        }
                        _this.spinner.hide();
                    });
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
                var fileEntry = droppedFile.fileEntry;
                console.log(droppedFile.relativePath, fileEntry);
            }
        };
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var droppedFile = files_1[_i];
            _loop_1(droppedFile);
        }
    };
    ArticleformComponent.prototype.autopage = function () {
        if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.Entity.Pages.length) !== true) {
            var totalpages_1 = this.Entity.Pages.length;
            var i_1 = 0;
            this.Entity.Pages.forEach(function (p) {
                i_1++;
                p.Name = i_1 + '/' + totalpages_1;
            });
        }
    };
    ArticleformComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    ArticleformComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    ArticleformComponent.prototype.RemoveImage = function (i) {
        i++;
        var orginialItems = this.Entity.Pages;
        var filterItems = orginialItems.slice(0, i - 1).concat(orginialItems.slice(i, orginialItems.length));
        this.Entity.Pages = filterItems;
    };
    ArticleformComponent.ctorParameters = function () { return [
        { type: _service_service_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_6__["AuthserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ArticleformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-articleform',
            template: __importDefault(__webpack_require__(/*! raw-loader!./articleform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/article/articleform/articleform.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./articleform.component.css */ "./src/app/article/articleform/articleform.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_6__["AuthserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ArticleformComponent);
    return ArticleformComponent;
}());



/***/ }),

/***/ "./src/app/article/articlelist/articlelist.component.css":
/*!***************************************************************!*\
  !*** ./src/app/article/articlelist/articlelist.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUvYXJ0aWNsZWxpc3QvYXJ0aWNsZWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/article/articlelist/articlelist.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/article/articlelist/articlelist.component.ts ***!
  \**************************************************************/
/*! exports provided: ArticlelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticlelistComponent", function() { return ArticlelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/service.service */ "./src/app/article/service/service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/shared/service/authservice.service */ "./src/app/core/shared/service/authservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var ArticlelistComponent = /** @class */ (function () {
    function ArticlelistComponent(service, spinner, route, authservice, router) {
        this.service = service;
        this.spinner = spinner;
        this.route = route;
        this.authservice = authservice;
        this.router = router;
        this._list = [];
    }
    Object.defineProperty(ArticlelistComponent.prototype, "List", {
        get: function () {
            return this._list;
        },
        set: function (value) {
            this._list = value;
        },
        enumerable: true,
        configurable: true
    });
    ArticlelistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.checktoken().subscribe(function (val) {
            if (val === 'OK') {
                _this.GetList();
            }
            else {
                alert('權限不足或失效 請重新登入');
                _this.router.navigate(['login']);
            }
        });
    };
    ArticlelistComponent.prototype.GetList = function () {
        var _this = this;
        this.spinner.show();
        this.service.getList().subscribe(function (list) {
            _this.List = list;
            _this.spinner.hide();
        });
    };
    ArticlelistComponent.prototype.openform = function (Id) {
        window.open('#/articleform/' + Id, '_self');
    };
    ArticlelistComponent.prototype.showarticle = function (Id) {
        window.open('#/articleshow/' + Id, '_blank');
    };
    ArticlelistComponent.prototype.delete = function (Id) {
        var _this = this;
        if (confirm('確定刪除 ID: ' + Id + '?')) {
            this.List.forEach(function (item, index) {
                if (item.Id === Id) {
                    _this.List.splice(index, 1);
                }
            });
            this.service.deleteEntity(Id).subscribe(function (res) {
                console.log(res);
            }, function (err) {
                alert(err);
            });
        }
    };
    ArticlelistComponent.ctorParameters = function () { return [
        { type: _service_service_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_4__["AuthserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    ArticlelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-articlelist',
            template: __importDefault(__webpack_require__(/*! raw-loader!./articlelist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/article/articlelist/articlelist.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./articlelist.component.css */ "./src/app/article/articlelist/articlelist.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_1__["ArticleService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_4__["AuthserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ArticlelistComponent);
    return ArticlelistComponent;
}());



/***/ }),

/***/ "./src/app/article/articleshow/articleshow.component.css":
/*!***************************************************************!*\
  !*** ./src/app/article/articleshow/articleshow.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FydGljbGUvYXJ0aWNsZXNob3cvYXJ0aWNsZXNob3cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/article/articleshow/articleshow.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/article/articleshow/articleshow.component.ts ***!
  \**************************************************************/
/*! exports provided: ArticleshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleshowComponent", function() { return ArticleshowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_articlemodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/articlemodel */ "./src/app/article/model/articlemodel.ts");
/* harmony import */ var _service_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/service.service */ "./src/app/article/service/service.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var ArticleshowComponent = /** @class */ (function () {
    function ArticleshowComponent(service, spinner, route) {
        this.service = service;
        this.spinner = spinner;
        this.route = route;
        this._list = [];
        this._entity = new _model_articlemodel__WEBPACK_IMPORTED_MODULE_1__["Article"]();
    }
    Object.defineProperty(ArticleshowComponent.prototype, "List", {
        get: function () {
            return this._list;
        },
        set: function (value) {
            this._list = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ArticleshowComponent.prototype, "Entity", {
        get: function () {
            return this._entity;
        },
        set: function (value) {
            this._entity = value;
        },
        enumerable: true,
        configurable: true
    });
    ArticleshowComponent.prototype.ngOnInit = function () {
        var _this = this;
        var ID = this.route.snapshot.paramMap.get('id');
        this.GetList();
        if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(ID)) {
            this.spinner.hide();
        }
        else {
            this.service.getEntityById(ID).subscribe(function (val) {
                _this.Entity = val;
                _this.spinner.hide();
            }, function (err) {
                alert('Not Found');
                _this.spinner.hide();
            });
        }
    };
    ArticleshowComponent.prototype.GetList = function () {
        var _this = this;
        this.spinner.show();
        this.service.getList().subscribe(function (val) {
            _this.List = val;
            // this.spinner.hide();
        }, function (err) {
            alert('Not Found');
            _this.spinner.hide();
        });
    };
    ArticleshowComponent.prototype.filterForArticles = function (filterVal) {
        if (filterVal === '-1') {
        }
        else {
            this.Entity = this.List[Number(filterVal)];
        }
    };
    ArticleshowComponent.ctorParameters = function () { return [
        { type: _service_service_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    ArticleshowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-articleshow',
            template: __importDefault(__webpack_require__(/*! raw-loader!./articleshow.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/article/articleshow/articleshow.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./articleshow.component.css */ "./src/app/article/articleshow/articleshow.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_service_service__WEBPACK_IMPORTED_MODULE_2__["ArticleService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ArticleshowComponent);
    return ArticleshowComponent;
}());



/***/ }),

/***/ "./src/app/article/model/articlemodel.ts":
/*!***********************************************!*\
  !*** ./src/app/article/model/articlemodel.ts ***!
  \***********************************************/
/*! exports provided: Article, Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Article", function() { return Article; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Page", function() { return Page; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Article = /** @class */ (function () {
    function Article() {
    }
    return Article;
}());

var Page = /** @class */ (function () {
    function Page() {
    }
    return Page;
}());



/***/ }),

/***/ "./src/app/article/service/service.service.ts":
/*!****************************************************!*\
  !*** ./src/app/article/service/service.service.ts ***!
  \****************************************************/
/*! exports provided: ArticleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleService", function() { return ArticleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ArticleService = /** @class */ (function () {
    function ArticleService(http) {
        this.http = http;
        this.site = 'https://leecloud.azurewebsites.net/'; // URL to web api
        this.url = 'api/articleapi/';
        this.postImgurl = 'api/UploadFileapi/';
    }
    ArticleService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    ArticleService.prototype.getList = function () {
        var url = this.site + this.url;
        return this.http.get(url);
    };
    ArticleService.prototype.getEntityById = function (id) {
        var url = this.site + this.url + id;
        return this.http.get(url);
    };
    ArticleService.prototype.postEntity = function (entity) {
        var url = this.site + this.url;
        return this.http.post(url, entity);
    };
    ArticleService.prototype.putEntity = function (entity) {
        var url = this.site + this.url + entity.Id;
        this.http.put(url, entity).subscribe(function (val) {
            console.log('PUT call successful value returned in body', val);
        }, function (response) {
            console.log('PUT call in error', response);
        }, function () {
            console.log('The PUT observable is now completed.');
        });
    };
    ArticleService.prototype.deleteEntity = function (id) {
        var url = this.site + this.url + id;
        return this.http.delete(url);
    };
    ArticleService.prototype.postImage = function (file) {
        var url = this.site + this.postImgurl;
        // Headers
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            ContentType: 'multipart/form-data'
        });
        // return  this.http.post(url, file, {headers: headers});
        return this.http
            .post(url, file, { headers: headers, responseType: 'text' });
    };
    ArticleService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ArticleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ArticleService);
    return ArticleService;
}());



/***/ }),

/***/ "./src/app/businesscenter/bcform/bcform.component.css":
/*!************************************************************!*\
  !*** ./src/app/businesscenter/bcform/bcform.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img {\r\n    width: 40%;\r\n    margin-bottom: 10%;\r\n  }\r\n  .container {\r\n    min-height: 50%;\r\n    width: 50%;\r\n  }\r\n  .card-picture {\r\n    width: 23%;\r\n    margin-bottom: 2%;\r\n    \r\n  }\r\n  .search-form {\r\n    width: 90%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzaW5lc3NjZW50ZXIvYmNmb3JtL2JjZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjs7RUFFbkI7RUFFQTtJQUNFLFVBQVU7RUFDWiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzY2VudGVyL2JjZm9ybS9iY2Zvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWcge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICB9XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBtaW4taGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gIH1cclxuICAuY2FyZC1waWN0dXJlIHtcclxuICAgIHdpZHRoOiAyMyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWZvcm0ge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/businesscenter/bcform/bcform.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/businesscenter/bcform/bcform.component.ts ***!
  \***********************************************************/
/*! exports provided: BcformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BcformComponent", function() { return BcformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_BusinessCenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/BusinessCenter */ "./src/app/businesscenter/model/BusinessCenter.ts");
/* harmony import */ var _service_bcservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/bcservice.service */ "./src/app/businesscenter/service/bcservice.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _bcformmodal_bcformmodal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../bcformmodal/bcformmodal.component */ "./src/app/businesscenter/bcformmodal/bcformmodal.component.ts");
/* harmony import */ var _businesshourmodal_businesshourmodal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../businesshourmodal/businesshourmodal.component */ "./src/app/businesscenter/businesshourmodal/businesshourmodal.component.ts");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/google-maps */ "./node_modules/@angular/google-maps/fesm5/google-maps.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










var BcformComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function BcformComponent(bcservice, spinner, route, modalService) {
        this.bcservice = bcservice;
        this.spinner = spinner;
        this.route = route;
        this.modalService = modalService;
        this._entity = new _model_BusinessCenter__WEBPACK_IMPORTED_MODULE_1__["BusinessCenter"]();
        this.files = [];
        this.zoom = 14;
        this.options = {
            mapTypeId: 'roadmap',
            zoomControl: true,
            scrollwheel: false,
            disableDoubleClickZoom: false,
            maxZoom: 15,
            minZoom: 8,
        };
        this.markers = [];
        console.log(this.route.snapshot.paramMap.get('id'));
    }
    Object.defineProperty(BcformComponent.prototype, "Entity", {
        get: function () {
            return this._entity;
        },
        set: function (value) {
            this._entity = value;
        },
        enumerable: true,
        configurable: true
    });
    BcformComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** spinner starts on init */
        this.spinner.show();
        var ID = this.route.snapshot.paramMap.get('id');
        if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(ID)) {
            this.AddNew();
            this.spinner.hide();
        }
        else {
            this.bcservice.getEntityById(ID).subscribe(function (val) {
                _this.Entity = val;
                _this.spinner.hide();
                if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(_this.Entity.Coordinates) !== true) {
                    _this.addMarker();
                }
            }, function (err) {
                alert('Not Found');
                _this.spinner.hide();
            });
        }
        if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.Entity.Coordinates) !== true) {
            this.addMarker();
        }
        else {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
            });
        }
    };
    /**
     * name
     */
    BcformComponent.prototype.AddNew = function () {
        var newEntity = new _model_BusinessCenter__WEBPACK_IMPORTED_MODULE_1__["BusinessCenter"]();
        var now = new Date;
        var utc_timestamp = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
        newEntity.Id = 'bc' + '-' + utc_timestamp.toString();
        this.Entity = newEntity;
    };
    BcformComponent.prototype.SaveEntity = function () {
        var _this = this;
        if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.Entity.Name) || this.Entity.Name === '') {
            alert('請輸入名稱欄位');
            return;
        }
        this.spinner.show();
        this.bcservice.postEntity(this.Entity).subscribe(function (res) {
            alert('儲存完畢');
            // if (isNullOrUndefined(this.Entity.Coordinates) !== true) {
            //  this.addMarker();
            // }
            _this.spinner.hide();
            window.open('#/bccenter');
        }, function (err) {
            alert(err);
            _this.spinner.hide();
        });
    };
    BcformComponent.prototype.dropped = function (files) {
        var _this = this;
        this.files = files;
        var _loop_1 = function (droppedFile) {
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    // Here you can access the real file
                    console.log(droppedFile.relativePath, file);
                    // You could upload it like this:
                    var formData = new FormData();
                    formData.append(file.name, file, droppedFile.relativePath);
                    _this.spinner.show();
                    _this.bcservice.postImage(formData).subscribe(function (val) {
                        var newImage = new _model_BusinessCenter__WEBPACK_IMPORTED_MODULE_1__["BusinessCenterImage"]();
                        newImage.Name = 'Image';
                        newImage.Image_Url = val;
                        if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(_this.Entity.Images)) {
                            var images = [];
                            images.push(newImage);
                            _this.Entity.Images = images;
                        }
                        else {
                            _this.Entity.Images.push(newImage);
                        }
                        _this.spinner.hide();
                    });
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
                var fileEntry = droppedFile.fileEntry;
                console.log(droppedFile.relativePath, fileEntry);
            }
        };
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var droppedFile = files_1[_i];
            _loop_1(droppedFile);
        }
    };
    BcformComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    BcformComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    BcformComponent.prototype.RemoveImage = function (i) {
        i++;
        var orginialItems = this.Entity.Images;
        var filterItems = orginialItems.slice(0, i - 1).concat(orginialItems.slice(i, orginialItems.length));
        this.Entity.Images = filterItems;
    };
    BcformComponent.prototype.openModal = function () {
        var initialState = {
            entity: this.Entity
        };
        this.bsModalRef = this.modalService.show(_bcformmodal_bcformmodal_component__WEBPACK_IMPORTED_MODULE_7__["BcformmodalComponent"], { initialState: initialState });
    };
    BcformComponent.prototype.openBusinessHourModal = function () {
        var initialState = {
            entity: this.Entity
        };
        this.bsModalRef = this.modalService.show(_businesshourmodal_businesshourmodal_component__WEBPACK_IMPORTED_MODULE_8__["BusinesshourmodalComponent"], { initialState: initialState });
    };
    BcformComponent.prototype.zoomIn = function () {
        if (this.zoom < this.options.maxZoom) {
            this.zoom++;
        }
    };
    BcformComponent.prototype.zoomOut = function () {
        if (this.zoom > this.options.minZoom) {
            this.zoom--;
        }
    };
    BcformComponent.prototype.addMarker = function () {
        this.markers = [];
        var coord = this.Entity.Coordinates.split(',');
        this.markers.push({
            position: {
                lat: Number(coord[0]),
                lng: Number(coord[1]),
            },
            label: {
                color: 'red',
                text: this.Entity.Name + (this.markers.length + 1),
            },
            title: this.Entity.Name + (this.markers.length + 1),
            info: 'Marker info ' + (this.markers.length + 1),
            url: 'https://www.google.com/maps/place/' + this.Entity.Coordinates,
            options: {
                animation: google.maps.Animation.DROP
            }
        });
        this.center = {
            lat: Number(coord[0]),
            lng: Number(coord[1]),
        };
    };
    BcformComponent.prototype.opengooglemap = function () {
        var url = 'https://www.google.com/maps/place/' + this.Entity.Coordinates;
        window.open(url);
    };
    BcformComponent.ctorParameters = function () { return [
        { type: _service_bcservice_service__WEBPACK_IMPORTED_MODULE_2__["BcserviceService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_google_maps__WEBPACK_IMPORTED_MODULE_9__["GoogleMap"], { static: false }),
        __metadata("design:type", _angular_google_maps__WEBPACK_IMPORTED_MODULE_9__["GoogleMap"])
    ], BcformComponent.prototype, "map", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_google_maps__WEBPACK_IMPORTED_MODULE_9__["MapInfoWindow"], { static: false }),
        __metadata("design:type", _angular_google_maps__WEBPACK_IMPORTED_MODULE_9__["MapInfoWindow"])
    ], BcformComponent.prototype, "info", void 0);
    BcformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bcform',
            template: __importDefault(__webpack_require__(/*! raw-loader!./bcform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/bcform/bcform.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./bcform.component.css */ "./src/app/businesscenter/bcform/bcform.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_bcservice_service__WEBPACK_IMPORTED_MODULE_2__["BcserviceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]])
    ], BcformComponent);
    return BcformComponent;
}());



/***/ }),

/***/ "./src/app/businesscenter/bcformmodal/bcformmodal.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/businesscenter/bcformmodal/bcformmodal.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzY2VudGVyL2JjZm9ybW1vZGFsL2JjZm9ybW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/businesscenter/bcformmodal/bcformmodal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/businesscenter/bcformmodal/bcformmodal.component.ts ***!
  \*********************************************************************/
/*! exports provided: BcformmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BcformmodalComponent", function() { return BcformmodalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var BcformmodalComponent = /** @class */ (function () {
    function BcformmodalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.list = [{
                Name: '投影機',
                Comment: '',
                Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/1/icon01.png',
                Checked: false
            },
            {
                Name: '螢幕',
                Comment: '',
                Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/2/icon02.png',
                Checked: false
            },
            {
                Name: '白板',
                Comment: 'Comment',
                Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/3/icon03.png',
                Checked: false
            },
            {
                Name: 'WIFI',
                Comment: 'Comment',
                Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/4/icon04.png',
                Checked: false
            },
            {
                Name: '事務機',
                Comment: 'Comment',
                Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/5/icon05.png',
                Checked: false
            },
            {
                Name: '咖啡飲料',
                Comment: 'Comment',
                Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/6/icon06.png',
                Checked: false
            },
            {
                Name: '桌子',
                Comment: 'Comment',
                Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/7/icon07.png',
                Checked: false
            },
            {
                Name: '椅子',
                Comment: 'Comment',
                Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/8/icon08.png',
                Checked: false
            },
            {
                Name: '音響喇叭',
                Comment: 'Comment',
                Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/11/music-player.png',
                Checked: false
            },
            {
                Name: '麥克風',
                Comment: 'Comment',
                Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/12/microphone.png',
                Checked: false
            }];
    }
    BcformmodalComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.entity.Features) !== true) {
            this.entity.Features.forEach(function (item) {
                _this.list.forEach(function (i) {
                    if (i.Name === item.Name) {
                        i.Checked = true;
                    }
                });
            });
        }
    };
    BcformmodalComponent.prototype.Save = function () {
        var newlist = [];
        this.list.forEach(function (item) {
            if (item.Checked === true) {
                newlist.push(item);
            }
        });
        this.entity.Features = newlist;
        this.bsModalRef.hide();
    };
    BcformmodalComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"] }
    ]; };
    BcformmodalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bcformmodal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./bcformmodal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/bcformmodal/bcformmodal.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./bcformmodal.component.css */ "./src/app/businesscenter/bcformmodal/bcformmodal.component.css")).default]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]])
    ], BcformmodalComponent);
    return BcformmodalComponent;
}());



/***/ }),

/***/ "./src/app/businesscenter/bclist/bclist.component.css":
/*!************************************************************!*\
  !*** ./src/app/businesscenter/bclist/bclist.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div span.only-show-on-hover {\r\n    visibility: hidden;\r\n}\r\ndiv:hover span.only-show-on-hover  {\r\n    visibility: visible;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzaW5lc3NjZW50ZXIvYmNsaXN0L2JjbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9idXNpbmVzc2NlbnRlci9iY2xpc3QvYmNsaXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYgc3Bhbi5vbmx5LXNob3ctb24taG92ZXIge1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbmRpdjpob3ZlciBzcGFuLm9ubHktc2hvdy1vbi1ob3ZlciAge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/businesscenter/bclist/bclist.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/businesscenter/bclist/bclist.component.ts ***!
  \***********************************************************/
/*! exports provided: BclistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BclistComponent", function() { return BclistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_bcservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/bcservice.service */ "./src/app/businesscenter/service/bcservice.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var BclistComponent = /** @class */ (function () {
    function BclistComponent(bcservice, spinner, modalService) {
        this.bcservice = bcservice;
        this.spinner = spinner;
        this.modalService = modalService;
    }
    Object.defineProperty(BclistComponent.prototype, "List", {
        get: function () {
            return this._list;
        },
        set: function (value) {
            this._list = value;
        },
        enumerable: true,
        configurable: true
    });
    BclistComponent.prototype.ngOnInit = function () {
        this.GetList();
    };
    BclistComponent.prototype.GetList = function () {
        var _this = this;
        this.spinner.show();
        this.bcservice.getList().subscribe(function (list) {
            _this.List = list;
            _this.spinner.hide();
        });
    };
    BclistComponent.prototype.openform = function (Id) {
        window.open('#/bcform/' + Id, '_self');
    };
    BclistComponent.prototype.showform = function (Id) {
        window.open('#/bcshow/' + Id, '_self');
    };
    BclistComponent.prototype.delete = function (Id) {
        var _this = this;
        if (confirm('確定刪除 ID: ' + Id + '?')) {
            this.List.forEach(function (item, index) {
                if (item.Id === Id) {
                    _this.List.splice(index, 1);
                }
            });
            this.bcservice.deleteEntity(Id).subscribe(function (res) {
                console.log(res);
            }, function (err) {
                alert(err);
            });
        }
    };
    BclistComponent.prototype.popup = function (item) {
        var initialState = {
            entity: item
        };
        var imageurl = '';
        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(item.Images) !== true) {
            imageurl = item.Images[0].Image_Url;
        }
        this.pophtml = '<talbe> <tr> <td>' + item.Intro + '</td> </tr>';
        this.pophtml += '<tr><td>' + '<img src=' + imageurl + ' width=90% height=90%> </td></tr>';
        this.pophtml += '</table>';
        // this.bsModalRef = this.modalService.show(BcformmodalComponent, {initialState});
    };
    BclistComponent.prototype.closepopup = function () {
        this.bsModalRef.hide();
    };
    BclistComponent.ctorParameters = function () { return [
        { type: _service_bcservice_service__WEBPACK_IMPORTED_MODULE_1__["BcserviceService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] }
    ]; };
    BclistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bclist',
            template: __importDefault(__webpack_require__(/*! raw-loader!./bclist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/bclist/bclist.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./bclist.component.css */ "./src/app/businesscenter/bclist/bclist.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_bcservice_service__WEBPACK_IMPORTED_MODULE_1__["BcserviceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], BclistComponent);
    return BclistComponent;
}());



/***/ }),

/***/ "./src/app/businesscenter/bcshow/bcshow.component.css":
/*!************************************************************!*\
  !*** ./src/app/businesscenter/bcshow/bcshow.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzY2VudGVyL2Jjc2hvdy9iY3Nob3cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/businesscenter/bcshow/bcshow.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/businesscenter/bcshow/bcshow.component.ts ***!
  \***********************************************************/
/*! exports provided: BcshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BcshowComponent", function() { return BcshowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_BusinessCenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model/BusinessCenter */ "./src/app/businesscenter/model/BusinessCenter.ts");
/* harmony import */ var _service_bcservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/bcservice.service */ "./src/app/businesscenter/service/bcservice.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/google-maps */ "./node_modules/@angular/google-maps/fesm5/google-maps.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var BcshowComponent = /** @class */ (function () {
    function BcshowComponent(bcservice, spinner, route, modalService) {
        this.bcservice = bcservice;
        this.spinner = spinner;
        this.route = route;
        this.modalService = modalService;
        this._entity = new _model_BusinessCenter__WEBPACK_IMPORTED_MODULE_1__["BusinessCenter"]();
        this.zoom = 14;
        this.options = {
            mapTypeId: 'roadmap',
            zoomControl: true,
            scrollwheel: false,
            disableDoubleClickZoom: false,
            maxZoom: 15,
            minZoom: 8,
        };
        this.markers = [];
        console.log(this.route.snapshot.paramMap.get('id'));
    }
    Object.defineProperty(BcshowComponent.prototype, "Entity", {
        get: function () {
            return this._entity;
        },
        set: function (value) {
            this._entity = value;
        },
        enumerable: true,
        configurable: true
    });
    BcshowComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** spinner starts on init */
        this.spinner.show();
        var ID = this.route.snapshot.paramMap.get('id');
        if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(ID)) {
            alert('Wrong BC ID');
            this.spinner.hide();
        }
        else {
            this.bcservice.getEntityById(ID).subscribe(function (val) {
                _this.Entity = val;
                _this.spinner.hide();
                if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(_this.Entity.Coordinates) !== true) {
                    _this.addMarker();
                }
            }, function (err) {
                alert('Not Found');
                _this.spinner.hide();
            });
        }
        if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNullOrUndefined"])(this.Entity.Coordinates) !== true) {
            this.addMarker();
        }
        else {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.center = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
            });
        }
    };
    BcshowComponent.prototype.addMarker = function () {
        this.markers = [];
        var coord = this.Entity.Coordinates.split(',');
        this.markers.push({
            position: {
                lat: Number(coord[0]),
                lng: Number(coord[1]),
            },
            label: {
                color: 'red',
                text: this.Entity.Name + (this.markers.length + 1),
            },
            title: this.Entity.Name + (this.markers.length + 1),
            info: 'Marker info ' + (this.markers.length + 1),
            url: 'https://www.google.com/maps/place/' + this.Entity.Coordinates,
            options: {
                animation: google.maps.Animation.DROP
            }
        });
        this.center = {
            lat: Number(coord[0]),
            lng: Number(coord[1]),
        };
    };
    BcshowComponent.prototype.opengooglemap = function () {
        var url = 'https://www.google.com/maps/place/' + this.Entity.Coordinates;
        window.open(url);
    };
    BcshowComponent.ctorParameters = function () { return [
        { type: _service_bcservice_service__WEBPACK_IMPORTED_MODULE_2__["BcserviceService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_google_maps__WEBPACK_IMPORTED_MODULE_7__["GoogleMap"], { static: false }),
        __metadata("design:type", _angular_google_maps__WEBPACK_IMPORTED_MODULE_7__["GoogleMap"])
    ], BcshowComponent.prototype, "map", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_google_maps__WEBPACK_IMPORTED_MODULE_7__["MapInfoWindow"], { static: false }),
        __metadata("design:type", _angular_google_maps__WEBPACK_IMPORTED_MODULE_7__["MapInfoWindow"])
    ], BcshowComponent.prototype, "info", void 0);
    BcshowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bcshow',
            template: __importDefault(__webpack_require__(/*! raw-loader!./bcshow.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/bcshow/bcshow.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./bcshow.component.css */ "./src/app/businesscenter/bcshow/bcshow.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_bcservice_service__WEBPACK_IMPORTED_MODULE_2__["BcserviceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]])
    ], BcshowComponent);
    return BcshowComponent;
}());



/***/ }),

/***/ "./src/app/businesscenter/businesscenter.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/businesscenter/businesscenter.module.ts ***!
  \*********************************************************/
/*! exports provided: BusinesscenterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinesscenterModule", function() { return BusinesscenterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _bclist_bclist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bclist/bclist.component */ "./src/app/businesscenter/bclist/bclist.component.ts");
/* harmony import */ var _bcform_bcform_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bcform/bcform.component */ "./src/app/businesscenter/bcform/bcform.component.ts");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _bcformmodal_bcformmodal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bcformmodal/bcformmodal.component */ "./src/app/businesscenter/bcformmodal/bcformmodal.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _businesshourmodal_businesshourmodal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./businesshourmodal/businesshourmodal.component */ "./src/app/businesscenter/businesshourmodal/businesshourmodal.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/google-maps */ "./node_modules/@angular/google-maps/fesm5/google-maps.js");
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _bcshow_bcshow_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bcshow/bcshow.component */ "./src/app/businesscenter/bcshow/bcshow.component.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _requestmodal_requestmodal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./requestmodal/requestmodal.component */ "./src/app/businesscenter/requestmodal/requestmodal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






















var BusinesscenterModule = /** @class */ (function () {
    function BusinesscenterModule() {
    }
    BusinesscenterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_9__["NgxFileDropModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_10__["NgxSpinnerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_14__["MatInputModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"],
                _angular_google_maps__WEBPACK_IMPORTED_MODULE_17__["GoogleMapsModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_20__["CarouselModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: 'bccenter', component: _bclist_bclist_component__WEBPACK_IMPORTED_MODULE_7__["BclistComponent"]
                    },
                    {
                        path: 'bcform', component: _bcform_bcform_component__WEBPACK_IMPORTED_MODULE_8__["BcformComponent"]
                    },
                    {
                        path: 'bcform/:id', component: _bcform_bcform_component__WEBPACK_IMPORTED_MODULE_8__["BcformComponent"]
                    },
                    {
                        path: 'bcshow/:id', component: _bcshow_bcshow_component__WEBPACK_IMPORTED_MODULE_19__["BcshowComponent"]
                    }
                ])
            ],
            declarations: [_bclist_bclist_component__WEBPACK_IMPORTED_MODULE_7__["BclistComponent"], _bcform_bcform_component__WEBPACK_IMPORTED_MODULE_8__["BcformComponent"], _bcformmodal_bcformmodal_component__WEBPACK_IMPORTED_MODULE_11__["BcformmodalComponent"], _businesshourmodal_businesshourmodal_component__WEBPACK_IMPORTED_MODULE_15__["BusinesshourmodalComponent"],
                _bcshow_bcshow_component__WEBPACK_IMPORTED_MODULE_19__["BcshowComponent"], _requestmodal_requestmodal_component__WEBPACK_IMPORTED_MODULE_21__["RequestmodalComponent"]],
            entryComponents: [_bcformmodal_bcformmodal_component__WEBPACK_IMPORTED_MODULE_11__["BcformmodalComponent"], _businesshourmodal_businesshourmodal_component__WEBPACK_IMPORTED_MODULE_15__["BusinesshourmodalComponent"]]
        })
    ], BusinesscenterModule);
    return BusinesscenterModule;
}());



/***/ }),

/***/ "./src/app/businesscenter/businesshourmodal/businesshourmodal.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/businesscenter/businesshourmodal/businesshourmodal.component.css ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzY2VudGVyL2J1c2luZXNzaG91cm1vZGFsL2J1c2luZXNzaG91cm1vZGFsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/businesscenter/businesshourmodal/businesshourmodal.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/businesscenter/businesshourmodal/businesshourmodal.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BusinesshourmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinesshourmodalComponent", function() { return BusinesshourmodalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var BusinesshourmodalComponent = /** @class */ (function () {
    function BusinesshourmodalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
        this.list = [{
                Day: '星期一',
                StartTime: '09:00',
                EndTime: '18:00'
            },
            {
                Day: '星期二',
                StartTime: '09:00',
                EndTime: '18:00'
            },
            {
                Day: '星期三',
                StartTime: '09:00',
                EndTime: '18:00'
            },
            {
                Day: '星期四',
                StartTime: '09:00',
                EndTime: '18:00'
            },
            {
                Day: '星期五',
                StartTime: '09:00',
                EndTime: '18:00'
            },
            {
                Day: '星期六',
                StartTime: '09:00',
                EndTime: '18:00'
            },
            {
                Day: '星期日',
                StartTime: '09:00',
                EndTime: '18:00'
            }
        ];
    }
    BusinesshourmodalComponent.prototype.ngOnInit = function () {
        if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.entity.BusinessHours) !== true) {
            this.list = this.entity.BusinessHours;
        }
    };
    BusinesshourmodalComponent.prototype.Save = function () {
        this.entity.BusinessHours = this.list;
        this.bsModalRef.hide();
    };
    BusinesshourmodalComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"] }
    ]; };
    BusinesshourmodalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-businesshourmodal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./businesshourmodal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/businesshourmodal/businesshourmodal.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./businesshourmodal.component.css */ "./src/app/businesscenter/businesshourmodal/businesshourmodal.component.css")).default]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]])
    ], BusinesshourmodalComponent);
    return BusinesshourmodalComponent;
}());



/***/ }),

/***/ "./src/app/businesscenter/model/BusinessCenter.ts":
/*!********************************************************!*\
  !*** ./src/app/businesscenter/model/BusinessCenter.ts ***!
  \********************************************************/
/*! exports provided: BusinessCenter, BusinessCenterImage, BusinessCenterMeetingRoom, BusinessCenterFeature, BusinessHour, Request */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessCenter", function() { return BusinessCenter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessCenterImage", function() { return BusinessCenterImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessCenterMeetingRoom", function() { return BusinessCenterMeetingRoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessCenterFeature", function() { return BusinessCenterFeature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessHour", function() { return BusinessHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BusinessCenter = /** @class */ (function () {
    function BusinessCenter() {
    }
    return BusinessCenter;
}());

var BusinessCenterImage = /** @class */ (function () {
    function BusinessCenterImage() {
    }
    return BusinessCenterImage;
}());

var BusinessCenterMeetingRoom = /** @class */ (function () {
    function BusinessCenterMeetingRoom() {
    }
    return BusinessCenterMeetingRoom;
}());

var BusinessCenterFeature = /** @class */ (function () {
    function BusinessCenterFeature() {
    }
    return BusinessCenterFeature;
}());

var BusinessHour = /** @class */ (function () {
    function BusinessHour() {
    }
    return BusinessHour;
}());

var Request = /** @class */ (function () {
    function Request() {
    }
    return Request;
}());



/***/ }),

/***/ "./src/app/businesscenter/requestmodal/requestmodal.component.css":
/*!************************************************************************!*\
  !*** ./src/app/businesscenter/requestmodal/requestmodal.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzY2VudGVyL3JlcXVlc3Rtb2RhbC9yZXF1ZXN0bW9kYWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/businesscenter/requestmodal/requestmodal.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/businesscenter/requestmodal/requestmodal.component.ts ***!
  \***********************************************************************/
/*! exports provided: RequestmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestmodalComponent", function() { return RequestmodalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var RequestmodalComponent = /** @class */ (function () {
    function RequestmodalComponent(bsModalRef) {
        this.bsModalRef = bsModalRef;
    }
    RequestmodalComponent.prototype.ngOnInit = function () {
    };
    RequestmodalComponent.prototype.Save = function () {
        this.bsModalRef.hide();
    };
    RequestmodalComponent.prototype.SendEmail = function () {
    };
    RequestmodalComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"] }
    ]; };
    RequestmodalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-requestmodal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./requestmodal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/requestmodal/requestmodal.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./requestmodal.component.css */ "./src/app/businesscenter/requestmodal/requestmodal.component.css")).default]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"]])
    ], RequestmodalComponent);
    return RequestmodalComponent;
}());



/***/ }),

/***/ "./src/app/businesscenter/service/bcservice.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/businesscenter/service/bcservice.service.ts ***!
  \*************************************************************/
/*! exports provided: BcserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BcserviceService", function() { return BcserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var BcserviceService = /** @class */ (function () {
    function BcserviceService(http) {
        this.http = http;
        this.site = 'https://leecloud.azurewebsites.net/'; // URL to web api
        this.url = 'api/businesscenterapi/';
        this.postImgurl = 'api/UploadFileapi/';
    }
    BcserviceService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    BcserviceService.prototype.getList = function () {
        var url = this.site + this.url;
        return this.http.get(url);
    };
    BcserviceService.prototype.getEntityById = function (id) {
        var url = this.site + this.url + id;
        return this.http.get(url);
    };
    BcserviceService.prototype.postEntity = function (entity) {
        var url = this.site + this.url;
        return this.http.post(url, entity);
    };
    BcserviceService.prototype.putEntity = function (entity) {
        var url = this.site + this.url + entity.Id;
        this.http.put(url, entity).subscribe(function (val) {
            console.log('PUT call successful value returned in body', val);
        }, function (response) {
            console.log('PUT call in error', response);
        }, function () {
            console.log('The PUT observable is now completed.');
        });
    };
    BcserviceService.prototype.PostRequest = function (req) {
    };
    BcserviceService.prototype.deleteEntity = function (id) {
        var url = this.site + this.url + id;
        return this.http.delete(url);
    };
    BcserviceService.prototype.postImage = function (file) {
        var url = this.site + this.postImgurl;
        // Headers
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            ContentType: 'multipart/form-data'
        });
        // return  this.http.post(url, file, {headers: headers});
        return this.http
            .post(url, file, { headers: headers, responseType: 'text' });
    };
    BcserviceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    BcserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BcserviceService);
    return BcserviceService;
}());



/***/ }),

/***/ "./src/app/cart.component.ts":
/*!***********************************!*\
  !*** ./src/app/cart.component.ts ***!
  \***********************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_shop_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services/shop-cart.service */ "./src/app/Services/shop-cart.service.ts");
/* harmony import */ var _Services_emailservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/emailservice */ "./src/app/Services/emailservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var CartComponent = /** @class */ (function () {
    function CartComponent(shopcartservice, emailservice) {
        this.shopcartservice = shopcartservice;
        this.emailservice = emailservice;
        this.Note = '';
        this.shipmentfee = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.count = this.shopcartservice.con();
        this.shoplist = this.shopcartservice.shopList;
        this.totalamount = this.shopcartservice.totalamount();
        this.shopcartservice.sumup();
        this.sumuplist = this.shopcartservice.sumupList;
        this.caculateshipping();
    };
    CartComponent.prototype.countShopList = function () {
        this.count = this.shopcartservice.con();
    };
    CartComponent.prototype.remove = function (product) {
        this.shopcartservice.remove(product);
        this.updatecount();
        this.caculateshipping();
    };
    CartComponent.prototype.add = function (product) {
        this.shopcartservice.add(product);
        this.updatecount();
        this.caculateshipping();
    };
    CartComponent.prototype.updatecount = function () {
        this.count = this.shopcartservice.con();
        this.totalamount = this.shopcartservice.totalamount();
        this.shopcartservice.sumup();
        this.sumuplist = this.shopcartservice.sumupList;
    };
    CartComponent.prototype.gethtmlstring = function () {
        return this.shopcartservice.gethtml();
    };
    CartComponent.prototype.caculateshipping = function () {
        if (this.totalamount < 2000 && this.totalamount != 0) {
            this.shipmentfee = 95;
        }
        else {
            this.shipmentfee = 0;
        }
    };
    CartComponent.prototype.submitorder = function () {
        if (this.validate() == true && confirm("請確認您的訂購資訊: 總價-" + this.totalamount + "|電話-" + this.Phone + "|Email-" + this.Email + "|送件地址-" + this.Address)) {
            var ordernumber = "BC" + Number(new Date());
            this.htmlstring = "<style> table {border-collapse: collapse; width: 70%;} th, td {padding: 8px;text-align: left;border-bottom: 1px solid #ddd;}</style>";
            this.htmlstring = "<div>訂購人: " + this.Name + "</div><p>";
            this.htmlstring += "<div>電話: " + this.Phone + "</div><p>";
            this.htmlstring += "<div>Email: " + this.Email + "</div><p>";
            this.htmlstring += "<div>地址: " + this.Address + "</div><p>";
            this.htmlstring += "<div>備註: " + this.Note + "</div><p>";
            this.htmlstring += this.shopcartservice.gethtml();
            this.htmlstring += "<table width='70%' border-collapse='collapse' border='0'><tr><td>總數量:" + this.count + "</td>" + "</tr><tr><td>產品價格:" + this.totalamount + "</td><td>運費:" + this.shipmentfee + "</td><td>總價:" + (this.totalamount + this.shipmentfee) + "</td></tr>";
            this.htmlstring += "<tr><td>付款方式:" + this.paymenttype + "</td></row></table>";
            var subject = "中華生物科技訂單編號: " + this.generateordernumber();
            //  this.emailservice.(this.Email, subject, this.htmlstring)
            //   .subscribe(
            //              res  => console.log(res),
            //              error =>  console.log(<any>error))
            //  ; 
            alert("此功能停止使用 !! 感謝您的訂購, 您的訂單編號: " + this.generateordernumber() + " 已送出, 我們專員會與您聯絡訂購事項");
            window.location.href = "/";
        }
    };
    CartComponent.prototype.generateordernumber = function () {
        return this.shopcartservice.generateordernumber();
    };
    CartComponent.prototype.validate = function () {
        if (this.Name == null || this.Name == '') {
            alert("姓名" + " 不能空白");
            return false;
        }
        if (this.Address == null || this.Address == '') {
            alert("地址" + " 不能空白");
            return false;
        }
        if (this.Email == null || this.Email == '') {
            alert("Email" + " 不能空白");
            return false;
        }
        if (this.Phone == null || this.Phone == '') {
            alert("電話" + " 不能空白");
            return false;
        }
        if (this.paymenttype == null || this.paymenttype == '') {
            alert("請選擇付款方式");
            return false;
        }
        return true;
    };
    CartComponent.ctorParameters = function () { return [
        { type: _Services_shop_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShopCartService"] },
        { type: _Services_emailservice__WEBPACK_IMPORTED_MODULE_2__["EmailService"] }
    ]; };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'cart',
            template: __importDefault(__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart.component.html")).default,
        }),
        __metadata("design:paramtypes", [_Services_shop_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShopCartService"],
            _Services_emailservice__WEBPACK_IMPORTED_MODULE_2__["EmailService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/clientinventory/adimage/adimage.component.css":
/*!***************************************************************!*\
  !*** ./src/app/clientinventory/adimage/adimage.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGludmVudG9yeS9hZGltYWdlL2FkaW1hZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/clientinventory/adimage/adimage.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/clientinventory/adimage/adimage.component.ts ***!
  \**************************************************************/
/*! exports provided: AdimageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdimageComponent", function() { return AdimageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_shared_model_ImageLink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/shared/model/ImageLink */ "./src/app/core/shared/model/ImageLink.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../core/shared/service/authservice.service */ "./src/app/core/shared/service/authservice.service.ts");
/* harmony import */ var _core_shared_service_postservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../core/shared/service/postservice.service */ "./src/app/core/shared/service/postservice.service.ts");
/* harmony import */ var _invservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../invservice.service */ "./src/app/clientinventory/invservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









var AdimageComponent = /** @class */ (function () {
    function AdimageComponent(spinner, route, authservice, router, postservice, service) {
        this.spinner = spinner;
        this.route = route;
        this.authservice = authservice;
        this.router = router;
        this.postservice = postservice;
        this.service = service;
        this.files = [];
        this.list = [];
    }
    AdimageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.checktoken().subscribe(function (val) {
            if (val !== 'OK') {
                alert('權限不足或失效 請重新登入');
                _this.router.navigate(['login']);
            }
        });
        this.spinner.show();
        this.service.getAdImages().subscribe(function (res) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(res)) {
                _this.list = res;
            }
            _this.spinner.hide();
        }, function (error) {
            alert('內部錯誤');
            _this.spinner.hide();
        });
    };
    AdimageComponent.prototype.SaveEntity = function () {
        var _this = this;
        this.spinner.show();
        this.service.postAdImages(this.list).subscribe(function (res) {
            alert('儲存完畢');
            _this.spinner.hide();
            window.open('#/teaportal', '_self');
        }, function (err) {
            alert(err);
            _this.spinner.hide();
        });
    };
    AdimageComponent.prototype.dropped = function (files) {
        var _this = this;
        this.files = files;
        var _loop_1 = function (droppedFile) {
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    // Here you can access the real file
                    console.log(droppedFile.relativePath, file);
                    if (file.size > 4194304) {
                        alert(file.name + ' 已經大於4mb,請縮小後再上傳');
                        return;
                    }
                    // You could upload it like this:
                    var formData = new FormData();
                    formData.append(file.name, file, droppedFile.relativePath);
                    _this.spinner.show();
                    _this.postservice.postImage(formData).subscribe(function (val) {
                        var newImage = new _core_shared_model_ImageLink__WEBPACK_IMPORTED_MODULE_1__["ImageLink"]();
                        newImage.Name = 'Title';
                        newImage.Image_Url = val;
                        _this.list.push(newImage);
                        _this.spinner.hide();
                    });
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
                var fileEntry = droppedFile.fileEntry;
                console.log(droppedFile.relativePath, fileEntry);
            }
        };
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var droppedFile = files_1[_i];
            _loop_1(droppedFile);
        }
    };
    AdimageComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    AdimageComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    AdimageComponent.prototype.RemoveImage = function (i) {
        i++;
        var orginialItems = this.list;
        var filterItems = orginialItems.slice(0, i - 1).concat(orginialItems.slice(i, orginialItems.length));
        this.list = filterItems;
    };
    AdimageComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_5__["AuthserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _core_shared_service_postservice_service__WEBPACK_IMPORTED_MODULE_6__["PostFileService"] },
        { type: _invservice_service__WEBPACK_IMPORTED_MODULE_7__["InvserviceService"] }
    ]; };
    AdimageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-adimage',
            template: __importDefault(__webpack_require__(/*! raw-loader!./adimage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/adimage/adimage.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./adimage.component.css */ "./src/app/clientinventory/adimage/adimage.component.css")).default]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_5__["AuthserviceService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _core_shared_service_postservice_service__WEBPACK_IMPORTED_MODULE_6__["PostFileService"],
            _invservice_service__WEBPACK_IMPORTED_MODULE_7__["InvserviceService"]])
    ], AdimageComponent);
    return AdimageComponent;
}());



/***/ }),

/***/ "./src/app/clientinventory/clientinventory.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/clientinventory/clientinventory.module.ts ***!
  \***********************************************************/
/*! exports provided: ClientinventoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientinventoryModule", function() { return ClientinventoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _invupload_invupload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invupload/invupload.component */ "./src/app/clientinventory/invupload/invupload.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _invshow_invshow_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./invshow/invshow.component */ "./src/app/clientinventory/invshow/invshow.component.ts");
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _invlist_invlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./invlist/invlist.component */ "./src/app/clientinventory/invlist/invlist.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/clientinventory/login/login.component.ts");
/* harmony import */ var _core_material_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/material.module */ "./src/app/core/material.module.ts");
/* harmony import */ var _portal_portal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./portal/portal.component */ "./src/app/clientinventory/portal/portal.component.ts");
/* harmony import */ var _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/shared/shared.module */ "./src/app/core/shared/shared.module.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _adimage_adimage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./adimage/adimage.component */ "./src/app/clientinventory/adimage/adimage.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



















var ClientinventoryModule = /** @class */ (function () {
    function ClientinventoryModule() {
    }
    ClientinventoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_invupload_invupload_component__WEBPACK_IMPORTED_MODULE_3__["InvuploadComponent"], _invshow_invshow_component__WEBPACK_IMPORTED_MODULE_10__["InvshowComponent"], _invlist_invlist_component__WEBPACK_IMPORTED_MODULE_12__["InvlistComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"], _portal_portal_component__WEBPACK_IMPORTED_MODULE_15__["PortalComponent"], _adimage_adimage_component__WEBPACK_IMPORTED_MODULE_18__["AdimageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__["NgxFileDropModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _core_material_module__WEBPACK_IMPORTED_MODULE_14__["CustomMaterialModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_17__["ClipboardModule"],
                _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"].forRoot(),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_11__["CarouselModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: 'uploadinvfile', component: _invupload_invupload_component__WEBPACK_IMPORTED_MODULE_3__["InvuploadComponent"]
                    },
                    {
                        path: 'clientinv/:id', component: _invshow_invshow_component__WEBPACK_IMPORTED_MODULE_10__["InvshowComponent"]
                    },
                    {
                        path: 'clientlist', component: _invlist_invlist_component__WEBPACK_IMPORTED_MODULE_12__["InvlistComponent"]
                    },
                    {
                        path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"]
                    },
                    {
                        path: 'teaportal', component: _portal_portal_component__WEBPACK_IMPORTED_MODULE_15__["PortalComponent"]
                    },
                    {
                        path: 'adimage', component: _adimage_adimage_component__WEBPACK_IMPORTED_MODULE_18__["AdimageComponent"]
                    }
                ])
            ],
            providers: []
        })
    ], ClientinventoryModule);
    return ClientinventoryModule;
}());



/***/ }),

/***/ "./src/app/clientinventory/invlist/invlist.component.css":
/*!***************************************************************!*\
  !*** ./src/app/clientinventory/invlist/invlist.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGludmVudG9yeS9pbnZsaXN0L2ludmxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/clientinventory/invlist/invlist.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/clientinventory/invlist/invlist.component.ts ***!
  \**************************************************************/
/*! exports provided: InvlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvlistComponent", function() { return InvlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _invservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../invservice.service */ "./src/app/clientinventory/invservice.service.ts");
/* harmony import */ var _core_shared_service_cryptservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/shared/service/cryptservice.service */ "./src/app/core/shared/service/cryptservice.service.ts");
/* harmony import */ var _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../core/shared/service/authservice.service */ "./src/app/core/shared/service/authservice.service.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var InvlistComponent = /** @class */ (function () {
    function InvlistComponent(spinner, route, service, cryptservice, authservice, router, clipboardservice) {
        this.spinner = spinner;
        this.route = route;
        this.service = service;
        this.cryptservice = cryptservice;
        this.authservice = authservice;
        this.router = router;
        this.clipboardservice = clipboardservice;
    }
    Object.defineProperty(InvlistComponent.prototype, "Search", {
        get: function () {
            return this._search;
        },
        set: function (value) {
            this._search = value;
            this.FilterList(value);
        },
        enumerable: true,
        configurable: true
    });
    InvlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.checktoken().subscribe(function (val) {
            if (val === 'OK') {
                _this.GetList();
            }
            else {
                alert('權限不足或失效 請重新登入');
                _this.router.navigate(['login']);
            }
        });
    };
    InvlistComponent.prototype.FilterList = function (filter) {
        if (filter === '' || filter === undefined) {
            this.list = this.templist;
        }
        else {
            this.list = this.templist.filter(function (x) { return x.ClientId.includes(filter) || x.ClientName.includes(filter); });
        }
    };
    InvlistComponent.prototype.GetList = function () {
        var _this = this;
        this.spinner.show();
        this.service.currentMessage.subscribe(function (val) {
            if (val.length === 0) {
                _this.service.getList().subscribe(function (vals) {
                    _this.list = vals;
                    _this.service.changeMessage(vals);
                    _this.templist = _this.list;
                    _this.spinner.hide();
                }, function (err) {
                    alert('Not Found or Error');
                    _this.spinner.hide();
                });
            }
            else {
                _this.list = val;
                _this.templist = _this.list;
                _this.spinner.hide();
            }
        });
    };
    InvlistComponent.prototype.showEntity = function (id) {
        var cryptId = this.cryptservice.encrypt(id + '|' + 'manager');
        this.sendEncodeUrl(cryptId);
    };
    InvlistComponent.prototype.showUserEntity = function (id) {
        var cryptId = this.cryptservice.encrypt(id + '|' + 'user');
        this.sendEncodeUrl(cryptId);
    };
    InvlistComponent.prototype.sendEncodeUrl = function (url) {
        window.open('#/clientinv/888?key=' + url, '_self');
    };
    InvlistComponent.prototype.copyEncodeUrl = function (item) {
        var cryptId = this.cryptservice.encrypt(item.ClientId + '|' + 'user');
        var copyurl = 'http://biotaiwan.azurewebsites.net/#/clientinv/888?key=' + cryptId;
        this.clipboardservice.copyFromContent(copyurl);
        this.resetMessages();
        item.Message = '(已複製)';
    };
    InvlistComponent.prototype.resetMessages = function () {
        this.list.forEach(function (item) { return item.Message = ''; });
    };
    InvlistComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _invservice_service__WEBPACK_IMPORTED_MODULE_3__["InvserviceService"] },
        { type: _core_shared_service_cryptservice_service__WEBPACK_IMPORTED_MODULE_4__["CryptserviceService"] },
        { type: _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_5__["AuthserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: ngx_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardService"] }
    ]; };
    InvlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invlist',
            template: __importDefault(__webpack_require__(/*! raw-loader!./invlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/invlist/invlist.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./invlist.component.css */ "./src/app/clientinventory/invlist/invlist.component.css")).default]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _invservice_service__WEBPACK_IMPORTED_MODULE_3__["InvserviceService"], _core_shared_service_cryptservice_service__WEBPACK_IMPORTED_MODULE_4__["CryptserviceService"],
            _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_5__["AuthserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_clipboard__WEBPACK_IMPORTED_MODULE_6__["ClipboardService"]])
    ], InvlistComponent);
    return InvlistComponent;
}());



/***/ }),

/***/ "./src/app/clientinventory/invservice.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/clientinventory/invservice.service.ts ***!
  \*******************************************************/
/*! exports provided: InvserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvserviceService", function() { return InvserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var InvserviceService = /** @class */ (function () {
    function InvserviceService(http) {
        this.http = http;
        this.site = 'https://leecloud.azurewebsites.net/'; // URL to web api
        // private site = 'https://localhost:44347/';
        this.url = 'api/articleapi/';
        this.postFileurl = 'api/UploadExcelApi/';
        this.postPartialFileUrl = 'api/UploadPartialExcelApi/';
        this.postUpdateTimeUrl = 'api/ClientInventoryApi/';
        this.postTempImageUrl = 'api/UploadTempApi/';
        this.getEntityUrl = 'api/ClientInventoryApi/client/';
        this.getImagesUrl = 'api/ClientInventoryApi/temp/6';
        this.getListUrl = 'api/ClientInventoryApi/';
        this.getLastUpdateUrl = 'api/ClientInventoryApi/LastUpdate/888';
        this.adImagesUrl = 'api/ClientInventoryApi/AdImages/888';
        this._list = [];
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.list);
        this.currentMessage = this.messageSource.asObservable();
    }
    Object.defineProperty(InvserviceService.prototype, "list", {
        get: function () {
            return this._list;
        },
        set: function (value) {
            this._list = value;
        },
        enumerable: true,
        configurable: true
    });
    InvserviceService.prototype.changeMessage = function (message) {
        this.messageSource.next(message);
    };
    InvserviceService.prototype.postFile = function (file) {
        var url = this.site + this.postFileurl;
        // Headers
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            ContentType: 'multipart/form-data'
        });
        // return  this.http.post(url, file, {headers: headers});
        return this.http
            .post(url, file, { headers: headers, responseType: 'text' });
    };
    InvserviceService.prototype.postPartialFile = function (file) {
        var url = this.site + this.postPartialFileUrl;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            ContentType: 'multipart/form-data'
        });
        return this.http.post(url, file, { headers: headers, responseType: 'text' });
    };
    InvserviceService.prototype.postTempImage = function (file) {
        var url = this.site + this.postTempImageUrl;
        // Headers
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            ContentType: 'multipart/form-data'
        });
        // return  this.http.post(url, file, {headers: headers});
        return this.http
            .post(url, file, { headers: headers, responseType: 'text' });
    };
    InvserviceService.prototype.getEntityById = function (id) {
        var url = this.site + this.getEntityUrl + id;
        return this.http.get(url);
    };
    InvserviceService.prototype.getList = function () {
        var url = this.site + this.getListUrl;
        return this.http.get(url);
    };
    InvserviceService.prototype.getImages = function () {
        var url = this.site + this.getImagesUrl;
        return this.http.get(url);
    };
    InvserviceService.prototype.updateTime = function () {
        var url = this.site + this.postUpdateTimeUrl;
        var datestring = new Date().toLocaleString();
        return this.http.put(url, { 'date': datestring });
    };
    InvserviceService.prototype.getLastUpdateTime = function () {
        var url = this.site + this.getLastUpdateUrl;
        return this.http.get(url);
    };
    InvserviceService.prototype.getAdImages = function () {
        var url = this.site + this.adImagesUrl;
        return this.http.get(url);
    };
    InvserviceService.prototype.postAdImages = function (adimages) {
        var url = this.site + this.adImagesUrl;
        // Headers
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            ContentType: 'multipart/form-data'
        });
        // return  this.http.post(url, file, {headers: headers});
        return this.http
            .post(url, adimages, { headers: headers, responseType: 'text' });
    };
    InvserviceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    InvserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InvserviceService);
    return InvserviceService;
}());



/***/ }),

/***/ "./src/app/clientinventory/invshow/invshow.component.css":
/*!***************************************************************!*\
  !*** ./src/app/clientinventory/invshow/invshow.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGludmVudG9yeS9pbnZzaG93L2ludnNob3cuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/clientinventory/invshow/invshow.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/clientinventory/invshow/invshow.component.ts ***!
  \**************************************************************/
/*! exports provided: InvshowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvshowComponent", function() { return InvshowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _invservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../invservice.service */ "./src/app/clientinventory/invservice.service.ts");
/* harmony import */ var _model_projectinventory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/projectinventory */ "./src/app/clientinventory/model/projectinventory.ts");
/* harmony import */ var _core_shared_service_cryptservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../core/shared/service/cryptservice.service */ "./src/app/core/shared/service/cryptservice.service.ts");
/* harmony import */ var _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../core/shared/service/authservice.service */ "./src/app/core/shared/service/authservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var InvshowComponent = /** @class */ (function () {
    function InvshowComponent(spinner, route, service, cryptservice, authservice, router) {
        this.spinner = spinner;
        this.route = route;
        this.service = service;
        this.cryptservice = cryptservice;
        this.authservice = authservice;
        this.router = router;
        this.IsManager = false;
        this._entity = new _model_projectinventory__WEBPACK_IMPORTED_MODULE_4__["ClientInventory"]();
        this._stock_sum = 0;
        this._return_sum = 0;
        this._notreturn_sum = 0;
    }
    Object.defineProperty(InvshowComponent.prototype, "Entity", {
        get: function () {
            return this._entity;
        },
        set: function (value) {
            this._entity = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvshowComponent.prototype, "stock_sum", {
        get: function () {
            return this._stock_sum;
        },
        set: function (value) {
            this._stock_sum = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvshowComponent.prototype, "return_sum", {
        get: function () {
            return this._return_sum;
        },
        set: function (value) {
            this._return_sum = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InvshowComponent.prototype, "notreturn_sum", {
        get: function () {
            return this._notreturn_sum;
        },
        set: function (value) {
            this._notreturn_sum = value;
        },
        enumerable: true,
        configurable: true
    });
    InvshowComponent.prototype.ngOnInit = function () {
        var _this = this;
        var EncryptID = this.route.snapshot.queryParamMap.get('key');
        var IDstring = this.cryptservice.decrypt(EncryptID);
        var ID = IDstring.split('|')[0];
        var role = IDstring.split('|')[1];
        switch (role) {
            case 'manager': {
                this.IsManager = true;
                this.authservice.checktoken().subscribe(function (val) {
                    if (val !== 'OK') {
                        alert('權限不足或失效 請重新登入');
                        _this.router.navigate(['login']);
                    }
                });
                break;
            }
            case 'user': {
                this.IsManager = false;
                break;
            }
            default: {
                alert('無權限進入');
                return;
            }
        }
        this.GetEntity(ID);
        this.GetProjectImages();
        this.GetAdImages();
    };
    InvshowComponent.prototype.GetEntity = function (ID) {
        var _this = this;
        this.spinner.show();
        this.service.currentMessage.subscribe(function (val) {
            if (val.length === 0) {
                _this.service.getEntityById(ID).subscribe(function (value) {
                    _this.Entity = value;
                    _this.FilterForUser();
                    _this.spinner.hide();
                }, function (err) {
                    alert('無此客戶或發生錯誤');
                    _this.spinner.hide();
                });
            }
            else {
                _this.Entity = val.find(function (x) { return x.ClientId === ID; });
                _this.FilterForUser();
                _this.spinner.hide();
            }
        });
    };
    InvshowComponent.prototype.GetProjectImages = function () {
        var _this = this;
        this.service.getImages().subscribe(function (val) {
            _this.images = val;
        }, function (err) {
            alert('溫度圖error');
        });
    };
    InvshowComponent.prototype.FilterForUser = function () {
        var _this = this;
        if (this.IsManager === false) {
            var templist_1 = [];
            this.Entity.Inventories.forEach(function (i) {
                if (i.NotReturn !== 0) {
                    templist_1.push(i);
                    _this.stock_sum += i.Stock;
                    _this.return_sum += i.Return;
                    _this.notreturn_sum += i.NotReturn;
                }
            });
            this.userInvertories = templist_1;
        }
        else {
            this.Entity.Inventories.forEach(function (i) {
                if (i.NotReturn !== 0) {
                    _this.stock_sum += i.Stock;
                    _this.return_sum += i.Return;
                    _this.notreturn_sum += i.NotReturn;
                }
            });
        }
    };
    InvshowComponent.prototype.GetAdImages = function () {
        var _this = this;
        this.service.getAdImages().subscribe(function (res) {
            _this.AdImages = res;
        });
    };
    InvshowComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _invservice_service__WEBPACK_IMPORTED_MODULE_3__["InvserviceService"] },
        { type: _core_shared_service_cryptservice_service__WEBPACK_IMPORTED_MODULE_5__["CryptserviceService"] },
        { type: _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_6__["AuthserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    InvshowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invshow',
            template: __importDefault(__webpack_require__(/*! raw-loader!./invshow.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/invshow/invshow.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./invshow.component.css */ "./src/app/clientinventory/invshow/invshow.component.css")).default]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _invservice_service__WEBPACK_IMPORTED_MODULE_3__["InvserviceService"], _core_shared_service_cryptservice_service__WEBPACK_IMPORTED_MODULE_5__["CryptserviceService"],
            _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_6__["AuthserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InvshowComponent);
    return InvshowComponent;
}());



/***/ }),

/***/ "./src/app/clientinventory/invupload/invupload.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/clientinventory/invupload/invupload.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGludmVudG9yeS9pbnZ1cGxvYWQvaW52dXBsb2FkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/clientinventory/invupload/invupload.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/clientinventory/invupload/invupload.component.ts ***!
  \******************************************************************/
/*! exports provided: InvuploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvuploadComponent", function() { return InvuploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _invservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../invservice.service */ "./src/app/clientinventory/invservice.service.ts");
/* harmony import */ var _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/shared/service/authservice.service */ "./src/app/core/shared/service/authservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var InvuploadComponent = /** @class */ (function () {
    function InvuploadComponent(spinner, route, service, authservice, router) {
        this.spinner = spinner;
        this.route = route;
        this.service = service;
        this.authservice = authservice;
        this.router = router;
        this.files = [];
    }
    InvuploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.checktoken().subscribe(function (val) {
            if (val !== 'OK') {
                alert('權限不足或失效 請重新登入');
                _this.router.navigate(['login']);
            }
        });
    };
    InvuploadComponent.prototype.dropped = function (files) {
        var _this = this;
        this.files = files;
        var _loop_1 = function (droppedFile) {
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    // Here you can access the real file
                    console.log(droppedFile.relativePath, file);
                    // You could upload it like this:
                    var formData = new FormData();
                    formData.append(file.name, file, droppedFile.relativePath);
                    _this.spinner.show();
                    _this.service.postFile(formData).subscribe(function (val) {
                        alert(val);
                        _this.spinner.hide();
                        _this.service.updateTime().subscribe(function (res) {
                            console.log(res);
                        });
                    });
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
                var fileEntry = droppedFile.fileEntry;
                console.log(droppedFile.relativePath, fileEntry);
                this_1.spinner.hide();
            }
        };
        var this_1 = this;
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var droppedFile = files_1[_i];
            _loop_1(droppedFile);
        }
    };
    InvuploadComponent.prototype.test = function () {
        this.service.updateTime().subscribe(function (res) { return alert(res); });
    };
    InvuploadComponent.prototype.dropped2 = function (files) {
        var _this = this;
        this.files = files;
        var _loop_2 = function (droppedFile) {
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    // Here you can access the real file
                    console.log(droppedFile.relativePath, file);
                    // You could upload it like this:
                    var formData = new FormData();
                    formData.append(file.name, file, droppedFile.relativePath);
                    _this.spinner.show();
                    _this.service.postTempImage(formData).subscribe(function (val) {
                        alert(val);
                        _this.spinner.hide();
                    });
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
                var fileEntry = droppedFile.fileEntry;
                console.log(droppedFile.relativePath, fileEntry);
                this_2.spinner.hide();
            }
        };
        var this_2 = this;
        for (var _i = 0, files_2 = files; _i < files_2.length; _i++) {
            var droppedFile = files_2[_i];
            _loop_2(droppedFile);
        }
    };
    InvuploadComponent.prototype.dropped3 = function (files) {
        var _this = this;
        this.files = files;
        var _loop_3 = function (droppedFile) {
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    // Here you can access the real file
                    console.log(droppedFile.relativePath, file);
                    // You could upload it like this:
                    var formData = new FormData();
                    formData.append(file.name, file, droppedFile.relativePath);
                    _this.spinner.show();
                    _this.service.postPartialFile(formData).subscribe(function (val) {
                        alert(val);
                        _this.spinner.hide();
                        _this.service.updateTime().subscribe(function (res) {
                            console.log(res);
                        });
                    });
                });
            }
            else {
                // It was a directory (empty directories are added, otherwise only files)
                var fileEntry = droppedFile.fileEntry;
                console.log(droppedFile.relativePath, fileEntry);
                this_3.spinner.hide();
            }
        };
        var this_3 = this;
        for (var _i = 0, files_3 = files; _i < files_3.length; _i++) {
            var droppedFile = files_3[_i];
            _loop_3(droppedFile);
        }
    };
    InvuploadComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    InvuploadComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    InvuploadComponent.ctorParameters = function () { return [
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _invservice_service__WEBPACK_IMPORTED_MODULE_3__["InvserviceService"] },
        { type: _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_4__["AuthserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    InvuploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invupload',
            template: __importDefault(__webpack_require__(/*! raw-loader!./invupload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/invupload/invupload.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./invupload.component.css */ "./src/app/clientinventory/invupload/invupload.component.css")).default]
        }),
        __metadata("design:paramtypes", [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _invservice_service__WEBPACK_IMPORTED_MODULE_3__["InvserviceService"], _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_4__["AuthserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InvuploadComponent);
    return InvuploadComponent;
}());



/***/ }),

/***/ "./src/app/clientinventory/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/clientinventory/login/login.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n    background-image: url(\"/src/assets/Photos/teabackground.jpg\");\r\n    background-color: #cccccc;\r\n   }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50aW52ZW50b3J5L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2REFBNkQ7SUFDN0QseUJBQXlCO0dBQzFCIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50aW52ZW50b3J5L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9zcmMvYXNzZXRzL1Bob3Rvcy90ZWFiYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2NjY2M7XHJcbiAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/clientinventory/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/clientinventory/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../core/shared/service/authservice.service */ "./src/app/core/shared/service/authservice.service.ts");
/* harmony import */ var _core_shared_model_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/shared/model/user */ "./src/app/core/shared/model/user.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service, spinner) {
        this.router = router;
        this.service = service;
        this.spinner = spinner;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.spinner.show();
        var user = new _core_shared_model_user__WEBPACK_IMPORTED_MODULE_3__["AppUser"]();
        var datestring = new Date().toLocaleString();
        user.UserID = this.username;
        user.Password = this.password;
        user.Application = 'TeaProject';
        user.LogInTime = datestring;
        this.service.authUser(user).subscribe(function (res) {
            alert('歡迎使用者:' + res.Name + ' 您上次登入時間:' + res.LastLogInTime);
            // alert(res.Token);
            localStorage.setItem('user', res.Name);
            localStorage.setItem('logintime', datestring);
            _this.service.updatetoken(res.Token);
            _this.spinner.hide();
            _this.router.navigate(['teaportal']);
        }, function (err) {
            alert('登入錯誤 請重新登入');
            _this.service.deletetoken();
            _this.spinner.hide();
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_2__["AuthserviceService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/clientinventory/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_2__["AuthserviceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/clientinventory/model/projectinventory.ts":
/*!***********************************************************!*\
  !*** ./src/app/clientinventory/model/projectinventory.ts ***!
  \***********************************************************/
/*! exports provided: ClientInventory, Inventory, ProjectImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientInventory", function() { return ClientInventory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Inventory", function() { return Inventory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectImages", function() { return ProjectImages; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ClientInventory = /** @class */ (function () {
    function ClientInventory() {
    }
    Object.defineProperty(ClientInventory.prototype, "Message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            this._message = value;
        },
        enumerable: true,
        configurable: true
    });
    return ClientInventory;
}());

var Inventory = /** @class */ (function () {
    function Inventory() {
    }
    return Inventory;
}());

var ProjectImages = /** @class */ (function () {
    function ProjectImages() {
    }
    return ProjectImages;
}());



/***/ }),

/***/ "./src/app/clientinventory/portal/portal.component.css":
/*!*************************************************************!*\
  !*** ./src/app/clientinventory/portal/portal.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* Style buttons */\r\n.btn {\r\n    background-color: DodgerBlue; /* Blue background */\r\n    border: none; /* Remove borders */\r\n    color: white; /* White text */\r\n    padding: 12px 16px; /* Some padding */\r\n    font-size: 16px; /* Set a font size */\r\n    cursor: pointer; /* Mouse pointer on hover */\r\n  }\r\n/* Darker background on mouse-over */\r\n.btn:hover {\r\n    background-color: RoyalBlue;\r\n  }\r\n.button {\r\n    padding: 15px 25px;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    outline: none;\r\n    color: #fff;\r\n    background-color: #4CAF50;\r\n    border: none;\r\n    border-radius: 15px;\r\n    box-shadow: 0 9px #999;\r\n  }\r\n.button:hover {background-color: #3e8e41}\r\n.button:active {\r\n    background-color: #3e8e41;\r\n    box-shadow: 0 5px #666;\r\n    transform: translateY(4px);\r\n  }\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 4;\r\n    width: 100%;\r\n    border: 1px solid #ddd;\r\n  }\r\n/* Style table headers and table data */\r\nth, td {\r\n    text-align: center;\r\n    padding: 16px;\r\n  }\r\nth:first-child, td:first-child {\r\n    text-align: left;\r\n  }\r\n/* Zebra-striped table rows */\r\ntr:nth-child(even) {\r\n    background-color: #f2f2f2\r\n  }\r\n.fa-check {\r\n    color: green;\r\n  }\r\n.fa-remove {\r\n    color: red;\r\n  }\r\n#rcorners1 {\r\n    border-radius: 25px;\r\n    background: rgb(209, 211, 247);\r\n    padding: 20px;\r\n   \r\n  }\r\n#rcorners1a {\r\n    border-radius: 25px;\r\n    background: rgb(203, 243, 245);\r\n    padding: 20px;\r\n   \r\n  }\r\n#rcorners2 {\r\n    border-radius: 25px;\r\n    border: 2px solid rgb(189, 221, 143);\r\n    padding: 20px;\r\n   \r\n  }\r\n#frontbackground {\r\n    background-color:lightcyan;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50aW52ZW50b3J5L3BvcnRhbC9wb3J0YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7QUFDbEI7SUFDSSw0QkFBNEIsRUFBRSxvQkFBb0I7SUFDbEQsWUFBWSxFQUFFLG1CQUFtQjtJQUNqQyxZQUFZLEVBQUUsZUFBZTtJQUM3QixrQkFBa0IsRUFBRSxpQkFBaUI7SUFDckMsZUFBZSxFQUFFLG9CQUFvQjtJQUNyQyxlQUFlLEVBQUUsMkJBQTJCO0VBQzlDO0FBRUEsb0NBQW9DO0FBQ3BDO0lBQ0UsMkJBQTJCO0VBQzdCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7QUFFQSxlQUFlLHlCQUF5QjtBQUV4QztJQUNFLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsMEJBQTBCO0VBQzVCO0FBR0E7SUFDRSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxzQkFBc0I7RUFDeEI7QUFFQSx1Q0FBdUM7QUFDdkM7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtFQUNmO0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7QUFFQSw2QkFBNkI7QUFDN0I7SUFDRTtFQUNGO0FBRUE7SUFDRSxZQUFZO0VBQ2Q7QUFFQTtJQUNFLFVBQVU7RUFDWjtBQUdBO0lBQ0UsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixhQUFhOztFQUVmO0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGFBQWE7O0VBRWY7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixvQ0FBb0M7SUFDcEMsYUFBYTs7RUFFZjtBQUVBO0lBQ0UsMEJBQTBCO0VBQzVCIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50aW52ZW50b3J5L3BvcnRhbC9wb3J0YWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFN0eWxlIGJ1dHRvbnMgKi9cclxuLmJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBEb2RnZXJCbHVlOyAvKiBCbHVlIGJhY2tncm91bmQgKi9cclxuICAgIGJvcmRlcjogbm9uZTsgLyogUmVtb3ZlIGJvcmRlcnMgKi9cclxuICAgIGNvbG9yOiB3aGl0ZTsgLyogV2hpdGUgdGV4dCAqL1xyXG4gICAgcGFkZGluZzogMTJweCAxNnB4OyAvKiBTb21lIHBhZGRpbmcgKi9cclxuICAgIGZvbnQtc2l6ZTogMTZweDsgLyogU2V0IGEgZm9udCBzaXplICovXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7IC8qIE1vdXNlIHBvaW50ZXIgb24gaG92ZXIgKi9cclxuICB9XHJcbiAgXHJcbiAgLyogRGFya2VyIGJhY2tncm91bmQgb24gbW91c2Utb3ZlciAqL1xyXG4gIC5idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogUm95YWxCbHVlO1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgOXB4ICM5OTk7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b246aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICMzZThlNDF9XHJcbiAgXHJcbiAgLmJ1dHRvbjphY3RpdmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4ICM2NjY7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcclxuICB9XHJcblxyXG5cclxuICB0YWJsZSB7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6IDQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFN0eWxlIHRhYmxlIGhlYWRlcnMgYW5kIHRhYmxlIGRhdGEgKi9cclxuICB0aCwgdGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgdGg6Zmlyc3QtY2hpbGQsIHRkOmZpcnN0LWNoaWxkIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFplYnJhLXN0cmlwZWQgdGFibGUgcm93cyAqL1xyXG4gIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyXHJcbiAgfVxyXG4gIFxyXG4gIC5mYS1jaGVjayB7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5mYS1yZW1vdmUge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG5cclxuICAjcmNvcm5lcnMxIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjA5LCAyMTEsIDI0Nyk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICBcclxuICB9XHJcblxyXG4gICNyY29ybmVyczFhIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjAzLCAyNDMsIDI0NSk7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICBcclxuICB9XHJcbiAgXHJcbiAgI3Jjb3JuZXJzMiB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmdiKDE4OSwgMjIxLCAxNDMpO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gICNmcm9udGJhY2tncm91bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpsaWdodGN5YW47XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/clientinventory/portal/portal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/clientinventory/portal/portal.component.ts ***!
  \************************************************************/
/*! exports provided: PortalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalComponent", function() { return PortalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../core/shared/service/authservice.service */ "./src/app/core/shared/service/authservice.service.ts");
/* harmony import */ var _invservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../invservice.service */ "./src/app/clientinventory/invservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var PortalComponent = /** @class */ (function () {
    function PortalComponent(authservice, router, service) {
        this.authservice = authservice;
        this.router = router;
        this.service = service;
    }
    PortalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.checktoken().subscribe(function (val) {
            if (val === 'OK') {
                _this.User = localStorage.getItem('user');
                _this.LogInTime = localStorage.getItem('logintime');
                _this.service.getLastUpdateTime().subscribe(function (res) { return _this.LastUpdateTime = res.toString(); });
            }
            else {
                alert('權限不足或失效 請重新登入');
                _this.router.navigate(['login']);
            }
        });
    };
    PortalComponent.prototype.logout = function () {
        this.authservice.logout();
        this.router.navigate(['login']);
    };
    PortalComponent.ctorParameters = function () { return [
        { type: _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_1__["AuthserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _invservice_service__WEBPACK_IMPORTED_MODULE_2__["InvserviceService"] }
    ]; };
    PortalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./portal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/portal/portal.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./portal.component.css */ "./src/app/clientinventory/portal/portal.component.css")).default]
        }),
        __metadata("design:paramtypes", [_core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_1__["AuthserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _invservice_service__WEBPACK_IMPORTED_MODULE_2__["InvserviceService"]])
    ], PortalComponent);
    return PortalComponent;
}());



/***/ }),

/***/ "./src/app/core/material.module.ts":
/*!*****************************************!*\
  !*** ./src/app/core/material.module.ts ***!
  \*****************************************/
/*! exports provided: CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]
            ],
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/core/shared/model/ImageLink.ts":
/*!************************************************!*\
  !*** ./src/app/core/shared/model/ImageLink.ts ***!
  \************************************************/
/*! exports provided: ImageLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLink", function() { return ImageLink; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ImageLink = /** @class */ (function () {
    function ImageLink() {
    }
    return ImageLink;
}());



/***/ }),

/***/ "./src/app/core/shared/model/user.ts":
/*!*******************************************!*\
  !*** ./src/app/core/shared/model/user.ts ***!
  \*******************************************/
/*! exports provided: LogInUser, AppUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInUser", function() { return LogInUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUser", function() { return AppUser; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var LogInUser = /** @class */ (function () {
    function LogInUser() {
    }
    return LogInUser;
}());

var AppUser = /** @class */ (function () {
    function AppUser() {
    }
    return AppUser;
}());



/***/ }),

/***/ "./src/app/core/shared/service/authservice.service.ts":
/*!************************************************************!*\
  !*** ./src/app/core/shared/service/authservice.service.ts ***!
  \************************************************************/
/*! exports provided: AuthserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthserviceService", function() { return AuthserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AuthserviceService = /** @class */ (function () {
    function AuthserviceService(http) {
        this.http = http;
        this.site = 'https://leecloud.azurewebsites.net/'; // URL to web api
        // private site = 'https://localhost:44347/';
        this.url = 'api/LoginApi/';
        this.urlchecktoken = 'api/LoginApi/CheckToken/888';
        this.token = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.currenttoken = this.token.asObservable();
    }
    AuthserviceService.prototype.updatetoken = function (message) {
        this.token.next(message);
        localStorage.setItem('token', message);
    };
    AuthserviceService.prototype.deletetoken = function () {
        localStorage.setItem('token', '');
    };
    AuthserviceService.prototype.authUser = function (user) {
        var url = this.site + this.url;
        // Headers
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            ContentType: 'application/json'
        });
        // return  this.http.post(url, file, {headers: headers});
        return this.http
            .post(url, user);
    };
    AuthserviceService.prototype.checktoken = function () {
        var currenttoken = localStorage.getItem('token');
        // alert(currenttoken);
        var url = this.site + this.urlchecktoken;
        // Headers
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            ContentType: 'application/json'
        });
        return this.http
            .post(url, currenttoken, { headers: headers, responseType: 'text' });
    };
    AuthserviceService.prototype.logout = function () {
        this.deletetoken();
        localStorage.setItem('user', '');
        localStorage.setItem('logintime', '');
    };
    AuthserviceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    AuthserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthserviceService);
    return AuthserviceService;
}());



/***/ }),

/***/ "./src/app/core/shared/service/cryptservice.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/shared/service/cryptservice.service.ts ***!
  \*************************************************************/
/*! exports provided: CryptserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CryptserviceService", function() { return CryptserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var CryptserviceService = /** @class */ (function () {
    function CryptserviceService() {
        this.secretKey = "TeaProjectByHenryLee";
    }
    CryptserviceService.prototype.encrypt = function (value) {
        var encstring = crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].encrypt(value, this.secretKey).toString();
        return crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Base64.stringify(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8.parse(encstring));
    };
    CryptserviceService.prototype.decrypt = function (textToDecrypt) {
        var decData = crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Base64.parse(textToDecrypt).toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8);
        return crypto_js__WEBPACK_IMPORTED_MODULE_1__["AES"].decrypt(decData, this.secretKey).toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__["enc"].Utf8);
    };
    CryptserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CryptserviceService);
    return CryptserviceService;
}());



/***/ }),

/***/ "./src/app/core/shared/service/postservice.service.ts":
/*!************************************************************!*\
  !*** ./src/app/core/shared/service/postservice.service.ts ***!
  \************************************************************/
/*! exports provided: PostFileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostFileService", function() { return PostFileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var PostFileService = /** @class */ (function () {
    function PostFileService(http) {
        this.http = http;
        this.site = 'https://leecloud.azurewebsites.net/';
        this.postImgurl = 'api/UploadFileapi/';
    }
    PostFileService.prototype.postImage = function (file) {
        var url = this.site + this.postImgurl;
        // Headers
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            ContentType: 'multipart/form-data'
        });
        return this.http
            .post(url, file, { headers: headers, responseType: 'text' });
    };
    PostFileService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    PostFileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostFileService);
    return PostFileService;
}());



/***/ }),

/***/ "./src/app/core/shared/shared.module.ts":
/*!**********************************************!*\
  !*** ./src/app/core/shared/shared.module.ts ***!
  \**********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_authservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/authservice.service */ "./src/app/core/shared/service/authservice.service.ts");
/* harmony import */ var _service_cryptservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/cryptservice.service */ "./src/app/core/shared/service/cryptservice.service.ts");
/* harmony import */ var _service_postservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/postservice.service */ "./src/app/core/shared/service/postservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [_service_authservice_service__WEBPACK_IMPORTED_MODULE_2__["AuthserviceService"], _service_cryptservice_service__WEBPACK_IMPORTED_MODULE_3__["CryptserviceService"], _service_postservice_service__WEBPACK_IMPORTED_MODULE_4__["PostFileService"]]
        };
    };
    var SharedModule_1;
    SharedModule = SharedModule_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/customerlog.component.css":
/*!*******************************************!*\
  !*** ./src/app/customerlog.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    align-content: left;\r\n}\r\n\r\ntable {\r\n    width: 200;\r\n}\r\n\r\nthead{\r\n    color: #337AB7; \r\n    align-content: center;\r\n    \r\n}\r\n\r\nrow td{\r\n    align-content: left;\r\n    text-align: left;\r\n}\r\n\r\n.loader {\r\n  border: 16px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 16px solid #3498db;\r\n  width: 120px;\r\n  height: 120px;\r\n  -webkit-animation: spin 2s linear infinite; /* Safari */\r\n  animation: spin 2s linear infinite;\r\n}\r\n\r\n/* Safari */\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { transform: rotate(0deg); }\r\n  100% { transform: rotate(360deg); }\r\n}\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7O0FBRXpCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFJQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixhQUFhO0VBQ2IsMENBQTBDLEVBQUUsV0FBVztFQUN2RCxrQ0FBa0M7QUFDcEM7O0FBRUEsV0FBVzs7QUFDWDtFQUNFLEtBQUssK0JBQStCLEVBQUU7RUFDdEMsT0FBTyxpQ0FBaUMsRUFBRTtBQUM1Qzs7QUFFQTtFQUNFLEtBQUssdUJBQXVCLEVBQUU7RUFDOUIsT0FBTyx5QkFBeUIsRUFBRTtBQUNwQyIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWVybG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMjAwO1xyXG59XHJcblxyXG50aGVhZHtcclxuICAgIGNvbG9yOiAjMzM3QUI3OyBcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG5yb3cgdGR7XHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuXHJcbiBcclxuLmxvYWRlciB7XHJcbiAgYm9yZGVyOiAxNnB4IHNvbGlkICNmM2YzZjM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci10b3A6IDE2cHggc29saWQgIzM0OThkYjtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7IC8qIFNhZmFyaSAqL1xyXG4gIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbi8qIFNhZmFyaSAqL1xyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgMTAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG59XHJcbiAiXX0= */");

/***/ }),

/***/ "./src/app/customerlog.component.ts":
/*!******************************************!*\
  !*** ./src/app/customerlog.component.ts ***!
  \******************************************/
/*! exports provided: CustomerlogComponent, ModalContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerlogComponent", function() { return CustomerlogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalContentComponent", function() { return ModalContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customerlog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customerlog */ "./src/app/customerlog.ts");
/* harmony import */ var _Services_customerlog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/customerlog.service */ "./src/app/Services/customerlog.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _emailmodal_emailmodal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emailmodal/emailmodal.component */ "./src/app/emailmodal/emailmodal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var CustomerlogComponent = /** @class */ (function () {
    function CustomerlogComponent(logservice, modalService) {
        this.logservice = logservice;
        this.modalService = modalService;
        this.p = 1;
    }
    CustomerlogComponent.prototype.ngOnInit = function () {
        this.GetLogList();
    };
    Object.defineProperty(CustomerlogComponent.prototype, "Search", {
        get: function () {
            return this._search;
        },
        set: function (value) {
            this._search = value;
            this.GetLogListByKey(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerlogComponent.prototype, "Name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerlogComponent.prototype, "PhoneNumber", {
        get: function () {
            return this._phone;
        },
        set: function (value) {
            this._phone = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerlogComponent.prototype, "Email", {
        get: function () {
            return this._emailaddress;
        },
        set: function (value) {
            this._emailaddress = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerlogComponent.prototype, "Note", {
        get: function () {
            return this._note;
        },
        set: function (value) {
            this._note = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustomerlogComponent.prototype, "logList", {
        get: function () {
            return this._loglist;
        },
        set: function (value) {
            this._loglist = value;
        },
        enumerable: true,
        configurable: true
    });
    CustomerlogComponent.prototype.openModal = function (item) {
        var initialState = {
            log: item,
            parent: this.GetLogList
        };
        this.bsModalRef = this.modalService.show(ModalContentComponent, { initialState: initialState });
    };
    CustomerlogComponent.prototype.openEmailModal = function (item) {
        var initialState = {
            log: item,
            parentFunction: this.GetLogList
        };
        this.emailModalRef = this.modalService.show(_emailmodal_emailmodal_component__WEBPACK_IMPORTED_MODULE_4__["EmailmodalComponent"], { initialState: initialState });
    };
    CustomerlogComponent.prototype.GetLogList = function () {
        var _this = this;
        document.getElementById('loader').style.display = 'block';
        this.logservice.GetAllCustomerLog().subscribe(function (list) {
            _this.logList = list;
            document.getElementById('loader').style.display = 'none';
        }, function (error) { return alert(error); });
    };
    CustomerlogComponent.prototype.GetLogListByKey = function (key) {
        var _this = this;
        document.getElementById('loader').style.display = 'block';
        this.logservice.GetAllCustomerLogByKey(key).subscribe(function (list) {
            _this.logList = list;
            document.getElementById('loader').style.display = 'none';
        }, function (error) { return alert(error); });
    };
    CustomerlogComponent.prototype.DeleteLog = function (rowkey, key) {
        var _this = this;
        if (confirm('確定刪除 ' + key + "?")) {
            this.logservice.DeleteCustomerLog(rowkey).subscribe(function (r) {
                alert('資料已被刪除');
                _this.GetLogList();
            }, function (error) { return alert(error); });
        }
    };
    CustomerlogComponent.prototype.addlog = function () {
        var _this = this;
        if (this.Name !== '' && typeof this.Name !== 'undefined') {
            var newitem_1 = new _customerlog__WEBPACK_IMPORTED_MODULE_1__["customerlog"]();
            newitem_1.Name = this.Name;
            newitem_1.Email = this.Email;
            newitem_1.PhoneNumber = this.PhoneNumber;
            newitem_1.Note = this.Note;
            newitem_1.Comment = this.Comment;
            newitem_1.RecordTime = new Date().toLocaleDateString() + "-" + new Date().toLocaleTimeString();
            this.logservice.PostCustomerLog(newitem_1).subscribe(function (res) {
                alert(newitem_1.Name + ' 資料輸入成功!');
                _this.resetInput();
                _this.GetLogList();
            }, function (error) { return alert(error); });
        }
    };
    CustomerlogComponent.prototype.resetInput = function () {
        this.Name = '';
        this.PhoneNumber = '';
        this.Email = '';
        this.Note = '';
        this.Comment = '';
    };
    CustomerlogComponent.ctorParameters = function () { return [
        { type: _Services_customerlog_service__WEBPACK_IMPORTED_MODULE_2__["CustomerlogService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"] }
    ]; };
    CustomerlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __importDefault(__webpack_require__(/*! raw-loader!./customerlog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerlog.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./customerlog.component.css */ "./src/app/customerlog.component.css")).default]
        }),
        __metadata("design:paramtypes", [_Services_customerlog_service__WEBPACK_IMPORTED_MODULE_2__["CustomerlogService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]])
    ], CustomerlogComponent);
    return CustomerlogComponent;
}());

/* This is a component which we pass in modal*/
var ModalContentComponent = /** @class */ (function () {
    function ModalContentComponent(bsModalRef, logservice) {
        this.bsModalRef = bsModalRef;
        this.logservice = logservice;
    }
    ModalContentComponent.prototype.ngOnInit = function () {
        this.Name = this.log.Name;
        this.PhoneNumber = this.log.PhoneNumber;
        this.Email = this.log.Email;
        this.Note = this.log.Note;
        this.Comment = this.log.Comment;
    };
    ModalContentComponent.prototype.savelog = function () {
        var _this = this;
        this.log.Name = this.Name;
        this.log.PhoneNumber = this.PhoneNumber;
        this.log.Email = this.Email;
        this.log.Note = this.Note;
        this.log.Comment = this.Comment;
        this.log.RecordTime = new Date().toLocaleDateString() + "-" + new Date().toLocaleTimeString();
        this.logservice.UpdateCustomerLog(this.log).subscribe(function (res) {
            alert('修改資料成功!');
            _this.bsModalRef.hide();
            _this.parent.call(_this);
        }, function (error) { return alert(error); });
    };
    ModalContentComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] },
        { type: _Services_customerlog_service__WEBPACK_IMPORTED_MODULE_2__["CustomerlogService"] }
    ]; };
    ModalContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal-content',
            template: "\n      <div class=\"modal-header table-hover\">\n        <h4 class=\"modal-title pull-left\">{{log.Name}}</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n      <table class=\"table table-bordered\">\n      <tr>\n          <td>\n              \u9867\u5BA2\u59D3\u540D\n          </td>\n          <td>\n          <input type=\"string\"\n          [(ngModel)]='Name'\n           />  \n          </td>\n      </tr>\n\n      <tr>\n          <td>\n              \u96FB\u8A71\n          </td>\n          <td>\n          <input type=\"string\"\n          [(ngModel)]='PhoneNumber'\n           />  \n          </td>\n      </tr>\n\n      <tr>\n      <td>\n         Email\n      </td>\n      <td>\n      <input type=\"string\"\n      [(ngModel)]='Email'\n       />  \n      </td>\n      </tr>\n\n      <tr>\n      <td>\n          \u901A\u8A0A\u7D00\u9304\n      </td>\n      <td>\n         <textarea [(ngModel)]='Note' class=\"form-control\" >\n\n         </textarea>\n      </td>\n      </tr>\n      <tr  class=\"warning\" >\n      <td>\n          \u5099\u8A3B(\u5F8C\u7E8C\u9032\u5C55)\n      </td>\n      <td>\n         <textarea [(ngModel)]='Comment' class=\"form-control\"  >\n\n         </textarea>\n      </td>\n      </tr>\n      <tr >\n         \n              <td>\n                  <button class=\"btn btn-primary\" (click) = 'savelog()'>\n                     \u5132\u5B58\n                   </button>\n                  \n              </td>\n\n        </tr>\n    </table> \n\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">\u53D6\u6D88</button>\n      </div>\n    "
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"], _Services_customerlog_service__WEBPACK_IMPORTED_MODULE_2__["CustomerlogService"]])
    ], ModalContentComponent);
    return ModalContentComponent;
}());



/***/ }),

/***/ "./src/app/customerlog.ts":
/*!********************************!*\
  !*** ./src/app/customerlog.ts ***!
  \********************************/
/*! exports provided: customerlog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerlog", function() { return customerlog; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var customerlog = /** @class */ (function () {
    function customerlog() {
        this.RecordTime = Date.now().toString();
    }
    return customerlog;
}());



/***/ }),

/***/ "./src/app/emailmodal/emailmodal.component.css":
/*!*****************************************************!*\
  !*** ./src/app/emailmodal/emailmodal.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsbW9kYWwvZW1haWxtb2RhbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/emailmodal/emailmodal.component.ts":
/*!****************************************************!*\
  !*** ./src/app/emailmodal/emailmodal.component.ts ***!
  \****************************************************/
/*! exports provided: EmailmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailmodalComponent", function() { return EmailmodalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _Services_emailservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/emailservice */ "./src/app/Services/emailservice.ts");
/* harmony import */ var _Model_EmailMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Model/EmailMessage */ "./src/app/Model/EmailMessage.ts");
/* harmony import */ var _Services_customerlog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/customerlog.service */ "./src/app/Services/customerlog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var EmailmodalComponent = /** @class */ (function () {
    function EmailmodalComponent(emailservice, bsModalRef, logservice) {
        this.emailservice = emailservice;
        this.bsModalRef = bsModalRef;
        this.logservice = logservice;
        this.emailfrom = 'bio.china@msa.hinet.net';
    }
    Object.defineProperty(EmailmodalComponent.prototype, "Subject", {
        get: function () {
            return this._subject;
        },
        set: function (value) {
            this._subject = value;
        },
        enumerable: true,
        configurable: true
    });
    EmailmodalComponent.prototype.ngOnInit = function () {
        this.Email = this.log.Email;
        this.Name = this.log.Name;
    };
    EmailmodalComponent.prototype.EmailOut = function () {
        var _this = this;
        var newEmail = new _Model_EmailMessage__WEBPACK_IMPORTED_MODULE_3__["EmailMessage"]();
        newEmail.FromEmailAddress = this.emailfrom;
        newEmail.ToEmailAddress = this.Email;
        newEmail.Name = this.Name;
        newEmail.Subject = this.Subject;
        newEmail.Content = this.Content;
        this.emailservice.SendEmailMessage(newEmail).subscribe(function (res) {
            alert("郵件-" + _this.Subject + " 已送出");
            _this.RecordEmailEvent(_this.log);
        }, function (error) {
            alert("郵件-" + _this.Subject + " 錯誤.." + error);
            _this.bsModalRef.hide();
        });
    };
    EmailmodalComponent.prototype.RecordEmailEvent = function (log) {
        var _this = this;
        log.Comment += " 寄出郵件:" + this.Subject + " | " + new Date().toLocaleDateString() + "-" + new Date().toLocaleTimeString();
        this.logservice.UpdateCustomerLog(log).subscribe(function (res) {
            _this.parentFunction;
            _this.bsModalRef.hide();
        }, function (error) { return alert(error); });
    };
    EmailmodalComponent.ctorParameters = function () { return [
        { type: _Services_emailservice__WEBPACK_IMPORTED_MODULE_2__["EmailService"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"] },
        { type: _Services_customerlog_service__WEBPACK_IMPORTED_MODULE_4__["CustomerlogService"] }
    ]; };
    EmailmodalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emailmodal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./emailmodal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/emailmodal/emailmodal.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./emailmodal.component.css */ "./src/app/emailmodal/emailmodal.component.css")).default]
        }),
        __metadata("design:paramtypes", [_Services_emailservice__WEBPACK_IMPORTED_MODULE_2__["EmailService"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"], _Services_customerlog_service__WEBPACK_IMPORTED_MODULE_4__["CustomerlogService"]])
    ], EmailmodalComponent);
    return EmailmodalComponent;
}());



/***/ }),

/***/ "./src/app/menu.component.ts":
/*!***********************************!*\
  !*** ./src/app/menu.component.ts ***!
  \***********************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_shop_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services/shop-cart.service */ "./src/app/Services/shop-cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(shopcartservice) {
        this.shopcartservice = shopcartservice;
        this.count = 0;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.countShopList = function () {
        this.count = this.shopcartservice.con();
    };
    MenuComponent.ctorParameters = function () { return [
        { type: _Services_shop_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShopCartService"] }
    ]; };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'menu',
            template: __importDefault(__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu.component.html")).default,
        }),
        __metadata("design:paramtypes", [_Services_shop_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShopCartService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/products.component.ts":
/*!***************************************!*\
  !*** ./src/app/products.component.ts ***!
  \***************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/product.service */ "./src/app/Services/product.service.ts");
/* harmony import */ var _Services_shop_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Services/shop-cart.service */ "./src/app/Services/shop-cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


//import { Hero } from './hero';


var ProductsComponent = /** @class */ (function () {
    //son como un providers
    function ProductsComponent(router, productService, shopcartservice) {
        this.router = router;
        this.productService = productService;
        this.shopcartservice = shopcartservice;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.products = this.productService.getSamples();
        this.updatecount();
    };
    ProductsComponent.prototype.add = function (product) {
        this.shopcartservice.add(product);
        this.updatecount();
    };
    ProductsComponent.prototype.remove = function (product) {
        this.shopcartservice.remove(product);
        this.updatecount();
    };
    ProductsComponent.prototype.updatecount = function () {
        this.count = this.shopcartservice.con();
        this.totalprice = this.shopcartservice.totalamount();
    };
    ProductsComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
        { type: _Services_shop_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShopCartService"] }
    ]; };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'products',
            template: __importDefault(__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/products.component.html")).default,
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _Services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"],
            _Services_shop_cart_service__WEBPACK_IMPORTED_MODULE_3__["ShopCartService"]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/stoneweight.component.css":
/*!*******************************************!*\
  !*** ./src/app/stoneweight.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    align-content: left;\r\n}\r\n\r\ntable {\r\n    width: 200;\r\n}\r\n\r\nthead{\r\n    color: #337AB7; \r\n    align-content: center;\r\n    \r\n}\r\n\r\nrow td{\r\n    align-content: left;\r\n    text-align: left;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RvbmV3ZWlnaHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7O0FBRXpCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3N0b25ld2VpZ2h0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZ7XHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgICB3aWR0aDogMjAwO1xyXG59XHJcblxyXG50aGVhZHtcclxuICAgIGNvbG9yOiAjMzM3QUI3OyBcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG59XHJcblxyXG5yb3cgdGR7XHJcbiAgICBhbGlnbi1jb250ZW50OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/stoneweight.component.ts":
/*!******************************************!*\
  !*** ./src/app/stoneweight.component.ts ***!
  \******************************************/
/*! exports provided: StoneweightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoneweightComponent", function() { return StoneweightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _weight__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weight */ "./src/app/weight.ts");
/* harmony import */ var _Services_list_email_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/list-email.service */ "./src/app/Services/list-email.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var StoneweightComponent = /** @class */ (function () {
    function StoneweightComponent(emailservice) {
        this.emailservice = emailservice;
        this.ratioweight = '尚未有數值';
    }
    StoneweightComponent.prototype.ngOnInit = function () {
        console.log('stoneweight oninit');
    };
    Object.defineProperty(StoneweightComponent.prototype, "airweight", {
        get: function () {
            return this._airweight;
        },
        set: function (value) {
            this._airweight = value;
            this.caculateweightrate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoneweightComponent.prototype, "waterweight", {
        get: function () {
            return this._waterweight;
        },
        set: function (value) {
            this._waterweight = value;
            this.caculateweightrate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StoneweightComponent.prototype, "emailaddress", {
        get: function () {
            return this._emailaddress;
        },
        set: function (value) {
            this._emailaddress = value;
        },
        enumerable: true,
        configurable: true
    });
    StoneweightComponent.prototype.caculateweightrate = function () {
        if (typeof this.waterweight !== 'undefined' && this.waterweight !== 0 && this.airweight !== 0) {
            var diffweight = (this.airweight - this.waterweight);
            this.ratioweight = (this.airweight / diffweight).toFixed(2);
        }
        return this.ratioweight;
    };
    Object.defineProperty(StoneweightComponent.prototype, "weightList", {
        get: function () {
            return this._weightList;
        },
        set: function (value) {
            this._weightList = value;
        },
        enumerable: true,
        configurable: true
    });
    StoneweightComponent.prototype.emailout = function () {
        if (typeof this.emailaddress !== 'undefined') {
            this.emailservice.SendWeightEmail(this.weightList, this.emailaddress, "玉石比重測定單-");
        }
        else {
            alert("請輸入郵件地址!");
        }
    };
    StoneweightComponent.prototype.addintolist = function () {
        if (this.ratioweight !== '尚未有數值') {
            var index = 0;
            index = 1;
            var newitem = new _weight__WEBPACK_IMPORTED_MODULE_1__["weight"](index, this.airweight, this.waterweight, this.ratioweight);
            if (typeof this.weightList !== 'undefined' && this.weightList.length > 0) {
                var list = this.weightList;
                var count = this.weightList.length;
                newitem.id = count + 1;
                list.push(newitem);
                this.weightList = list;
            }
            else {
                var list = [];
                list.push(newitem);
                this.weightList = list;
            }
            this.waterweight = 0;
            this.airweight = 0;
            this.ratioweight = '尚未有數值';
        }
    };
    StoneweightComponent.ctorParameters = function () { return [
        { type: _Services_list_email_service__WEBPACK_IMPORTED_MODULE_2__["ListEmailService"] }
    ]; };
    StoneweightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __importDefault(__webpack_require__(/*! raw-loader!./stoneweight.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/stoneweight.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./stoneweight.component.css */ "./src/app/stoneweight.component.css")).default]
        }),
        __metadata("design:paramtypes", [_Services_list_email_service__WEBPACK_IMPORTED_MODULE_2__["ListEmailService"]])
    ], StoneweightComponent);
    return StoneweightComponent;
}());



/***/ }),

/***/ "./src/app/weight.ts":
/*!***************************!*\
  !*** ./src/app/weight.ts ***!
  \***************************/
/*! exports provided: weight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weight", function() { return weight; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var weight = /** @class */ (function () {
    function weight(_id, _air, _water, _ratio) {
        this.id = _id;
        this.airweight = _air;
        this.waterweight = _water;
        this.ratioweight = _ratio;
    }
    return weight;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\Angular.Web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map