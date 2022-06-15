import { Link } from "react-router-dom";

export function search(search) {
    //  const options = {
    //      method: 'GET'
    //  }
    console.log(process.env.REACT_APP_YOUTUBE_API_KEY)

    return fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${search}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}/`
        ).then((response) => console.log(response))
}

// Above will return a maximum result of 5 videos, the 'q=' is the designation for the search query, and
// the api key seems to be required to be at the end of the string.

//sample URL
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=the weeknd&key=APIKEY