import ApiPayload from "../payloads/ApiPayload"

export default class AppleRepository {

    uri = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"

    constructor() {        
    }

    async getAll() {
        const response = await fetch(this.uri)
        const json = await response.json()
        
        let podcasts = []
        
        for (const podcast of json.feed.entry) {
            //console.log(podcast["im:image"][2].label)
            const podcastToAdd = new ApiPayload(podcast["im:name"].label, podcast["im:image"][2].label)
            podcasts.push(podcastToAdd)    
        }


        return podcasts
    }

}