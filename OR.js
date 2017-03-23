var Neuron = require("./ANN/Neuron")

var neuron1 = new Neuron(2);

// max iterations
var maxIterations = 10;

// learning rate
var learningRate = .5;

// iterations counter
var iterationsCount = 0;

// training set
var trainingSet = [
  {
    input: [0, 0],
    output: 0
  },
  {
    input: [0, 1],
    output: 1
  },
  {
    input: [1, 0],
    output: 1
  },
  {
    input: [1, 1],
    output: 1
  },
];

// train the perceptron
var train = function () {

  var hasTrained = false;

  var output = null;
  var expectedOutput = null;
  var input = null;

  // traverse the training set
  trainingSet.forEach(function (data) {

    input = data.input;
    expectedOutput = data.output;

    // pass the input through the neuron
    output = neuron1.activate(input);

    // if the output differs from the expected result
    if (output != expectedOutput) {
      neuron1.updateWeights(learningRate, input, expectedOutput, output);
      hasTrained = true;
    }
  })

  iterationsCount ++;

  // the learning only stop when the error is 0 or has reached maxIterations
  if (hasTrained && iterationsCount < maxIterations) {
    train();
  }
}

// running
train();

console.log('aprendido em ', iterationsCount, ' iterações')

// testing
console.log("expected: 0; got: " + neuron1.activate([0, 0]))
console.log("expected: 1; got: " + neuron1.activate([0, 1]))
console.log("expected: 1; got: " + neuron1.activate([1, 0]))
console.log("expected: 1; got: " + neuron1.activate([1, 1]))
