module Const {

}
module Const.LocalStrageKey {
    export const KEY = 'SEARCHIN_INFO_';
}

module Const.Url {
    export const GOOGLE: string = 'https://www.google.com/search';
}

module Const.SearchParamKey {
    export const GOOGLE: string = 'q';
}

module Const.Event {
    export const CLICK: string = 'click';
}

module Const.Element {
    export const IFRAME: string = 'iframe';
}

module Const.GoogleElm {
    export const ID: string = 'ucs';
}

interface ISearchInfo {
    Url: string,
    Prm: string
}

module LocalStorageController {
    export function SetLocalStrage(keyNo: number, value: ISearchInfo) {
        const storageValue = {
            [Const.LocalStrageKey.KEY + keyNo.toString()]: value
        }
        chrome.storage.sync.set(storageValue);
    }

    export function GetLocalStrage(keyNo: number, callback: (items: { [key: string]: any }) => void) {
        chrome.storage.sync.get([Const.LocalStrageKey.KEY + keyNo.toString()], callback);
    }
}