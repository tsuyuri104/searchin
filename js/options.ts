window.onload = function () {

    let btnSave: HTMLButtonElement = <HTMLButtonElement>document.getElementById('btnSave');
    btnSave.addEventListener(Const.Event.CLICK, event => {
        SaveStrage.Execute();
    });

    ShowStrageData.Execute();
}

module SaveStrage {
    export function Execute() {
        Save(1);
        Save(2);
    }

    function Save(no: number): void {

        const strNo = no.toString();
        let txtUrl: HTMLInputElement = <HTMLInputElement>document.getElementById('txtEngineUrl' + strNo);
        let txtKey: HTMLInputElement = <HTMLInputElement>document.getElementById('txtEngineKey' + strNo);

        let value: ISearchInfo = { Url: txtUrl.value, Prm: txtKey.value };

        LocalStorageController.SetLocalStrage(no, value);
    }
}

module ShowStrageData {
    export function Execute() {
        Show(1);
        Show(2);
    }

    function Show(no: number): void {

        const strNo = no.toString();
        let txtUrl: HTMLInputElement = <HTMLInputElement>document.getElementById('txtEngineUrl' + strNo);
        let txtKey: HTMLInputElement = <HTMLInputElement>document.getElementById('txtEngineKey' + strNo);

        LocalStorageController.GetLocalStrage(no, function (item) {
            const info: ISearchInfo = <ISearchInfo>item[Const.LocalStrageKey.KEY + no.toString()];

            if (info == undefined) {
                return;
            }

            txtUrl.value = info.Url;
            txtKey.value = info.Prm;
        })

    }
}