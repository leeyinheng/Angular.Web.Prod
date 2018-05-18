(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error('Cannot find module "' + req + '".');
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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = '';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'app-root',
            template: "\n  <div class=\"container\">\n  <span><img src='../assets/Photos/logo.jpg'/></span> \n  <h1 class=\"lead\"> {{title}}</h1>\n\n  <router-outlet></router-outlet>\n  </div> \n",
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
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var _Services_product_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Services/product.service */ "./src/app/Services/product.service.ts");
/* harmony import */ var _Services_shop_cart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Services/shop-cart.service */ "./src/app/Services/shop-cart.service.ts");
/* harmony import */ var _Services_emailservice__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Services/emailservice */ "./src/app/Services/emailservice.ts");
/* harmony import */ var _Services_list_email_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Services/list-email.service */ "./src/app/Services/list-email.service.ts");
/* harmony import */ var _Services_customerlog_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Services/customerlog.service */ "./src/app/Services/customerlog.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./products.component */ "./src/app/products.component.ts");
/* harmony import */ var _menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu.component */ "./src/app/menu.component.ts");
/* harmony import */ var _cart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cart.component */ "./src/app/cart.component.ts");
/* harmony import */ var _stoneweight_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./stoneweight.component */ "./src/app/stoneweight.component.ts");
/* harmony import */ var _customerlog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./customerlog.component */ "./src/app/customerlog.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _emailmodal_emailmodal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./emailmodal/emailmodal.component */ "./src/app/emailmodal/emailmodal.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
                ngx_pagination__WEBPACK_IMPORTED_MODULE_20__["NgxPaginationModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalModule"].forRoot(),
                //InMemoryWebApiModule.forRoot(InMemoryDataService),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    {
                        path: '',
                        redirectTo: '/stoneweight',
                        pathMatch: 'full'
                    },
                    {
                        path: 'products',
                        component: _products_component__WEBPACK_IMPORTED_MODULE_13__["ProductsComponent"]
                    },
                    {
                        path: 'cart',
                        component: _cart_component__WEBPACK_IMPORTED_MODULE_15__["CartComponent"]
                    },
                    {
                        path: 'stoneweight',
                        component: _stoneweight_component__WEBPACK_IMPORTED_MODULE_16__["StoneweightComponent"]
                    },
                    {
                        path: 'customerlog',
                        component: _customerlog_component__WEBPACK_IMPORTED_MODULE_17__["CustomerlogComponent"]
                    }
                ])
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _products_component__WEBPACK_IMPORTED_MODULE_13__["ProductsComponent"],
                _menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"],
                _cart_component__WEBPACK_IMPORTED_MODULE_15__["CartComponent"],
                _stoneweight_component__WEBPACK_IMPORTED_MODULE_16__["StoneweightComponent"],
                _customerlog_component__WEBPACK_IMPORTED_MODULE_17__["CustomerlogComponent"],
                _customerlog_component__WEBPACK_IMPORTED_MODULE_17__["ModalContentComponent"], _emailmodal_emailmodal_component__WEBPACK_IMPORTED_MODULE_19__["EmailmodalComponent"]
            ],
            entryComponents: [_customerlog_component__WEBPACK_IMPORTED_MODULE_17__["ModalContentComponent"], _emailmodal_emailmodal_component__WEBPACK_IMPORTED_MODULE_19__["EmailmodalComponent"]],
            providers: [
                _Services_product_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"],
                _Services_shop_cart_service__WEBPACK_IMPORTED_MODULE_8__["ShopCartService"],
                _Services_emailservice__WEBPACK_IMPORTED_MODULE_9__["EmailService"],
                _Services_list_email_service__WEBPACK_IMPORTED_MODULE_10__["ListEmailService"],
                _Services_customerlog_service__WEBPACK_IMPORTED_MODULE_11__["CustomerlogService"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_6__["BsModalService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_18__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart.component.html":
/*!*************************************!*\
  !*** ./src/app/cart.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/products\" routerLinkActive=\"active\"><img src=\"app/Services/Model/Photos/product.jpg\" alt=\"product Icon\" style=\"width:50px;height:50px;\">返回產品線</a>\r\n<p>\r\n \r\n<h3>數量: {{count}}  總價: {{totalamount}} 運費: {{shipmentfee}}</h3>\r\n \r\n \r\n  <div class='table-responsive'>\r\n            <table class='table table-dark'>\r\n                <thead>\r\n                    <tr>\r\n                        <th>產品</th>\r\n                        <th>數量</th>\r\n                        <th>價格</th>\r\n                        <th></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor='let product of sumuplist'>\r\n                        <td>{{ product.Name}}<img [src]='product.Photo'></td>\r\n                        <td>{{ product.Volume}}</td>\r\n                        <td>{{ product.SellPrice }}</td>  \r\n                        <td><button class=\"btn btn-info\" (click)=\"add(product)\">增加</button>   \r\n                         <button class=\"btn btn-warning\" (click)=\"remove(product)\">減少</button></td>     \r\n                    </tr>\r\n                    <tr *ngIf=\"shipmentfee > 0 && sumuplist.length\">\r\n                        <td>運費</td>\r\n                        <td></td>\r\n                        <td>{{ shipmentfee }}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n   </div>\r\n\r\n\r\n     <div class='panel'  *ngIf='sumuplist && sumuplist.length'>\r\n        <div class=\"form-group\">\r\n             <div class=\"form-group\">\r\n                <label>姓名:</label>\r\n                <input type='text' [(ngModel)]='Name' />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>地址:</label>\r\n                <input type='text' [(ngModel)]='Address' size=\"100\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>電話:</label>\r\n                <input type='text' [(ngModel)]='Phone' />\r\n            </div>\r\n             <div class=\"form-group\">\r\n                <label>Email:</label>\r\n                <input type='text' [(ngModel)]='Email' size=\"80\"/>\r\n            </div>\r\n             <div class=\"form-group\">\r\n                <label>備註:</label>\r\n                <input type='text' [(ngModel)]='Note' size=\"80\"/>\r\n            </div>\r\n             <h3>數量: {{count}}  總價: {{totalamount}} 運費: {{shipmentfee}}</h3>\r\n             \r\n                 <h5>付款方式(滿兩千免運費)</h5>\r\n                 <input type=\"radio\" [(ngModel)]=\"paymenttype\"  name=\"paymenttype\" value=\"貨到付款\"/>貨到付款 <br>\r\n                 <input type=\"radio\" [(ngModel)]=\"paymenttype\"  name=\"paymenttype\" value=\"信用卡\"/>信用卡(專員會與您聯絡信用卡付費方式) \r\n            \r\n             <p>\r\n             <hr>\r\n             <button class=\"btn btn-primary\" (click)=\"submitorder()\">確認訂購</button>\r\n         </div>\r\n\r\n         \r\n     </div>\r\n\r\n    \r\n"

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
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart.component.html"),
        }),
        __metadata("design:paramtypes", [_Services_shop_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShopCartService"],
            _Services_emailservice__WEBPACK_IMPORTED_MODULE_2__["EmailService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/customerlog.component.css":
/*!*******************************************!*\
  !*** ./src/app/customerlog.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n    align-content: left;\r\n}\r\n\r\ntable {\r\n    width: 200;\r\n}\r\n\r\nthead{\r\n    color: #337AB7; \r\n    align-content: center;\r\n    \r\n}\r\n\r\nrow td{\r\n    align-content: left;\r\n    text-align: left;\r\n}\r\n\r\n.loader {\r\n  border: 16px solid #f3f3f3;\r\n  border-radius: 50%;\r\n  border-top: 16px solid #3498db;\r\n  width: 120px;\r\n  height: 120px;\r\n  -webkit-animation: spin 2s linear infinite; /* Safari */\r\n  animation: spin 2s linear infinite;\r\n}\r\n\r\n/* Safari */\r\n\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n\r\n@keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\n "

/***/ }),

/***/ "./src/app/customerlog.component.html":
/*!********************************************!*\
  !*** ./src/app/customerlog.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"row\">\r\n    <label>搜尋:</label>\r\n    <input type=\"string\"\r\n    [(ngModel)]='Search'\r\n    style=\"width: 6em;\"\r\n    /> \r\n</div>\r\n\r\n<div class=\"loader\" id=\"loader\"></div>\r\n\r\n<table class=\"table table-bordered table-striped\">\r\n    <tr>\r\n        <th>\r\n            顧客姓名\r\n        </th>\r\n        <th>\r\n            電話\r\n        </th>\r\n        <th>\r\n            Email\r\n        </th>\r\n        <th>\r\n            通話紀錄\r\n        </th>\r\n        <th>\r\n            備註 (後續追蹤)\r\n        </th>\r\n        <th>\r\n            時間\r\n        </th>\r\n    </tr>\r\n    \r\n        <tr>\r\n            <td>\r\n                <input type=\"string\"\r\n                [(ngModel)]='Name'\r\n                style=\"width: 6em;\"\r\n                /> \r\n            </td>\r\n            <td>\r\n                <input type=\"string\"\r\n                [(ngModel)]='PhoneNumber'\r\n                style=\"width: 6em;\"\r\n                /> \r\n            </td>\r\n            <td>\r\n                <input type=\"string\"\r\n                [(ngModel)]='Email'  \r\n                /> \r\n            </td>\r\n            <td>\r\n                <textarea [(ngModel)]='Note' class=\"form-control\" >\r\n\r\n                </textarea>\r\n            </td>\r\n            <td  class=\"warning\">\r\n                <textarea [(ngModel)]='Comment' class=\"form-control\">\r\n\r\n                </textarea>\r\n            </td>\r\n            <td>\r\n                \r\n            </td>\r\n            <td>\r\n                <button class=\"btn btn-primary\" (click) = 'addlog()'>\r\n                    新增\r\n                 </button>\r\n                \r\n            </td>\r\n        </tr>\r\n\r\n        <tbody> \r\n            <tr *ngFor = 'let item of logList | paginate: { itemsPerPage: 10, currentPage: p} '>\r\n                \r\n                <td>{{ item.Name}}</td>\r\n                <td>{{ item.PhoneNumber }}</td>\r\n                <td>{{ item.Email}}\r\n                    <button *ngIf='item.Email' type=\"button\" class=\"btn btn-success\" (click)=\"openEmailModal(item)\">Email</button>\r\n                </td>\r\n                <td>{{ item.Note}}</td>\r\n                <td class=\"warning\">{{ item.Comment}}</td>\r\n                <td>{{ item.RecordTime}}</td>\r\n                <td>\r\n                        <button class=\"btn btn-danger\" (click) = 'DeleteLog(item.RowKey, item.Name)' >\r\n                                刪除\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-info\" (click)=\"openModal(item)\">編輯</button>\r\n                      \r\n                </td>\r\n\r\n            </tr>\r\n        </tbody>\r\n        <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n   \r\n</table>\r\n\r\n{{modalMessage}}"

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
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var _emailmodal_emailmodal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emailmodal/emailmodal.component */ "./src/app/emailmodal/emailmodal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
        this.emailModalRef = this.modalService.show(_emailmodal_emailmodal_component__WEBPACK_IMPORTED_MODULE_5__["EmailmodalComponent"], { initialState: initialState });
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
    CustomerlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            template: __webpack_require__(/*! ./customerlog.component.html */ "./src/app/customerlog.component.html"),
            styles: [__webpack_require__(/*! ./customerlog.component.css */ "./src/app/customerlog.component.css")]
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
    ModalContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'modal-content',
            template: "\n      <div class=\"modal-header table-hover\">\n        <h4 class=\"modal-title pull-left\">{{log.Name}}</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n      <table class=\"table table-bordered\">\n      <tr>\n          <td>\n              \u9867\u5BA2\u59D3\u540D\n          </td>\n          <td>\n          <input type=\"string\"\n          [(ngModel)]='Name'\n           />  \n          </td>\n      </tr>\n\n      <tr>\n          <td>\n              \u96FB\u8A71\n          </td>\n          <td>\n          <input type=\"string\"\n          [(ngModel)]='PhoneNumber'\n           />  \n          </td>\n      </tr>\n\n      <tr>\n      <td>\n         Email\n      </td>\n      <td>\n      <input type=\"string\"\n      [(ngModel)]='Email'\n       />  \n      </td>\n      </tr>\n\n      <tr>\n      <td>\n          \u901A\u8A0A\u7D00\u9304\n      </td>\n      <td>\n         <textarea [(ngModel)]='Note' class=\"form-control\" >\n\n         </textarea>\n      </td>\n      </tr>\n      <tr  class=\"warning\" >\n      <td>\n          \u5099\u8A3B(\u5F8C\u7E8C\u9032\u5C55)\n      </td>\n      <td>\n         <textarea [(ngModel)]='Comment' class=\"form-control\"  >\n\n         </textarea>\n      </td>\n      </tr>\n      <tr >\n         \n              <td>\n                  <button class=\"btn btn-primary\" (click) = 'savelog()'>\n                     \u5132\u5B58\n                   </button>\n                  \n              </td>\n\n        </tr>\n    </table> \n\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">\u53D6\u6D88</button>\n      </div>\n    "
        }),
        __metadata("design:paramtypes", [ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_4__["BsModalRef"], _Services_customerlog_service__WEBPACK_IMPORTED_MODULE_2__["CustomerlogService"]])
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/emailmodal/emailmodal.component.html":
/*!******************************************************!*\
  !*** ./src/app/emailmodal/emailmodal.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header table-hover\">\n  <h4 class=\"modal-title pull-left\">{{Name}}</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n<table class=\"table table-bordered\">\n<tr>\n  <td>\n    Email \n  </td>\n  <td>\n    {{Email}}\n  </td>\n</tr>\n\n<tr>\n<td>\n   標題\n</td>\n<td>\n<input type=\"string\"\n[(ngModel)]='Subject'\n />  \n</td>\n</tr>\n\n<tr class=\"info\">\n<td>\n    訊息\n</td>\n<td>\n   <textarea [(ngModel)]='Content' class=\"form-control\" rows=\"5\">\n\n   </textarea>\n</td>\n</tr>\n \n<tr >\n   \n        <td>\n            <button class=\"btn btn-primary\" (click) = 'EmailOut()'>\n               寄出\n             </button>\n            \n        </td>\n\n  </tr>\n</table> \n\n\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">取消</button>\n</div>\n"

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
/* harmony import */ var ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal/bs-modal-ref.service */ "./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
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
    EmailmodalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emailmodal',
            template: __webpack_require__(/*! ./emailmodal.component.html */ "./src/app/emailmodal/emailmodal.component.html"),
            styles: [__webpack_require__(/*! ./emailmodal.component.css */ "./src/app/emailmodal/emailmodal.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_emailservice__WEBPACK_IMPORTED_MODULE_2__["EmailService"], ngx_bootstrap_modal_bs_modal_ref_service__WEBPACK_IMPORTED_MODULE_1__["BsModalRef"], _Services_customerlog_service__WEBPACK_IMPORTED_MODULE_4__["CustomerlogService"]])
    ], EmailmodalComponent);
    return EmailmodalComponent;
}());



/***/ }),

/***/ "./src/app/menu.component.html":
/*!*************************************!*\
  !*** ./src/app/menu.component.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  menu {{count}}\r\n  <button class=\"delete\"\r\n(click)=\"countShopList()\">carriot</button>\r\n\r\n</nav>\r\n"

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
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu.component.html"),
        }),
        __metadata("design:paramtypes", [_Services_shop_cart_service__WEBPACK_IMPORTED_MODULE_1__["ShopCartService"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/products.component.html":
/*!*****************************************!*\
  !*** ./src/app/products.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/cart\" routerLinkActive=\"active\"><img src=\"/assets/Photos/cart.jpg\" alt=\"cart Icon\" style=\"width:50px;height:50px;\">  購物車(結帳)</a>\r\n<p>\r\n<span class=\"badge\">數量: {{count}} </span>\r\n<span class=\"badge\">總價: {{totalprice}} </span>\r\n<div class=\"grid grid-pad\">\r\n  <div *ngFor=\"let product of products\" class=\"col-1-4\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n      <span *ngIf=\"product.Promotion\" > <img   src=\"app/Services/Model/Photos/onsale.jpg\" width=\"100\" height=\"100\"> </span> \r\n      <img [src]='product.Photo'> <b> {{product.Name}}</b>\r\n      <h4 class=\"label label-primary\"> 價格: NT {{product.Price}} </h4> &nbsp;   \r\n      <button class=\"btn btn-info\" (click)=\"add(product)\">加入購物車</button> \r\n      </div>\r\n      <div class=\"panel-body\">{{product.Description}}</div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            selector: 'products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products.component.html"),
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div{\r\n    align-content: left;\r\n}\r\n\r\ntable {\r\n    width: 200;\r\n}\r\n\r\nthead{\r\n    color: #337AB7; \r\n    align-content: center;\r\n    \r\n}\r\n\r\nrow td{\r\n    align-content: left;\r\n    text-align: left;\r\n}"

/***/ }),

/***/ "./src/app/stoneweight.component.html":
/*!********************************************!*\
  !*** ./src/app/stoneweight.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-striped\">\r\n    <tr>\r\n        <th>\r\n            編號\r\n        </th>\r\n        <th>\r\n            空氣重量\r\n        </th>\r\n        <th>\r\n            水中重量\r\n        </th>\r\n        <th>\r\n            物體比重\r\n        </th>\r\n    </tr>\r\n    \r\n        <tr>\r\n            <td>\r\n    \r\n            </td>\r\n            <td>\r\n                <input type=\"number\"\r\n                [(ngModel)]='airweight'\r\n                style=\"width: 6em;\"\r\n                /> \r\n            </td>\r\n            <td>\r\n                <input type=\"number\"\r\n                [(ngModel)]='waterweight'  \r\n                style=\"width: 6em;\"\r\n                /> \r\n            </td>\r\n            <td>\r\n                {{caculateweightrate()}}\r\n            </td>\r\n            <td>\r\n                <button class=\"btn btn-primary\" (click) = 'addintolist()'>\r\n                    新增\r\n                 </button>\r\n            </td>\r\n        </tr>\r\n\r\n    <tbody> \r\n        <tr *ngFor = 'let item of weightList'>\r\n            \r\n            <td>{{ item.id}}</td>\r\n            <td>{{ item.airweight }}</td>\r\n            <td>{{ item.waterweight}}</td>\r\n            <td>{{ item.ratioweight}}</td>\r\n            \r\n        </tr>\r\n    </tbody>\r\n   \r\n\r\n\r\n</table>\r\n\r\n<table *ngIf=\"weightList?.length > 0\">\r\n    <tr>\r\n        <td>\r\n            Email: \r\n        </td>\r\n        <td>\r\n            <input type=\"string\"\r\n            [(ngModel)]='emailaddress'  \r\n            style=\"width: 15em;\"\r\n            /> \r\n        </td>\r\n        <td>\r\n            <span></span>\r\n        </td>\r\n        <td>\r\n            <button class=\"btn btn-info\" (click) = 'emailout()'>\r\n                寄出\r\n             </button>\r\n        </td>\r\n    </tr>\r\n</table>\r\n\r\n\r\n\r\n\r\n"

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
    StoneweightComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            moduleId: module.i,
            template: __webpack_require__(/*! ./stoneweight.component.html */ "./src/app/stoneweight.component.html"),
            styles: [__webpack_require__(/*! ./stoneweight.component.css */ "./src/app/stoneweight.component.css")]
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

module.exports = __webpack_require__(/*! C:\Project\Angular.Web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map