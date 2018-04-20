webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Model/EmailMessage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailMessage; });
var EmailMessage = /** @class */ (function () {
    function EmailMessage() {
    }
    return EmailMessage;
}());



/***/ }),

/***/ "./src/app/Services/customerlog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerlogService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
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
    CustomerlogService.prototype.DeleteCustomerLog = function (rowkey) {
        return this.http.delete(this.url + rowkey);
    };
    CustomerlogService.prototype.UpdateCustomerLog = function (c) {
        return this.http.put(this.url + '5', c, httpOptions);
    };
    CustomerlogService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CustomerlogService);
    return CustomerlogService;
}());



/***/ }),

/***/ "./src/app/Services/emailservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json'
    }),
    params: null,
    withCredentials: false
};
var EmailService = /** @class */ (function () {
    function EmailService(http, httpclient) {
        this.http = http;
        this.httpclient = httpclient;
    }
    EmailService.prototype.sendemail = function (to, subject, message) {
        var web = 'http://leecloud.azurewebsites.net/api/';
        //var web = 'http://localhost:49740/api/';
        var from = "bio.china@msa.hinet.net";
        var webkey = 'adsfasd3w243l2q51230-48-gfd321qm4mndvdcuoisadjq2w3;4;lr8';
        var url = "Email?from=" + from + "&to=" + to + "&subject=" + encodeURIComponent(subject) + "&message=" + encodeURIComponent(message) + "&webkey=" + webkey;
        var urlstring = web + url;
        //let body = JSON.stringify({ "from":from,"to":to,"subject":encodeURIComponent(subject),"message":encodeURIComponent(message),"webkey":webkey });
        var urlSearchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* URLSearchParams */]();
        urlSearchParams.append('from', from);
        urlSearchParams.append('to', to);
        urlSearchParams.append('subject', encodeURIComponent(subject));
        urlSearchParams.append('message', encodeURIComponent(message));
        urlSearchParams.append('webkey', webkey);
        var body2 = urlSearchParams.toString();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'text/plain' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(urlstring, options)
            .map(this.extractData)
            .catch(this.handleError);
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
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/Services/list-email.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListEmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_emailservice__ = __webpack_require__("./src/app/Services/emailservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        this.emailservice.sendemail(this.Email, this.Subject, htmlstring)
            .subscribe(function (res) { return console.log(res); }, function (error) { return console.log(error); });
        alert(" 比重結果已送出至 " + this.Email + " 請繼續使用或更新重來");
    };
    ListEmailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_emailservice__["a" /* EmailService */]])
    ], ListEmailService);
    return ListEmailService;
}());



/***/ }),

/***/ "./src/app/Services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/Services/shop-cart.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopCartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], ShopCartService);
    return ShopCartService;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'app-root',
            template: "\n  <div class=\"container\">\n  <span><img src='../assets/Photos/logo.jpg'/></span> \n  <h1 class=\"lead\"> {{title}}</h1>\n\n  <router-outlet></router-outlet>\n  </div> \n",
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Services_product_service__ = __webpack_require__("./src/app/Services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Services_shop_cart_service__ = __webpack_require__("./src/app/Services/shop-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Services_emailservice__ = __webpack_require__("./src/app/Services/emailservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Services_list_email_service__ = __webpack_require__("./src/app/Services/list-email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Services_customerlog_service__ = __webpack_require__("./src/app/Services/customerlog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__products_component__ = __webpack_require__("./src/app/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__menu_component__ = __webpack_require__("./src/app/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__cart_component__ = __webpack_require__("./src/app/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__stoneweight_component__ = __webpack_require__("./src/app/stoneweight.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__customerlog_component__ = __webpack_require__("./src/app/customerlog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__emailmodal_emailmodal_component__ = __webpack_require__("./src/app/emailmodal/emailmodal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["b" /* ModalModule */].forRoot(),
                //InMemoryWebApiModule.forRoot(InMemoryDataService),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot([
                    {
                        path: '',
                        redirectTo: '/stoneweight',
                        pathMatch: 'full'
                    },
                    {
                        path: 'products',
                        component: __WEBPACK_IMPORTED_MODULE_13__products_component__["a" /* ProductsComponent */]
                    },
                    {
                        path: 'cart',
                        component: __WEBPACK_IMPORTED_MODULE_15__cart_component__["a" /* CartComponent */]
                    },
                    {
                        path: 'stoneweight',
                        component: __WEBPACK_IMPORTED_MODULE_16__stoneweight_component__["a" /* StoneweightComponent */]
                    },
                    {
                        path: 'customerlog',
                        component: __WEBPACK_IMPORTED_MODULE_17__customerlog_component__["a" /* CustomerlogComponent */]
                    }
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_13__products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_15__cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_16__stoneweight_component__["a" /* StoneweightComponent */],
                __WEBPACK_IMPORTED_MODULE_17__customerlog_component__["a" /* CustomerlogComponent */],
                __WEBPACK_IMPORTED_MODULE_17__customerlog_component__["b" /* ModalContentComponent */], __WEBPACK_IMPORTED_MODULE_19__emailmodal_emailmodal_component__["a" /* EmailmodalComponent */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_17__customerlog_component__["b" /* ModalContentComponent */], __WEBPACK_IMPORTED_MODULE_19__emailmodal_emailmodal_component__["a" /* EmailmodalComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__Services_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_8__Services_shop_cart_service__["a" /* ShopCartService */],
                __WEBPACK_IMPORTED_MODULE_9__Services_emailservice__["a" /* EmailService */],
                __WEBPACK_IMPORTED_MODULE_10__Services_list_email_service__["a" /* ListEmailService */],
                __WEBPACK_IMPORTED_MODULE_11__Services_customerlog_service__["a" /* CustomerlogService */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap__["a" /* BsModalService */],
                { provide: __WEBPACK_IMPORTED_MODULE_18__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_18__angular_common__["d" /* HashLocationStrategy */] }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/products\" routerLinkActive=\"active\"><img src=\"app/Services/Model/Photos/product.jpg\" alt=\"product Icon\" style=\"width:50px;height:50px;\">返回產品線</a>\r\n<p>\r\n \r\n<h3>數量: {{count}}  總價: {{totalamount}} 運費: {{shipmentfee}}</h3>\r\n \r\n \r\n  <div class='table-responsive'>\r\n            <table class='table table-dark'>\r\n                <thead>\r\n                    <tr>\r\n                        <th>產品</th>\r\n                        <th>數量</th>\r\n                        <th>價格</th>\r\n                        <th></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr *ngFor='let product of sumuplist'>\r\n                        <td>{{ product.Name}}<img [src]='product.Photo'></td>\r\n                        <td>{{ product.Volume}}</td>\r\n                        <td>{{ product.SellPrice }}</td>  \r\n                        <td><button class=\"btn btn-info\" (click)=\"add(product)\">增加</button>   \r\n                         <button class=\"btn btn-warning\" (click)=\"remove(product)\">減少</button></td>     \r\n                    </tr>\r\n                    <tr *ngIf=\"shipmentfee > 0 && sumuplist.length\">\r\n                        <td>運費</td>\r\n                        <td></td>\r\n                        <td>{{ shipmentfee }}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n   </div>\r\n\r\n\r\n     <div class='panel'  *ngIf='sumuplist && sumuplist.length'>\r\n        <div class=\"form-group\">\r\n             <div class=\"form-group\">\r\n                <label>姓名:</label>\r\n                <input type='text' [(ngModel)]='Name' />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>地址:</label>\r\n                <input type='text' [(ngModel)]='Address' size=\"100\" />\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <label>電話:</label>\r\n                <input type='text' [(ngModel)]='Phone' />\r\n            </div>\r\n             <div class=\"form-group\">\r\n                <label>Email:</label>\r\n                <input type='text' [(ngModel)]='Email' size=\"80\"/>\r\n            </div>\r\n             <div class=\"form-group\">\r\n                <label>備註:</label>\r\n                <input type='text' [(ngModel)]='Note' size=\"80\"/>\r\n            </div>\r\n             <h3>數量: {{count}}  總價: {{totalamount}} 運費: {{shipmentfee}}</h3>\r\n             \r\n                 <h5>付款方式(滿兩千免運費)</h5>\r\n                 <input type=\"radio\" [(ngModel)]=\"paymenttype\"  name=\"paymenttype\" value=\"貨到付款\"/>貨到付款 <br>\r\n                 <input type=\"radio\" [(ngModel)]=\"paymenttype\"  name=\"paymenttype\" value=\"信用卡\"/>信用卡(專員會與您聯絡信用卡付費方式) \r\n            \r\n             <p>\r\n             <hr>\r\n             <button class=\"btn btn-primary\" (click)=\"submitorder()\">確認訂購</button>\r\n         </div>\r\n\r\n         \r\n     </div>\r\n\r\n    \r\n"

/***/ }),

/***/ "./src/app/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_shop_cart_service__ = __webpack_require__("./src/app/Services/shop-cart.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_emailservice__ = __webpack_require__("./src/app/Services/emailservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
            this.emailservice.sendemail(this.Email, subject, this.htmlstring)
                .subscribe(function (res) { return console.log(res); }, function (error) { return console.log(error); });
            alert("感謝您的訂購, 您的訂單編號: " + this.generateordernumber() + " 已送出, 我們專員會與您聯絡訂購事項");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'cart',
            template: __webpack_require__("./src/app/cart.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_shop_cart_service__["a" /* ShopCartService */],
            __WEBPACK_IMPORTED_MODULE_2__Services_emailservice__["a" /* EmailService */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/customerlog.component.css":
/***/ (function(module, exports) {

module.exports = "div{\r\n    -ms-flex-line-pack: left;\r\n        align-content: left;\r\n}\r\n\r\ntable {\r\n    width: 200;\r\n}\r\n\r\nthead{\r\n    color: #337AB7; \r\n    -ms-flex-line-pack: center; \r\n        align-content: center;\r\n    \r\n}\r\n\r\nrow td{\r\n    -ms-flex-line-pack: left;\r\n        align-content: left;\r\n    text-align: left;\r\n}"

/***/ }),

/***/ "./src/app/customerlog.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-striped\">\r\n    <tr>\r\n        <th>\r\n            顧客姓名\r\n        </th>\r\n        <th>\r\n            電話\r\n        </th>\r\n        <th>\r\n            Email\r\n        </th>\r\n        <th>\r\n            通話紀錄\r\n        </th>\r\n        <th>\r\n            備註 (後續追蹤)\r\n        </th>\r\n        <th>\r\n            時間\r\n        </th>\r\n    </tr>\r\n    \r\n        <tr>\r\n            <td>\r\n                <input type=\"string\"\r\n                [(ngModel)]='Name'\r\n                style=\"width: 6em;\"\r\n                /> \r\n            </td>\r\n            <td>\r\n                <input type=\"string\"\r\n                [(ngModel)]='PhoneNumber'\r\n                style=\"width: 6em;\"\r\n                /> \r\n            </td>\r\n            <td>\r\n                <input type=\"string\"\r\n                [(ngModel)]='Email'  \r\n                /> \r\n            </td>\r\n            <td>\r\n                <textarea [(ngModel)]='Note' class=\"form-control\" >\r\n\r\n                </textarea>\r\n            </td>\r\n            <td  class=\"warning\">\r\n                <textarea [(ngModel)]='Comment' class=\"form-control\" >\r\n\r\n                </textarea>\r\n            </td>\r\n            <td>\r\n                \r\n            </td>\r\n            <td>\r\n                <button class=\"btn btn-primary\" (click) = 'addlog()'>\r\n                    新增\r\n                 </button>\r\n                \r\n            </td>\r\n        </tr>\r\n\r\n        <tbody> \r\n            <tr *ngFor = 'let item of logList'>\r\n                \r\n                <td>{{ item.Name}}</td>\r\n                <td>{{ item.PhoneNumber }}</td>\r\n                <td>{{ item.Email}}\r\n                    <button *ngIf='item.Email' type=\"button\" class=\"btn btn-success\" (click)=\"openEmailModal(item)\">Email</button>\r\n                </td>\r\n                <td>{{ item.Note}}</td>\r\n                <td>{{ item.Comment}}</td>\r\n                <td>{{ item.RecordTime}}</td>\r\n                <td>\r\n                        <button class=\"btn btn-danger\" (click) = 'DeleteLog(item.RowKey, item.Name)' >\r\n                                刪除\r\n                        </button>\r\n                        <button type=\"button\" class=\"btn btn-info\" (click)=\"openModal(item)\">編輯</button>\r\n                      \r\n                </td>\r\n\r\n            </tr>\r\n        </tbody>\r\n   \r\n</table>\r\n\r\n "

/***/ }),

/***/ "./src/app/customerlog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomerlogComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ModalContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__customerlog__ = __webpack_require__("./src/app/customerlog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_customerlog_service__ = __webpack_require__("./src/app/Services/customerlog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__emailmodal_emailmodal_component__ = __webpack_require__("./src/app/emailmodal/emailmodal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CustomerlogComponent = /** @class */ (function () {
    function CustomerlogComponent(logservice, modalService) {
        this.logservice = logservice;
        this.modalService = modalService;
    }
    CustomerlogComponent.prototype.ngOnInit = function () {
        this.GetLogList();
    };
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
            Email: item.Email,
            Name: item.Name
        };
        this.emailModalRef = this.modalService.show(__WEBPACK_IMPORTED_MODULE_5__emailmodal_emailmodal_component__["a" /* EmailmodalComponent */], { initialState: initialState });
    };
    CustomerlogComponent.prototype.GetLogList = function () {
        var _this = this;
        this.logservice.GetAllCustomerLog().subscribe(function (list) {
            _this.logList = list;
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
            var newitem_1 = new __WEBPACK_IMPORTED_MODULE_1__customerlog__["a" /* customerlog */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            template: __webpack_require__("./src/app/customerlog.component.html"),
            styles: [__webpack_require__("./src/app/customerlog.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_customerlog_service__["a" /* CustomerlogService */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_modal__["a" /* BsModalService */]])
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'modal-content',
            template: "\n      <div class=\"modal-header table-hover\">\n        <h4 class=\"modal-title pull-left\">{{log.Name}}</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n      <table class=\"table table-bordered\">\n      <tr>\n          <td>\n              \u9867\u5BA2\u59D3\u540D\n          </td>\n          <td>\n          <input type=\"string\"\n          [(ngModel)]='Name'\n           />  \n          </td>\n      </tr>\n\n      <tr>\n          <td>\n              \u96FB\u8A71\n          </td>\n          <td>\n          <input type=\"string\"\n          [(ngModel)]='PhoneNumber'\n           />  \n          </td>\n      </tr>\n\n      <tr>\n      <td>\n         Email\n      </td>\n      <td>\n      <input type=\"string\"\n      [(ngModel)]='Email'\n       />  \n      </td>\n      </tr>\n\n      <tr>\n      <td>\n          \u901A\u8A0A\u7D00\u9304\n      </td>\n      <td>\n         <textarea [(ngModel)]='Note' class=\"form-control\" >\n\n         </textarea>\n      </td>\n      </tr>\n      <tr  class=\"warning\" >\n      <td>\n          \u5099\u8A3B(\u5F8C\u7E8C\u9032\u5C55)\n      </td>\n      <td>\n         <textarea [(ngModel)]='Comment' class=\"form-control\"  >\n\n         </textarea>\n      </td>\n      </tr>\n      <tr >\n         \n              <td>\n                  <button class=\"btn btn-primary\" (click) = 'savelog()'>\n                     \u5132\u5B58\n                   </button>\n                  \n              </td>\n\n        </tr>\n    </table> \n\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">\u53D6\u6D88</button>\n      </div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */], __WEBPACK_IMPORTED_MODULE_2__Services_customerlog_service__["a" /* CustomerlogService */]])
    ], ModalContentComponent);
    return ModalContentComponent;
}());



/***/ }),

/***/ "./src/app/customerlog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return customerlog; });
var customerlog = /** @class */ (function () {
    function customerlog() {
        this.RecordTime = Date.now().toString();
    }
    return customerlog;
}());



/***/ }),

/***/ "./src/app/emailmodal/emailmodal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/emailmodal/emailmodal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header table-hover\">\n  <h4 class=\"modal-title pull-left\">{{Name}}</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"bsModalRef.hide()\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n<table class=\"table table-bordered\">\n<tr>\n  <td>\n    Email \n  </td>\n  <td>\n    {{Email}}\n  </td>\n</tr>\n\n<tr>\n<td>\n   標題\n</td>\n<td>\n<input type=\"string\"\n[(ngModel)]='Subject'\n />  \n</td>\n</tr>\n\n<tr class=\"info\">\n<td>\n    訊息\n</td>\n<td>\n   <textarea [(ngModel)]='Content' class=\"form-control\" rows=\"5\">\n\n   </textarea>\n</td>\n</tr>\n \n<tr >\n   \n        <td>\n            <button class=\"btn btn-primary\" (click) = 'EmailOut()'>\n               寄出\n             </button>\n            \n        </td>\n\n  </tr>\n</table> \n\n\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-default\" (click)=\"bsModalRef.hide()\">取消</button>\n</div>\n"

/***/ }),

/***/ "./src/app/emailmodal/emailmodal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailmodalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_bs_modal_ref_service__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/bs-modal-ref.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_emailservice__ = __webpack_require__("./src/app/Services/emailservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_EmailMessage__ = __webpack_require__("./src/app/Model/EmailMessage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmailmodalComponent = /** @class */ (function () {
    function EmailmodalComponent(emailservice, bsModalRef) {
        this.emailservice = emailservice;
        this.bsModalRef = bsModalRef;
        this.emailfrom = 'bio.china@msa.hinet.net';
    }
    EmailmodalComponent.prototype.ngOnInit = function () {
    };
    EmailmodalComponent.prototype.EmailOut = function () {
        var _this = this;
        var newEmail = new __WEBPACK_IMPORTED_MODULE_3__Model_EmailMessage__["a" /* EmailMessage */]();
        newEmail.FromEmailAddress = this.emailfrom;
        newEmail.ToEmailAddress = this.Email;
        newEmail.Name = this.Name;
        newEmail.Subject = this.Subject;
        newEmail.Content = this.Content;
        this.emailservice.SendEmailMessage(newEmail).subscribe(function (res) {
            alert("郵件-" + _this.Subject + " 已送出");
            _this.bsModalRef.hide();
        }, function (error) {
            alert("郵件-" + _this.Subject + " 已送出.." + error);
            _this.bsModalRef.hide();
        });
    };
    EmailmodalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-emailmodal',
            template: __webpack_require__("./src/app/emailmodal/emailmodal.component.html"),
            styles: [__webpack_require__("./src/app/emailmodal/emailmodal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_emailservice__["a" /* EmailService */], __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal_bs_modal_ref_service__["a" /* BsModalRef */]])
    ], EmailmodalComponent);
    return EmailmodalComponent;
}());



/***/ }),

/***/ "./src/app/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  menu {{count}}\r\n  <button class=\"delete\"\r\n(click)=\"countShopList()\">carriot</button>\r\n\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_shop_cart_service__ = __webpack_require__("./src/app/Services/shop-cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'menu',
            template: __webpack_require__("./src/app/menu.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__Services_shop_cart_service__["a" /* ShopCartService */]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/products.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/cart\" routerLinkActive=\"active\"><img src=\"/assets/Photos/cart.jpg\" alt=\"cart Icon\" style=\"width:50px;height:50px;\">  購物車(結帳)</a>\r\n<p>\r\n<span class=\"badge\">數量: {{count}} </span>\r\n<span class=\"badge\">總價: {{totalprice}} </span>\r\n<div class=\"grid grid-pad\">\r\n  <div *ngFor=\"let product of products\" class=\"col-1-4\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-heading\">\r\n      <span *ngIf=\"product.Promotion\" > <img   src=\"app/Services/Model/Photos/onsale.jpg\" width=\"100\" height=\"100\"> </span> \r\n      <img [src]='product.Photo'> <b> {{product.Name}}</b>\r\n      <h4 class=\"label label-primary\"> 價格: NT {{product.Price}} </h4> &nbsp;   \r\n      <button class=\"btn btn-info\" (click)=\"add(product)\">加入購物車</button> \r\n      </div>\r\n      <div class=\"panel-body\">{{product.Description}}</div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_product_service__ = __webpack_require__("./src/app/Services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_shop_cart_service__ = __webpack_require__("./src/app/Services/shop-cart.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            selector: 'products',
            template: __webpack_require__("./src/app/products.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__Services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_3__Services_shop_cart_service__["a" /* ShopCartService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/stoneweight.component.css":
/***/ (function(module, exports) {

module.exports = "div{\r\n    -ms-flex-line-pack: left;\r\n        align-content: left;\r\n}\r\n\r\ntable {\r\n    width: 200;\r\n}\r\n\r\nthead{\r\n    color: #337AB7; \r\n    -ms-flex-line-pack: center; \r\n        align-content: center;\r\n    \r\n}\r\n\r\nrow td{\r\n    -ms-flex-line-pack: left;\r\n        align-content: left;\r\n    text-align: left;\r\n}"

/***/ }),

/***/ "./src/app/stoneweight.component.html":
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-bordered table-striped\">\r\n    <tr>\r\n        <th>\r\n            編號\r\n        </th>\r\n        <th>\r\n            空氣重量\r\n        </th>\r\n        <th>\r\n            水中重量\r\n        </th>\r\n        <th>\r\n            物體比重\r\n        </th>\r\n    </tr>\r\n    \r\n        <tr>\r\n            <td>\r\n    \r\n            </td>\r\n            <td>\r\n                <input type=\"number\"\r\n                [(ngModel)]='airweight'\r\n                style=\"width: 6em;\"\r\n                /> \r\n            </td>\r\n            <td>\r\n                <input type=\"number\"\r\n                [(ngModel)]='waterweight'  \r\n                style=\"width: 6em;\"\r\n                /> \r\n            </td>\r\n            <td>\r\n                {{caculateweightrate()}}\r\n            </td>\r\n            <td>\r\n                <button class=\"btn btn-primary\" (click) = 'addintolist()'>\r\n                    新增\r\n                 </button>\r\n            </td>\r\n        </tr>\r\n\r\n    <tbody> \r\n        <tr *ngFor = 'let item of weightList'>\r\n            \r\n            <td>{{ item.id}}</td>\r\n            <td>{{ item.airweight }}</td>\r\n            <td>{{ item.waterweight}}</td>\r\n            <td>{{ item.ratioweight}}</td>\r\n            \r\n        </tr>\r\n    </tbody>\r\n   \r\n\r\n\r\n</table>\r\n\r\n<table *ngIf=\"weightList?.length > 0\">\r\n    <tr>\r\n        <td>\r\n            Email: \r\n        </td>\r\n        <td>\r\n            <input type=\"string\"\r\n            [(ngModel)]='emailaddress'  \r\n            style=\"width: 15em;\"\r\n            /> \r\n        </td>\r\n        <td>\r\n            <span></span>\r\n        </td>\r\n        <td>\r\n            <button class=\"btn btn-info\" (click) = 'emailout()'>\r\n                寄出\r\n             </button>\r\n        </td>\r\n    </tr>\r\n</table>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/stoneweight.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoneweightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weight__ = __webpack_require__("./src/app/weight.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_list_email_service__ = __webpack_require__("./src/app/Services/list-email.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
            var newitem = new __WEBPACK_IMPORTED_MODULE_1__weight__["a" /* weight */](index, this.airweight, this.waterweight, this.ratioweight);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            template: __webpack_require__("./src/app/stoneweight.component.html"),
            styles: [__webpack_require__("./src/app/stoneweight.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__Services_list_email_service__["a" /* ListEmailService */]])
    ], StoneweightComponent);
    return StoneweightComponent;
}());



/***/ }),

/***/ "./src/app/weight.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return weight; });
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map