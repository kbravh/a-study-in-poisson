const randomNum = (min, max) => {
  if(min >= max) {
    throw Error('Min must be less than max')
  }
    return Math.random() * (max - min) + min;
}

module.exports = randomNum