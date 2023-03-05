// get Elements by name
let buyer_name = document.forms['payment-form']['name'];
let card_number = document.forms['payment-form']['card-number'];
let cvv = document.forms['payment-form']['cvv'];

// get control of error representer elements
let buyer_name_eror = document.querySelector('.name-error');
let card_number_error = document.querySelector('.card-number-error');
let cvv_error = document.querySelector('.cvv-error');

export function name_validated() {
    if (buyer_name.value.length === 0 || buyer_name.value.length > 30) {
        buyer_name.style.borderColor = 'red';
        buyer_name.focus();
        buyer_name_eror.classList.remove('hidden');
        return false;
    } else {

        buyer_name.style.borderColor = 'silver';
        buyer_name_eror.classList.add('hidden');
        return true;
    }
}

export function card_number_validated() {
    if (card_number.value.length < 15 || card_number.value.length > 19) {
        card_number.style.borderColor = "red";
        card_number.focus();
        card_number_error.classList.remove('hidden');
        return false;
    } else {

        buyer_name.style.borderColor = 'silver';
        buyer_name_eror.classList.add('hidden');
        return true;
    }
}

export function cvv_validated() {
    if (cvv.value.length < 3 || cvv.value.length > 3) {
        cvv.focus();
        cvv.style.borderColor = "red";
        cvv_error.classList.remove('hidden');
        return false;
    } else {
        buyer_name.style.borderColor = 'silver';
        buyer_name_eror.classList.add('hidden');
        return true;
    }
}

