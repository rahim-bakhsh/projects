import { render } from "./render.js";
import { tweetsData } from "./data.js";
// design the profiles 
export function get_feed_html() {

    let feed_html = ``;
    tweetsData.forEach((tweet_data) => {

        // giving colors to icons when it clicked up to
        let like_icon_class = ` `;
        if (tweet_data.isLiked) {
            like_icon_class = 'liked';
        }

        let retweet_icon_class = ` `;
        if (tweet_data.isRetweeted) {
            retweet_icon_class = `retweeted`;
        }
        // here

        let replies_Html = ''
        if (tweet_data.replies.length > 0) {
            tweet_data.replies.forEach(function (reply) {
                replies_Html += `
            <div class="tweet-reply">
               <div class="tweet-inner">
                  <img src="${reply.profilePic}" class="profile-pic">
                  <div>
                     <p class="handle">${reply.handle}</p>
                     <p class="tweet-text">${reply.tweetText}</p>
                  </div>
               </div>
            </div>
            `
            })
        }

        feed_html += `<div class="tweet">
         <div class="tweet-inner">
            <img src="${tweet_data.profilePic}" class="profile-pic">
            <div>
               <p class="handle">${tweet_data.handle} </p>
               <p class="tweet-text">${tweet_data.tweetText}</p>
               <div class="tweet-details">
                  <span class="tweet-detail">
                     <i class="fa-regular fa-comment-dots"  data-reply = "${tweet_data.uuid}"></i>
                     ${tweet_data.replies.length}

                  </span>
                  <span class="tweet-detail">
                     <i class="fa-solid fa-heart ${like_icon_class}"  data-like = "${tweet_data.uuid}" id ="like"></i>
                     ${tweet_data.likes}

                  </span>
                  <span class="tweet-detail">
                     <i class="fa-solid fa-retweet ${retweet_icon_class}"  data-retweet = "${tweet_data.uuid}"></i>
                     ${tweet_data.retweets}
                  </span>
               </div>   
            </div>            
         </div>
         <div class="hidden" id="replies-${tweet_data.uuid}">
            ${replies_Html}
         </div>   
      </div>
`;
    })
    return feed_html;
}
// render up designes to page
render();