"use strict";
var Const;
(function (Const) {
    var LocalStrageKey;
    (function (LocalStrageKey) {
        LocalStrageKey.KEY = 'SEARCHIN_INFO_';
    })(LocalStrageKey = Const.LocalStrageKey || (Const.LocalStrageKey = {}));
})(Const || (Const = {}));
(function (Const) {
    var Url;
    (function (Url) {
        Url.GOOGLE = 'https://www.google.com/search';
    })(Url = Const.Url || (Const.Url = {}));
})(Const || (Const = {}));
(function (Const) {
    var SearchParamKey;
    (function (SearchParamKey) {
        SearchParamKey.GOOGLE = 'q';
    })(SearchParamKey = Const.SearchParamKey || (Const.SearchParamKey = {}));
})(Const || (Const = {}));
(function (Const) {
    var Event;
    (function (Event) {
        Event.CLICK = 'click';
    })(Event = Const.Event || (Const.Event = {}));
})(Const || (Const = {}));
(function (Const) {
    var Element;
    (function (Element) {
        Element.IFRAME = 'iframe';
    })(Element = Const.Element || (Const.Element = {}));
})(Const || (Const = {}));
(function (Const) {
    var GoogleElm;
    (function (GoogleElm) {
        GoogleElm.ID = 'ucs';
    })(GoogleElm = Const.GoogleElm || (Const.GoogleElm = {}));
})(Const || (Const = {}));
var LocalStorageController;
(function (LocalStorageController) {
    function SetLocalStrage(keyNo, value) {
        const storageValue = {
            [Const.LocalStrageKey.KEY + keyNo.toString()]: value
        };
        chrome.storage.sync.set(storageValue);
    }
    LocalStorageController.SetLocalStrage = SetLocalStrage;
    function GetLocalStrage(keyNo, callback) {
        chrome.storage.sync.get([Const.LocalStrageKey.KEY + keyNo.toString()], callback);
    }
    LocalStorageController.GetLocalStrage = GetLocalStrage;
})(LocalStorageController || (LocalStorageController = {}));
