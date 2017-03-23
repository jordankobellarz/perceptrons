// weights
var weights = [];

// bias
var bias = 0;

// sum inputs * weights + bias
var sumInputs = function (input) {
  var sum = 0;
  for(i = 0; i<input.length; i++)
    sum += weights[i] * input[i];
  sum += -1 * bias; // sum the bias
  return sum;
}

// step activation function
var activateStep = function (sum) {
  if (sum >= 0) {
    return 1;
  }
  return 0;
}

// activate the neuron
var activate = function (input) {
  return activateStep(sumInputs(input));
}

// update the weight
var updateWeights = function (learningRate, input, expectedOutput, output) {

  var error = expectedOutput - output;

  // update weights
  for(i = 0; i < input.length; i++) {
    weights[i] += learningRate * error * input[i];
  }

  // update bias
  bias += -1 * error;
}

module.exports = function (numInputs) {

  // init the weights with zero
  for(i = 0; i < numInputs; i++) {
    weights[i] = 0;
  }

  return {
    weights: weights,
    bias: bias,
    activate: activate,
    updateWeights: updateWeights
  }
}
