import { food_list } from "./food_list.js";
export function render() {
    return document.getElementById('menu').innerHTML = food_list();
}