import { menuArray } from "./menu.js";
import { render } from './render.js';

export function food_list() {
    const menu_list = document.getElementById('menu');
    let foods = ``;
    menuArray.forEach((food) => {

        foods += `<div class="list">
            <div class="emoji"> ${food.emoji} </div>
                <div class="properties">
                    <h3 class="l-hight">${food.name}</h3>
                    <p class="l-hight ingredients">${food.ingredients}</p>
                    <p class="l-hight price">${food.price}$</p>
                </div>  
                <svg class="add" data-uuid=${food.id}  style="transition: all 500ms; color: black; height: 40px; width: 40px; padding:.4rem; border: 2px solid black; border - radius: 50 %; opacity: .6; cursor:pointer" onmouseover="this.style.opacity = 1" onmouseleave="this.style.opacity = .5" sxmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                <path data-uuid=${food.id} d="M2 4.25A2.25 2.25 0 014.25 2h2.5A2.25 2.25 0 019 4.25v2.5A2.25 2.25 0 016.75 9h-2.5A2.25 2.25 0 012 6.75v-2.5zM2 13.25A2.25 2.25 0 014.25 11h2.5A2.25 2.25 0 019 13.25v2.5A2.25 2.25 0 016.75 18h-2.5A2.25 2.25 0 012 15.75v-2.5zM11 4.25A2.25 2.25 0 0113.25 2h2.5A2.25 2.25 0 0118 4.25v2.5A2.25 2.25 0 0115.75 9h-2.5A2.25 2.25 0 0111 6.75v-2.5zM15.25 11.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z" />
                    </svg >
            </div>`;
    })
    return foods;
};
render();
