const sword = 'Excalibur'
const wand =  'Elder wand'
const canEquipSword = false
const canEquipWand = false


if (canEquipSword) {
    alert('You have eqipped ' + sword)
} else if (canEquipWand) {
    alert('You have equipped the ' + wand)
} else {
    alert('Your character cannot equip neither swords nor wands unfortunately :<')
}