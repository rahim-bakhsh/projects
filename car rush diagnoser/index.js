let display_num = document.getElementById('num-displayer');
// let save_btn = document.getElementById('saver-btn');
// let increment_btn = document.getElementById('incrementer-btn');
let pre_saved = document.getElementById('pre-saved');

let count = 0;
let incremnt = () => {
    count += 1;
    display_num.textContent = count;
}

let save = () => {
    let prev_counts = ` ${count} -`;
    pre_saved.innerText += prev_counts;
    display_num.textContent = count = 0;
}


// increment_btn.addEventListener('click', incremnt);
// save_btn.addEventListener('click', save);