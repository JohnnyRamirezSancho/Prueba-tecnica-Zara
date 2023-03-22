import AppleRepository from "./appleApi/AppleRepository";

export default class ApiRepository {

    api;

    constructor(apiToCharge) {
        this.api = apiToCharge
        this.chooseApi()
    }

    chooseApi() {
        if(this.api === "apple") return new AppleRepository;
    }

}