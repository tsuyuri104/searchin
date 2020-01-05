window.onload = function () {
    const url: string = location.href;
    const paramString: string = (location.search).replace('?', '');

    if (url.indexOf(Const.Url.GOOGLE) > -1) {
        Search.Execute(paramString);
    }
}

module Search {

    export function Execute(paramString: string): void {

        //パラメータから検索の値を取得する
        const searchValue: string = GetSearchParam(paramString);

        let elm: HTMLDivElement = <HTMLDivElement>document.getElementById(Const.GoogleElm.ID);

        for (let i: number = 0; i < 2; i++) {

            const no = i + 1;

            LocalStorageController.GetLocalStrage(no, function (item) {
                const info: ISearchInfo = <ISearchInfo>item[Const.LocalStrageKey.KEY + no.toString()];

                if (info.Url == '') {
                    return;
                }

                const url: string = info.Url + '?' + info.Prm + '=' + searchValue;
                let ifm: HTMLIFrameElement = <HTMLIFrameElement>document.createElement(Const.Element.IFRAME);
                ifm.src = url;
                elm.appendChild(ifm);
            });
        }

    }

    function GetSearchParam(paramString: string): string {

        const params: string[] = paramString.split('&');
        let ret: string = '';

        params.forEach(function (param) {
            const strKeyValue: string[] = param.split('=');
            if (strKeyValue[0] == Const.SearchParamKey.GOOGLE) {
                ret = decodeURIComponent(strKeyValue[1]);
            }
        });

        return ret;
    }
}