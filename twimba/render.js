import { get_feed_html } from "./get_feed_html.js";
export function render() {
    return document.getElementById('feed').innerHTML = get_feed_html();
}