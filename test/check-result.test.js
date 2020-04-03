// IMPORT MODULES under test here:
import { checkResult } from '../my-functions.js';

const test = QUnit.test;

test('test the checkResult function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'rock';
    const expected = 'draw';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('test the checkResult function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'paper';
    const expected = 'lose';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('test the checkResult function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'rock';
    const computer = 'scissors';
    const expected = 'win';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('test the checkResult function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'paper';
    const computer = 'paper';
    const expected = 'draw';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('test the checkResult function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'paper';
    const computer = 'scissors';
    const expected = 'lose';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});

test('test the checkResult function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const player = 'scissors';
    const computer = 'paper';
    const expected = 'win';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = checkResult(player, computer);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});


