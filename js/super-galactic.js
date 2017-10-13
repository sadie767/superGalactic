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

    let earth = parseInt(this.age);

    let mercuryParsed = parseFloat('.24');
    let venusParsed = parseFloat('.62');
    let marsParsed = parseFloat('1.88');
    let jupiterParsed = parseFloat('11.86');

    let naParsed = parseFloat('79');
    let euParsed = parseFloat('78');
    let ocParsed = parseFloat('77');
    let laParsed = parseFloat('76');
    let asParsed = parseFloat('73');
    let afParsed = parseFloat('63');

    if(this.age >= 63) {
      return 'Congratulations!  Your time on each planet is nearing the end.'
    }
      else if(this.region === "northAmerica") {
        let mercury = (naParsed * mercuryParsed) - (earth * mercuryParsed);
        let venus = (naParsed * venusParsed) - (earth * venusParsed);
        let mars = (naParsed * marsParsed) - (earth * marsParsed);
        let jupiter = (naParsed * jupiterParsed) - (earth * jupiterParsed);
        return 'You are expected to live ' + mercury + ' more Mercury years on Mercury, ' + venus + ' more Venus years on Venus, ' + mars + ' more Mars years on Mars, and ' + jupiter + ' more Jupiter years on Jupiter!'
    }
      else if(this.region === "europe") {
        let mercury = (euParsed * mercuryParsed) - (earth * mercuryParsed);
        let venus = (euParsed * venusParsed) - (earth * venusParsed);
        let mars = (euParsed * marsParsed) - (earth * marsParsed);
        let jupiter = (euParsed * jupiterParsed) - (earth * jupiterParsed);
        return 'You are expected to live ' + mercury + ' more Mercury years on Mercury, ' + venus + ' more Venus years on Venus, ' + mars + ' more Mars years on Mars, and ' + jupiter + ' more Jupiter years on Jupiter!'
      }
      else if(this.region === "oceania") {
        let mercury = (ocParsed * mercuryParsed) - (earth * mercuryParsed);
        let venus = (ocParsed * venusParsed) - (earth * venusParsed);
        let mars = (ocParsed * marsParsed) - (earth * marsParsed);
        let jupiter = (ocParsed * jupiterParsed) - (earth * jupiterParsed);
        return 'You are expected to live ' + mercury + ' more Mercury years on Mercury, ' + venus + ' more Venus years on Venus, ' + mars + ' more Mars years on Mars, and ' + jupiter + ' more Jupiter years on Jupiter!'
      }
      else if(this.region === "latinAmerica") {
        let mercury = (laParsed * mercuryParsed) - (earth * mercuryParsed);
        let venus = (laParsed * venusParsed) - (earth * venusParsed);
        let mars = (laParsed * marsParsed) - (earth * marsParsed);
        let jupiter = (laParsed * jupiterParsed) - (earth * jupiterParsed);
        return 'You are expected to live ' + mercury + ' more Mercury years on Mercury, ' + venus + ' more Venus years on Venus, ' + mars + ' more Mars years on Mars, and ' + jupiter + ' more Jupiter years on Jupiter!'
      }
      else if(this.region === "asia") {
        let mercury = (asParsed * mercuryParsed) - (earth * mercuryParsed);
        let venus = (asParsed * venusParsed) - (earth * venusParsed);
        let mars = (asParsed * marsParsed) - (earth * marsParsed);
        let jupiter = (asParsed * jupiterParsed) - (earth * jupiterParsed);
        return 'You are expected to live ' + mercury + ' more Mercury years on Mercury, ' + venus + ' more Venus years on Venus, ' + mars + ' more Mars years on Mars, and ' + jupiter + ' more Jupiter years on Jupiter!'
      }
      else if(this.region === "africa") {
        let mercury = (afParsed * mercuryParsed) - (earth * mercuryParsed);
        let venus = (afParsed * venusParsed) - (earth * venusParsed);
        let mars = (afParsed * marsParsed) - (earth * marsParsed);
        let jupiter = (afParsed * jupiterParsed) - (earth * jupiterParsed);
        return 'You are expected to live ' + mercury + ' more Mercury years on Mercury, ' + venus + ' more Venus years on Venus, ' + mars + ' more Mars years on Mars, and ' + jupiter + ' more Jupiter years on Jupiter!'
      }
  }
}
