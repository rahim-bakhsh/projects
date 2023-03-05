import { card_number_validated, name_validated, cvv_validated } from "./form_validation.js";

const ordering_food_modal = document.getElementById('ordering-food-modal');
const comp_order_btn = document.getElementById('order-btn');
const payment_modal = document.getElementById('payment-modal');
const scape_modal = document.querySelector('.scape');
const pay_btn = document.getElementById('pay-btn');
const payment_form = document.getElementById('payment-form');
const order_rep = document.getElementById('order-rep')
const order_rep_angle = document.getElementById('angle')


comp_order_btn.addEventListener('click', (e) => {
    if (document.getElementById('total-price').textContent !=='0') {
        payment_modal.classList.remove('hidden');
        scape_modal.classList.remove('hidden');
        order_rep.disabled = true
        order_rep_angle.dataset.id = null;
    } else alert('you haven`t ordered yet');
});

scape_modal.addEventListener('click', close_payment_modal);

// try change on input
pay_btn.addEventListener('click', (e) => {

    e.preventDefault();
    if (name_validated() && card_number_validated() && cvv_validated()) {
        successful_payment();
        form_refresher()
    }
})

function close_payment_modal() {
    payment_modal.classList.add('hidden');
    scape_modal.classList.add('hidden');
    order_rep.disabled = false;
    order_rep_angle.dataset.id = 'order-rep';

}

function successful_payment() {
    close_payment_modal();
    ordering_food_modal.classList.add('hidden');
    console.log('accepted');
    const payment_form_data = new FormData(payment_form);
    const buyer_name = payment_form_data.get("name");
    document.getElementById('alert').innerHTML = `<p class="alert pos-relative ">Thanks, ${buyer_name}! Your order is on its way!</p>`;
}

function form_refresher() {
    let inputs = document.querySelectorAll('input');
    let error_messeges = document.querySelectorAll('.error');
    for (const input of inputs) {
        input.value = "";
        input.style.borderColor = 'silver';
    }
    for (const error_messege of error_messeges) {
        error_messege.classList.add('hidden');
    }
}