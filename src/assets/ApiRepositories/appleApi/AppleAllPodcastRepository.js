import ApiAppleAllPodcastPayload from "../payloads/ApiAppleAllPodcastPayload"

export default class AppleAllPostcastRepository {

    uri = "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"

    constructor() {        
    }

    async getAll() {
        const response = await fetch(this.uri)
        const json = await response.json()
        
        let podcasts = []
        
        for (const podcast of json.feed.entry) {
            //console.log(podcast["im:image"][2].label)
            const podcastToAdd = new ApiAppleAllPodcastPayload(podcast["im:name"].label, podcast["im:artist"].label, podcast["im:image"][2].label, podcast.id.attributes["im:id"])
            podcasts.push(podcastToAdd)    
        }


        return podcasts
    }

}