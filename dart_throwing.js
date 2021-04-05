const randomNum = require('./util')
const Vector = require('./vector')

const NaiveDartThrowing = (dimensions, threshold, radius) => {
  let errorCount = 0
  let [width,height] = dimensions
  let points = []
  // give up if we hit this many consecutive errors
  while (errorCount < threshold) {
    // define a new random point within our field
    let coordinates = [randomNum(0, width), randomNum(0,height)]
    // see if it conflicts with any pre-established points
    if(!points.every(point => Vector.distance(point, coordinates) > radius)){
      // increase our error count if we fall too close to a point
      errorCount += 1
    } else {
      // reset our error count and add our new coordinate
      errorCount = 0
      points.push(coordinates)
    }
  }
  return points
}

console.log(NaiveDartThrowing([50,50], 20, 5))