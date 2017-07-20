'use strict';


/**
 * Calculate mean of sample dataset
 * @param {Array} samples
 */
function mean(samples) {
  var total = samples.reduce(function(sum, value) {
    return sum + value;
  }, 0);

  return total / samples.length;
}

/**
 * Calculate standard deviation of sample dataset
 * @param {Array} samples
 */
function std(samples) {
  var average = mean(samples);
  var delta = 0;

  samples.forEach(function(value) {
    delta += Math.pow(value - average, 2);
  });

  return Math.sqrt(delta / samples.length);
}

/**
 * Implementation of smoothed z-score algo for detecting tresholds on dataset
 * Go https://stackoverflow.com/a/22640362 for reference
 */

exports = module.exports = function(samples, lag, treshold, influence) {
  var len = samples.length;
  var filteredSamples = samples.slice(0, lag);
  var signals, avgFilter, stdFilter;
  signals = avgFilter = stdFilter = [];
  for(var i = 0; i < len; i++) {
    signals[i] = 0;
  }

  //lag number of observations needed
  avgFilter[lag - 1] = mean(filteredSamples);
  stdFilter[lag - 1] = std(filteredSamples);

  for(var i = lag; i < len; i++) {
    var data = samples[i] - avgFilter[i - 1];

    if(Math.abs(data) > treshold * stdFilter[i -1]) {
      if(data > 0) {
        signals[i] = 1;
      } else {
        signals[i] = -1;
      }
      filteredSamples[i] = influence * samples[i] + (1 - influence) * filteredSamples[i - 1];
    } else {
      signals[i] = 0;
      filteredSamples[i] = samples[i];
    }
    var slicedSamples = filteredSamples.slice(i - lag, i);
    avgFilter[i] = mean(slicedSamples);
    stdFilter[i] = std(slicedSamples);
  }

  return signals;
}
