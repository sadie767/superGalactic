import { Calculator } from './../js/super-galactic.js';

describe('Calculator', function() {
  it('will take inputted age from the user', function() {
    var user = new Calculator('asia', '1');
    expect(user.secondConverter()).toEqual('31536000');
  });

  it('will calculate earth years to mercury years', function() {
    var user = new Calculator('asia', '1');
    expect(user.mercury()).toEqual('0.24');
  });

  it('will calculate earth years to venus years', function() {
    var user = new Calculator('asia', '1');
    expect(user.venus()).toEqual('0.62');
  });

  it('will calculate earth years to mars years', function() {
    var user = new Calculator('asia', '1');
    expect(user.mars()).toEqual('1.88');
  });

  it('will calculate earth years to jupiter years', function() {
    var user = new Calculator('asia', '1');
    expect(user.jupiter()).toEqual('11.86');
  });

  it('will return your life expectancy on each planet according to geographical homeland', function() {
    var user = new Calculator('asia', '76');
    expect(user.deathCalculator()).toEqual('Congratulations!  Your time on each planet is nearing the end.')
  });

  it('will return your life expectancy on each planet according to geographical homeland', function() {
    var user = new Calculator('asia', '1');
    expect(user.deathCalculator()).toEqual('You are expected to live 17.28 more Mercury years on Mercury, 44.64 more Venus years on Venus, 135.35999999999999 more Mars years on Mars, and 853.92 more Jupiter years on Jupiter!')
  });

  it('will return your life expectancy on each planet according to geographical homeland', function() {
    var user = new Calculator('europe', '1');
    expect(user.deathCalculator()).toEqual('You are expected to live 18.48 more Mercury years on Mercury, 47.74 more Venus years on Venus, 144.76 more Mars years on Mars, and 913.2199999999999 more Jupiter years on Jupiter!')
  });

  it('will return your life expectancy on each planet according to geographical homeland', function() {
    var user = new Calculator('northAmerica', '1');
    expect(user.deathCalculator()).toEqual('You are expected to live 18.720000000000002 more Mercury years on Mercury, 48.36 more Venus years on Venus, 146.64 more Mars years on Mars, and 925.0799999999999 more Jupiter years on Jupiter!')
  });

  it('will return your life expectancy on each planet according to geographical homeland', function() {
    var user = new Calculator('oceania', '1');
    expect(user.deathCalculator()).toEqual('You are expected to live 18.240000000000002 more Mercury years on Mercury, 47.120000000000005 more Venus years on Venus, 142.88 more Mars years on Mars, and 901.3599999999999 more Jupiter years on Jupiter!')
  });

  it('will return your life expectancy on each planet according to geographical homeland', function() {
    var user = new Calculator('africa', '1');
    expect(user.deathCalculator()).toEqual('You are expected to live 14.879999999999999 more Mercury years on Mercury, 38.440000000000005 more Venus years on Venus, 116.56 more Mars years on Mars, and 735.3199999999999 more Jupiter years on Jupiter!')
  });

  it('will return your life expectancy on each planet according to geographical homeland', function() {
    var user = new Calculator('latinAmerica', '1');
    expect(user.deathCalculator()).toEqual('You are expected to live 18 more Mercury years on Mercury, 46.5 more Venus years on Venus, 141 more Mars years on Mars, and 889.4999999999999 more Jupiter years on Jupiter!')
  });
});
