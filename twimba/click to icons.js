import { tweetsData } from "./data.js";
import { render } from "./render.js";

//  for clicking like icon
export function handle_like_click(tweet_id) {
    // tweet_id ===else.target.dataset
    const target_tweet_obj = tweetsData.filter((tweet) => {
        return tweet.uuid === tweet_id;
    })[0];

    if (target_tweet_obj.isLiked) {
        target_tweet_obj.likes--;
    } else {
        target_tweet_obj.likes++;
    }
    target_tweet_obj.isLiked = !target_tweet_obj.isLiked;
    // shallow copy var refrence to obj of tweetsData
    render();
}

// for interacting retweet icon
export function handle_retweet_click(tweet_id) {
    const target_tweet_obj = tweetsData.filter((tweet) => {
        return tweet.uuid === tweet_id;
    })[0];

    if (target_tweet_obj.isRetweeted) {
        target_tweet_obj.retweets--;
    } else {
        target_tweet_obj.retweets++;
    }
    target_tweet_obj.isRetweeted = !target_tweet_obj.isRetweeted;
    render();
}

// for interacting reply icon
export function handle_reply_click(reply_id) {
    return document.getElementById(`replies-${reply_id}`).classList.toggle('hidden');
}