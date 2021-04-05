const Vector = {
  add: (...vectors) => vectors.reduce((sum, vector) => {
    if(sum.length !== vector.length){
      throw new Error('Cannot add vectors of different lengths')
    }
    return sum.map((item, index) => item + vector[index])
  }),
  distance: (vector1, vector2) => {
    if(vector1.length !== vector2.length){
      throw new Error('Cannot find distance between vectors of different lengths')
    }
    return Math.sqrt(vector1.reduce((sum, element, index) => sum + (element - vector2[index]) ** 2))
  }
}

// console.log(Vector.distance([1,1], [0,0]))

module.exports = Vector