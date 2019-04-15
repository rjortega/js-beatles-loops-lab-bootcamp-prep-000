function theBeatlesPlay(musicians, intruments){
  var array = []
  for (var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${intruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  var i = 0
  var factStrings = []
  while (i < facts.length){
    //factStrings.push(`${facts[i]}!!!`)
    factStrings = [...factStrings, facts[i]+"!!!"]
    i++
  }
  return factStrings
}

function iLoveTheBeatles(num){
  var array = []
  do {
    array.push("I love the Beatles!")
<<<<<<< HEAD
    num++
=======
>>>>>>> b9348a630fa9fd4926db703339d5544462339bb8
  } while (num < 15)
  return array
}
