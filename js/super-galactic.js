export class Calculator {
  constructor(region, age) {
  this.region = region;
  this.age = age;
  }

  secondConverter() {
    let year = parseInt(this.age);
    let secondParsed = parseInt('31536000')
    let calculate = secondParsed * year;
    return calculate.toString();
  }

  mercury(){
    let earth = parseFloat(this.age);
    let mercuryParsed = parseFloat('.24');
    let calculate = earth * mercuryParsed;
    return calculate.toString();
  }

  venus(){
    let earth = parseFloat(this.age);
    let venusParsed = parseFloat('.62');
    let calculate = earth * venusParsed;
    return calculate.toString();
  }

  mars(){
    let earth = parseFloat(this.age);
    let marsParsed = parseFloat('1.88');
    let calculate = earth * marsParsed;
    return calculate.toString();
  }

  jupiter(){
    let earth = parseFloat(this.age);
    let jupiterParsed = parseFloat('11.86');
    let calculate = earth * jupiterParsed;
    return calculate.toString();
  }

  deathCalculator() {
    let na = parseFloat('79');
    let eu = parseFloat('78');
    let oc = parseFloat('77');
    let la = parseFloat('76');
    let as = parseFloat('73');
    let af = parseFloat('63')


    let mercuryParsed = parseFloat('.24');
    let venusParsed = parseFloat('.62');
    let marsParsed = parseFloat('1.88');
    let jupiterParsed = parseFloat('11.86');

    if(this.age >= 63) {
      return 'Congratulations!  Your time on each planet is nearing the end.'
    }
    else if(this.region === "northAmerica") {
      let mercury = mercuryParsed * na;
      let venus = venusParsed * na;
      let mars = marsParsed * na;
      let jupiter = jupiterParsed * na;
      return 'Your life expectancy on Mercury is: ' + mercury + ' years, on Venus: ' + venus + ' years, on Mars: ' + mars + ' years, and on Jupiter: ' + jupiter + ' years!'
    }
      else if(this.region === "europe") {
        let mercury = mercuryParsed * eu;
        let venus = venusParsed * eu;
        let mars = marsParsed * eu;
        let jupiter = jupiterParsed * eu;
        return 'Your life expectancy on Mercury is: ' + mercury + ' years, on Venus: ' + venus + ' years, on Mars: ' + mars + ' years, and on Jupiter: ' + jupiter + ' years!'
      }
      else if(this.region === "oceania") {
        let mercury = mercuryParsed * oc;
        let venus = venusParsed * oc;
        let mars = marsParsed * oc;
        let jupiter = jupiterParsed * oc;
        return 'Your life expectancy on Mercury is: ' + mercury + ' years, on Venus: ' + venus + ' years, on Mars: ' + mars + ' years, and on Jupiter: ' + jupiter + ' years!'
      }
      else if(this.region === "latinAmerica") {
        let mercury = mercuryParsed * la;
        let venus = venusParsed * la;
        let mars = marsParsed * la;
        let jupiter = jupiterParsed * la;
        return 'Your life expectancy on Mercury is: ' + mercury + ' years, on Venus: ' + venus + ' years, on Mars: ' + mars + ' years, and on Jupiter: ' + jupiter + ' years!'
      }
      else if(this.region === "asia") {
        let mercury = mercuryParsed * as;
        let venus = venusParsed * as;
        let mars = marsParsed * as;
        let jupiter = jupiterParsed * as;
        return 'Your life expectancy on Mercury is: ' + mercury + ' years, on Venus: ' + venus + ' years, on Mars: ' + mars + ' years, and on Jupiter: ' + jupiter + ' years!'
      }
      else if(this.region === "africa") {
        let mercury = mercuryParsed * af;
        let venus = venusParsed * af;
        let mars = marsParsed * af;
        let jupiter = jupiterParsed * af;
        return 'Your life expectancy on Mercury is: ' + mercury + ' years, on Venus: ' + venus + ' years, on Mars: ' + mars + ' years, and on Jupiter: ' + jupiter + ' years!'
      }
    }

}
