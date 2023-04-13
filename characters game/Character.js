import {
  get_dice_roll_array,
  get_dice_placeholder_html,
  get_percentage,
} from "./utils.js";

export class Character {
  constructor(data) {
    Object.assign(this, data);
    this.dice_array_pl_html = get_dice_placeholder_html(this.dice_Count);
    this.max_health = this.health;
  }

  get_health_bar_html() {
    const percent = get_percentage(this.max_health, this.health);
    return `<div class="health-bar-outer">
                <div class="health-bar-inner  ${percent < 26 ? "danger" : ""} " 
                    style="width: ${percent}%;">
                </div>
            </div>`;
  }

  // represent those generated number in screen and it has been stored in dice_html
  set_dice_html = () => {
    this.current_dice_score = get_dice_roll_array(this.dice_Count);
    return (this.dice_array_pl_html = this.current_dice_score
      .map((random_num) => {
        return `<div class="dice">${random_num}</div>`;
      })
      .join(""));
  };

  take_damage = (attack_score_array) => {
    const total_attack_score = attack_score_array.reduce(
      (total_attak, current_attack) => {
        return total_attak + current_attack;
      }
    );
    this.health -= total_attack_score;
    console.log;

    if (this.health <= 0) {
      this.dead = true;
      this.health = 0;
    }
  };

  // the layout of the boxs in screen
  get_character_html = () => {
    const {
      element_Id,
      name,
      avatar,
      health,
      dice_Roll,
      current_dice_score,
      dice_Count,
      dice_array_pl_html,
    } = this;
    let dice_html = this.set_dice_html(dice_Count);
    const health_bar = this.get_health_bar_html();

    return `<div class="character-card"> 
            <h4 class="name"> ${name}</h4> 
                    <img class="avatar" src="${avatar}" /> 
                    <div class="health">health: <b>${health}</b></div> 
                    ${health_bar}
                    <div class="dice-container"> 
                    ${dice_array_pl_html} 

            </div>

        </div>`;
  };
}

// we can distructuring the this object ,in following we add dice_array and we can use it without this key word
// const { element_Id, name, avatar, health, dice_Roll, dice_Count, dice_array_pl_html } = this;

// but if we dont distructure it we can use them without this key word
// const { element_Id, name, avatar, health, dice_Roll, dice_Count } = this;
// dice_array_pl_html ❌ cant use inside of character constructor
