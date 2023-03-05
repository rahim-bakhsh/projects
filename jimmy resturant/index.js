import { menuArray } from "./menu.js";
import { food_list } from "./food_list.js";

food_list();
// diagnose that which add_btn clicked (which food selected)
function pre_check_out_state(add) {
    const target_food = menuArray.filter((order) => {
        return order.id === Number(add);
    })[0];
    return target_food;
}

let order = new Array();
document.addEventListener('click', (e) => {
    
    if (e.target.id === 'order-rep' || e.target.dataset.id === 'order-rep' ) {
        document.getElementById('ordering-food-modal').classList.toggle('active')
        document.getElementById('angle').classList.toggle('rotate');
        document.getElementById('order-rep').classList.toggle('clicked');
    }

    const add_btn = e.target.dataset.uuid;
    if (add_btn) {
        let ordered_food = pre_check_out_state(add_btn);
        if (!order.includes(pre_check_out_state(add_btn))) {
            order.push(ordered_food);
            ordered_food.order_amount = 1

            document.getElementById('ordering-food-modal-inner').innerHTML += `
                    <div class="d-flex pb">
                        <div class="d-flex">
                            <h3>${ordered_food.name}</h3>
                            <button type="button" class="remove-btn border-none c-pointer">remove</button>
                        </div>
                        <h4><span  id = "${ordered_food.id}">${ordered_food.price}</span>$</h4>
                    </div>
                `;
        } else {
            order.forEach((retry_food) => {
                if (ordered_food === retry_food) {
                    retry_food.order_amount += 1;
                    document.getElementById(retry_food.id).textContent = retry_food.price * retry_food.order_amount;
                }
            })
        }

        let total_price = 0;
        const order_total_price = order.map(f_price => {
            return total_price += f_price.price * f_price.order_amount;
        });
        document.getElementById('total-price').textContent = total_price;
    }
})