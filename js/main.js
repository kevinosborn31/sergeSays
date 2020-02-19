console.log('serge says')

const sergeSays = function(input) {
  if(input.endsWith('?')) {
    return 'Sure.';
  } else if (input.length === 0){
  return 'Fine. Be that way!'
} else if ( input === input.toUpperCase() ) {
  return "Whoa, chill out"
} else {
  return "Whatever"
}
}

console.log("How are you?", sergeSays("How are you?"));
console.log("Hello:", sergeSays("Hello"));
console.log("I LOVE JS:", sergeSays("I LOVE JS"));
console.log("Empty string:", sergeSays(""));
