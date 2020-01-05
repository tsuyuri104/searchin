"use strict";
window.onload = function () {
    const url = location.href;
    const paramString = (location.search).replace('?', '');
    if (url.indexOf(Const.Url.GOOGLE) > -1) {
        Search.Execute(paramString);
    }
};
var Search;
(function (Search) {
    function Execute(paramString) {
        const searchValue = GetSearchParam(paramString);
        let elm = document.getElementById(Const.GoogleElm.ID);
        for (let i = 0; i < 2; i++) {
            const no = i + 1;
            LocalStorageController.GetLocalStrage(no, function (item) {
                const info = item[Const.LocalStrageKey.KEY + no.toString()];
                if (info.Url == '') {
                    return;
                }
                const url = info.Url + '?' + info.Prm + '=' + searchValue;
                let ifm = document.createElement(Const.Element.IFRAME);
                ifm.src = url;
                elm.appendChild(ifm);
            });
        }
    }
    Search.Execute = Execute;
    function GetSearchParam(paramString) {
        const params = paramString.split('&');
        let ret = '';
        params.forEach(function (param) {
            const strKeyValue = param.split('=');
            if (strKeyValue[0] == Const.SearchParamKey.GOOGLE) {
                ret = decodeURIComponent(strKeyValue[1]);
            }
        });
        return ret;
    }
})(Search || (Search = {}));
