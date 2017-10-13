import { Calculator } from './../js/super-galactic.js';

describe('Calculator', function() {
  it('will take inputted age from the user', function() {
    var user = new Calculator('asia', '1');
    expect(user.secondConverter()).toEqual('31536000');
  });

  it('will calculate earth years to mercury years', function() {
    var user = new Calculator('asia', '1');
    console.log(user);
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
    expect(user.deathCalculator()).toEqual('Your life expectancy on Mercury is: 17.52 years, on Venus: 45.26 years, on Mars: 137.23999999999998 years, and on Jupiter: 865.78 years!')
  });

  it('will return your life expectancy on each planet according to geographical homeland', function() {
    var user = new Calculator('europe', '1');
    expect(user.deathCalculator()).toEqual('Your life expectancy on Mercury is: 18.72 years, on Venus: 48.36 years, on Mars: 146.64 years, and on Jupiter: 925.0799999999999 years!')
  });

  it('will return your life expectancy on each planet according to geographical homeland', function() {
    var user = new Calculator('northAmerica', '1');
    expect(user.deathCalculator()).toEqual('Your life expectancy on Mercury is: 18.96 years, on Venus: 48.98 years, on Mars: 148.51999999999998 years, and on Jupiter: 936.9399999999999 years!')
  });

  it('will return your life expectancy on each planet according to geographical homeland', function() {
    var user = new Calculator('oceania', '1');
    expect(user.deathCalculator()).toEqual('Your life expectancy on Mercury is: 18.48 years, on Venus: 47.74 years, on Mars: 144.76 years, and on Jupiter: 913.2199999999999 years!')
  });

  it('will return your life expectancy on each planet according to geographical homeland', function() {
    var user = new Calculator('africa', '1');
    expect(user.deathCalculator()).toEqual('Your life expectancy on Mercury is: 15.12 years, on Venus: 39.06 years, on Mars: 118.44 years, and on Jupiter: 747.18 years!')
  });

  it('will return your life expectancy on each planet according to geographical homeland', function() {
    var user = new Calculator('latinAmerica', '1');
    expect(user.deathCalculator()).toEqual('Your life expectancy on Mercury is: 18.24 years, on Venus: 47.12 years, on Mars: 142.88 years, and on Jupiter: 901.3599999999999 years!')
  });

});
