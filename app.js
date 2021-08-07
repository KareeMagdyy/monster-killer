const monsterHealthBar = document.querySelector('#monster-health');
const playerHealthBar = document.querySelector('#player-health');
const bonusLifeEl = document.querySelector('#bonus-life');

const attackBtn = document.querySelector('#attack-btn');
const strongAttackBtn = document.querySelector('#strong-attack-btn');
const healthBtn = document.querySelector('#heal-btn');
const logBtn = document.querySelector('#log-btn');

const attackValue = 10;
const monsterAttackValue = 14; 
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

function adjustHealthBars(maxLife) {
  monsterHealthBar.max = maxLife;
  monsterHealthBar.value = maxLife;
  playerHealthBar.max = maxLife;
  playerHealthBar.value = maxLife;
}

adjustHealthBars(chosenMaxLife);

function dealMonsterDamage(damage) {
  const dealtDamage = Math.random() * damage;
  monsterHealthBar.value = +monsterHealthBar.value - dealtDamage;
  return dealtDamage;
}

function dealPlayerDamage(damage) {
  const dealtDamage = Math.random() * damage;
  playerHealthBar.value = +playerHealthBar.value- dealtDamage;
  return dealtDamage;
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}

function removeBonusLife() {
  bonusLifeEl.parentNode.removeChild(bonusLifeEl);
}

function setPlayerHealth(health) {
  playerHealthBar.value = health;
}

function attackHandler() {
  const damage = dealMonsterDamage(attackValue);
  currentMonsterHealth -= damage;
  const playerDamage = dealPlayerDamage(monsterAttackValue);
  currentPlayerHealth -= playerDamage;
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You Won!')
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You Lost!');
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('Draw')
  }
}

attackBtn.addEventListener('click' , attackHandler)