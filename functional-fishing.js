/**
 * Function Fishing
 * A simple fishing game
 * Rules:
 * To Eat: Must have at least 1 fish and a fire
 * To Make Fire: Must have a least 1 log of wood
 * To Fish: Must have at least 1 piece of bait and fire must be out
 * To Find Wood: The fire must be out.
 * To Find Bait: The fire must be out.
 */



const settings = {
  fireWood: 1,
  fishingBait: 1,
  eating: 1
}


/**
 * The game object stores the current game status
 */
const game = {
  fire: false,
  wood: 0,
  fish: 1,
  bait: 0,


}


/**
 * fire
 * To start a fire:
 *    The fire must be out
 *    There must be at least 1 piece of wood
 *                        
 * To stop a fire:
 *    The fire must be going
 */

function fire () {
  if (game.fire) {

    game.fire = false
    return 'You have put out the fire.'

  } else if (game.wood > 0) {
    game.wood--
    game.fire = true
    return 'You have started the fire.'
  } else {
    return 'You do not have enough wood.'
  }
}
/**
 * fish
 * To go fishing:
 *    The fire must be out
 *    There must be at least 1 piece of bait
 */
/**
 * check if game.fire is false
 * if game.fire is false
 * check if  there is bait 
 */

function fish () {
  if (game.fire) {
    return 'The fire must be out'
  } else {
    if (game.bait >= 0) {
      game.fish++
      return 'You have one fish'
    }

  }

}








/**
 * bait
 * To search for bait:
 *    The fire must be out
 */


function bait () {
  if (game.fire) {

    return ' you have put out the fire'
  } else {

    game.bait++
    return 'you have 1 piece of bait'
  }

}
/**
 * wood
 * To search for wood:
 *    The first must be out
 */
function wood () {
  if (game.wood) {
    return 'you do not have any wood'
  } else {
    game.wood++
    return ' you have 1 piece of wood'
  }


}




/**
 * eat
 * To eat a fish:
 *    There first must be going
 *    There must be at least 1 fish
 */
function eat () {
  if (game.fire === true) {
    if (game.fish >= settings.eating) {
      game.fish--
      return 'You have eaten a fish'
    } else {
      return 'You do not  have any fish'
    }
  } else {
    return `the fire must be burning`
  }
}
/**
 * inventory
 * Shows the players current inventory
 */


function inventory () {
  const response = []
  response.push('INVENTORY:\n')
  for (const item in game) {
    if (item === 'fire') {
      if (game[item]) {
        response.push('The fire is burning.')
      } else {
        response.push('The fire is not burning.')
      }
    } else {
      response.push(`${item} ${game[item]}\n`)
    }
  }
  return response.join(' ')
}




/**
 * help
 * Display the game instructions.
 */
function help () {
  return `Welcome to Functional Fishing.
The text-based console fishing game.

Instructions: 
In this game you will catch, cook and eat fish. You will also search for wood and bait.

Commands:
To eat a fish, use eat()
To go fishing, use fish()
To start/stop a fire, use fire()
To search for bait, use bait()
To search for wood, use wood() 
To check the current inventory, use inventory()
To view these instructions, again, use help()`
}

console.log(help())
