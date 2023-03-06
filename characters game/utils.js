// fill out the array with random Number
function get_dice_roll_array(dice_Count) {
    return new Array(dice_Count).fill(0).map(() => {
        return Math.floor(Math.random() * 6) + 1
    })
    //     const new_dice_roll = new Array();
    //    for (let re = 0; re < dice_Count; re++) {
    //        new_dice_roll.push(Math.floor(Math.random() * 6) + 1)
    //    }
    //     return new_dice_roll;
    // Math.random() * 6
}

// generate placeholder instead of random number
function get_dice_placeholder_html(dice_count) {
    return new Array(dice_count).fill('').map(() => {
        return `<div class="placeholder-dice"></div>`;
    }).join('');
}
// calculate the percentage of health
const get_percentage = (max_health, remaining_health) => {
    return (remaining_health * 100) / max_health;
}

export { get_dice_roll_array, get_dice_placeholder_html, get_percentage };