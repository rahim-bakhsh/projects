import { render } from './render.js';
import { tweetsData } from './data.js';
import { handle_retweet_btn_click } from './handle_retweet_btn_clicked.js';
import { handle_like_click, handle_reply_click, handle_retweet_click } from './click to icons.js';

// control textarea and tweet btn
document.addEventListener('click', (e) => {
   const like = e.target.dataset.like;
   const retweet = e.target.dataset.retweet;
   const reply = e.target.dataset.reply;

   if (like) {
      handle_like_click(like);
   } else if (retweet) {
      handle_retweet_click(retweet);
   } else if (reply) {
      handle_reply_click(reply);
   } else if (e.target.id === 'tweet-btn') {
      handle_retweet_btn_click();
   }
});