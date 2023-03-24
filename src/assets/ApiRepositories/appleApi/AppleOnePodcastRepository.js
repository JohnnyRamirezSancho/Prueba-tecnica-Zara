import ApiApplePodcastPayload from "../payloads/ApiApplePodcastPayload";

export default class AppleOnePodcastRepository {
  url = "https://itunes.apple.com/lookup?id=";

  constructor() {}

  async getAll(id) {
    this.url += id
    const response = await fetch(this.url, { mode: 'no-cors'});
    const json = await response.json();

    // let podcast = [];

    // for (const podcast of json) {
    //   const podcastToAdd = new ApiApplePodcastPayload(
    //     podcast.collectionName,
    //     podcast.artistName,
    //     podcast.artworkUrl100,
    //     podcast.collectionId
    //   );
    //   podcast.push(podcastToAdd);
      return json;
    }
  }
