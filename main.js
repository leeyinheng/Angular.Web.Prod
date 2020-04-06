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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/article/auction/auction.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/article/auction/auction.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span> <img src='../assets/Photos/tealogo.jpg' width=20% height=20% /></span>\n\n<h4> 2019 正德秋拍 結果</h4>\n\n<igx-carousel style=\"width:100%\">\n  <igx-slide>\n       <img src='./../../../assets/Photos/627p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/628p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/630p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/632p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/633p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/635p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/637p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/638p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/639p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/640p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/641p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/643p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/645p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/646p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/647p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/648p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/649p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/650p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/651p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/652p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/653p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/655p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/656p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/657p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/658p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/659p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/660p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/661p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/662p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/663p.gif'/>\n  </igx-slide>\n  <igx-slide>\n    <img src='./../../../assets/Photos/665p.gif'/>\n  </igx-slide>\n\n</igx-carousel>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/bcform/bcform.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/bcform/bcform.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div>\r\n    <span><img src='../assets/Photos/inhublogo.png' width=10% height=10% /></span>\r\n    <p></p>\r\n</div>\r\n\r\n<div class=\"nav navbar-nav navbar-right\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"SaveEntity()\">儲存</button> |\r\n        <button type=\"button\" class=\"btn btn-default\" onclick=\"location.href='#/bccenter';\">返回</button>\r\n        <p></p>\r\n</div>\r\n\r\n<div class=\"body-content\">\r\n\r\n        <table class=\"table table-bordered table-striped\">\r\n                <tbody>\r\n\r\n                    <tr>\r\n                        <td>\r\n                            ID:\r\n                        </td>\r\n                        <TD>\r\n                                {{Entity.Id}}\r\n                        </TD>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                                商務中心名稱:\r\n                        </td>\r\n                        <td>\r\n                                <input [(ngModel)]=\"Entity.Company\" #ctrl=\"ngModel\" required name=\"entityname\"  #fullName=\"ngModel\" class=\"form-control\" required>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                              商務中心名稱 英文:\r\n                      </td>\r\n                      <td>\r\n                              <input [(ngModel)]=\"Entity.Company_en\" #ctrl=\"ngModel\" required name=\"entityname_en\"  #fullName=\"ngModel\" class=\"form-control\">\r\n                      </td>\r\n                  </tr>\r\n                  <tr>\r\n                        <td>\r\n                            介紹:\r\n                        </td>\r\n                        <td>\r\n\r\n                                <textarea class=\"form-control\"\r\n                                name=\"intro\"\r\n                                rows=\"4\"\r\n                                [(ngModel)]=\"Entity.Intro\"\r\n                                #message='ngModel'\r\n                                ></textarea>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                          介紹 (英文):\r\n                      </td>\r\n                      <td>\r\n\r\n                              <textarea class=\"form-control\"\r\n                              name=\"intro_en\"\r\n                              rows=\"4\"\r\n                              [(ngModel)]=\"Entity.Intro_en\"\r\n                              #message='ngModel'\r\n                              ></textarea>\r\n                      </td>\r\n                  </tr>\r\n\r\n\r\n                    <tr>\r\n                        <td>\r\n                            街:\r\n                        </td>\r\n                        <td>\r\n                                <input [(ngModel)]=\"Entity.Street\" #ctrl=\"ngModel\" name=\"address\" class=\"form-control\">\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                          Street:\r\n                      </td>\r\n                      <td>\r\n                              <input [(ngModel)]=\"Entity.Street_en\" #ctrl=\"ngModel\" name=\"Street_en\" class=\"form-control\">\r\n                      </td>\r\n                  </tr>\r\n\r\n                    <tr>\r\n                            <td>\r\n                                市:\r\n                            </td>\r\n                            <td>\r\n                                    <input [(ngModel)]=\"Entity.County\" #ctrl=\"ngModel\" name=\"County\">\r\n                            </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                          City:\r\n                      </td>\r\n                      <td>\r\n                              <input [(ngModel)]=\"Entity.County_en\" #ctrl=\"ngModel\" name=\"County_en\">\r\n                      </td>\r\n              </tr>\r\n                    <tr>\r\n                            <td>\r\n                                區:\r\n                            </td>\r\n                            <td>\r\n                                    <input [(ngModel)]=\"Entity.District\" #ctrl=\"ngModel\" name=\"District\">\r\n                            </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>\r\n                          District :\r\n                      </td>\r\n                      <td>\r\n                              <input [(ngModel)]=\"Entity.District_en\" #ctrl=\"ngModel\" name=\"District_en\">\r\n                      </td>\r\n              </tr>\r\n                    <tr *ngIf=\"!isAdd\">\r\n                            <td>\r\n                                設備:  <button type=\"button\" class=\"btn btn-info\" (click)=\"openModal()\">編輯</button>\r\n                            </td>\r\n                            <td>\r\n\r\n\r\n                                        <div fxLayout=\"column\" fxLayoutAlign=\" none\">\r\n                                                <div fxFlex=\"100\" fxLayout=\"row wrap\" fxLayoutAlign=\"space-around stretch\" fxLayout.xs=\"column\">\r\n                                                  <div *ngFor=\"let i of Entity.Features\" fxFlex.xs=\"100\" fxFlex.sm=\"50\" fxFlex.md=\"33\" fxFlex.lg=\"33\" fxFlex.xl=\"33\">\r\n                                                       {{i.Name}} <img  src =\"https://image.flaticon.com/icons/svg/1642/1642269.svg\" style=\"height: 50px; width: 50px;\">\r\n                                                  </div>\r\n                                                </div>\r\n                                        </div>\r\n\r\n\r\n                            </td>\r\n                        </tr>\r\n                        <tr  *ngIf=\"!isAdd\">\r\n                          <td>\r\n                              空位數:\r\n                          </td>\r\n                          <td>\r\n                                  <input [(ngModel)]=\"Entity.DefaultSeats\" #ctrl=\"ngModel\" name=\"DefaultSeats\">\r\n                          </td>\r\n                        </tr  >\r\n                        <tr  *ngIf=\"!isAdd\">\r\n                          <td>\r\n                              預扣點數:\r\n                          </td>\r\n                          <td>\r\n                                  <input [(ngModel)]=\"Entity.Points\" #ctrl=\"ngModel\" name=\"Points\">\r\n                          </td>\r\n                        </tr  >\r\n                    <tr *ngIf=\"!isAdd\">\r\n                        <td>\r\n                            座標:    <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"saveGPS()\">更新GPS</button>\r\n                        </td>\r\n                        <td>\r\n                          Latitude  :  <input [(ngModel)]=\"Entity.Latitude \" #ctrl=\"ngModel\" name=\"Latitude \">\r\n                        </td>\r\n                    </tr>\r\n\r\n                    <tr  *ngIf=\"!isAdd\">\r\n                      <td>\r\n\r\n                      </td>\r\n                      <td>\r\n                        Longitude  :   <input [(ngModel)]=\"Entity.Longitude\" #ctrl=\"ngModel\" name=\"Longitude\">\r\n                      </td>\r\n                    </tr>\r\n                    <tr  *ngIf=\"!isAdd\">\r\n                        <td colspan=\"2\">\r\n                                <google-map\r\n                                height=\"500px\"\r\n                                width=\"100%\"\r\n                                [zoom]=\"zoom\"\r\n                                [center]=\"center\"\r\n                                [options]=\"options\"\r\n                                >\r\n                                <map-marker\r\n                                    *ngFor=\"let marker of markers\"\r\n                                    [position]=\"marker.position\"\r\n                                    [label]=\"marker.label\"\r\n                                    [title]=\"marker.title\"\r\n                                    [options]=\"marker.options\"\r\n                                    (mapClick)=\"opengooglemap()\"\r\n                                >\r\n                                </map-marker>\r\n\r\n\r\n                                </google-map>\r\n                        </td>\r\n                    </tr>\r\n\r\n                    <tr  *ngIf=\"!isAdd\">\r\n                        <td colspan=\"2\">\r\n                            圖片:\r\n\r\n                                <div class=\"center\">\r\n                                        <ngx-file-drop dropZoneLabel=\"Drop files here\" (onFileDrop)=\"dropped($event)\"\r\n                                        (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\r\n                                            <ng-template ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\">\r\n                                              拖曳或是選擇要上傳的圖片\r\n                                              <button type=\"button\" (click)=\"openFileSelector()\">Browse Files</button>\r\n                                            </ng-template>\r\n                                        </ngx-file-drop>\r\n\r\n                                </div>\r\n                        </td>\r\n                    </tr>\r\n                    <tr  *ngIf=\"!isAdd\">\r\n                        <td colspan=\"2\">\r\n                                <ul *ngFor=\"let i of Entity.ImageUrls; let x = index\" class=\"list-group\">\r\n                                    <li class=\"list-group-item\">\r\n                                        <img src='https://in-hub-dev.azurewebsites.net/{{i}}'   class=\"img-thumbnail\" > <p></p>\r\n                                        <!-- 名稱:<input [(ngModel)]=\"i.Name\" #ctrl=\"ngModel\"  name=\"imagename\" class=\"form-control\"/> <p></p>\r\n                                        備註: <input [(ngModel)]=\"i.Comment\" #ctrl=\"ngModel\"  name=\"imageComment\" type=\"text\"  class=\"form-control\"/><p></p> -->\r\n                                        <button type=\"button\" class=\"btn btn-danger btn-xs\" (click) =\"RemoveImage(x)\">Remove</button>\r\n                                    </li>\r\n                                </ul>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n                </table>\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n     <hr>\r\n    <div class=\"nav navbar-nav navbar-right\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"SaveEntity()\">儲存</button> |\r\n            <button type=\"button\" class=\"btn btn-default\" onclick=\"location.href='#/bccenter';\">返回</button>\r\n    </div>\r\n\r\n\r\n\r\n\r\n<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-scale-multiple\"\r\n>\r\n  <p style=\"font-size: 20px; color: white\">處理中...</p>\r\n</ngx-spinner>\r\n\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <span><img src='../assets/Photos/inhublogo.png' width=10% height=10% /></span>\r\n    <p></p>\r\n</div>\r\n\r\n\r\n<p></p>\r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-sm-4\">\r\n    <button type=\"button\" class=\"btn btn-primary\" onclick=\"location.href='#/bcform';\">新增</button>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <button type=\"button\" class=\"btn btn-info\" onclick=\"location.href='#/InHubLog';\">WebJobs Logs</button>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <button type=\"button\" class=\"btn btn-primary\" onclick=\"location.href='#/bcuser';\">到使用者/會員管理</button>\r\n  </div>\r\n</div>\r\n\r\n<p></p>\r\n<ng-template #popTemplate> <div [innerHtml]=\"pophtml\"></div></ng-template>\r\n<table class=\"table table-bordered table-striped\">\r\n    <tr>\r\n        <th>\r\n            ID\r\n        </th>\r\n        <th>\r\n            名稱\r\n        </th>\r\n        <th>\r\n            城市\r\n        </th>\r\n        <th>\r\n            地址\r\n        </th>\r\n\r\n        <th>\r\n\r\n        </th>\r\n    </tr>\r\n\r\n\r\n        <tbody>\r\n            <tr *ngFor = 'let item of List ' [tooltip]=\"popTemplate\" (mouseover)='popup(item)'>\r\n                <td>\r\n                    {{item.Id}}\r\n                </td>\r\n                <td>{{ item.Company}}\r\n\r\n                </td>\r\n                <td>   {{item.County}} </td>\r\n                <td>{{ item.Street}}</td>\r\n                <td>\r\n                        <!-- <button type=\"button\" class=\"btn btn-primary\" (click) = showform(item.Id)>展示</button>    | -->\r\n                        <button type=\"button\" class=\"btn btn-info\" (click) = openform(item.Id)>編輯</button>    |\r\n                        <button type=\"button\" class=\"btn btn-danger\" (click) = delete(item.Id)>刪除</button>\r\n                </td>\r\n\r\n\r\n            </tr>\r\n        </tbody>\r\n\r\n</table>\r\n\r\n\r\n\r\n<ngx-spinner\r\n  bdColor=\"rgba(51,51,51,0.8)\"\r\n  size=\"medium\"\r\n  color=\"#fff\"\r\n  type=\"ball-scale-multiple\"\r\n>\r\n  <p style=\"font-size: 20px; color: white\">處理中...</p>\r\n</ngx-spinner>\r\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/login/login.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/login/login.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<span> <img src='../assets/Photos/inhublogo.png' width=20% height=20% /></span>\n<p></p>\n\n<h3>\n  請用您的google 帳號登入, 如果資料庫管理員名單有符合您的Gmail 帳號, 則會登入成功\n</h3>\n<div>\n  <div class=\"container mt-5\">\n    <h2>行動辦公室 App 後臺管理登入</h2>\n    <div class=\"row mt-5\">\n      <div class=\"col-md-4 mt-2 m-auto \">\n          <button class=\"loginBtn loginBtn--google\" #loginRef>\n              Login with Google\n            </button>\n      </div>\n     </div>\n  </div>\n\n\n</div>\n\n\n\n\n\n\n\n<ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-scale-multiple\"\n>\n  <p style=\"font-size: 20px; color: white\">驗證中...</p>\n</ngx-spinner>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/logview/logview.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/logview/logview.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <span><img src='../assets/Photos/inhublogo.png' width=10% height=10% /></span>\n  <p></p>\n</div>\n\n\n<p></p>\n\n<button type=\"button\" class=\"btn btn-primary\" onclick=\"location.href='#/bccenter';\">到商務中心管理</button>\n<p></p>\n\n<table class=\"table table-bordered table-striped\">\n  <tr>\n      <th>\n        Name\n      </th>\n      <th>\n        Action\n      </th>\n      <th>\n        User\n      </th>\n      <th>\n        RecordTime\n      </th>\n\n      <th>\n        Comment\n      </th>\n  </tr>\n\n\n      <tbody>\n\n          <tr *ngFor = 'let item of List | paginate: { itemsPerPage: 30, currentPage: p} ' >\n              <td>\n                  {{item.Name}}\n              </td>\n              <td>{{ item.Action}}\n\n              </td>\n              <td>   {{item.User}} </td>\n              <td>{{ item.RecordTime}}</td>\n              <td>\n                {{item.Comment}}\n              </td>\n          </tr>\n      </tbody>\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n</table>\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/userform/userform.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/userform/userform.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div>\r\n  <span><img src='../assets/Photos/inhublogo.png' width=10% height=10% /></span>\r\n  <p></p>\r\n</div>\r\n\r\n<div class=\"nav navbar-nav navbar-right\">\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"SaveEntity()\">儲存</button> |\r\n      <button type=\"button\" class=\"btn btn-default\" onclick=\"location.href='#/bcuser';\">返回</button>\r\n      <p></p>\r\n</div>\r\n\r\n<div class=\"body-content\">\r\n\r\n      <table class=\"table table-bordered table-striped\">\r\n              <tbody>\r\n\r\n                  <tr>\r\n                      <td>\r\n                          ID:\r\n                      </td>\r\n                      <td>\r\n                             <div *ngIf=\"!isAdd\">\r\n                              {{Entity.Id}}\r\n                             </div>\r\n\r\n                              <div *ngIf=\"isAdd\">\r\n                                <input [(ngModel)]=\"Entity.Id\" #ctrl=\"ngModel\" required name=\"ID\"  #fullName=\"ngModel\" class=\"form-control\" required>\r\n                              </div>\r\n\r\n                      </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                            Email :\r\n                    </td>\r\n                    <td>\r\n                            <input [(ngModel)]=\"Entity.Email\" #ctrl=\"ngModel\" required name=\"Email\"  #fullName=\"ngModel\" class=\"form-control\" required>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                  <td>\r\n                          Password :\r\n                          <div *ngIf=\"!isAdd\">\r\n                            <button type=\"button\" class=\"btn btn-sm btn-warning\" (click)=\"UpdatePassword()\">更新Password</button>\r\n                          </div>\r\n                  </td>\r\n                  <td>\r\n                          <input [(ngModel)]=\"Entity.Password\" #ctrl=\"ngModel\" required name=\"Password\"  #fullName=\"ngModel\" class=\"form-control\" required>\r\n                  </td>\r\n              </tr>\r\n\r\n                  <tr>\r\n                      <td>\r\n                              名:\r\n                      </td>\r\n                      <td>\r\n                              <input [(ngModel)]=\"Entity.FirstName\" #ctrl=\"ngModel\" required name=\"FirstName\"  #fullName=\"ngModel\" class=\"form-control\" required>\r\n                      </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                            姓:\r\n                    </td>\r\n                    <td>\r\n                            <input [(ngModel)]=\"Entity.LastName\" #ctrl=\"ngModel\" required name=\"LastName\"  #fullName=\"ngModel\" class=\"form-control\">\r\n                    </td>\r\n                </tr>\r\n\r\n                  <tr>\r\n                      <td>\r\n                          電話:\r\n                      </td>\r\n                      <td>\r\n                              <input [(ngModel)]=\"Entity.Cell \" #ctrl=\"ngModel\" name=\"Cell\" class=\"form-control\">\r\n                      </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                        點數:\r\n                    </td>\r\n                    <td>\r\n                            <input [(ngModel)]=\"Entity.Points\" #ctrl=\"ngModel\" name=\"Points\" class=\"form-control\" type=\"number\">\r\n                    </td>\r\n                </tr>\r\n\r\n                  <tr *ngIf=\"!isAdd\">\r\n                          <td>\r\n                             管理的 Vendor <button type=\"button\" class=\"btn btn-sm btn-warning\" (click)=\"AssignVendor()\">指定管理的商務中心</button>\r\n                          </td>\r\n                          <td>\r\n                                 {{Entity.Vendor.company}}\r\n\r\n\r\n                                  <div>\r\n                                    <select (change)=\"filterForArticles($event.target.value)\" class=\"form-control\">\r\n                                      <option value=\"-1\">--選擇--</option>\r\n                                      <option *ngFor=\"let item of List; let i = index\" value={{item.Id}}>\r\n                                        {{item.Company}}\r\n                                      </option>\r\n                                    </select>\r\n\r\n                                  </div>\r\n                          </td>\r\n                  </tr>\r\n\r\n              </tbody>\r\n              </table>\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n   <hr>\r\n  <div class=\"nav navbar-nav navbar-right\">\r\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"SaveEntity()\">儲存</button> |\r\n          <button type=\"button\" class=\"btn btn-default\" onclick=\"location.href='#/bcuser';\">返回</button>\r\n  </div>\r\n\r\n\r\n\r\n\r\n<ngx-spinner\r\nbdColor=\"rgba(51,51,51,0.8)\"\r\nsize=\"medium\"\r\ncolor=\"#fff\"\r\ntype=\"ball-scale-multiple\"\r\n>\r\n<p style=\"font-size: 20px; color: white\">處理中...</p>\r\n</ngx-spinner>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/userlist/userlist.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/userlist/userlist.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <span><img src='../assets/Photos/inhublogo.png' width=10% height=10% /></span>\n  <p></p>\n</div>\n\n\n<p></p>\n\n\n<div class=\"row\">\n  <div class=\"col-sm-4\">\n    <button type=\"button\" class=\"btn btn-primary\" onclick=\"location.href='#/bcuserform';\">新增</button>\n  </div>\n  <div class=\"col-sm-4\">\n\n  </div>\n  <div class=\"col-sm-4\">\n    <button type=\"button\" class=\"btn btn-primary\" onclick=\"location.href='#/bccenter';\">到商務中心管理</button>\n  </div>\n</div>\n<p></p>\n\n<table class=\"table table-bordered table-striped\">\n  <tr>\n      <th>\n          ID\n      </th>\n      <th>\n        Email\n      </th>\n      <th>\n          名\n      </th>\n      <th>\n          姓\n      </th>\n      <th>\n          電話\n      </th>\n\n      <th>\n        點數\n      </th>\n\n      <th>\n\n      </th>\n  </tr>\n\n\n      <tbody>\n          <tr *ngFor = 'let item of List ' [tooltip]=\"popTemplate\" (mouseover)='popup(item)'>\n              <td>\n                  {{item.Id}}\n              </td>\n              <td>\n                {{item.Email}}\n              </td>\n              <td>{{ item.FirstName}}\n\n              </td>\n              <td>   {{item.LastName}} </td>\n              <td>{{ item.Cell}}</td>\n              <td>\n                {{item.Points}}\n              </td>\n              <td>\n                      <!-- <button type=\"button\" class=\"btn btn-primary\" (click) = showform(item.Id)>展示</button>    | -->\n                      <button type=\"button\" class=\"btn btn-info\" (click) = openform(item.Id)>編輯</button>    |\n                      <button type=\"button\" class=\"btn btn-danger\" (click) = delete(item.Id)>刪除</button>\n              </td>\n\n\n          </tr>\n      </tbody>\n\n</table>\n\n\n\n<ngx-spinner\nbdColor=\"rgba(51,51,51,0.8)\"\nsize=\"medium\"\ncolor=\"#fff\"\ntype=\"ball-scale-multiple\"\n>\n<p style=\"font-size: 20px; color: white\">處理中...</p>\n</ngx-spinner>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <span> <img src='../assets/Photos/tealogo.jpg' width=20% height=20% /></span>\n  <p></p>\n</div>\n\n<h1> 藏家頁面廣告管理系統</h1>\n\n\n<div class=\"d-flex\">\n  <div>\n          <button type=\"button\" class=\"btn btn-success\" onclick=\"location.href='#/teaportal';\">返回管理頁面</button>\n  </div>\n  <div class=\"ml-auto\">\n           <button type=\"button\" class=\"btn btn-primary\" (click)=\"SaveEntity()\">儲存廣告圖片連結</button>\n  </div>\n</div>\n<p></p>\n\n\n  <div class=\"center\">\n    <ngx-file-drop dropZoneLabel=\"Drop files here\" (onFileDrop)=\"dropped($event)\"\n    (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\n        <ng-template ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\">\n          拖曳或是選擇要上傳的圖片(必須小於4mb)\n          <button type=\"button\" (click)=\"openFileSelector()\">Browse Files</button>\n        </ng-template>\n    </ngx-file-drop>\n</div>\n\n<table class=\"table table-borderless table-striped\">\n   <tbody>\n\n  <tr>\n      <td colspan=\"2\">\n\n\n              <div>\n                <bs-sortable\n                  [(ngModel)]=\"list\"\n                  [itemTemplate]=\"itemTemplateImage\"\n                  itemClass=\"sortable-item\"\n                  itemActiveClass=\"sortable-item-active\"\n                  placeholderItem=\"Drag here\"\n                  placeholderClass=\"placeholderStyle\"\n                  wrapperClass=\"sortable-wrapper\"\n                ></bs-sortable>\n              </div>\n      </td>\n  </tr>\n   </tbody>\n</table>\n\n<hr>\n\n<h1> 廣告連結管理</h1>\n\n\n\n<table class=\"table table-borderless table-striped\">\n  <tbody>\n <tr>\n   <td>\n    <button type=\"button\" class=\"btn btn-primary btn-xs\" (click) =\"AddNewTextLink()\">新增廣告連結</button>\n   </td>\n   <td>\n    <button type=\"button\" class=\"btn btn-success btn-xs\" (click) =\"SaveTextLinks()\">儲存廣告連結</button>\n   </td>\n </tr>\n <tr>\n     <td colspan=\"2\">\n\n\n\n              <div>\n                <bs-sortable\n                  [(ngModel)]=\"textLInks\"\n                  [itemTemplate]=\"itemTemplate\"\n                  itemClass=\"sortable-item\"\n                  itemActiveClass=\"sortable-item-active\"\n                  placeholderItem=\"Drag here\"\n                  placeholderClass=\"placeholderStyle\"\n                  wrapperClass=\"sortable-wrapper\"\n                ></bs-sortable>\n              </div>\n\n\n     </td>\n\n\n </tr>\n\n  </tbody>\n</table>\n\n\n\n<ng-template #itemTemplateImage let-item=\"item\" let-index=\"index\">\n\n  <div class=\"row\"  style=\"border-style:solid; border-width: thin; border-color: lightblue;\">\n\n    <img [src]=\"item.value.Image_Url\"   class=\"img-thumbnail\" > <p></p>\n    名稱:<input [(ngModel)]=\"item.value.Name\" #ctrl=\"ngModel\"  name=\"imagename\" class=\"form-control\"/> <p></p>\n    備註: <input [(ngModel)]=\"item.value.Comment\" #ctrl=\"ngModel\"  name=\"imageComment\" type=\"text\"  class=\"form-control\"/><p></p>\n    圖片連結: <input [(ngModel)]=\"item.value.Target_Url\" #ctrl=\"ngModel\"  name=\"targeturl\" type=\"text\"  class=\"form-control\"/><p></p>\n    <button type=\"button\" class=\"btn btn-danger btn-xs\" (click) =\"RemoveImage(index)\">刪除圖片</button>\n\n  </div>\n\n  <p></p>\n\n</ng-template>\n\n\n\n\n<ng-template #itemTemplate let-item=\"item\" let-index=\"index\">\n\n  <div style=\"border-style:solid; border-width: thin;\">\n    廣告連結名稱:<input [(ngModel)]=\"item.value.Name\" #ctrl=\"ngModel\"  name=\"imagename\" class=\"form-control\"/> <p></p>\n    連結(url): <input [(ngModel)]=\"item.value.Target_Url\" #ctrl=\"ngModel\"  name=\"targeturl\" type=\"text\"  class=\"form-control\"/><p></p>\n    <button type=\"button\" class=\"btn btn-danger btn-xs\" (click) =\"RemoveTextLink(index)\">刪除廣告連結</button>\n\n  </div>\n\n  <p></p>\n\n</ng-template>\n\n\n\n\n<ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-scale-multiple\"\n>\n  <p style=\"font-size: 20px; color: white\">處理中...</p>\n</ngx-spinner>\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<span> <img src='../assets/Photos/tealogo.jpg' width=20% height=20% /></span>\r\n<p></p>\r\n\r\n\r\n<carousel>\r\n  <slide *ngFor=\"let item of AdImages\" class=\"animated fadeIn\">\r\n    <a [href]=\"item.Target_Url\" target=\"_blank\">\r\n\r\n      <img [src]=\"item.Image_Url\" alt=\"Pages\" style=\"display: block; width: 100%;\">\r\n      <div class=\"carousel-caption d-none d-md-block\" style=\"color: black;\">\r\n        <h3>{{item.Name}}</h3>\r\n        <p>{{item.Comment}}</p>\r\n      </div>\r\n\r\n    </a>\r\n  </slide>\r\n</carousel>\r\n<p></p>\r\n<form>\r\n    <div *ngIf=\"IsManager\">\r\n           <button type=\"button\" class=\"btn btn-success\" onclick=\"location.href='#/clientlist';\">返回列表</button>\r\n           <p></p>\r\n   </div>\r\n\r\n  <div class=\"form-group\">\r\n        <table class=\"table table-bordered table-striped\">\r\n                <tbody>\r\n\r\n                    <tr>\r\n\r\n                        <td>\r\n                            客戶編號:\r\n                        </td>\r\n                        <TD>\r\n                                {{Entity.ClientId}}\r\n                        </TD>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                               客戶名稱:\r\n                        </td>\r\n                        <td>\r\n                            <b><h1 class=\"h4\">{{Entity.ClientName}} </h1></b>\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            地址:\r\n                        </td>\r\n                        <td>\r\n                                {{Entity.Address}}\r\n                        </td>\r\n                    </tr>\r\n                    <tr>\r\n                        <td>\r\n                            電話:\r\n                        </td>\r\n                        <td>\r\n                            {{Entity.Phone}}\r\n                        </td>\r\n                </tbody>\r\n        </table>\r\n        <div>\r\n          <table class=\"table table-bordered table-striped table-hover\">\r\n            <tr>\r\n              <th>\r\n                每月倉儲管理費\r\n              </th>\r\n              <th>\r\n                上次付費日期\r\n              </th>\r\n              <th>\r\n                下次付費日期\r\n              </th>\r\n              <th>\r\n                備註\r\n              </th>\r\n            </tr>\r\n            <tr>\r\n              <td>{{paymentInfo.Info.TotalFee}}</td>\r\n              <td>{{paymentInfo.Info.LastPaymentDate}}</td>\r\n              <td>{{paymentInfo.Info.NextPaymentDate}}</td>\r\n              <td>{{paymentInfo.Info.Comment}}</td>\r\n            </tr>\r\n            <tr>\r\n              <td colspan=\"4\">\r\n                <table>\r\n                  <tbody>\r\n                    <tr *ngFor = 'let item of paymentInfo.InfoHistory; let x = index  ' >\r\n                      <td>\r\n                        {{item.Date}}\r\n                      </td>\r\n                      <td>\r\n                        {{item.Item}}\r\n                      </td>\r\n                      <td>\r\n                        {{item.PaymentType}}\r\n                      </td>\r\n                      <td>\r\n                        {{item.Amount}}\r\n                      </td>\r\n                      <td>\r\n                        {{item.Comment}}\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n\r\n                </table>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div *ngIf=\"IsManager\">\r\n            <table class=\"table table-bordered table-striped table-hover\">\r\n                <tr>\r\n                    <th>\r\n                        序號\r\n                    </th>\r\n                    <th>\r\n                       產品編號\r\n                    </th>\r\n                    <th>\r\n                        產品名稱\r\n                    </th>\r\n                    <th>\r\n                        入庫數量\r\n                    </th>\r\n                    <th>\r\n                        單位\r\n                    </th>\r\n                    <th>\r\n                        出庫數量\r\n                    </th>\r\n                    <th>\r\n                        庫存量\r\n                  </th>\r\n                </tr>\r\n\r\n\r\n                    <tbody>\r\n                        <tr *ngFor = 'let item of Entity.Inventories; let x = index  ' >\r\n                            <td>\r\n                                {{ x  + 1 }}\r\n                            </td>\r\n                            <td>\r\n                                {{item.ProductId}}\r\n                            </td>\r\n                            <td>\r\n                                {{ item.ProductName}}\r\n                            </td>\r\n                            <td>{{ item.Stock }}</td>\r\n\r\n                            <td>\r\n                                {{ item.Unit }}\r\n                            </td>\r\n                            <td>\r\n                                {{ item.Return}}\r\n                            </td>\r\n                            <td>\r\n                                {{ item.NotReturn}}\r\n                            </td>\r\n\r\n                        </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                            <tr>\r\n                              <td>總計</td>\r\n                              <td>\r\n\r\n                                </td>\r\n                                <td>\r\n\r\n                                </td>\r\n                                <td>\r\n                                    {{ stock_sum }}\r\n\r\n                                </td>\r\n\r\n                                <td>\r\n\r\n                                </td>\r\n                                <td>\r\n                                    {{ return_sum}}\r\n                                </td>\r\n                                <td>\r\n                                    {{ notreturn_sum }}\r\n                                </td>\r\n                            </tr>\r\n                    </tfoot>\r\n\r\n            </table>\r\n        </div>\r\n        <div *ngIf=\"!IsManager\">\r\n            <table class=\"table table-bordered table-striped table-hover\">\r\n                <tr>\r\n                        <th>\r\n                                序號\r\n                            </th>\r\n                            <th>\r\n                               產品編號\r\n                            </th>\r\n                            <th>\r\n                                產品名稱\r\n                            </th>\r\n                            <th>\r\n                                入庫數量\r\n                            </th>\r\n                            <th>\r\n                                單位\r\n                            </th>\r\n                            <th>\r\n                                出庫數量\r\n                            </th>\r\n                            <th>\r\n                                庫存量\r\n                          </th>\r\n                </tr>\r\n\r\n\r\n                    <tbody>\r\n                        <tr *ngFor = 'let item of userInvertories; let x = index;' >\r\n                            <td>\r\n                                {{ x  + 1 }}\r\n                            </td>\r\n                            <td>\r\n                                {{item.ProductId}}\r\n                            </td>\r\n                            <td>\r\n                                {{ item.ProductName}}\r\n                            </td>\r\n                            <td>{{ item.Stock }}</td>\r\n\r\n                            <td>\r\n                                {{ item.Unit }}\r\n                            </td>\r\n                            <td>\r\n                                {{ item.Return}}\r\n                            </td>\r\n                            <td>\r\n                                {{ item.NotReturn}}\r\n                            </td>\r\n\r\n                        </tr>\r\n                    </tbody>\r\n                    <tfoot>\r\n                            <tr>\r\n                              <td>總計</td>\r\n                              <td>\r\n\r\n                                </td>\r\n                                <td>\r\n\r\n                                </td>\r\n                                <td>\r\n                                    {{ stock_sum }}\r\n\r\n                                </td>\r\n\r\n                                <td>\r\n\r\n                                </td>\r\n                                <td>\r\n                                    {{ return_sum}}\r\n                                </td>\r\n                                <td>\r\n                                    {{ notreturn_sum }}\r\n                                </td>\r\n                            </tr>\r\n                          </tfoot>\r\n\r\n            </table>\r\n        </div>\r\n\r\n\r\n\r\n    <div *ngIf=\"IsManager\">\r\n      <p></p>\r\n      <button type=\"button\" class=\"btn btn-success\" onclick=\"location.href='#/clientlist';\">返回列表</button>\r\n      <p></p>\r\n    </div>\r\n\r\n        <h2>近六月溫濕度資料表</h2>\r\n        <carousel  interval=\"0\">\r\n                <slide *ngFor=\"let item of images\">\r\n                  <img [src]=\"item.ImageUrl\" alt=\"Pages\" style=\"display: block; width: 100%;\">\r\n                  <div class=\"carousel-caption d-none d-md-block\">\r\n                  </div>\r\n                </slide>\r\n        </carousel>\r\n\r\n        <div *ngIf=\"IsManager\">\r\n            <p></p>\r\n                <button type=\"button\" class=\"btn btn-success\" onclick=\"location.href='#/clientlist';\">返回列表</button>\r\n                <p></p>\r\n        </div>\r\n\r\n        <hr>\r\n\r\n\r\n    <ul>\r\n      <li *ngFor=\"let item of AdTextLinks\">\r\n        <h2> <a [href]=\"item.Target_Url\" target=\"_blank\"> {{item.Name}}</a></h2>\r\n      </li>\r\n    </ul>\r\n    <div class=\"embed-responsive embed-responsive-16by9\">\r\n      <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/WynX1gM7JT4\" frameborder=\"1\"\r\n        allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n    </div>\r\n\r\n\r\n  </div>\r\n</form>\r\n\r\n\r\n\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\r\n  <p style=\"font-size: 20px; color: white\">處理中...</p>\r\n</ngx-spinner>\r\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/paymentform/paymentform.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/paymentform/paymentform.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span> <img src='../assets/Photos/tealogo.jpg' width=20% height=20% /></span>\n<p></p>\n<div>\n  <button type=\"button\" class=\"btn btn-success\" onclick=\"location.href='#/paymentlist';\">返回總表</button>\n  <p></p>\n</div>\n<div *ngIf=\"Entity.ClientId\">\n  <table class=\"table table-bordered table-striped\">\n    <tbody>\n      <tr>\n        <td>\n          編號:\n        </td>\n        <Td>\n          {{Entity.ClientId}}\n        </Td>\n      </tr>\n      <tr>\n        <td>\n          名稱:\n        </td>\n        <td>\n          <b>{{Entity.ClientName}} </b>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          地址:\n        </td>\n        <td>\n          {{Entity.Address}}\n        </td>\n      </tr>\n      <tr>\n        <td>\n          電話:\n        </td>\n        <td>\n          {{Entity.Phone}}\n        </td>\n      </tr>\n    </tbody>\n  </table>\n  <div *ngIf=\"Entity.Info\">\n    <table class=\"table table-bordered table-striped\">\n      <tbody>\n        <tr>\n          <td>\n            目前倉儲庫存(基本單位)\n          </td>\n          <td>\n            <input [(ngModel)]=\"Entity.Info.TotalStock\" #ctrl=\"ngModel\" type=\"number\" style=\"width: 60%;\">\n          </td>\n        </tr>\n        <tr>\n          <td>\n            每月目前管理費\n          </td>\n          <td>\n              <input [(ngModel)]=\"Entity.Info.TotalFee\" #ctrl=\"ngModel\" type=\"number\" style=\"width: 60%;\">\n          </td>\n        </tr>\n        <tr>\n          <td>\n            付費週期\n          </td>\n          <td>\n            <mat-form-field>\n              <select matNativeControl [(ngModel)]=\"Entity.Info.PaymentPeriod\" (ngModelChange) = \"updatepaymentdate()\" required>\n                <option value=1>每月付</option>\n                <option value=3>每三個月付</option>\n                <option value=6>每六個月付</option>\n                <option value=12>每年付</option>\n              </select>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            上次付費日期  <button type=\"button\" class=\"btn btn-warning\" (click)=\"resetdates()\" >重設日期</button>\n          </td>\n          <td>\n            <div class=\"input-group\">\n              {{Entity.Info.LastPaymentDate}}\n              <input  [(ngModel)]=\"model\"   #ctrl=\"ngModel\" type=\"text\" style=\"width: 0%;\"  ngbDatepicker #d=\"ngbDatepicker\" (ngModelChange)=\"selectlastspaymentday(model)\">\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary calendar fa fa-calendar\" (click)=\"d.toggle()\" type=\"button\"></button>\n              </div>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            下次付費日期\n          </td>\n          <td>\n            <div class=\"input-group\">\n\n             <span   [@changeValue]=currentState>{{Entity.Info.NextPaymentDate}}</span>\n              <input [(ngModel)]=\"model2\"  #ctrl=\"ngModel\" type=\"text\" style=\"width: 0%;\" ngbDatepicker #d1=\"ngbDatepicker\" (ngModelChange)=\"selectnextpaymentday(model2)\">\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary calendar fa fa-calendar\" (click)=\"d1.toggle()\" type=\"button\"></button>\n              </div>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            備註\n          </td>\n          <td>\n            <input [(ngModel)]=\"Entity.Info.Comment\" #ctrl=\"ngModel\" type=\"string\" style=\"width: 100%;\">\n          </td>\n        </tr>\n\n      </tbody>\n    </table>\n\n  </div>\n  <button type=\"button\" class=\"btn btn-lg btn-primary\" (click)=save()>儲存紀錄</button>\n  <div *ngIf=\"change\" style=\"color: red;\">所有更新尚未儲存 請按下儲存按鈕至雲端</div>\n  <p></p>\n  <table class=\"table table-bordered table-striped\">\n\n    <tbody>\n      <th>\n        付款日期 <button type=\"button\" class=\"btn btn-success\" (click)=\"addnewhistory()\">新增紀錄</button>\n      </th>\n      <th>\n        付款名目\n      </th>\n      <th>\n        付款方式\n      </th>\n      <th>\n        付款總額\n      </th>\n      <th>\n        備註\n      </th>\n\n      <tr *ngFor='let item of Entity.InfoHistory; let x = index'>\n        <td>\n          <input [(ngModel)]=\"item.Date\" #ctrl=\"ngModel\" type=\"string\" style=\"width: 80%;\">\n        </td>\n        <td>\n          <input [(ngModel)]=\"item.Item\" #ctrl=\"ngModel\" type=\"string\" style=\"width: 80%;\">\n        <td>\n         <mat-form-field>\n            <select matNativeControl [(ngModel)]=\"item.PaymentType\" required>\n              <option value=\"信用卡\">信用卡</option>\n              <option value=\"匯款\">匯款</option>\n              <option value=\"現金\">現金</option>\n              <option value=\"其他\">其他</option>\n            </select>\n          </mat-form-field>\n        </td>\n        <td>\n          <input [(ngModel)]=\"item.Amount\" #ctrl=\"ngModel\" type=\"number\" style=\"width: 80%;\">\n        </td>\n        <td>\n          <input [(ngModel)]=\"item.Comment\" #ctrl=\"ngModel\" type=\"string\" style=\"width: 100%;\">\n        </td>\n        <td>\n          <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=delete(x)>刪除</button>\n        </td>\n      </tr>\n  </table>\n\n</div>\n\n\n\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\n  <p style=\"font-size: 20px; color: white\">處理中...</p>\n</ngx-spinner>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/paymentlist/paymentlist.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/paymentlist/paymentlist.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <span> <img src='../assets/Photos/tealogo.jpg' width=20% height=20% /></span>\n  <p></p>\n</div>\n\n<h3>所有客戶付款表</h3>\n\n<div class=\"row\">\n  <div class=\"col-sm-4\">\n    <button type=\"button\" class=\"btn btn-success\" onclick=\"location.href='#/teaportal';\">返回管理頁面</button>\n  </div>\n  <div class=\"col-sm-4\">\n\n  </div>\n  <div class=\"col-sm-4\">\n    <button type=\"button\" class=\"btn btn-warning\" (click)=\"updateUsers()\">更新付款人名單和庫存數量</button>\n  </div>\n</div>\n\n<p></p>\n<div class=\"form form-row\">\n  <label>搜尋:</label>\n  <input type=\"string\" placeholder=\"編號或名稱\" class=\"form form-control\"\n  [(ngModel)]='Search'\n  style=\"width: 8em;\"\n  />\n</div>\n<p></p>\n<table class=\"table table-bordered table-striped table-hover\">\n  <tr>\n      <th>\n          客戶編號\n      </th>\n      <th>\n          客戶名稱\n      </th>\n      <th>\n        目前倉儲庫存(基本單位)\n      </th>\n      <th>\n        每月目前管理費\n      </th>\n      <th>\n          付款週期\n      </th>\n      <th>\n          上次付款日期\n      </th>\n      <th>\n         下次付款日期\n      </th>\n      <th>\n\n      </th>\n  </tr>\n\n\n      <tbody>\n          <tr *ngFor = 'let item of List' >\n              <td>\n                  {{item.ClientId}}\n              </td>\n              <td>{{ item.ClientName}}\n\n              </td>\n              <td>{{ item.Info.TotalStock}}</td>\n              <td>{{ item.Info.TotalFee}}</td>\n              <td>\n                  {{item.Info.PaymentPeriod}} 個月\n              </td>\n              <td>\n                {{ item.Info.LastPaymentDate}}\n              </td>\n              <td>\n                {{ item.Info.NextPaymentDate}}\n              </td>\n              <td>\n                  <button type=\"button\" class=\"btn btn-sm btn-success\" (click) = showEntity(item.ClientId)>內容</button>\n              </td>\n          </tr>\n      </tbody>\n\n</table>\n\n<div>\n      <button type=\"button\" class=\"btn btn-success\" onclick=\"location.href='#/teaportal';\">返回管理頁面</button>\n      <p></p>\n</div>\n\n<ngx-spinner\nbdColor=\"rgba(51,51,51,0.8)\"\nsize=\"medium\"\ncolor=\"#fff\"\ntype=\"ball-scale-multiple\"\n>\n<p style=\"font-size: 20px; color: white\">處理中...</p>\n</ngx-spinner>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/portal/portal.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/portal/portal.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span> <img src='../assets/Photos/tealogo.jpg' width=20% height=20% /></span>\n<p></p>\n<span> <img src='../assets/Photos/title2.jpg' width=100% height=100% /></span>\n<p></p>\n\n<div style=\"text-align:center;\">\n        <h2>普洱茶倉系統管理頁面</h2> <h3>(登入者:{{User}} , 登入時間: {{LogInTime}})   <button mat-raised-button (click)=\"logout()\" color=\"primary\">登出</button> </h3>\n</div>\n\n\n\n<div class=\"container\"  >\n        <div id=\"rcorners1a\" >\n                        <div class=\"row\" id =\"frontbackground\" >\n                                        <h3>庫存系統</h3>\n                                 </div>\n                                 <div class=\"row\"   id =\"frontbackground\"  >\n                                   <div class=\"col\">\n                                                 <button class=\"button\"  onclick=\"location.href='#/clientlist';  \"><i class=\"fa fa-address-book\" ></i> 庫存列表 </button>\n                                   </div>\n                                   <div class=\"col\">\n                                    <button class=\"button\"  onclick=\"location.href='#/paymentlist';  \"><i class=\"fa fa-address-book\" ></i> 付費列表 </button>\n                                   </div>\n                                   <div class=\"col\">\n                                                 <button class=\"button\" onclick=\"location.href='#/uploadinvfile';\"><i class=\"fa fa-cloud-upload\"></i> 上傳檔案 (更新時間: {{LastUpdateTime}})</button>\n                                   </div>\n                                 </div>\n                                 <div class=\"row\"   id =\"frontbackground\" >\n                                         <hr>\n                        </div>\n        </div>\n        <div id=\"rcorners1a\">\n                        <div class=\"row\" style=\"background-color:lightcyan;\">\n                                        <h3>推廣系統</h3>\n                                </div>\n                                <div class=\"row\" style=\"background-color:lightcyan;\" >\n                                  <div class=\"col\">\n                                        <button class=\"button\"  onclick=\"window.open('#/articleshow', '_blank'); \"><i class=\"fa fa-book\" ></i> 推廣文章連結 </button>\n                                  </div>\n                                  <div class=\"col\">\n                                         <button class=\"button\"  onclick=\"location.href='#/articlelist';\"><i class=\"fa fa-cloud-upload\" ></i>推廣文章管理 </button>\n                                  </div>\n                                  <div class=\"col\">\n                                    <button class=\"button\"  onclick=\"location.href='#/adimage';\"><i class=\"fa fa-cloud-upload\" ></i>藏家頁面廣告管理 </button>\n                                 </div>\n                                </div>\n                                <div class=\"row\" style=\"background-color:lightcyan;\">\n                                                <hr>\n                                 </div>\n\n        </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/customerlog.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customerlog.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <span> <img src='../assets/Photos/logo.jpg' width=20% height=20% /></span>\r\n    <p></p>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <mat-form-field>\r\n      <mat-label>搜尋:</mat-label>\r\n\r\n      <input matInput type=\"string\"\r\n      [(ngModel)]='Search'\r\n      placeholder=\"顧客名\"\r\n      />\r\n\r\n    </mat-form-field>\r\n\r\n</div>\r\n\r\n<div class=\"loader\" id=\"loader\"></div>\r\n\r\n\r\n<table class=\"table table-bordered table-striped\">\r\n    <tr>\r\n        <th>\r\n            顧客姓名\r\n        </th>\r\n        <th>\r\n            電話\r\n        </th>\r\n        <th>\r\n            訂購管道\r\n        </th>\r\n        <th>\r\n            通話紀錄\r\n        </th>\r\n        <th>\r\n            備註 (後續追蹤)\r\n        </th>\r\n        <th>\r\n            時間\r\n        </th>\r\n    </tr>\r\n\r\n        <tr>\r\n            <td>\r\n                <input type=\"string\"\r\n                [(ngModel)]='Name'\r\n                style=\"width: 6em;\"\r\n                />\r\n            </td>\r\n            <td>\r\n                <input type=\"string\"\r\n                [(ngModel)]='PhoneNumber'\r\n                style=\"width: 6em;\"\r\n                />\r\n            </td>\r\n            <td>\r\n              <mat-form-field>\r\n                <select matNativeControl [(ngModel)]=\"Channel\" required>\r\n                  <option value=\"電話直購\">電話直購</option>\r\n                  <option value=\"簡訊促銷\">簡訊促銷</option>\r\n                  <option value=\"樂天\">樂天</option>\r\n                  <option value=\"蝦皮\">蝦皮</option>\r\n                  <option value=\"官網\">官網</option>\r\n                  <option value=\"親友員工\">親友員工</option>\r\n                  <option value=\"其他\">其他</option>\r\n                </select>\r\n              </mat-form-field>\r\n            </td>\r\n            <td>\r\n                <textarea [(ngModel)]='Note' class=\"form-control\" >\r\n\r\n                </textarea>\r\n            </td>\r\n            <td  class=\"warning\">\r\n                <textarea [(ngModel)]='Comment' class=\"form-control\">\r\n\r\n                </textarea>\r\n            </td>\r\n            <td>\r\n\r\n            </td>\r\n            <td>\r\n                <button mat-raised-button color=\"primary\" (click) = 'addlog()'>\r\n                    新增\r\n                </button>\r\n\r\n            </td>\r\n        </tr>\r\n\r\n        <tbody>\r\n            <tr *ngFor = 'let item of logList | paginate: { itemsPerPage: 10, currentPage: p} '>\r\n\r\n                <td>{{ item.Name}}</td>\r\n                <td>{{ item.PhoneNumber }}</td>\r\n                <td>\r\n                    {{item.Channel}}\r\n                </td>\r\n                <td>{{ item.Note}}</td>\r\n                <td class=\"warning\">{{ item.Comment}}</td>\r\n                <td>{{ item.RecordTime}}</td>\r\n                <td>\r\n                        <button  class=\"btn btn-danger\" (click) = 'DeleteLog(item.RowKey, item.Name)' >\r\n                                刪除\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-info\" (click)=\"openModal(item)\">編輯</button>\r\n\r\n                </td>\r\n\r\n            </tr>\r\n        </tbody>\r\n        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n\r\n</table>\r\n\r\n\r\n\r\n\r\n{{modalMessage}}\r\n");

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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/health/healthview/healthview.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/health/healthview/healthview.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n\r\n  <select (change)=\"filterForArticles($event.target.value)\" class=\"form-control\">\r\n    <option value=\"-1\">--選擇--</option>\r\n    <option *ngFor=\"let item of List; let i = index\" value={{i}}>\r\n      {{item.ClientName}}\r\n    </option>\r\n  </select>\r\n</div>\r\n\r\n<p></p>\r\n\r\n<div *ngIf=\"Entity.ClientId\">\r\n\r\n  <table class=\"table table-bordered table-striped\">\r\n    <tbody>\r\n\r\n      <tr>\r\n\r\n        <td>\r\n          編號:\r\n        </td>\r\n        <Td>\r\n          {{Entity.ClientId}}\r\n        </Td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          名稱:\r\n        </td>\r\n        <td>\r\n          <b>{{Entity.ClientName}} </b>\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          地址:\r\n        </td>\r\n        <td>\r\n          {{Entity.Address}}\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          電話:\r\n        </td>\r\n        <td>\r\n          {{Entity.Phone}}\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          身高:\r\n        </td>\r\n        <td>\r\n          {{Entity.Info.Height}}\r\n        </td>\r\n      </tr>\r\n      <tr>\r\n        <td>\r\n          備註:\r\n        </td>\r\n        <td>\r\n          {{Entity.Info.Note}}\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <button type=\"button\" class=\"btn btn-lg btn-primary\" (click)=save()>儲存紀錄</button>\r\n  <div *ngIf=\"change\" style=\"color: red;\">All changes need to click the button to save!</div>\r\n  <p></p>\r\n  <table class=\"table table-bordered table-striped\">\r\n\r\n    <tbody>\r\n      <th>\r\n        基本數據 <button type=\"button\" class=\"btn btn-success\" (click)=\"openModal()\">新增紀錄</button>\r\n      </th>\r\n      <th>\r\n        血壓\r\n      </th>\r\n      <th>\r\n        餐飲\r\n      </th>\r\n\r\n      <tr *ngFor='let item of Entity.InfoHistory | paginate: { itemsPerPage: 7, currentPage: p} ; let x = index'>\r\n        <td>\r\n          {{item.DateTime}} 體重:\r\n          {{ item.Weight}}\r\n          KG 步數:\r\n          <span *ngIf=\"item.WalkSteps < 10000\">{{ item.WalkSteps }} </span>\r\n          <span *ngIf=\"item.WalkSteps >= 10000\" style=\"color: red;\">{{ item.WalkSteps }} </span>步\r\n          <span *ngIf=\"item.Comment\" style=\"color:blue;\">({{item.Comment}})</span>\r\n\r\n          <table>\r\n\r\n\r\n            <tbody class=\"table table-bordered table-striped\">\r\n              <tr *ngFor=\"let meal of item.Activities\">\r\n                <td> {{meal.DateTime}} - {{meal.Name}}\r\n                  <a [href]= \"meal.ImageUrl\" target=\"_blank\">\r\n                  <img [src]=\"meal.ImageLink\" style=\"width: 100%;\" />\r\n                </a>\r\n                 </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n          <table>\r\n            <tr>\r\n              <td>\r\n                <button type=\"button\" class=\"btn btn-sm btn-warning\" (click)=editform(x)>編輯</button>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <td>\r\n                <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=delete(x)>刪除</button>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n\r\n\r\n\r\n        </td>\r\n\r\n        <td>\r\n          <table>\r\n\r\n            <tbody class=\"table table-bordered table-striped\">\r\n              <tr *ngFor=\"let blood of item.BloodPressures\">\r\n                <td> 收縮壓:\r\n                  <span *ngIf=\"blood.BloodHigh >= 140\" style=\"color: red;\">{{ blood.BloodHigh }} </span>\r\n                  <span *ngIf=\"blood.BloodHigh < 140\" style=\"color: green;\">{{ blood.BloodHigh }} </span>\r\n\r\n\r\n                  舒張壓:<span *ngIf=\"blood.BloodLow >= 90\" style=\"color: red;\">{{ blood.BloodLow }} </span>\r\n                  <span *ngIf=\"blood.BloodLow < 90\" style=\"color: green;\">{{ blood.BloodLow }} </span>\r\n                  脈搏: {{blood.Pulse}}\r\n                  溫度: {{blood.Comment}} c\r\n                  {{blood.DateTime}}\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n\r\n        <td>\r\n          <table>\r\n\r\n\r\n            <tbody class=\"table table-bordered table-striped\">\r\n              <tr *ngFor=\"let meal of item.Meals\">\r\n                <td> {{meal.DateTime}} - {{meal.Name}}\r\n                  <img [src]=\"meal.ImageLink\" style=\"width: 100%;\" /> </td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </td>\r\n      </tr>\r\n      </tbody>\r\n      <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n  </table>\r\n\r\n</div>\r\n\r\n\r\n\r\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\r\n  <p style=\"font-size: 20px; color: white\">處理中...</p>\r\n</ngx-spinner>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/health/healthviewmodal/healthviewmodal.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/health/healthviewmodal/healthviewmodal.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header table-hover\">\r\n    <h4 class=\"modal-title pull-left\">{{History.DateTime}}</h4>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">儲存</button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <table class=\"table table-bordered\">\r\n    <tr>\r\n      <td>\r\n        每日步數\r\n      </td>\r\n      <td>\r\n        <input type=\"number\" [(ngModel)]='History.WalkSteps' />\r\n      </td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>\r\n        體重(kg)\r\n      </td>\r\n      <td>\r\n        <input type=\"number\" [(ngModel)]='History.Weight' />\r\n      </td>\r\n    </tr>\r\n\r\n    <tr>\r\n      <td>\r\n        血壓 <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=newblood();>新增</button>\r\n      </td>\r\n      <td>\r\n        <table>\r\n\r\n          <tbody class=\"table table-bordered table-striped\">\r\n            <tr *ngFor=\"let blood of History.BloodPressures; let x = index\">\r\n              <td>\r\n\r\n                <table>\r\n                  <tr>\r\n                    <td>\r\n                      收縮壓 :\r\n                    </td>\r\n                    <td>\r\n                      <input [(ngModel)]=\"blood.BloodHigh\" #ctrl=\"ngModel\" type=\"number\" style=\"width: 60%;\">\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      舒張壓 :\r\n                    </td>\r\n                    <td>\r\n                      <input [(ngModel)]=\"blood.BloodLow\" #ctrl=\"ngModel\" type=\"number\" style=\"width: 60%;\">\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      脈搏 :\r\n                    </td>\r\n                    <td>\r\n                      <input [(ngModel)]=\"blood.Pulse\" #ctrl=\"ngModel\" type=\"number\" style=\"width: 60%;\">\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      時間 :\r\n                    </td>\r\n                    <td>\r\n                      {{blood.DateTime}}\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      溫度 :\r\n                    </td>\r\n                    <td>\r\n                      {{blood.Comment}} c\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n\r\n              </td>\r\n\r\n              <td>\r\n                <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"removeblood(x)\">刪除</button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n\r\n\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td colspan=\"2\">\r\n        餐飲: <button type=\"button\" class=\"btn btn-sm btn-warning\" (click)=newMeal();>新增</button>\r\n        <div class=\"center\">\r\n          <ngx-file-drop dropZoneLabel=\"Drop files here\" (onFileDrop)=\"dropped($event)\" (onFileOver)=\"fileOver($event)\"\r\n            (onFileLeave)=\"fileLeave($event)\">\r\n            <ng-template ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\">\r\n              拖曳或是選擇要上傳的餐飲圖片(必須小於4mb)\r\n              <button type=\"button\" (click)=\"openFileSelector()\">Browse Files</button>\r\n            </ng-template>\r\n          </ngx-file-drop>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td colspan=\"2\">\r\n        <table>\r\n          <tbody class=\"table table-bordered table-striped\">\r\n            <tr *ngFor=\"let meal of History.Meals; let x = index\">\r\n              <td>\r\n                <table>\r\n                  <tr>\r\n                    <td>\r\n                      <img [src]=\"meal.ImageLink\" />\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <input type=\"string\" [(ngModel)]='meal.Name' style=\"width: 90%;\" />\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      {{meal.DateTime}}\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"removeMeal(x)\">刪除</button>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td colspan=\"2\">\r\n        活動:\r\n        <div class=\"center\">\r\n          <ngx-file-drop dropZoneLabel=\"Drop files here\" (onFileDrop)=\"acticitydropped($event)\" (onFileOver)=\"fileOver($event)\"\r\n            (onFileLeave)=\"fileLeave($event)\">\r\n            <ng-template ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\">\r\n              拖曳或是選擇要上傳的餐飲圖片(必須小於4mb)\r\n              <button type=\"button\" (click)=\"openFileSelector()\">Browse Files</button>\r\n            </ng-template>\r\n          </ngx-file-drop>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td colspan=\"2\">\r\n        <table>\r\n          <tbody class=\"table table-bordered table-striped\">\r\n            <tr *ngFor=\"let meal of History.Activities; let x = index\">\r\n              <td>\r\n                <table>\r\n                  <tr>\r\n                    <td>\r\n                      <img [src]=\"meal.ImageLink\" />\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <input type=\"string\" [(ngModel)]='meal.Name' style=\"width: 90%;\" />\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      {{meal.DateTime}}\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                      <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"removeActivity(x)\">刪除</button>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td>\r\n        其他事項\r\n      </td>\r\n      <td>\r\n        <textarea [(ngModel)]='History.Comment' class=\"form-control\">\r\n\r\n               </textarea>\r\n      </td>\r\n    </tr>\r\n\r\n  </table>\r\n</div>\r\n      <div class=\"modal-footer\">\r\n           <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">儲存</button>\r\n  <button type=\"button\" class=\"btn btn-secondary\" (click)=\"bsModalRef.hide()\">取消</button>\r\n        </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/linepair/form/form.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/linepair/form/form.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-banner\">\n  <div class=\"banner-container\">\n    <div class=\"banner-image\"></div>\n  </div>\n</div>\n\n<p></p>\n\n<div class=\"body-content\">\n\n    <mat-vertical-stepper  linear=true>\n\n      <mat-step [stepControl]=\"firstFormGroup\" label= \"基本資料\">\n        <form [formGroup]=\"firstFormGroup\">\n\n          <mat-card>\n            ID: {{Entity.Id}} <br>\n\n            <mat-form-field >\n              <mat-label>姓名</mat-label>\n              <input matInput type=\"string\"\n              [(ngModel)]='Entity.Name' required formControlName=\"firstCtrl\"\n              />\n            </mat-form-field>\n\n            <br>\n\n            <mat-form-field>\n              <mat-label>性別</mat-label>\n              <select matNativeControl [(ngModel)]=\"Entity.Gender\" formControlName=\"firstCtrl\" required>\n                <option value=\"男性\">男性</option>\n                <option value=\"女性\">女性</option>\n              </select>\n            </mat-form-field>\n\n            <br>\n\n            <mat-form-field class=\"example-full-width\">\n              <mat-label>生日 (選擇日期)</mat-label>\n              <input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"Entity.Birthday\" formControlName=\"otherCtrl\">\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n              <mat-datepicker touchUi #picker></mat-datepicker>\n            </mat-form-field>\n\n            <br>\n\n\n              <mat-label>身高(cm)</mat-label>\n              {{Entity.Height}} 公分\n              <mat-slider [(ngModel)]=\"Entity.Height\" formControlName=\"otherCtrl\"\n              thumbLabel\n              [displayWith]=\"formatLabel\"\n              tickInterval=\"2\"\n              min=\"140\"\n              max=\"210\"></mat-slider>\n\n              <br>\n\n              <mat-label>體重(kg)</mat-label>\n              {{Entity.Weight}} 公斤\n              <mat-slider [(ngModel)]=\"Entity.Weight\" formControlName=\"otherCtrl\"\n              thumbLabel\n              [displayWith]=\"formatLabel\"\n              tickInterval=\"2\"\n              min=\"40\"\n              max=\"160\"></mat-slider>\n\n          </mat-card>\n          <br>\n          <div>\n\n            <button mat-raised-button\tcolor=\"primary\" matStepperNext>下一步</button>\n\n          </div>\n\n        </form>\n\n\n\n      </mat-step>\n\n      <mat-step label= \"聯絡方式\" [stepControl]=\"secondFormGroup\">\n\n        <form [formGroup]=\"secondFormGroup\">\n\n          <mat-card>\n\n            <mat-form-field>\n              <mat-label>居住地</mat-label>\n              <div>\n                <select matNativeControl [(ngModel)]=\"Entity.City\" (change) = 'CheckInput()' formControlName=\"secondCtrl\"  required>\n\n                  <option value=\"台北市\">台北市</option>\n                  <option value=\"新北市\">新北市</option>\n                  <option value=\"新竹市\">新竹市</option>\n                  <option value=\"桃園市\">桃園市</option>\n                  <option value=\"台中市\">台中市</option>\n                  <option value=\"台南市\">台南市</option>\n                  <option value=\"高雄市\">高雄市</option>\n                  <option value=\"基隆市\">基隆市</option>\n                  <option value=\"嘉義市\">嘉義市</option>\n                  <option value=\"新竹縣\">新竹縣</option>\n                  <option value=\"苗栗縣\">苗栗縣</option>\n                  <option value=\"彰化縣\">彰化縣</option>\n                  <option value=\"南投縣\">南投縣</option>\n                  <option value=\"雲林縣\">雲林縣</option>\n                  <option value=\"嘉義縣\">嘉義縣</option>\n                  <option value=\"屏東縣\">屏東縣</option>\n                  <option value=\"宜蘭縣\">宜蘭縣</option>\n                  <option value=\"花蓮縣\">花蓮縣</option>\n                  <option value=\"台東縣\">台東縣</option>\n                  <option value=\"澎湖縣\">澎湖縣</option>\n                  <option value=\"中國大陸\">中國大陸</option>\n                  <option value=\"歐美地區\">歐美地區</option>\n                  <option value=\"其他\">其他</option>\n                </select>\n              </div>\n\n\n            </mat-form-field>\n\n            <div *ngIf=\"showInput\">\n              <input matInput type=\"string\"\n              [(ngModel)]='showInputVal' formControlName=\"secondCtrl\" placeholder=\"請手動輸入所在地\"\n              />\n            </div>\n\n            <br>\n\n            <mat-form-field>\n              <mat-label>手機號碼</mat-label>\n              <input matInput type=\"number\"\n              [(ngModel)]='Entity.Phone' required formControlName=\"secondCtrl\"\n              />\n            </mat-form-field>\n\n            <br>\n\n            <mat-form-field>\n              <mat-label>電子郵件</mat-label>\n              <input matInput type=\"email\"\n              [(ngModel)]='Entity.Email' placeholder=\"Ex. pat@example.com\" required formControlName=\"other2Ctrl\"\n              />\n            </mat-form-field>\n\n            <br>\n\n            <mat-form-field>\n              <mat-label>Line ID</mat-label>\n              <input matInput type=\"string\"\n              [(ngModel)]='Entity.LineId' required formControlName=\"other2Ctrl\"\n              />\n            </mat-form-field>\n\n            <br>\n\n          </mat-card>\n          <div>\n            <br>\n            <button mat-raised-button\tcolor=\"warn\" class=\"btn-space\"  mat-button matStepperPrevious>上一步</button>\n            <button mat-raised-button\tcolor=\"primary\"   mat-button matStepperNext>下一步</button>\n          </div>\n\n        </form>\n\n\n      </mat-step>\n\n      <mat-step label= \"職業學歷\" [stepControl]=\"thirdFormGroup\">\n\n        <form [formGroup]=\"thirdFormGroup\">\n\n          <mat-card>\n\n            <mat-form-field>\n              <mat-label>職業</mat-label>\n              <input matInput type=\"string\"\n              [(ngModel)]='Entity.Occuptation' required formControlName=\"other3Ctrl\"\n              />\n            </mat-form-field>\n\n            <br>\n\n            <mat-form-field>\n              <mat-label>學歷</mat-label>\n              <select matNativeControl [(ngModel)]=\"Entity.School\" formControlName=\"thirdCtrl\" required>\n                <option value=\"高中職\">高中職</option>\n                <option value=\"國內大學\">國內大學</option>\n                <option value=\"國外大學\">國外大學</option>\n                <option value=\"國內碩士\">國內碩士</option>\n                <option value=\"國外碩士\">國外碩士</option>\n                <option value=\"國內博士\">國內博士</option>\n                <option value=\"國外博士\">國外博士</option>\n              </select>\n            </mat-form-field>\n\n            <br>\n\n            <mat-form-field>\n              <mat-label>薪水區間(月薪)</mat-label>\n              <select matNativeControl [(ngModel)]=\"Entity.SalaryRange\" formControlName=\"thirdCtrl\" required>\n                <option value=\"1\">三萬元台幣以下</option>\n                <option value=\"2\">三萬到五萬台幣</option>\n                <option value=\"3\">五萬到十萬台幣</option>\n                <option value=\"4\">十萬台幣以上</option>\n              </select>\n            </mat-form-field>\n\n            <br>\n\n          </mat-card>\n          <br>\n          <div>\n            <button mat-raised-button\tcolor=\"warn\"  class=\"btn-space\" mat-button matStepperPrevious>上一步</button>\n            <button mat-raised-button\tcolor=\"primary\"    mat-button matStepperNext>下一步</button>\n          </div>\n\n        </form>\n\n\n      </mat-step>\n\n      <mat-step label= \"生活狀況\" >\n\n          <mat-card>\n\n            <mat-form-field>\n              <mat-label>婚姻狀況</mat-label>\n              <select matNativeControl [(ngModel)]=\"Entity.Married\">\n                <option value=\"單身\">單身</option>\n                <option value=\"二春\">二春</option>\n              </select>\n            </mat-form-field>\n\n            <br>\n\n            <mat-checkbox  [(ngModel)]=\"Entity.HasCar\">有車</mat-checkbox>\n\n\n            <br>\n\n            <mat-checkbox  [(ngModel)]=\"Entity.HasHouse\">有房</mat-checkbox>\n\n\n            <br>\n\n\n            <mat-form-field style=\"width: 70%;\">\n              <mat-label>自我簡介</mat-label>\n              <textarea matInput [(ngModel)]=\"Entity.Intro\" placeholder=\"多告訴一點未來的對象關於您自己!\"></textarea>\n            </mat-form-field>\n\n\n          </mat-card>\n          <br>\n          <div>\n            <button mat-raised-button\tcolor=\"warn\" class=\"btn-space\"  mat-button matStepperPrevious>上一步</button>\n            <button mat-raised-button\tcolor=\"primary\"    mat-button matStepperNext>下一步</button>\n          </div>\n\n      </mat-step>\n\n      <mat-step label= \"上傳相片\" >\n\n        <mat-card>\n\n          <div class=\"center\">\n            <ngx-file-drop dropZoneLabel=\"Drop files here\" (onFileDrop)=\"dropped($event)\"\n            (onFileOver)=\"fileOver($event)\" (onFileLeave)=\"fileLeave($event)\">\n                <ng-template ngx-file-drop-content-tmp let-openFileSelector=\"openFileSelector\">\n                  拖曳或是選擇要上傳的圖片\n                  <button type=\"button\" (click)=\"openFileSelector()\">選擇相片</button>\n                </ng-template>\n            </ngx-file-drop>\n\n          </div>\n\n          <div >\n            <img src='{{Entity.ImgLink}}'   class=\"img-thumbnail\" >\n          </div>\n\n        </mat-card>\n        <br>\n        <div>\n          <button mat-raised-button\tcolor=\"warn\"  class=\"btn-space\" mat-button matStepperPrevious>上一步</button>\n          <button mat-raised-button\tcolor=\"primary\"    mat-button matStepperNext>下一步</button>\n        </div>\n\n      </mat-step>\n\n\n      <mat-step label= \"確認上傳\" >\n        <div>\n          <button mat-raised-button\tcolor=\"warn\"   mat-button matStepperPrevious class=\"btn-space\">上一步</button>\n        </div>\n        <br>\n        <mat-card>\n          <mat-card-header>\n            <mat-card-title>{{Entity.Name}}</mat-card-title>\n            <mat-card-subtitle>生日: {{Entity.Birthday}} </mat-card-subtitle>\n            <mat-card-subtitle>{{Entity.Gender}} 身高: {{Entity.Height}} 公分 體重: {{Entity.Weight}} 公斤</mat-card-subtitle>\n          </mat-card-header>\n          <img mat-card-image src=\"{{Entity.ImgLink}}\" alt=\"Photo\" style=\"width: 50%;\">\n          <mat-card-content>\n            <p>\n             Hello~ LinePair 很高興認識您, 請確認以下資料是否正確 <b>\n\n             </b> 您的電話是 {{Entity.Phone}} , 電子郵件是 {{Entity.Email}} , 居住在 {{Entity.City}} , 職業是 {{Entity.Occuptation}} ,\n             目前狀態是 {{Entity.Married}} , 自我介紹是 <b></b> {{Entity.Intro}}\n            </p>\n          </mat-card-content>\n          <mat-card-actions>\n\n            <button mat-fab (click)=\"SaveEntity()\"><mat-icon>favorite</mat-icon> 上傳</button>\n          </mat-card-actions>\n        </mat-card>\n\n      </mat-step>\n\n\n    </mat-vertical-stepper>\n\n\n\n\n</div>\n\n\n\n\n\n\n\n<ngx-spinner\nbdColor=\"rgba(51,51,51,0.8)\"\nsize=\"medium\"\ncolor=\"#fff\"\ntype=\"ball-scale-multiple\"\n>\n<p style=\"font-size: 20px; color: white\">處理中...</p>\n</ngx-spinner>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/linepair/list/list.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/linepair/list/list.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>LINE PAIR ROCKS!</p>\n\n您的幸福就交給我們拉 !\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("<span><img src='../assets/Photos/NHCC.jpg' width=100% height=40% /></span>\r\n\r\n\r\n\r\n<table class=\"table table-bordered table-striped\">\r\n    <tr>\r\n        <th>\r\n            編號\r\n        </th>\r\n        <th>\r\n            空氣重量\r\n        </th>\r\n        <th>\r\n            水中重量\r\n        </th>\r\n        <th>\r\n            物體比重\r\n        </th>\r\n    </tr>\r\n\r\n        <tr>\r\n            <td>\r\n\r\n            </td>\r\n            <td>\r\n                <input type=\"number\"\r\n                [(ngModel)]='airweight'\r\n                style=\"width: 6em;\"\r\n                />\r\n            </td>\r\n            <td>\r\n                <input type=\"number\"\r\n                [(ngModel)]='waterweight'\r\n                style=\"width: 6em;\"\r\n                />\r\n            </td>\r\n            <td>\r\n                {{caculateweightrate()}}\r\n            </td>\r\n            <td>\r\n                <button mat-raised-button class=\"btn btn-primary\" (click) = 'addintolist()'>\r\n                  <mat-icon>add</mat-icon>\r\n                    新增\r\n                 </button>\r\n            </td>\r\n        </tr>\r\n\r\n    <tbody>\r\n        <tr *ngFor = 'let item of weightList'>\r\n\r\n            <td>{{ item.id}}</td>\r\n            <td>{{ item.airweight }}</td>\r\n            <td>{{ item.waterweight}}</td>\r\n            <td>{{ item.ratioweight}}</td>\r\n\r\n        </tr>\r\n    </tbody>\r\n\r\n\r\n\r\n</table>\r\n\r\n<table *ngIf=\"weightList?.length > 0\">\r\n    <tr>\r\n        <td>\r\n            Email:\r\n        </td>\r\n        <td>\r\n            <input type=\"string\"\r\n            [(ngModel)]='emailaddress'\r\n            style=\"width: 15em;\"\r\n            />\r\n        </td>\r\n        <td>\r\n            <span></span>\r\n        </td>\r\n        <td>\r\n            <button class=\"btn btn-info\" (click) = 'emailout()'>\r\n                寄出\r\n             </button>\r\n        </td>\r\n    </tr>\r\n</table>\r\n\r\n\r\n\r\n\r\n");

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
/* harmony import */ var _health_health_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./health/health.module */ "./src/app/health/health.module.ts");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _linepair_linepair_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./linepair/linepair.module */ "./src/app/linepair/linepair.module.ts");
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_22__["NgxPaginationModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_30__["MaterialModule"],
                _linepair_linepair_module__WEBPACK_IMPORTED_MODULE_31__["LinepairModule"],
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
                _clientinventory_clientinventory_module__WEBPACK_IMPORTED_MODULE_27__["ClientinventoryModule"],
                _health_health_module__WEBPACK_IMPORTED_MODULE_28__["HealthModule"],
                igniteui_angular__WEBPACK_IMPORTED_MODULE_29__["IgxCarouselModule"]
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
/* harmony import */ var _auction_auction_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./auction/auction.component */ "./src/app/article/auction/auction.component.ts");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
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
            declarations: [_articleform_articleform_component__WEBPACK_IMPORTED_MODULE_2__["ArticleformComponent"], _articlelist_articlelist_component__WEBPACK_IMPORTED_MODULE_3__["ArticlelistComponent"], _articleshow_articleshow_component__WEBPACK_IMPORTED_MODULE_12__["ArticleshowComponent"], _auction_auction_component__WEBPACK_IMPORTED_MODULE_15__["AuctionComponent"]],
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
                igniteui_angular__WEBPACK_IMPORTED_MODULE_16__["IgxCarouselModule"],
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
                    },
                    {
                        path: 'auction', component: _auction_auction_component__WEBPACK_IMPORTED_MODULE_15__["AuctionComponent"]
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

/***/ "./src/app/article/auction/auction.component.css":
/*!*******************************************************!*\
  !*** ./src/app/article/auction/auction.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".igx-carousel__inner {\r\n  width: 90%;\r\n  text-align: center;\r\n}\r\na > igx-icon > span{\r\n  color: #e41c77;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJ0aWNsZS9hdWN0aW9uL2F1Y3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcnRpY2xlL2F1Y3Rpb24vYXVjdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlneC1jYXJvdXNlbF9faW5uZXIge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmEgPiBpZ3gtaWNvbiA+IHNwYW57XHJcbiAgY29sb3I6ICNlNDFjNzc7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/article/auction/auction.component.ts":
/*!******************************************************!*\
  !*** ./src/app/article/auction/auction.component.ts ***!
  \******************************************************/
/*! exports provided: AuctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuctionComponent", function() { return AuctionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var AuctionComponent = /** @class */ (function () {
    function AuctionComponent() {
    }
    AuctionComponent.prototype.ngOnInit = function () {
    };
    AuctionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-auction',
            template: __importDefault(__webpack_require__(/*! raw-loader!./auction.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/article/auction/auction.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./auction.component.css */ "./src/app/article/auction/auction.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], AuctionComponent);
    return AuctionComponent;
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
/* harmony import */ var _service_bcservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/bcservice.service */ "./src/app/businesscenter/service/bcservice.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _bcformmodal_bcformmodal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bcformmodal/bcformmodal.component */ "./src/app/businesscenter/bcformmodal/bcformmodal.component.ts");
/* harmony import */ var _businesshourmodal_businesshourmodal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../businesshourmodal/businesshourmodal.component */ "./src/app/businesscenter/businesshourmodal/businesshourmodal.component.ts");
/* harmony import */ var _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/google-maps */ "./node_modules/@angular/google-maps/fesm5/google-maps.js");
/* harmony import */ var _model_Inhub__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/Inhub */ "./src/app/businesscenter/model/Inhub.ts");
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
        this.isAdd = false;
        this._entity = new _model_Inhub__WEBPACK_IMPORTED_MODULE_9__["Vendor"]();
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
        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(ID)) {
            this.isAdd = true;
            this.AddNew();
            this.spinner.hide();
        }
        else {
            this.bcservice.getEntityById(ID).subscribe(function (val) {
                _this.Entity = val;
                _this.spinner.hide();
                if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(_this.Entity.Latitude) !== true) {
                    _this.addMarker();
                }
            }, function (err) {
                alert('Not Found');
                _this.spinner.hide();
            });
        }
        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.Entity.Latitude) !== true) {
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
        var newEntity = new _model_Inhub__WEBPACK_IMPORTED_MODULE_9__["Vendor"]();
        var now = new Date;
        var utc_timestamp = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
        newEntity.Id = 'VendorTest' + '_' + utc_timestamp.toString();
        this.Entity = newEntity;
    };
    BcformComponent.prototype.saveGPS = function () {
        var _this = this;
        if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.Entity.Longitude) && !Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.Entity.Longitude)) {
            this.spinner.show();
            this.bcservice.updateGPS(this.Entity).subscribe(function (res) {
                alert('儲存GPS完畢');
                _this.spinner.hide();
            }, function (err) {
                alert('error');
                _this.spinner.hide();
            });
        }
        else {
            alert('Please enter GPS info');
        }
    };
    BcformComponent.prototype.SaveEntity = function () {
        var _this = this;
        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.Entity.Company) || this.Entity.Company === '') {
            alert('請輸入名稱欄位');
            return;
        }
        this.spinner.show();
        if (this.isAdd === true) {
            this.bcservice.postEntity(this.Entity).subscribe(function (res) {
                alert('新增完畢');
                _this.spinner.hide();
                window.open('#/bccenter');
            }, function (err) {
                alert(err);
                _this.spinner.hide();
            });
        }
        else {
            this.bcservice.updateEntity(this.Entity).subscribe(function (res) {
                alert('更新完畢');
                _this.spinner.hide();
                //  window.open('#/bccenter');
            }, function (err) {
                alert(err);
                _this.spinner.hide();
            });
        }
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
                    formData.append('image', file, droppedFile.relativePath);
                    _this.spinner.show();
                    _this.bcservice.postImage(_this.Entity.Id, formData).subscribe(function (val) {
                        _this.spinner.hide();
                        _this.Entity.ImageUrls.push(file.name);
                    }, function (err) {
                        alert('upload image error');
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
        var _this = this;
        var imagename = this.Entity.ImageUrls[i];
        if (confirm('Are you sure you want to delete ' + imagename + ' ?')) {
            this.bcservice.removeImage(this.Entity.Id, imagename).subscribe(function (val) {
                alert('Image Delete Complete');
                i++;
                var orginialItems = _this.Entity.ImageUrls;
                var filterItems = orginialItems.slice(0, i - 1).concat(orginialItems.slice(i, orginialItems.length));
                _this.Entity.ImageUrls = filterItems;
            }, function (err) {
                alert('Image delete error');
            });
        }
    };
    BcformComponent.prototype.openModal = function () {
        var initialState = {
            entity: this.Entity
        };
        this.bsModalRef = this.modalService.show(_bcformmodal_bcformmodal_component__WEBPACK_IMPORTED_MODULE_6__["BcformmodalComponent"], { initialState: initialState });
    };
    BcformComponent.prototype.openBusinessHourModal = function () {
        var initialState = {
            entity: this.Entity
        };
        this.bsModalRef = this.modalService.show(_businesshourmodal_businesshourmodal_component__WEBPACK_IMPORTED_MODULE_7__["BusinesshourmodalComponent"], { initialState: initialState });
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
        // const coord = this.Entity.Coordinates.split(',');
        this.markers.push({
            position: {
                lat: Number(this.Entity.Latitude),
                lng: Number(this.Entity.Longitude),
            },
            label: {
                color: 'red',
                text: this.Entity.Company + (this.markers.length + 1),
            },
            title: this.Entity.Company + (this.markers.length + 1),
            info: 'Marker info ' + (this.markers.length + 1),
            url: 'https://www.google.com/maps/place/' + this.Entity.Latitude + ',' + this.Entity.Longitude,
            options: {
                animation: google.maps.Animation.DROP
            }
        });
        this.center = {
            lat: Number(this.Entity.Latitude),
            lng: Number(this.Entity.Longitude),
        };
    };
    BcformComponent.prototype.opengooglemap = function () {
        var url = 'https://www.google.com/maps/place/' + this.Entity.Latitude + ',' + this.Entity.Longitude;
        window.open(url);
    };
    BcformComponent.ctorParameters = function () { return [
        { type: _service_bcservice_service__WEBPACK_IMPORTED_MODULE_1__["BcserviceService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_google_maps__WEBPACK_IMPORTED_MODULE_8__["GoogleMap"], { static: false }),
        __metadata("design:type", _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__["GoogleMap"])
    ], BcformComponent.prototype, "map", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_google_maps__WEBPACK_IMPORTED_MODULE_8__["MapInfoWindow"], { static: false }),
        __metadata("design:type", _angular_google_maps__WEBPACK_IMPORTED_MODULE_8__["MapInfoWindow"])
    ], BcformComponent.prototype, "info", void 0);
    BcformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bcform',
            template: __importDefault(__webpack_require__(/*! raw-loader!./bcform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/bcform/bcform.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./bcform.component.css */ "./src/app/businesscenter/bcform/bcform.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_bcservice_service__WEBPACK_IMPORTED_MODULE_1__["BcserviceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]])
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
/* harmony import */ var _service_bcservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/bcservice.service */ "./src/app/businesscenter/service/bcservice.service.ts");
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
    function BcformmodalComponent(bsModalRef, service) {
        this.bsModalRef = bsModalRef;
        this.service = service;
        //   list: BusinessCenterFeature[] = [  {
        //     Name: '投影機',
        //     Comment: '',
        //     Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/1/icon01.png',
        //     Checked: false
        // },
        // {
        //   Name: '螢幕',
        //   Comment: '',
        //   Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/2/icon02.png',
        //   Checked: false
        // },
        // {
        //   Name: '白板',
        //   Comment: 'Comment',
        //   Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/3/icon03.png',
        //   Checked: false
        // },
        // {
        //   Name: 'WIFI',
        //   Comment: 'Comment',
        //   Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/4/icon04.png',
        //   Checked: false
        // },
        // {
        //   Name: '事務機',
        //   Comment: 'Comment',
        //   Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/5/icon05.png',
        //   Checked: false
        // },
        // {
        //   Name: '咖啡飲料',
        //   Comment: 'Comment',
        //   Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/6/icon06.png',
        //   Checked: false
        // },
        // {
        //   Name: '桌子',
        //   Comment: 'Comment',
        //   Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/7/icon07.png',
        //   Checked: false
        // },
        // {
        //   Name: '椅子',
        //   Comment: 'Comment',
        //   Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/8/icon08.png',
        //   Checked: false
        // },
        // {
        //   Name: '音響喇叭',
        //   Comment: 'Comment',
        //   Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/11/music-player.png',
        //   Checked: false
        // },
        // {
        //   Name: '麥克風',
        //   Comment: 'Comment',
        //   Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/12/microphone.png',
        //   Checked: false
        // }];
        // Type – string [value can only be one the three options – equip, facility, service]
        this.list = [{
                Name: '投影機',
                Name_en: 'Projector',
                Type: 'equip',
                Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/1/icon01.png',
                Checked: false
            },
            {
                Name: '螢幕',
                Name_en: 'Screen',
                Type: 'equip',
                Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/2/icon02.png',
                Checked: false
            },
            {
                Name: '白板',
                Name_en: 'White Board',
                Type: 'equip',
                Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/3/icon03.png',
                Checked: false
            },
            {
                Name: 'WIFI',
                Name_en: 'WIFI',
                Type: 'facility',
                Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/4/icon04.png',
                Checked: false
            },
            {
                Name: '事務機',
                Name_en: 'FAX/Print Machine',
                Type: 'equip',
                Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/5/icon05.png',
                Checked: false
            },
            {
                Name: '咖啡飲料',
                Name_en: 'Coffee/Drinks',
                Type: 'service',
                Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/6/icon06.png',
                Checked: false
            },
            {
                Name: '桌子',
                Name_en: 'Desk',
                Type: 'facility',
                Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/7/icon07.png',
                Checked: false
            },
            {
                Name: '椅子',
                Name_en: 'Chair',
                Type: 'facility',
                Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/8/icon08.png',
                Checked: false
            },
            {
                Name: '音響喇叭',
                Name_en: 'Speakers',
                Type: 'facility',
                Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/11/music-player.png',
                Checked: false
            },
            {
                Name: '麥克風',
                Name_en: 'Mic',
                Type: 'facility',
                Image_Url: 'http://inhub_dev.playplus.solutions/uploads/equipment/image/12/microphone.png',
                Checked: false
            }];
    }
    BcformmodalComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isNullOrUndefined"])(this.entity) !== true) {
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
        this.cleanFeatures();
        this.list.forEach(function (item) {
            if (item.Checked === true) {
                newlist.push(item);
            }
        });
        this.entity.Features = newlist;
        this.addFeatures();
        this.bsModalRef.hide();
    };
    BcformmodalComponent.prototype.cleanFeatures = function () {
        var _this = this;
        this.entity.Features.forEach(function (item) {
            _this.service.deleteFeature(_this.entity.Id, item.Name).subscribe(function (val) {
            }, function (error) {
                alert('remove feature error');
            });
        });
    };
    BcformmodalComponent.prototype.addFeatures = function () {
        var _this = this;
        this.entity.Features.forEach(function (item) {
            _this.service.addFeature(_this.entity.Id, item).subscribe(function (val) {
            }, function (err) {
                alert('add feature fail');
            });
        });
    };
    BcformmodalComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"] },
        { type: _service_bcservice_service__WEBPACK_IMPORTED_MODULE_3__["BcserviceService"] }
    ]; };
    BcformmodalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bcformmodal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./bcformmodal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/bcformmodal/bcformmodal.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./bcformmodal.component.css */ "./src/app/businesscenter/bcformmodal/bcformmodal.component.css")).default]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"], _service_bcservice_service__WEBPACK_IMPORTED_MODULE_3__["BcserviceService"]])
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
                alert('已刪除 Id:' + Id);
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
        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(item.ImageUrls) !== true) {
            imageurl = item.ImageUrls[0];
        }
        this.pophtml = '<talbe> <tr> <td>' + item.Intro + '</td> </tr>';
        this.pophtml += '<tr><td>' + '<img src=https://in-hub-dev.azurewebsites.net/' + imageurl + ' width=90% height=90%> </td></tr>';
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
/* harmony import */ var ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/carousel */ "./node_modules/ngx-bootstrap/carousel/fesm5/ngx-bootstrap-carousel.js");
/* harmony import */ var _requestmodal_requestmodal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./requestmodal/requestmodal.component */ "./src/app/businesscenter/requestmodal/requestmodal.component.ts");
/* harmony import */ var _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./userlist/userlist.component */ "./src/app/businesscenter/userlist/userlist.component.ts");
/* harmony import */ var _userform_userform_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./userform/userform.component */ "./src/app/businesscenter/userform/userform.component.ts");
/* harmony import */ var _service_bcservice_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./service/bcservice.service */ "./src/app/businesscenter/service/bcservice.service.ts");
/* harmony import */ var _logview_logview_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./logview/logview.component */ "./src/app/businesscenter/logview/logview.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./login/login.component */ "./src/app/businesscenter/login/login.component.ts");
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
                ngx_pagination__WEBPACK_IMPORTED_MODULE_25__["NgxPaginationModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__["NgbModule"],
                _angular_google_maps__WEBPACK_IMPORTED_MODULE_17__["GoogleMapsModule"],
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_19__["CarouselModule"].forRoot(),
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_18__["TooltipModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: 'bccenter', component: _bclist_bclist_component__WEBPACK_IMPORTED_MODULE_7__["BclistComponent"]
                    },
                    {
                        path: 'bcform/:id', component: _bcform_bcform_component__WEBPACK_IMPORTED_MODULE_8__["BcformComponent"]
                    },
                    {
                        path: 'bcform', component: _bcform_bcform_component__WEBPACK_IMPORTED_MODULE_8__["BcformComponent"]
                    },
                    {
                        path: 'bcuser', component: _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_21__["UserlistComponent"]
                    },
                    {
                        path: 'bcuserform', component: _userform_userform_component__WEBPACK_IMPORTED_MODULE_22__["UserformComponent"]
                    },
                    {
                        path: 'bcuserform/:id', component: _userform_userform_component__WEBPACK_IMPORTED_MODULE_22__["UserformComponent"]
                    },
                    {
                        path: 'InHubLog', component: _logview_logview_component__WEBPACK_IMPORTED_MODULE_24__["LogviewComponent"]
                    },
                    {
                        path: 'bclogin', component: _login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"]
                    }
                ])
            ],
            declarations: [_bclist_bclist_component__WEBPACK_IMPORTED_MODULE_7__["BclistComponent"], _bcform_bcform_component__WEBPACK_IMPORTED_MODULE_8__["BcformComponent"], _bcformmodal_bcformmodal_component__WEBPACK_IMPORTED_MODULE_11__["BcformmodalComponent"], _businesshourmodal_businesshourmodal_component__WEBPACK_IMPORTED_MODULE_15__["BusinesshourmodalComponent"],
                _requestmodal_requestmodal_component__WEBPACK_IMPORTED_MODULE_20__["RequestmodalComponent"],
                _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_21__["UserlistComponent"],
                _userform_userform_component__WEBPACK_IMPORTED_MODULE_22__["UserformComponent"],
                _logview_logview_component__WEBPACK_IMPORTED_MODULE_24__["LogviewComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_26__["LoginComponent"]],
            entryComponents: [_bcformmodal_bcformmodal_component__WEBPACK_IMPORTED_MODULE_11__["BcformmodalComponent"], _businesshourmodal_businesshourmodal_component__WEBPACK_IMPORTED_MODULE_15__["BusinesshourmodalComponent"]],
            providers: [_service_bcservice_service__WEBPACK_IMPORTED_MODULE_23__["BcserviceService"]]
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

/***/ "./src/app/businesscenter/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/businesscenter/login/login.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loginBtn{\r\n  box-sizing: border-box;\r\n  position: relative;\r\n\r\n  margin: 0.2em;\r\n  padding: 0 15px 0 46px;\r\n  border: none;\r\n  text-align: left;\r\n  line-height: 34px;\r\n  white-space: nowrap;\r\n  border-radius: 0.2em;\r\n  font-size: 16px;\r\n  color: #FFF;\r\n}\r\n.loginBtn:before {\r\n  content: \"\";\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 34px;\r\n  height: 100%;\r\n}\r\n.loginBtn:focus {\r\n  outline: none;\r\n}\r\n.loginBtn:active {\r\n  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\r\n}\r\n.loginBtn--google {\r\n\r\n  background: #DD4B39;\r\n}\r\n.loginBtn--google:before {\r\n  border-right: #BB3F30 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\r\n}\r\n.loginBtn--google:hover, .loginBtn--google:focus {\r\n  background: #E74B37;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzaW5lc3NjZW50ZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7O0VBRWxCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsNENBQTRDO0FBQzlDO0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSwrQkFBK0I7RUFDL0IsdUdBQXVHO0FBQ3pHO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9idXNpbmVzc2NlbnRlci9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luQnRue1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBtYXJnaW46IDAuMmVtO1xyXG4gIHBhZGRpbmc6IDAgMTVweCAwIDQ2cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBib3JkZXItcmFkaXVzOiAwLjJlbTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICNGRkY7XHJcbn1cclxuLmxvZ2luQnRuOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMzRweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLmxvZ2luQnRuOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbi5sb2dpbkJ0bjphY3RpdmUge1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDMycHggcmdiYSgwLDAsMCwwLjEpO1xyXG59XHJcblxyXG4ubG9naW5CdG4tLWdvb2dsZSB7XHJcblxyXG4gIGJhY2tncm91bmQ6ICNERDRCMzk7XHJcbn1cclxuLmxvZ2luQnRuLS1nb29nbGU6YmVmb3JlIHtcclxuICBib3JkZXItcmlnaHQ6ICNCQjNGMzAgMXB4IHNvbGlkO1xyXG4gIGJhY2tncm91bmQ6IHVybCgnaHR0cHM6Ly9zMy11cy13ZXN0LTIuYW1hem9uYXdzLmNvbS9zLmNkcG4uaW8vMTQwODIvaWNvbl9nb29nbGUucG5nJykgNnB4IDZweCBuby1yZXBlYXQ7XHJcbn1cclxuLmxvZ2luQnRuLS1nb29nbGU6aG92ZXIsIC5sb2dpbkJ0bi0tZ29vZ2xlOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiAjRTc0QjM3O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/businesscenter/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/businesscenter/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_bcservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/bcservice.service */ "./src/app/businesscenter/service/bcservice.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../core/shared/service/authservice.service */ "./src/app/core/shared/service/authservice.service.ts");
/* harmony import */ var _core_shared_model_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/shared/model/user */ "./src/app/core/shared/model/user.ts");
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
    function LoginComponent(bcservice, spinner, router, ngzone, service) {
        this.bcservice = bcservice;
        this.spinner = spinner;
        this.router = router;
        this.ngzone = ngzone;
        this.service = service;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.googleSDK();
    };
    LoginComponent.prototype.prepareLoginButton = function () {
        var _this = this;
        this.auth2.attachClickHandler(this.loginElement.nativeElement, {}, function (googleUser) {
            _this.ngzone.run(function () { _this.spinner.show(); });
            var profile = googleUser.getBasicProfile();
            console.log('Token || ' + googleUser.getAuthResponse().id_token);
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            // YOUR CODE HERE
            // alert(profile.getEmail());
            // this.spinner.show();
            var user = new _core_shared_model_user__WEBPACK_IMPORTED_MODULE_5__["AppUser"]();
            var datestring = new Date().toLocaleString();
            user.UserID = profile.getEmail();
            user.Password = 'password';
            user.Application = 'BcCenter';
            user.LogInTime = datestring;
            _this.service.authUser(user).subscribe(function (res) {
                alert('歡迎管理員:' + res.Name + ' 您上次登入時間:' + res.LastLogInTime);
                sessionStorage.setItem('loginEmail', profile.getEmail());
                sessionStorage.setItem('loginName', profile.getName());
                _this.bcservice.gettoken().subscribe(function (val) {
                    // alert(val.toString());
                    sessionStorage.setItem('token', val.toString());
                    _this.spinner.hide();
                    _this.ngzone.run(function () {
                        _this.router.navigate(['bccenter']);
                    });
                });
            }, function (error) {
                alert('帳戶不是管理員 拒絕登入 或聯絡 Henry Lee 加入');
            });
        }, function (error) {
            alert(JSON.stringify(error, undefined, 2));
        });
    };
    LoginComponent.prototype.googleSDK = function () {
        var _this = this;
        window['googleSDKLoaded'] = function () {
            window['gapi'].load('auth2', function () {
                _this.auth2 = window['gapi'].auth2.init({
                    client_id: '534315275533-6cqgtdgov7b2uoav77rph3ed4a14ktvr.apps.googleusercontent.com',
                    cookiepolicy: 'single_host_origin',
                    scope: 'profile email'
                });
                _this.prepareLoginButton();
            });
        };
        (function (d, s, id) {
            // tslint:disable-next-line:prefer-const
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://apis.google.com/js/platform.js?onload=googleSDKLoaded';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'google-jssdk'));
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _service_bcservice_service__WEBPACK_IMPORTED_MODULE_1__["BcserviceService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] },
        { type: _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_4__["AuthserviceService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loginRef', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LoginComponent.prototype, "loginElement", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/businesscenter/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_bcservice_service__WEBPACK_IMPORTED_MODULE_1__["BcserviceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_4__["AuthserviceService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/businesscenter/logview/logview.component.css":
/*!**************************************************************!*\
  !*** ./src/app/businesscenter/logview/logview.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzY2VudGVyL2xvZ3ZpZXcvbG9ndmlldy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/businesscenter/logview/logview.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/businesscenter/logview/logview.component.ts ***!
  \*************************************************************/
/*! exports provided: LogviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogviewComponent", function() { return LogviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_bcservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/bcservice.service */ "./src/app/businesscenter/service/bcservice.service.ts");
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


var LogviewComponent = /** @class */ (function () {
    function LogviewComponent(bcservice) {
        this.bcservice = bcservice;
    }
    Object.defineProperty(LogviewComponent.prototype, "List", {
        get: function () {
            return this._list;
        },
        set: function (value) {
            this._list = value;
        },
        enumerable: true,
        configurable: true
    });
    LogviewComponent.prototype.ngOnInit = function () {
        this.GetList();
    };
    LogviewComponent.prototype.GetList = function () {
        var _this = this;
        this.bcservice.getLogs().subscribe(function (list) {
            _this.List = list;
        });
    };
    LogviewComponent.ctorParameters = function () { return [
        { type: _service_bcservice_service__WEBPACK_IMPORTED_MODULE_1__["BcserviceService"] }
    ]; };
    LogviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logview',
            template: __importDefault(__webpack_require__(/*! raw-loader!./logview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/logview/logview.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./logview.component.css */ "./src/app/businesscenter/logview/logview.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_bcservice_service__WEBPACK_IMPORTED_MODULE_1__["BcserviceService"]])
    ], LogviewComponent);
    return LogviewComponent;
}());



/***/ }),

/***/ "./src/app/businesscenter/model/Inhub.ts":
/*!***********************************************!*\
  !*** ./src/app/businesscenter/model/Inhub.ts ***!
  \***********************************************/
/*! exports provided: Vendor, Feature, Gps, User, User_Vendor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vendor", function() { return Vendor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feature", function() { return Feature; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gps", function() { return Gps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User_Vendor", function() { return User_Vendor; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Vendor = /** @class */ (function () {
    function Vendor() {
    }
    return Vendor;
}());

var Feature = /** @class */ (function () {
    function Feature() {
    }
    return Feature;
}());

var Gps = /** @class */ (function () {
    function Gps() {
    }
    return Gps;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

// tslint:disable-next-line:class-name
var User_Vendor = /** @class */ (function () {
    function User_Vendor() {
    }
    return User_Vendor;
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
/* harmony import */ var _model_Inhub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/Inhub */ "./src/app/businesscenter/model/Inhub.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function BcserviceService(http, router) {
        this.http = http;
        this.router = router;
        this.site = 'https://leecloud.azurewebsites.net/'; // URL to web api
        this.vendorurl = 'https://in-hub-dev.azurewebsites.net/vendor';
        this.userurl = 'https://in-hub-dev.azurewebsites.net/user';
        this.tokenurl = 'https://in-hub-dev.azurewebsites.net/user/su/__53cr3t__';
        this.url = 'api/businesscenterapi/';
        this.postImgurl = '/upload';
        this.logurl = this.site + 'api/logapi/';
    }
    BcserviceService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    BcserviceService.prototype.gettoken = function () {
        return this.http.get(this.tokenurl, { responseType: 'text' });
    };
    BcserviceService.prototype.getHttpoption = function (isImage) {
        if (isImage === void 0) { isImage = false; }
        if (Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(sessionStorage.getItem('token'))) {
            alert('Session Expired or Unauthorized , 請登入');
            this.router.navigate(['bclogin']);
            return;
        }
        var t = sessionStorage.getItem('token');
        if (isImage === true) {
            var headers_object = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'ContentType': 'multipart/form-data',
                'Authorization': 'Bearer ' + t
            });
            var httpOptions = {
                headers: headers_object
            };
            return httpOptions;
        }
        else {
            var headers_object = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ' + t
            });
            var httpOptions = {
                headers: headers_object
            };
            return httpOptions;
        }
    };
    BcserviceService.prototype.getList = function () {
        if (Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(sessionStorage.getItem('token'))) {
            alert('Session Expired or Unauthorized , 請登入');
            this.router.navigate(['bclogin']);
            return;
        }
        var url = this.vendorurl;
        return this.http.get(url, this.getHttpoption());
    };
    BcserviceService.prototype.getUserList = function () {
        if (Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(sessionStorage.getItem('token'))) {
            alert('Session Expired or Unauthorized , 請登入');
            this.router.navigate(['bclogin']);
            return;
        }
        var url = this.userurl;
        return this.http.get(url, this.getHttpoption());
    };
    BcserviceService.prototype.getLogs = function () {
        var url = this.logurl;
        return this.http.get(url);
    };
    BcserviceService.prototype.getEntityById = function (id) {
        var url = this.vendorurl + '/' + id;
        return this.http.get(url, this.getHttpoption());
    };
    BcserviceService.prototype.getUser = function (id) {
        var url = this.userurl + '/' + id;
        return this.http.get(url, this.getHttpoption());
    };
    BcserviceService.prototype.postEntity = function (entity) {
        var url = this.vendorurl;
        return this.http.post(url, entity, this.getHttpoption());
    };
    BcserviceService.prototype.postUser = function (entity) {
        var url = this.userurl;
        return this.http.post(url, entity, this.getHttpoption());
    };
    BcserviceService.prototype.updateGPS = function (entity) {
        var url = this.vendorurl + '/' + entity.Id + '/position';
        var corrd = new _model_Inhub__WEBPACK_IMPORTED_MODULE_2__["Gps"]();
        corrd.Longitude = entity.Longitude;
        corrd.Latitude = entity.Latitude;
        return this.http.patch(url, entity, this.getHttpoption());
    };
    BcserviceService.prototype.addFeature = function (vendorid, feature) {
        var url = this.vendorurl + '/' + vendorid + '/feature';
        return this.http.post(url, feature, this.getHttpoption());
    };
    BcserviceService.prototype.deleteFeature = function (vendorid, featurename) {
        var url = this.vendorurl + '/' + vendorid + '/feature/' + featurename;
        return this.http.delete(url, this.getHttpoption());
    };
    BcserviceService.prototype.updateEntity = function (entity) {
        var url = this.vendorurl + '/' + entity.Id;
        return this.http.patch(url, entity, this.getHttpoption());
    };
    BcserviceService.prototype.updateUser = function (entity) {
        var url = this.userurl + '/' + entity.Id;
        return this.http.patch(url, entity, this.getHttpoption());
    };
    BcserviceService.prototype.deleteEntity = function (id) {
        var url = this.vendorurl + '/' + id;
        return this.http.delete(url, this.getHttpoption());
    };
    BcserviceService.prototype.deleteUser = function (id) {
        var url = this.userurl + '/' + id;
        return this.http.delete(url, this.getHttpoption());
    };
    BcserviceService.prototype.assignVendor = function (userId, vendorId) {
        var url = this.userurl + '/' + userId + '/vendor/' + vendorId;
        return this.http.patch(url, null, this.getHttpoption());
    };
    BcserviceService.prototype.updatePassword = function (userId, password) {
        var url = this.userurl + '/' + userId + '/' + password;
        return this.http.patch(url, null, this.getHttpoption());
    };
    BcserviceService.prototype.postImage = function (vendorId, image) {
        var url = this.vendorurl + '/' + vendorId + '/upload';
        //  // Headers
        //  const headers = new HttpHeaders ({
        //   ContentType: 'multipart/form-data'
        // });
        // return  this.http.post(url, file, {headers: headers});
        return this.http
            .post(url, image, this.getHttpoption(true));
    };
    BcserviceService.prototype.removeImage = function (vendorId, imagename) {
        var url = this.vendorurl + '/' + vendorId + '/imageUrl/' + imagename;
        return this.http.delete(url, this.getHttpoption());
    };
    BcserviceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    BcserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], BcserviceService);
    return BcserviceService;
}());



/***/ }),

/***/ "./src/app/businesscenter/userform/userform.component.css":
/*!****************************************************************!*\
  !*** ./src/app/businesscenter/userform/userform.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzY2VudGVyL3VzZXJmb3JtL3VzZXJmb3JtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/businesscenter/userform/userform.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/businesscenter/userform/userform.component.ts ***!
  \***************************************************************/
/*! exports provided: UserformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserformComponent", function() { return UserformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_bcservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/bcservice.service */ "./src/app/businesscenter/service/bcservice.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _model_Inhub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../model/Inhub */ "./src/app/businesscenter/model/Inhub.ts");
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






var UserformComponent = /** @class */ (function () {
    function UserformComponent(bcservice, spinner, route) {
        this.bcservice = bcservice;
        this.spinner = spinner;
        this.route = route;
        this.isAdd = false;
        this.vendorId = '';
        this._entity = new _model_Inhub__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this._list = [];
    }
    Object.defineProperty(UserformComponent.prototype, "Entity", {
        get: function () {
            return this._entity;
        },
        set: function (value) {
            this._entity = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserformComponent.prototype, "List", {
        get: function () {
            return this._list;
        },
        set: function (value) {
            this._list = value;
        },
        enumerable: true,
        configurable: true
    });
    UserformComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** spinner starts on init */
        this.spinner.show();
        var ID = this.route.snapshot.paramMap.get('id');
        this.GetList();
        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(ID)) {
            this.isAdd = true;
            this.AddNew();
            this.spinner.hide();
        }
        else {
            this.bcservice.getUser(ID).subscribe(function (val) {
                _this.Entity = val;
                _this.spinner.hide();
            }, function (err) {
                alert('Not Found');
                _this.spinner.hide();
            });
        }
    };
    UserformComponent.prototype.GetList = function () {
        var _this = this;
        this.spinner.show();
        this.bcservice.getList().subscribe(function (val) {
            _this.List = val;
            // this.spinner.hide();
        }, function (err) {
            alert('Not Found');
            //   this.spinner.hide();
        });
    };
    UserformComponent.prototype.AddNew = function () {
        var newEntity = new _model_Inhub__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.Entity = newEntity;
    };
    UserformComponent.prototype.AssignVendor = function () {
        this.bcservice.assignVendor(this.Entity.Id, this.vendorId).subscribe(function (val) {
            alert('Assign complete');
        }, function (err) {
            alert('assign error');
        });
    };
    UserformComponent.prototype.filterForArticles = function (filterVal) {
        if (filterVal === '-1') {
        }
        else {
            this.vendorId = filterVal;
        }
    };
    UserformComponent.prototype.UpdatePassword = function () {
        this.bcservice.updatePassword(this.Entity.Id, this.Entity.Password).subscribe(function (val) {
            alert('Update Password complete');
        }, function (err) {
            alert('Update Password error');
        });
    };
    UserformComponent.prototype.SaveEntity = function () {
        var _this = this;
        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.Entity.Id) || this.Entity.Id === '') {
            alert('請輸入 ID 欄位');
            return;
        }
        this.spinner.show();
        if (this.isAdd === true) {
            this.bcservice.postUser(this.Entity).subscribe(function (res) {
                alert('新增完畢');
                _this.spinner.hide();
                window.open('#/bcuser');
            }, function (err) {
                alert(err);
                _this.spinner.hide();
            });
        }
        else {
            this.bcservice.updateUser(this.Entity).subscribe(function (res) {
                alert('更新完畢');
                _this.spinner.hide();
                //  window.open('#/bccenter');
            }, function (err) {
                alert(err);
                _this.spinner.hide();
            });
        }
    };
    UserformComponent.ctorParameters = function () { return [
        { type: _service_bcservice_service__WEBPACK_IMPORTED_MODULE_1__["BcserviceService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    UserformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userform',
            template: __importDefault(__webpack_require__(/*! raw-loader!./userform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/userform/userform.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./userform.component.css */ "./src/app/businesscenter/userform/userform.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_bcservice_service__WEBPACK_IMPORTED_MODULE_1__["BcserviceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], UserformComponent);
    return UserformComponent;
}());



/***/ }),

/***/ "./src/app/businesscenter/userlist/userlist.component.css":
/*!****************************************************************!*\
  !*** ./src/app/businesscenter/userlist/userlist.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzY2VudGVyL3VzZXJsaXN0L3VzZXJsaXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/businesscenter/userlist/userlist.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/businesscenter/userlist/userlist.component.ts ***!
  \***************************************************************/
/*! exports provided: UserlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserlistComponent", function() { return UserlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_bcservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/bcservice.service */ "./src/app/businesscenter/service/bcservice.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
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



var UserlistComponent = /** @class */ (function () {
    function UserlistComponent(bcservice, spinner) {
        this.bcservice = bcservice;
        this.spinner = spinner;
    }
    Object.defineProperty(UserlistComponent.prototype, "List", {
        get: function () {
            return this._list;
        },
        set: function (value) {
            this._list = value;
        },
        enumerable: true,
        configurable: true
    });
    UserlistComponent.prototype.ngOnInit = function () {
        this.GetList();
    };
    UserlistComponent.prototype.GetList = function () {
        var _this = this;
        this.spinner.show();
        this.bcservice.getUserList().subscribe(function (list) {
            _this.List = list;
            _this.spinner.hide();
        });
    };
    UserlistComponent.prototype.openform = function (Id) {
        window.open('#/bcuserform/' + Id, '_self');
    };
    UserlistComponent.prototype.delete = function (Id) {
        var _this = this;
        if (confirm('確定刪除 ID: ' + Id + '?')) {
            this.List.forEach(function (item, index) {
                if (item.Id === Id) {
                    _this.List.splice(index, 1);
                }
            });
            this.bcservice.deleteUser(Id).subscribe(function (res) {
                console.log(res);
                alert('已刪除 Id:' + Id);
            }, function (err) {
                alert(err);
            });
        }
    };
    UserlistComponent.ctorParameters = function () { return [
        { type: _service_bcservice_service__WEBPACK_IMPORTED_MODULE_1__["BcserviceService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }
    ]; };
    UserlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userlist',
            template: __importDefault(__webpack_require__(/*! raw-loader!./userlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/businesscenter/userlist/userlist.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./userlist.component.css */ "./src/app/businesscenter/userlist/userlist.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_bcservice_service__WEBPACK_IMPORTED_MODULE_1__["BcserviceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], UserlistComponent);
    return UserlistComponent;
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
        this._textLInks = [];
    }
    Object.defineProperty(AdimageComponent.prototype, "textLInks", {
        get: function () {
            return this._textLInks;
        },
        set: function (value) {
            this._textLInks = value;
        },
        enumerable: true,
        configurable: true
    });
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
        this.service.getAdTextLinks().subscribe(function (res) {
            if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(res)) {
                _this.textLInks = res;
            }
            // this.spinner.hide();
        }, function (error) {
            alert('內部錯誤 (TextLinks)');
            _this.spinner.hide();
        });
    };
    AdimageComponent.prototype.SaveEntity = function () {
        var _this = this;
        this.spinner.show();
        this.service.postAdImages(this.list).subscribe(function (res) {
            alert('廣告圖片連結儲存完畢');
            _this.spinner.hide();
            // window.open('#/teaportal', '_self');
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
                        var orginialItems = _this.list;
                        orginialItems.push(newImage);
                        _this.list = orginialItems.filter(function (x) { return x.Image_Url !== ''; }); // workaround wtih sorttable refresh
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
    AdimageComponent.prototype.RemoveTextLink = function (i) {
        i++;
        var orginialItems = this.textLInks;
        var filterItems = orginialItems.slice(0, i - 1).concat(orginialItems.slice(i, orginialItems.length));
        this.textLInks = filterItems;
    };
    AdimageComponent.prototype.AddNewTextLink = function () {
        var textlink = new _core_shared_model_ImageLink__WEBPACK_IMPORTED_MODULE_1__["ImageLink"]();
        textlink.Name = '廣告文案';
        textlink.Target_Url = '連結 url';
        var orginialItems = this.textLInks;
        orginialItems.push(textlink);
        this.textLInks = orginialItems.filter(function (x) { return x.Name !== ''; }); // workaround wtih sorttable refresh
    };
    AdimageComponent.prototype.SaveTextLinks = function () {
        var _this = this;
        this.spinner.show();
        this.service.postAdTextLinks(this.textLInks).subscribe(function (res) {
            alert('儲存廣告連結完畢');
            _this.spinner.hide();
            // window.open('#/teaportal', '_self');
        }, function (err) {
            alert(err);
            _this.spinner.hide();
        });
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
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _paymentform_paymentform_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./paymentform/paymentform.component */ "./src/app/clientinventory/paymentform/paymentform.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _paymentlist_paymentlist_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./paymentlist/paymentlist.component */ "./src/app/clientinventory/paymentlist/paymentlist.component.ts");
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
            declarations: [_invupload_invupload_component__WEBPACK_IMPORTED_MODULE_3__["InvuploadComponent"], _invshow_invshow_component__WEBPACK_IMPORTED_MODULE_10__["InvshowComponent"], _invlist_invlist_component__WEBPACK_IMPORTED_MODULE_12__["InvlistComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
                _portal_portal_component__WEBPACK_IMPORTED_MODULE_15__["PortalComponent"], _adimage_adimage_component__WEBPACK_IMPORTED_MODULE_18__["AdimageComponent"], _paymentform_paymentform_component__WEBPACK_IMPORTED_MODULE_20__["PaymentformComponent"], _paymentlist_paymentlist_component__WEBPACK_IMPORTED_MODULE_24__["PaymentlistComponent"]],
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
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__["NgbModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelectModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_23__["BrowserAnimationsModule"],
                _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"].forRoot(),
                ngx_bootstrap_carousel__WEBPACK_IMPORTED_MODULE_11__["CarouselModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_19__["SortableModule"].forRoot(),
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
                    },
                    {
                        path: 'payment/:id', component: _paymentform_paymentform_component__WEBPACK_IMPORTED_MODULE_20__["PaymentformComponent"]
                    },
                    {
                        path: 'paymentlist', component: _paymentlist_paymentlist_component__WEBPACK_IMPORTED_MODULE_24__["PaymentlistComponent"]
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
        this.adTextLinkUrl = 'api/ClientInventoryApi/AdTextLink/888';
        this.paymentGetUrl = 'api/PaymentApi/GetEntity/';
        this.paymentPostUrl = 'api/PaymentApi/';
        this.paymentGetListUrl = 'api/PaymentApi/';
        this.paymentUpdateUsersUrl = 'api/PaymentApi/UpdateUsers/888';
        this._list = [];
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.list);
        this.currentMessage = this.messageSource.asObservable();
        this.paymentdataSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.paymentInfo);
        this.currentPaymentInfo = this.paymentdataSource.asObservable();
        this.paymentlistdataSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](this.paymentInfoList);
        this.currentPaymentList = this.paymentlistdataSource.asObservable();
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
    InvserviceService.prototype.changePaymentInfo = function (info) {
        this.paymentdataSource.next(info);
    };
    InvserviceService.prototype.changePaymentInfoList = function (info) {
        this.paymentlistdataSource.next(info);
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
    InvserviceService.prototype.getAdTextLinks = function () {
        var url = this.site + this.adTextLinkUrl;
        return this.http.get(url);
    };
    InvserviceService.prototype.getPaymentEntity = function (id) {
        var url = this.site + this.paymentGetUrl + id;
        return this.http.get(url);
    };
    InvserviceService.prototype.updatePaymentUsers = function () {
        var url = this.site + this.paymentUpdateUsersUrl;
        return this.http.get(url);
    };
    InvserviceService.prototype.postPaymentEntity = function (entity) {
        var url = this.site + this.paymentPostUrl;
        return this.http
            .post(url, entity, { responseType: 'text' });
    };
    InvserviceService.prototype.getPaymentList = function () {
        var url = this.site + this.paymentGetListUrl;
        return this.http.get(url);
    };
    InvserviceService.prototype.postAdTextLinks = function (adimages) {
        var url = this.site + this.adTextLinkUrl;
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
/* harmony default export */ __webpack_exports__["default"] = (".animated {\r\n  -webkit-animation-duration: 1s;\r\n  animation-duration: 1s;\r\n  -webkit-animation-fill-mode: both;\r\n  animation-fill-mode: both;\r\n}\r\n@-webkit-keyframes fadeIn {\r\n 0% {opacity: 0;}\r\n 100% {opacity: 1;}\r\n}\r\n@keyframes fadeIn {\r\n 0% {opacity: 0;}\r\n 100% {opacity: 1;}\r\n}\r\n.fadeIn {\r\n -webkit-animation-name: fadeIn;\r\n animation-name: fadeIn;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50aW52ZW50b3J5L2ludnNob3cvaW52c2hvdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixpQ0FBaUM7RUFDakMseUJBQXlCO0FBQzNCO0FBQ0E7Q0FDQyxJQUFJLFVBQVUsQ0FBQztDQUNmLE1BQU0sVUFBVSxDQUFDO0FBQ2xCO0FBQ0E7Q0FDQyxJQUFJLFVBQVUsQ0FBQztDQUNmLE1BQU0sVUFBVSxDQUFDO0FBQ2xCO0FBQ0E7Q0FDQyw4QkFBOEI7Q0FDOUIsc0JBQXNCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY2xpZW50aW52ZW50b3J5L2ludnNob3cvaW52c2hvdy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFuaW1hdGVkIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAtd2Via2l0LWFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcclxuIDAlIHtvcGFjaXR5OiAwO31cclxuIDEwMCUge29wYWNpdHk6IDE7fVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuIDAlIHtvcGFjaXR5OiAwO31cclxuIDEwMCUge29wYWNpdHk6IDE7fVxyXG59XHJcbi5mYWRlSW4ge1xyXG4gLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG4gYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxufVxyXG4iXX0= */");

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
        this.GetPaymentInfo(ID);
        this.GetProjectImages();
        this.GetAdImages();
        this.GetAdTextLinks();
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
    InvshowComponent.prototype.GetPaymentInfo = function (ID) {
        var _this = this;
        this.service.getPaymentEntity(ID).subscribe(function (val) {
            _this.paymentInfo = val;
        }, function (err) {
            alert('Payment Info Not Found');
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
    InvshowComponent.prototype.GetAdTextLinks = function () {
        var _this = this;
        this.service.getAdTextLinks().subscribe(function (res) {
            _this.AdTextLinks = res;
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

/***/ "./src/app/clientinventory/paymentform/paymentform.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/clientinventory/paymentform/paymentform.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGludmVudG9yeS9wYXltZW50Zm9ybS9wYXltZW50Zm9ybS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/clientinventory/paymentform/paymentform.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/clientinventory/paymentform/paymentform.component.ts ***!
  \**********************************************************************/
/*! exports provided: PaymentformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentformComponent", function() { return PaymentformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_shared_model_userinfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/model/userinfo */ "./src/app/core/shared/model/userinfo.ts");
/* harmony import */ var _invservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../invservice.service */ "./src/app/clientinventory/invservice.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap/ */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../core/shared/service/authservice.service */ "./src/app/core/shared/service/authservice.service.ts");
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










var PaymentformComponent = /** @class */ (function () {
    function PaymentformComponent(service, spinner, route, authservice, router) {
        this.service = service;
        this.spinner = spinner;
        this.route = route;
        this.authservice = authservice;
        this.router = router;
        this.refresh = false;
        this.change = false;
        this._list = [];
        this.currentState = 'initial';
        this._entity = new _core_shared_model_userinfo__WEBPACK_IMPORTED_MODULE_4__["UserInfo"]();
    }
    Object.defineProperty(PaymentformComponent.prototype, "model2", {
        get: function () {
            return this._model2;
        },
        set: function (value) {
            this._model2 = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaymentformComponent.prototype, "List", {
        get: function () {
            return this._list;
        },
        set: function (value) {
            this._list = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaymentformComponent.prototype, "Entity", {
        get: function () {
            return this._entity;
        },
        set: function (value) {
            this._entity = value;
        },
        enumerable: true,
        configurable: true
    });
    PaymentformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.checktoken().subscribe(function (val) {
            if (val === 'OK') {
                _this.getEntity();
            }
            else {
                alert('權限不足或失效 請重新登入');
                _this.router.navigate(['login']);
            }
        });
    };
    PaymentformComponent.prototype.getEntity = function () {
        var _this = this;
        this.spinner.show();
        var ID = this.route.snapshot.paramMap.get('id');
        if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(ID)) {
            this.service.currentPaymentInfo.subscribe(function (val) {
                _this.Entity = val;
                _this.spinner.hide();
            });
        }
    };
    PaymentformComponent.prototype.addnewhistory = function () {
        var newEntity = new _core_shared_model_userinfo__WEBPACK_IMPORTED_MODULE_4__["PaymentHistory"]();
        var now = new Date;
        newEntity.Date = now.toLocaleString();
        this.Entity.InfoHistory.unshift(newEntity);
        this.change = true;
    };
    PaymentformComponent.prototype.delete = function (i) {
        this.refresh = true;
        i++;
        var orginialItems = this.Entity.InfoHistory;
        var filterItems = orginialItems.slice(0, i - 1).concat(orginialItems.slice(i, orginialItems.length));
        this.Entity.InfoHistory = filterItems;
        this.change = true;
    };
    PaymentformComponent.prototype.save = function () {
        var _this = this;
        this.spinner.show();
        this.service.postPaymentEntity(this.Entity).subscribe(function (x) {
            alert('更新完成');
            _this.refresh = false;
            _this.spinner.hide();
            _this.change = false;
        }, function (err) {
            alert('Error');
            _this.spinner.hide();
        });
    };
    PaymentformComponent.prototype.selectlastspaymentday = function (entity) {
        var entitystring = entity.year + '/' + entity.month + '/' + entity.day;
        this.Entity.Info.LastPaymentDate = entitystring;
        var jsDate = new Date(entity.year, entity.month - 1, entity.day);
        var addmonth = (+jsDate.getMonth() + +this.Entity.Info.PaymentPeriod);
        var nextpaymentdate = new Date(jsDate.setMonth(addmonth));
        this.model2 = new _ng_bootstrap_ng_bootstrap___WEBPACK_IMPORTED_MODULE_6__["NgbDate"](nextpaymentdate.getFullYear(), nextpaymentdate.getMonth() + 1, nextpaymentdate.getDate());
        this.selectnextpaymentday(this.model2);
        this.changeState();
    };
    PaymentformComponent.prototype.selectnextpaymentday = function (entity) {
        var entitystring = entity.year + '/' + entity.month + '/' + entity.day;
        this.Entity.Info.NextPaymentDate = entitystring;
    };
    PaymentformComponent.prototype.resetdates = function () {
        this.Entity.Info.NextPaymentDate = '';
        this.Entity.Info.LastPaymentDate = '';
        this.change = true;
    };
    PaymentformComponent.prototype.updatepaymentdate = function () {
        if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(this.model)) {
            this.selectlastspaymentday(this.model);
        }
    };
    PaymentformComponent.prototype.changeState = function () {
        this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    };
    PaymentformComponent.ctorParameters = function () { return [
        { type: _invservice_service__WEBPACK_IMPORTED_MODULE_5__["InvserviceService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_8__["AuthserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    PaymentformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paymentform',
            template: __importDefault(__webpack_require__(/*! raw-loader!./paymentform.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/paymentform/paymentform.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["trigger"])('changeValue', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                        backgroundColor: 'white',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["style"])({
                        backgroundColor: 'yellow',
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('1500ms')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_7__["animate"])('1000ms'))
                ]),
            ],
            styles: [__importDefault(__webpack_require__(/*! ./paymentform.component.css */ "./src/app/clientinventory/paymentform/paymentform.component.css")).default]
        }),
        __metadata("design:paramtypes", [_invservice_service__WEBPACK_IMPORTED_MODULE_5__["InvserviceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_8__["AuthserviceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PaymentformComponent);
    return PaymentformComponent;
}());



/***/ }),

/***/ "./src/app/clientinventory/paymentlist/paymentlist.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/clientinventory/paymentlist/paymentlist.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGludmVudG9yeS9wYXltZW50bGlzdC9wYXltZW50bGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/clientinventory/paymentlist/paymentlist.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/clientinventory/paymentlist/paymentlist.component.ts ***!
  \**********************************************************************/
/*! exports provided: PaymentlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentlistComponent", function() { return PaymentlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _invservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../invservice.service */ "./src/app/clientinventory/invservice.service.ts");
/* harmony import */ var _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../core/shared/service/authservice.service */ "./src/app/core/shared/service/authservice.service.ts");
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







var PaymentlistComponent = /** @class */ (function () {
    function PaymentlistComponent(service, spinner, route, router, authservice) {
        this.service = service;
        this.spinner = spinner;
        this.route = route;
        this.router = router;
        this.authservice = authservice;
        this._list = [];
    }
    Object.defineProperty(PaymentlistComponent.prototype, "List", {
        get: function () {
            return this._list;
        },
        set: function (value) {
            this._list = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PaymentlistComponent.prototype, "Search", {
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
    PaymentlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.checktoken().subscribe(function (val) {
            if (val === 'OK') {
                _this.service.currentPaymentList.subscribe(function (val2) {
                    if (Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(val2) || val2.length === 0) {
                        _this.GetList();
                    }
                    else {
                        _this.List = val2;
                        _this.templist = _this.List;
                        _this.spinner.hide();
                    }
                });
            }
            else {
                alert('權限不足或失效 請重新登入');
                _this.router.navigate(['login']);
            }
        });
    };
    PaymentlistComponent.prototype.GetList = function () {
        var _this = this;
        this.spinner.show();
        this.service.getPaymentList().subscribe(function (val) {
            _this.List = val;
            _this.templist = _this.List;
            _this.service.changePaymentInfoList(_this.List);
            _this.spinner.hide();
        }, function (err) {
            alert('error');
            _this.spinner.hide();
        });
    };
    PaymentlistComponent.prototype.FilterList = function (filter) {
        if (filter === '' || filter === undefined) {
            this.List = this.templist;
        }
        else {
            this.List = this.templist.filter(function (x) { return x.ClientId.includes(filter) || x.ClientName.includes(filter); });
        }
    };
    PaymentlistComponent.prototype.showEntity = function (id) {
        this.service.changePaymentInfo(this.List.filter(function (x) { return x.ClientId === id; })[0]);
        // window.open('#/payment/' + id  , '_self');
        this.router.navigate(['payment', id]);
    };
    PaymentlistComponent.prototype.updateUsers = function () {
        var _this = this;
        this.spinner.show();
        this.service.updatePaymentUsers().subscribe(function (val) {
            alert('藏家名單更新完成 請重新更新頁面');
            _this.spinner.hide();
        }, function (err) {
            alert('發生錯誤');
            _this.spinner.hide();
        });
    };
    PaymentlistComponent.ctorParameters = function () { return [
        { type: _invservice_service__WEBPACK_IMPORTED_MODULE_4__["InvserviceService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_5__["AuthserviceService"] }
    ]; };
    PaymentlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-paymentlist',
            template: __importDefault(__webpack_require__(/*! raw-loader!./paymentlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/clientinventory/paymentlist/paymentlist.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./paymentlist.component.css */ "./src/app/clientinventory/paymentlist/paymentlist.component.css")).default]
        }),
        __metadata("design:paramtypes", [_invservice_service__WEBPACK_IMPORTED_MODULE_4__["InvserviceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _core_shared_service_authservice_service__WEBPACK_IMPORTED_MODULE_5__["AuthserviceService"]])
    ], PaymentlistComponent);
    return PaymentlistComponent;
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
/* harmony default export */ __webpack_exports__["default"] = ("/* Style buttons */\r\n.btn {\r\n    background-color: DodgerBlue; /* Blue background */\r\n    border: none; /* Remove borders */\r\n    color: white; /* White text */\r\n    padding: 12px 16px; /* Some padding */\r\n    font-size: 16px; /* Set a font size */\r\n    cursor: pointer; /* Mouse pointer on hover */\r\n  }\r\n/* Darker background on mouse-over */\r\n.btn:hover {\r\n    background-color: RoyalBlue;\r\n  }\r\n.button {\r\n    padding: 15px 25px;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    outline: none;\r\n    color: #fff;\r\n    background-color: #4CAF50;\r\n    border: none;\r\n    border-radius: 15px;\r\n    box-shadow: 0 9px #999;\r\n  }\r\n.button:hover {background-color: #3e8e41}\r\n.button:active {\r\n    background-color: #3e8e41;\r\n    box-shadow: 0 5px #666;\r\n    -webkit-transform: translateY(4px);\r\n            transform: translateY(4px);\r\n  }\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 4;\r\n    width: 100%;\r\n    border: 1px solid #ddd;\r\n  }\r\n/* Style table headers and table data */\r\nth, td {\r\n    text-align: center;\r\n    padding: 16px;\r\n  }\r\nth:first-child, td:first-child {\r\n    text-align: left;\r\n  }\r\n/* Zebra-striped table rows */\r\ntr:nth-child(even) {\r\n    background-color: #f2f2f2\r\n  }\r\n.fa-check {\r\n    color: green;\r\n  }\r\n.fa-remove {\r\n    color: red;\r\n  }\r\n#rcorners1 {\r\n    border-radius: 25px;\r\n    background: rgb(209, 211, 247);\r\n    padding: 20px;\r\n   \r\n  }\r\n#rcorners1a {\r\n    border-radius: 25px;\r\n    background: rgb(203, 243, 245);\r\n    padding: 20px;\r\n   \r\n  }\r\n#rcorners2 {\r\n    border-radius: 25px;\r\n    border: 2px solid rgb(189, 221, 143);\r\n    padding: 20px;\r\n   \r\n  }\r\n#frontbackground {\r\n    background-color:lightcyan;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpZW50aW52ZW50b3J5L3BvcnRhbC9wb3J0YWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0I7QUFDbEI7SUFDSSw0QkFBNEIsRUFBRSxvQkFBb0I7SUFDbEQsWUFBWSxFQUFFLG1CQUFtQjtJQUNqQyxZQUFZLEVBQUUsZUFBZTtJQUM3QixrQkFBa0IsRUFBRSxpQkFBaUI7SUFDckMsZUFBZSxFQUFFLG9CQUFvQjtJQUNyQyxlQUFlLEVBQUUsMkJBQTJCO0VBQzlDO0FBRUEsb0NBQW9DO0FBQ3BDO0lBQ0UsMkJBQTJCO0VBQzdCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7QUFFQSxlQUFlLHlCQUF5QjtBQUV4QztJQUNFLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0NBQTBCO1lBQTFCLDBCQUEwQjtFQUM1QjtBQUdBO0lBQ0UseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsc0JBQXNCO0VBQ3hCO0FBRUEsdUNBQXVDO0FBQ3ZDO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7RUFDZjtBQUVBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBRUEsNkJBQTZCO0FBQzdCO0lBQ0U7RUFDRjtBQUVBO0lBQ0UsWUFBWTtFQUNkO0FBRUE7SUFDRSxVQUFVO0VBQ1o7QUFHQTtJQUNFLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsYUFBYTs7RUFFZjtBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixhQUFhOztFQUVmO0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsb0NBQW9DO0lBQ3BDLGFBQWE7O0VBRWY7QUFFQTtJQUNFLDBCQUEwQjtFQUM1QiIsImZpbGUiOiJzcmMvYXBwL2NsaWVudGludmVudG9yeS9wb3J0YWwvcG9ydGFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTdHlsZSBidXR0b25zICovXHJcbi5idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogRG9kZ2VyQmx1ZTsgLyogQmx1ZSBiYWNrZ3JvdW5kICovXHJcbiAgICBib3JkZXI6IG5vbmU7IC8qIFJlbW92ZSBib3JkZXJzICovXHJcbiAgICBjb2xvcjogd2hpdGU7IC8qIFdoaXRlIHRleHQgKi9cclxuICAgIHBhZGRpbmc6IDEycHggMTZweDsgLyogU29tZSBwYWRkaW5nICovXHJcbiAgICBmb250LXNpemU6IDE2cHg7IC8qIFNldCBhIGZvbnQgc2l6ZSAqL1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiBNb3VzZSBwb2ludGVyIG9uIGhvdmVyICovXHJcbiAgfVxyXG4gIFxyXG4gIC8qIERhcmtlciBiYWNrZ3JvdW5kIG9uIG1vdXNlLW92ZXIgKi9cclxuICAuYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IFJveWFsQmx1ZTtcclxuICB9XHJcblxyXG4gIC5idXR0b24ge1xyXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDlweCAjOTk5O1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxfVxyXG4gIFxyXG4gIC5idXR0b246YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAjNjY2O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgdGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiA0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0YWJsZSBoZWFkZXJzIGFuZCB0YWJsZSBkYXRhICovXHJcbiAgdGgsIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRoOmZpcnN0LWNoaWxkLCB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAvKiBaZWJyYS1zdHJpcGVkIHRhYmxlIHJvd3MgKi9cclxuICB0cjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMlxyXG4gIH1cclxuICBcclxuICAuZmEtY2hlY2sge1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuICBcclxuICAuZmEtcmVtb3ZlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgI3Jjb3JuZXJzMSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwOSwgMjExLCAyNDcpO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgXHJcbiAgfVxyXG5cclxuICAjcmNvcm5lcnMxYSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIwMywgMjQzLCAyNDUpO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gICNyY29ybmVyczIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigxODksIDIyMSwgMTQzKTtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgIFxyXG4gIH1cclxuICBcclxuICAjZnJvbnRiYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRjeWFuO1xyXG4gIH0iXX0= */");

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

/***/ "./src/app/core/shared/model/userinfo.ts":
/*!***********************************************!*\
  !*** ./src/app/core/shared/model/userinfo.ts ***!
  \***********************************************/
/*! exports provided: UserInfo, HealthInfo, HealthHistory, BloodPressure, Meal, PaymentInfo, PaymentHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return UserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthInfo", function() { return HealthInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthHistory", function() { return HealthHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloodPressure", function() { return BloodPressure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meal", function() { return Meal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentInfo", function() { return PaymentInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentHistory", function() { return PaymentHistory; });
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
// tslint:disable-next-line:class-name
var baseClient = /** @class */ (function () {
    function baseClient() {
    }
    return baseClient;
}());
var UserInfo = /** @class */ (function (_super) {
    __extends(UserInfo, _super);
    function UserInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserInfo;
}(baseClient));

var HealthInfo = /** @class */ (function () {
    function HealthInfo() {
    }
    return HealthInfo;
}());

var HealthHistory = /** @class */ (function () {
    function HealthHistory() {
    }
    return HealthHistory;
}());

var BloodPressure = /** @class */ (function () {
    function BloodPressure() {
    }
    return BloodPressure;
}());

var Meal = /** @class */ (function () {
    function Meal() {
    }
    return Meal;
}());

var PaymentInfo = /** @class */ (function () {
    function PaymentInfo() {
    }
    return PaymentInfo;
}());

var PaymentHistory = /** @class */ (function () {
    function PaymentHistory() {
    }
    return PaymentHistory;
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

/***/ "./src/app/core/shared/service/newsservice.service.ts":
/*!************************************************************!*\
  !*** ./src/app/core/shared/service/newsservice.service.ts ***!
  \************************************************************/
/*! exports provided: NewsserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsserviceService", function() { return NewsserviceService; });
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


var NewsserviceService = /** @class */ (function () {
    function NewsserviceService(http) {
        this.http = http;
        this.apiKey = '08e7ba32ec0440c8ab88ac2e9a980d4a';
        this.url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + this.apiKey;
    }
    NewsserviceService.prototype.getnews = function () {
        // Headers
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            ContentType: 'application/json'
        });
        return this.http
            .get(this.url);
    };
    NewsserviceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    NewsserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NewsserviceService);
    return NewsserviceService;
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
/* harmony import */ var _service_newsservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/newsservice.service */ "./src/app/core/shared/service/newsservice.service.ts");
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
            providers: [_service_authservice_service__WEBPACK_IMPORTED_MODULE_2__["AuthserviceService"], _service_cryptservice_service__WEBPACK_IMPORTED_MODULE_3__["CryptserviceService"], _service_postservice_service__WEBPACK_IMPORTED_MODULE_4__["PostFileService"], _service_newsservice_service__WEBPACK_IMPORTED_MODULE_5__["NewsserviceService"]]
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
/* harmony default export */ __webpack_exports__["default"] = ("div{\r\n    align-content: left;\r\n}\r\n\r\ntable {\r\n    width: 200;\r\n}\r\n\r\nthead{\r\n    color: #337AB7; \r\n    align-content: center;\r\n    \r\n}\r\n\r\nrow td{\r\n    align-content: left;\r\n    text-align: left;\r\n}\r\n\r\n.loader {\r\n  border: 16px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 16px solid #3498db;\r\n  width: 120px;\r\n  height: 120px;\r\n  -webkit-animation: spin 2s linear infinite; /* Safari */\r\n  animation: spin 2s linear infinite;\r\n}\r\n\r\n/* Safari */\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3VzdG9tZXJsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7O0FBRXpCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFJQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsOEJBQThCO0VBQzlCLFlBQVk7RUFDWixhQUFhO0VBQ2IsMENBQTBDLEVBQUUsV0FBVztFQUN2RCxrQ0FBa0M7QUFDcEM7O0FBRUEsV0FBVzs7QUFDWDtFQUNFLEtBQUssK0JBQStCLEVBQUU7RUFDdEMsT0FBTyxpQ0FBaUMsRUFBRTtBQUM1Qzs7QUFFQTtFQUNFLEtBQUssK0JBQXVCLEVBQXZCLHVCQUF1QixFQUFFO0VBQzlCLE9BQU8saUNBQXlCLEVBQXpCLHlCQUF5QixFQUFFO0FBQ3BDIiwiZmlsZSI6InNyYy9hcHAvY3VzdG9tZXJsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgIGFsaWduLWNvbnRlbnQ6IGxlZnQ7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAyMDA7XHJcbn1cclxuXHJcbnRoZWFke1xyXG4gICAgY29sb3I6ICMzMzdBQjc7IFxyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbn1cclxuXHJcbnJvdyB0ZHtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG5cclxuIFxyXG4ubG9hZGVyIHtcclxuICBib3JkZXI6IDE2cHggc29saWQgI2YzZjNmMztcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyLXRvcDogMTZweCBzb2xpZCAjMzQ5OGRiO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDEyMHB4O1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTsgLyogU2FmYXJpICovXHJcbiAgYW5pbWF0aW9uOiBzcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuLyogU2FmYXJpICovXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcclxuICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cclxuICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gIDEwMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XHJcbn1cclxuICJdfQ== */");

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
    Object.defineProperty(CustomerlogComponent.prototype, "Channel", {
        get: function () {
            return this._channel;
        },
        set: function (value) {
            this._channel = value;
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
            // newitem.Email = this.Email;
            newitem_1.PhoneNumber = this.PhoneNumber;
            newitem_1.Note = this.Note;
            newitem_1.Comment = this.Comment;
            newitem_1.Channel = this.Channel;
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
        this.Channel = this.log.Channel;
    };
    ModalContentComponent.prototype.savelog = function () {
        var _this = this;
        this.log.Name = this.Name;
        this.log.PhoneNumber = this.PhoneNumber;
        this.log.Email = this.Email;
        this.log.Note = this.Note;
        this.log.Comment = this.Comment;
        this.log.Channel = this.Channel;
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
            template: "\n      <div class=\"modal-header table-hover\">\n        <h4 class=\"modal-title pull-left\">{{log.Name}}</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n      <table class=\"table table-bordered\">\n      <tr>\n          <td>\n              \u9867\u5BA2\u59D3\u540D\n          </td>\n          <td>\n          <input type=\"string\"\n          [(ngModel)]='Name'\n           />\n          </td>\n      </tr>\n\n      <tr>\n          <td>\n              \u96FB\u8A71\n          </td>\n          <td>\n          <input type=\"string\"\n          [(ngModel)]='PhoneNumber'\n           />\n          </td>\n      </tr>\n\n      <tr>\n      <td>\n         \u92B7\u552E\u7BA1\u9053\n      </td>\n      <td>\n      <mat-form-field>\n      <select matNativeControl [(ngModel)]=\"Channel\" required>\n        <option value=\"\u96FB\u8A71\u76F4\u8CFC\">\u96FB\u8A71\u76F4\u8CFC</option>\n        <option value=\"\u7C21\u8A0A\u4FC3\u92B7\">\u7C21\u8A0A\u4FC3\u92B7</option>\n        <option value=\"\u6A02\u5929\">\u6A02\u5929</option>\n        <option value=\"\u8766\u76AE\">\u8766\u76AE</option>\n        <option value=\"\u5B98\u7DB2\">\u5B98\u7DB2</option>\n        <option value=\"\u89AA\u53CB\u54E1\u5DE5\">\u89AA\u53CB\u54E1\u5DE5</option>\n        <option value=\"\u5176\u4ED6\">\u5176\u4ED6</option>\n      </select>\n    </mat-form-field>\n      </td>\n      </tr>\n\n      <tr>\n      <td>\n          \u901A\u8A0A\u7D00\u9304\n      </td>\n      <td>\n         <textarea [(ngModel)]='Note' class=\"form-control\" >\n\n         </textarea>\n      </td>\n      </tr>\n      <tr  class=\"warning\" >\n      <td>\n          \u5099\u8A3B(\u5F8C\u7E8C\u9032\u5C55)\n      </td>\n      <td>\n         <textarea [(ngModel)]='Comment' class=\"form-control\"  >\n\n         </textarea>\n      </td>\n      </tr>\n      <tr >\n\n              <td>\n                  <button class=\"btn btn-primary\" (click) = 'savelog()'>\n                     \u5132\u5B58\n                   </button>\n\n              </td>\n\n        </tr>\n    </table>\n\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">\u53D6\u6D88</button>\n      </div>\n    "
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

/***/ "./src/app/health/health.module.ts":
/*!*****************************************!*\
  !*** ./src/app/health/health.module.ts ***!
  \*****************************************/
/*! exports provided: HealthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthModule", function() { return HealthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _healthview_healthview_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./healthview/healthview.component */ "./src/app/health/healthview/healthview.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _healthviewmodal_healthviewmodal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./healthviewmodal/healthviewmodal.component */ "./src/app/health/healthviewmodal/healthviewmodal.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../core/shared/shared.module */ "./src/app/core/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};














var HealthModule = /** @class */ (function () {
    function HealthModule() {
    }
    HealthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_healthview_healthview_component__WEBPACK_IMPORTED_MODULE_2__["HealthviewComponent"], _healthviewmodal_healthviewmodal_component__WEBPACK_IMPORTED_MODULE_11__["HealthviewmodalComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ModalModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_7__["NgxFileDropModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"],
                _core_shared_shared_module__WEBPACK_IMPORTED_MODULE_13__["SharedModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: 'health', component: _healthview_healthview_component__WEBPACK_IMPORTED_MODULE_2__["HealthviewComponent"]
                    },
                ])
            ],
            entryComponents: [_healthviewmodal_healthviewmodal_component__WEBPACK_IMPORTED_MODULE_11__["HealthviewmodalComponent"]]
        })
    ], HealthModule);
    return HealthModule;
}());



/***/ }),

/***/ "./src/app/health/healthview/healthview.component.css":
/*!************************************************************!*\
  !*** ./src/app/health/healthview/healthview.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWx0aC9oZWFsdGh2aWV3L2hlYWx0aHZpZXcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/health/healthview/healthview.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/health/healthview/healthview.component.ts ***!
  \***********************************************************/
/*! exports provided: HealthviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthviewComponent", function() { return HealthviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_shared_model_userinfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/shared/model/userinfo */ "./src/app/core/shared/model/userinfo.ts");
/* harmony import */ var _service_healthservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../service/healthservice.service */ "./src/app/health/service/healthservice.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var _healthviewmodal_healthviewmodal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../healthviewmodal/healthviewmodal.component */ "./src/app/health/healthviewmodal/healthviewmodal.component.ts");
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








var HealthviewComponent = /** @class */ (function () {
    function HealthviewComponent(service, spinner, route, modalService) {
        this.service = service;
        this.spinner = spinner;
        this.route = route;
        this.modalService = modalService;
        this.refresh = false;
        this.change = false;
        this._list = [];
        this.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this._entity = new _core_shared_model_userinfo__WEBPACK_IMPORTED_MODULE_4__["UserInfo"]();
    }
    Object.defineProperty(HealthviewComponent.prototype, "List", {
        get: function () {
            return this._list;
        },
        set: function (value) {
            this._list = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HealthviewComponent.prototype, "Entity", {
        get: function () {
            return this._entity;
        },
        set: function (value) {
            this._entity = value;
        },
        enumerable: true,
        configurable: true
    });
    HealthviewComponent.prototype.ngOnInit = function () {
        this.GetList();
    };
    HealthviewComponent.prototype.GetList = function () {
        var _this = this;
        this.spinner.show();
        var ID = this.route.snapshot.queryParamMap.get('id');
        this.service.getList().subscribe(function (val) {
            _this.List = val;
            if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNullOrUndefined"])(ID)) {
                _this.Entity = _this.List.filter(function (x) { return x.ClientId === ID; })[0];
            }
            _this.spinner.hide();
        }, function (err) {
            alert('Not Found');
            _this.spinner.hide();
        });
    };
    HealthviewComponent.prototype.filterForArticles = function (filterVal) {
        if (filterVal === '-1') {
        }
        else {
            this.Entity = this.List[Number(filterVal)];
        }
    };
    HealthviewComponent.prototype.openModal = function () {
        var newEntity = new _core_shared_model_userinfo__WEBPACK_IMPORTED_MODULE_4__["HealthHistory"]();
        var now = new Date;
        newEntity.DateTime = now.getFullYear().toString() + '/' + (now.getMonth() + 1).toString() + '/'
            + now.getDate().toString() + ' ' + this.days[now.getDay()];
        newEntity.WalkSteps = 7000;
        newEntity.Weight = '75';
        newEntity.BloodPressures = [];
        newEntity.Meals = [];
        newEntity.Activities = [];
        var initialState = {
            Entity: this.Entity,
            History: newEntity,
            Mode: 'Add'
        };
        this.bsModalRef = this.modalService.show(_healthviewmodal_healthviewmodal_component__WEBPACK_IMPORTED_MODULE_7__["HealthviewmodalComponent"], { initialState: initialState });
        this.bsModalRef.setClass('modal-lg');
        this.change = true;
    };
    HealthviewComponent.prototype.editform = function (i) {
        this.refresh = true;
        var initialState = {
            Entity: this.Entity,
            History: this.Entity.InfoHistory[i],
            Mode: 'Edit'
        };
        this.bsModalRef = this.modalService.show(_healthviewmodal_healthviewmodal_component__WEBPACK_IMPORTED_MODULE_7__["HealthviewmodalComponent"], { initialState: initialState });
        this.bsModalRef.setClass('modal-lg');
        this.change = true;
    };
    HealthviewComponent.prototype.delete = function (i) {
        this.refresh = true;
        i++;
        var orginialItems = this.Entity.InfoHistory;
        var filterItems = orginialItems.slice(0, i - 1).concat(orginialItems.slice(i, orginialItems.length));
        this.Entity.InfoHistory = filterItems;
        this.change = true;
    };
    HealthviewComponent.prototype.save = function () {
        var _this = this;
        this.spinner.show();
        if (this.refresh === true) {
            this.service.postRefreshEntity(this.Entity).subscribe(function (x) {
                alert('更新完成');
                _this.refresh = false;
                _this.spinner.hide();
                _this.change = false;
            }, function (err) {
                alert('Error');
                _this.spinner.hide();
            });
        }
        else {
            this.service.postEntity(this.Entity).subscribe(function (x) {
                alert('新增完成');
                _this.refresh = false;
                _this.spinner.hide();
                _this.change = false;
            }, function (err) {
                alert('Error');
                _this.spinner.hide();
            });
        }
    };
    HealthviewComponent.ctorParameters = function () { return [
        { type: _service_healthservice_service__WEBPACK_IMPORTED_MODULE_5__["HealthserviceService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] }
    ]; };
    HealthviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-healthview',
            template: __importDefault(__webpack_require__(/*! raw-loader!./healthview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/health/healthview/healthview.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./healthview.component.css */ "./src/app/health/healthview/healthview.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_healthservice_service__WEBPACK_IMPORTED_MODULE_5__["HealthserviceService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"]])
    ], HealthviewComponent);
    return HealthviewComponent;
}());



/***/ }),

/***/ "./src/app/health/healthviewmodal/healthviewmodal.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/health/healthviewmodal/healthviewmodal.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWx0aC9oZWFsdGh2aWV3bW9kYWwvaGVhbHRodmlld21vZGFsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/health/healthviewmodal/healthviewmodal.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/health/healthviewmodal/healthviewmodal.component.ts ***!
  \*********************************************************************/
/*! exports provided: HealthviewmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthviewmodalComponent", function() { return HealthviewmodalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_shared_model_userinfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/shared/model/userinfo */ "./src/app/core/shared/model/userinfo.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _service_healthservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../service/healthservice.service */ "./src/app/health/service/healthservice.service.ts");
/* harmony import */ var _core_shared_service_newsservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../core/shared/service/newsservice.service */ "./src/app/core/shared/service/newsservice.service.ts");
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






var HealthviewmodalComponent = /** @class */ (function () {
    function HealthviewmodalComponent(bsModalRef, spinner, service, newsservice) {
        this.bsModalRef = bsModalRef;
        this.spinner = spinner;
        this.service = service;
        this.newsservice = newsservice;
        this._entity = new _core_shared_model_userinfo__WEBPACK_IMPORTED_MODULE_1__["UserInfo"]();
        this.CurrentTemp = 0;
        this.Mode = 'Add';
        this.files = [];
    }
    Object.defineProperty(HealthviewmodalComponent.prototype, "Entity", {
        get: function () {
            return this._entity;
        },
        set: function (value) {
            this._entity = value;
        },
        enumerable: true,
        configurable: true
    });
    HealthviewmodalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getTemp().subscribe(function (val) {
            _this.CurrentTemp = val.main.temp;
        });
        this.newsservice.getnews().subscribe(function (val) {
            var newImage = new _core_shared_model_userinfo__WEBPACK_IMPORTED_MODULE_1__["Meal"]();
            newImage.Name = val.articles[0].title;
            newImage.ImageLink = val.articles[0].urlToImage;
            newImage.DateTime = new Date().toLocaleString();
            newImage.ImageUrl = val.articles[0].url;
            _this.History.Activities.unshift(newImage);
        });
    };
    HealthviewmodalComponent.prototype.newblood = function () {
        var newblood = new _core_shared_model_userinfo__WEBPACK_IMPORTED_MODULE_1__["BloodPressure"]();
        var now = new Date;
        newblood.DateTime = now.toLocaleString();
        newblood.Comment = this.CurrentTemp.toString();
        this.History.BloodPressures.push(newblood);
    };
    HealthviewmodalComponent.prototype.removeblood = function (i) {
        i++;
        var orginialItems = this.History.BloodPressures;
        var filterItems = orginialItems.slice(0, i - 1).concat(orginialItems.slice(i, orginialItems.length));
        this.History.BloodPressures = filterItems;
    };
    HealthviewmodalComponent.prototype.removeMeal = function (i) {
        i++;
        var orginialItems = this.History.Meals;
        var filterItems = orginialItems.slice(0, i - 1).concat(orginialItems.slice(i, orginialItems.length));
        this.History.Meals = filterItems;
    };
    HealthviewmodalComponent.prototype.removeActivity = function (i) {
        i++;
        var orginialItems = this.History.Activities;
        var filterItems = orginialItems.slice(0, i - 1).concat(orginialItems.slice(i, orginialItems.length));
        this.History.Activities = filterItems;
    };
    HealthviewmodalComponent.prototype.save = function () {
        if (this.Mode === 'Add') {
            this.Entity.InfoHistory.unshift(this.History);
        }
        this.History.Changed = true; // marked as edited
        this.bsModalRef.hide();
    };
    HealthviewmodalComponent.prototype.newMeal = function () {
        var newImage = new _core_shared_model_userinfo__WEBPACK_IMPORTED_MODULE_1__["Meal"]();
        newImage.Name = 'Meal';
        newImage.ImageLink = 'https://leecloud.blob.core.windows.net/image/meal.jpg';
        newImage.DateTime = new Date().toLocaleString();
        this.History.Meals.unshift(newImage);
    };
    HealthviewmodalComponent.prototype.dropped = function (files) {
        var _this = this;
        this.files = files;
        var _loop_1 = function (droppedFile) {
            // Is it a file?
            if (droppedFile.fileEntry.isFile) {
                var fileEntry = droppedFile.fileEntry;
                fileEntry.file(function (file) {
                    // Here you can access the real file
                    console.log(droppedFile.relativePath, file);
                    //  if (file.size > 4194304)
                    //  {
                    //    alert(file.name + ' 已經大於4mb,請縮小後再上傳');
                    //    return;
                    //  }
                    // You could upload it like this:
                    var formData = new FormData();
                    formData.append(file.name, file, droppedFile.relativePath);
                    _this.spinner.show();
                    _this.service.postImage(formData).subscribe(function (val) {
                        var newImage = new _core_shared_model_userinfo__WEBPACK_IMPORTED_MODULE_1__["Meal"]();
                        newImage.Name = 'Meal';
                        newImage.ImageLink = val;
                        newImage.DateTime = new Date().toLocaleString();
                        _this.History.Meals.unshift(newImage);
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
    HealthviewmodalComponent.prototype.acticitydropped = function (files) {
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
                    _this.service.postImage(formData).subscribe(function (val) {
                        var newImage = new _core_shared_model_userinfo__WEBPACK_IMPORTED_MODULE_1__["Meal"]();
                        newImage.Name = 'Acticity';
                        newImage.ImageLink = val;
                        newImage.DateTime = new Date().toLocaleString();
                        _this.History.Activities.unshift(newImage);
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
        for (var _i = 0, files_2 = files; _i < files_2.length; _i++) {
            var droppedFile = files_2[_i];
            _loop_2(droppedFile);
        }
    };
    HealthviewmodalComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    HealthviewmodalComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    HealthviewmodalComponent.ctorParameters = function () { return [
        { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] },
        { type: _service_healthservice_service__WEBPACK_IMPORTED_MODULE_4__["HealthserviceService"] },
        { type: _core_shared_service_newsservice_service__WEBPACK_IMPORTED_MODULE_5__["NewsserviceService"] }
    ]; };
    HealthviewmodalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-healthviewmodal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./healthviewmodal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/health/healthviewmodal/healthviewmodal.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./healthviewmodal.component.css */ "./src/app/health/healthviewmodal/healthviewmodal.component.css")).default]
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["BsModalRef"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _service_healthservice_service__WEBPACK_IMPORTED_MODULE_4__["HealthserviceService"],
            _core_shared_service_newsservice_service__WEBPACK_IMPORTED_MODULE_5__["NewsserviceService"]])
    ], HealthviewmodalComponent);
    return HealthviewmodalComponent;
}());



/***/ }),

/***/ "./src/app/health/service/healthservice.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/health/service/healthservice.service.ts ***!
  \*********************************************************/
/*! exports provided: HealthserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthserviceService", function() { return HealthserviceService; });
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


var HealthserviceService = /** @class */ (function () {
    function HealthserviceService(http) {
        this.http = http;
        this.site = 'https://leecloud.azurewebsites.net/'; // URL to web api
        // private site = 'https://localhost:44347/';  // URL to web api
        this.url = 'api/healthapi/';
        this.postImgurl = 'api/UploadWebPhotoapi/';
        this.weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?id=1668284&APPID=678b74a297f51d823a3d69b025b4829a&units=metric';
    }
    HealthserviceService.prototype.getList = function () {
        var url = this.site + this.url;
        return this.http.get(url);
    };
    HealthserviceService.prototype.getEntityById = function (id) {
        var url = this.site + this.url + id;
        return this.http.get(url);
    };
    HealthserviceService.prototype.postEntity = function (entity) {
        var url = this.site + this.url;
        return this.http.post(url, entity);
    };
    HealthserviceService.prototype.postRefreshEntity = function (entity) {
        var url = this.site + this.url + '?refresh=true';
        return this.http.post(url, entity);
    };
    HealthserviceService.prototype.putEntity = function (entity) {
        var url = this.site + this.url + entity.ClientId;
        return this.http.put(url, entity);
    };
    HealthserviceService.prototype.deleteEntity = function (id) {
        var url = this.site + this.url + id;
        return this.http.delete(url);
    };
    HealthserviceService.prototype.deleteEntityHistory = function (id, key) {
        var url = this.site + this.url + id + '?key=' + key;
        return this.http.delete(url);
    };
    HealthserviceService.prototype.postImage = function (file) {
        var url = this.site + this.postImgurl;
        // Headers
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            ContentType: 'multipart/form-data'
        });
        // return  this.http.post(url, file, {headers: headers});
        return this.http
            .post(url, file, { headers: headers, responseType: 'text' });
    };
    HealthserviceService.prototype.getTemp = function () {
        var url = this.weatherUrl;
        return this.http.get(url);
    };
    HealthserviceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    HealthserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HealthserviceService);
    return HealthserviceService;
}());



/***/ }),

/***/ "./src/app/linepair/form/form.component.css":
/*!**************************************************!*\
  !*** ./src/app/linepair/form/form.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".home-banner {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n  text-align: center;\r\n}\r\n\r\n.banner-image {\r\n  width: 100%;\r\n  height: 100%;\r\n  min-height: 150px; /* Added to show image */\r\n  background-image: url('LinePairLogo.jpg');\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  display: inline-block;\r\n}\r\n\r\nmat-slider {\r\n  width: 300px;\r\n}\r\n\r\n.btn-space {\r\n  margin-right: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluZXBhaXIvZm9ybS9mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCLEVBQUUsd0JBQXdCO0VBQzNDLHlDQUFrRTtFQUNsRSwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLHFCQUFxQjtBQUN2Qjs7QUFHQTtFQUNFLFlBQVk7QUFDZDs7QUFHQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2xpbmVwYWlyL2Zvcm0vZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUtYmFubmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYmFubmVyLWltYWdlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTUwcHg7IC8qIEFkZGVkIHRvIHNob3cgaW1hZ2UgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vLi4vLi4vLi4vYXNzZXRzL1Bob3Rvcy9MaW5lUGFpckxvZ28uanBnJyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG5cclxubWF0LXNsaWRlciB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG5cclxuLmJ0bi1zcGFjZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/linepair/form/form.component.ts":
/*!*************************************************!*\
  !*** ./src/app/linepair/form/form.component.ts ***!
  \*************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../model/user */ "./src/app/linepair/model/user.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _service_linepairservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/linepairservice.service */ "./src/app/linepair/service/linepairservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_core_shared_service_postservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../app/core/shared//service/postservice.service */ "./src/app/core/shared/service/postservice.service.ts");
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






var FormComponent = /** @class */ (function () {
    function FormComponent(service, spinner, _formBuilder, postservice) {
        this.service = service;
        this.spinner = spinner;
        this._formBuilder = _formBuilder;
        this.postservice = postservice;
        this.showInput = false;
        this.showInputVal = '';
        this._entity = new _model_user__WEBPACK_IMPORTED_MODULE_1__["LinePairUser"]();
        this.files = [];
    }
    Object.defineProperty(FormComponent.prototype, "Entity", {
        get: function () {
            return this._entity;
        },
        set: function (value) {
            this._entity = value;
        },
        enumerable: true,
        configurable: true
    });
    FormComponent.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            otherCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].nullValidator]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            other2Ctrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].nullValidator]
        });
        this.thirdFormGroup = this._formBuilder.group({
            thirdCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            other3Ctrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].nullValidator]
        });
        this.forthFormGroup = this._formBuilder.group({
            forthCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            other4Ctrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].nullValidator]
        });
        this.AddNew();
    };
    FormComponent.prototype.CheckInput = function () {
        if (this.Entity.City === '其他') {
            this.showInput = true;
        }
        else {
            this.showInput = false;
        }
    };
    FormComponent.prototype.AddNew = function () {
        var newEntity = new _model_user__WEBPACK_IMPORTED_MODULE_1__["LinePairUser"]();
        var now = new Date;
        var utc_timestamp = Date.UTC(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds(), now.getMilliseconds());
        newEntity.Id = 'LinePair' + '_' + utc_timestamp.toString();
        newEntity.ImgLink = 'https://leecloud.blob.core.windows.net/image/profile.png';
        this.Entity = newEntity;
    };
    FormComponent.prototype.SaveEntity = function () {
        var _this = this;
        this.spinner.show();
        if (this.showInput) {
            this.Entity.City = this.showInputVal;
        }
        this.service.postEntity(this.Entity).subscribe(function (res) {
            alert('上傳成功!');
            _this.spinner.hide();
            window.open('#/linepairlist');
        }, function (err) {
            alert(err);
            _this.spinner.hide();
        });
    };
    FormComponent.prototype.dropped = function (files) {
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
                    formData.append('image', file, droppedFile.relativePath);
                    _this.spinner.show();
                    _this.postservice.postImage(formData).subscribe(function (val) {
                        _this.spinner.hide();
                        _this.Entity.ImgLink = val;
                    }, function (err) {
                        alert('upload image error');
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
    FormComponent.prototype.fileOver = function (event) {
        console.log(event);
    };
    FormComponent.prototype.fileLeave = function (event) {
        console.log(event);
    };
    FormComponent.ctorParameters = function () { return [
        { type: _service_linepairservice_service__WEBPACK_IMPORTED_MODULE_3__["LinepairserviceService"] },
        { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _app_core_shared_service_postservice_service__WEBPACK_IMPORTED_MODULE_5__["PostFileService"] }
    ]; };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __importDefault(__webpack_require__(/*! raw-loader!./form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/linepair/form/form.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./form.component.css */ "./src/app/linepair/form/form.component.css")).default]
        }),
        __metadata("design:paramtypes", [_service_linepairservice_service__WEBPACK_IMPORTED_MODULE_3__["LinepairserviceService"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _app_core_shared_service_postservice_service__WEBPACK_IMPORTED_MODULE_5__["PostFileService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/linepair/linepair.module.ts":
/*!*********************************************!*\
  !*** ./src/app/linepair/linepair.module.ts ***!
  \*********************************************/
/*! exports provided: LinepairModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinepairModule", function() { return LinepairModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list/list.component */ "./src/app/linepair/list/list.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form/form.component */ "./src/app/linepair/form/form.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_core_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../app/core/shared/shared.module */ "./src/app/core/shared/shared.module.ts");
/* harmony import */ var ngx_file_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-file-drop */ "./node_modules/ngx-file-drop/fesm5/ngx-file-drop.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










var LinepairModule = /** @class */ (function () {
    function LinepairModule() {
    }
    LinepairModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _app_core_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                ngx_file_drop__WEBPACK_IMPORTED_MODULE_9__["NgxFileDropModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: 'linepairlist', component: _list_list_component__WEBPACK_IMPORTED_MODULE_2__["ListComponent"]
                    },
                    {
                        path: 'linepair', component: _form_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"]
                    }
                ])
            ]
        })
    ], LinepairModule);
    return LinepairModule;
}());



/***/ }),

/***/ "./src/app/linepair/list/list.component.css":
/*!**************************************************!*\
  !*** ./src/app/linepair/list/list.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpbmVwYWlyL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/linepair/list/list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/linepair/list/list.component.ts ***!
  \*************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var ListComponent = /** @class */ (function () {
    function ListComponent() {
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/linepair/list/list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./list.component.css */ "./src/app/linepair/list/list.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/linepair/model/user.ts":
/*!****************************************!*\
  !*** ./src/app/linepair/model/user.ts ***!
  \****************************************/
/*! exports provided: LinePairUser, LinePairPayment, LinePairArrange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinePairUser", function() { return LinePairUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinePairPayment", function() { return LinePairPayment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinePairArrange", function() { return LinePairArrange; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var LinePairUser = /** @class */ (function () {
    function LinePairUser() {
    }
    return LinePairUser;
}());

var LinePairPayment = /** @class */ (function () {
    function LinePairPayment() {
    }
    return LinePairPayment;
}());

var LinePairArrange = /** @class */ (function () {
    function LinePairArrange() {
    }
    return LinePairArrange;
}());



/***/ }),

/***/ "./src/app/linepair/service/linepairservice.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/linepair/service/linepairservice.service.ts ***!
  \*************************************************************/
/*! exports provided: LinepairserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinepairserviceService", function() { return LinepairserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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



var LinepairserviceService = /** @class */ (function () {
    function LinepairserviceService(http, router) {
        this.http = http;
        this.router = router;
        this.site = 'https://leecloud.azurewebsites.net/'; // URL to web api
        this.url = 'api/linepairapi/';
    }
    LinepairserviceService.prototype.getUserList = function () {
        var url = this.site + this.url;
        return this.http.get(url);
    };
    LinepairserviceService.prototype.getEntityById = function (id) {
        var url = this.site + this.url + '/' + id;
        return this.http.get(url);
    };
    LinepairserviceService.prototype.postEntity = function (entity) {
        var url = this.site + this.url;
        return this.http.post(url, entity);
    };
    LinepairserviceService.prototype.deleteEntity = function (id) {
        var url = this.site + this.url + '/' + id;
        return this.http.delete(url);
    };
    LinepairserviceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LinepairserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LinepairserviceService);
    return LinepairserviceService;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










































var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_20__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_23__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_24__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_25__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_28__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_29__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_30__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_32__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_33__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_34__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_36__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_37__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_38__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_39__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_40__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_41__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */


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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
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