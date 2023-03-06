import { render } from "./render.js";
import { tweetsData } from "./data.js";
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

// when btn is clicked
export function handle_retweet_btn_click() {
    // for adding new tweet up to
    const tweet_input = document.getElementById('tweet-input');
    if (tweet_input.value) {
        tweetsData.unshift({
            handle: `@scrimba 💎`,
            profilePic: `images/logo.png`,
            likes: 0,
            retweets: 0,
            tweetText: tweet_input.value,
            replies: [],
            isLiked: false,
            isRetweeted: false,
            uuid: uuidv4(),
        })
        render();
        tweet_input.value = ``;
    }
}