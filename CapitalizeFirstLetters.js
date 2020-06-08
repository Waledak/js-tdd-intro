

// WRITE THE ACTUAL FUNCTION HERE
function capitalizeFirstLetters(input) {
  return input.length > 0
    ? input.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
    
    : '';
}

module.exports = capitalizeFirstLetters;