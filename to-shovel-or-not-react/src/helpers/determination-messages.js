const messages = {
  '-1': ['Something went wrong 🤔'],
  0: ['You can relax!😎', 'No need to shovel!😌', 'Shoveling isn\'t worth your time!😉'],
  1: ['You\'re gonna have to shovel!😟', 'This snow is here to stay, you better shovel!😑', 'Hope you got a snowblower!😮‍💨'],
  2: ['Salt now before it freezes!🥶', 'You might want some pepper with that salt!🧂', 'I hope you have some salt!🧊'],
  3: ['You better salt and shovel!⛄', 'Shoveling won\'t be enough, you need to salt too!🏂🧊']
}

// Returns the appropriate message.
export default function selectRandomDeterminationMessage(status) {
  const choices = messages[`${status}`]
  return choices[Math.floor(Math.random() * choices.length)]
}