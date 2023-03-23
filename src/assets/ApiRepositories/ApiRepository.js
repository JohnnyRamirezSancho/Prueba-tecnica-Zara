import AppleAllPodcastRepository from "./appleApi/AppleAllPodcastRepository";

export default class ApiRepository {

    api;

    constructor(apiToCharge) {
        this.api = apiToCharge
        this.chooseApi()
    }

    chooseApi() {
        if(this.api === "apple") return new AppleAllPodcastRepository;
    }

}