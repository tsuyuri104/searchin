"use strict";
window.onload = function () {
    let btnSave = document.getElementById('btnSave');
    btnSave.addEventListener(Const.Event.CLICK, event => {
        SaveStrage.Execute();
    });
    ShowStrageData.Execute();
};
var SaveStrage;
(function (SaveStrage) {
    function Execute() {
        Save(1);
        Save(2);
    }
    SaveStrage.Execute = Execute;
    function Save(no) {
        const strNo = no.toString();
        let txtUrl = document.getElementById('txtEngineUrl' + strNo);
        let txtKey = document.getElementById('txtEngineKey' + strNo);
        let value = { Url: txtUrl.value, Prm: txtKey.value };
        LocalStorageController.SetLocalStrage(no, value);
    }
})(SaveStrage || (SaveStrage = {}));
var ShowStrageData;
(function (ShowStrageData) {
    function Execute() {
        Show(1);
        Show(2);
    }
    ShowStrageData.Execute = Execute;
    function Show(no) {
        const strNo = no.toString();
        let txtUrl = document.getElementById('txtEngineUrl' + strNo);
        let txtKey = document.getElementById('txtEngineKey' + strNo);
        LocalStorageController.GetLocalStrage(no, function (item) {
            const info = item[Const.LocalStrageKey.KEY + no.toString()];
            if (info == undefined) {
                return;
            }
            txtUrl.value = info.Url;
            txtKey.value = info.Prm;
        });
    }
})(ShowStrageData || (ShowStrageData = {}));
