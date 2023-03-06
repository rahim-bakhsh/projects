import { character_data } from "./character data.js";
import { Character } from "./character.js";



let monsters_Array = ["orc", "demon", "goblin"]

function get_new_monester() {
    const next_monester_data = character_data[monsters_Array.shift()];
    return next_monester_data ? new Character(next_monester_data) : {};
}







function attack() {
    wizard.set_dice_html()
    monster.set_dice_html()

    wizard.take_damage(monster.current_dice_score)
    monster.take_damage(wizard.current_dice_score)
    render();

    if (wizard.dead) {
        end_game();

    } else if (monster.dead) {

        if (monsters_Array.length > 0) {
            document.getElementById('attack-button').disabled = true;
           setTimeout(() => {
               monster = get_new_monester();
               document.getElementById('attack-button').disabled = false;
               render()
           }, 1500);


        } else{
            end_game();
        }
    }

}




function end_game() {
    const end_message = wizard.health === 0 && monster.health === 0 ? "No victors - all creatures are dead"
        : wizard.health > 0 ? "The Wizard Wins" : "The Monsters are Victorious";

    const end_Emoji = wizard.health > 0 ? "🔮" : "☠️"
    document.getElementById('attack-button').disabled = true;
    setTimeout(() => {

        document.body.innerHTML =
            `<div class="end-game">
            <h2>Game Over</h2>
            <h3>${end_message}</h3>
            <p class="end-emoji">${end_Emoji}</p>
            </div>`
    }, 1500);
}


document.getElementById('attack-button').addEventListener('click', attack);





function render() {
    document.getElementById(`hero`).innerHTML = wizard.get_character_html()
    document.getElementById('monster').innerHTML = monster.get_character_html()
    // document.getElementById(`monster`).innerHTML = monster.get_character_html()
}

const wizard = new Character(character_data.hero)
// const orc = new Character(character_data.monster)
let monster = get_new_monester()
render();