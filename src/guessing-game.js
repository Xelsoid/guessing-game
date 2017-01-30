class GuessingGame {
    constructor() {
    	this.quessNumber=0;
    	this.maxRange=0;
    	this.minRange=0;
    }

    setRange(min, max) {
    	this.maxRange=max;
    	this.minRange=min;
    	return this;
    }

    guess() {
    	
    	var start=0;
    	var end=0;
    	

		if((this.minRange==this.maxRange-1)
			&&(this.quessNumber<this.minRange)){
			return this.minRange;
		}
		if((this.minRange==this.maxRange-1)
			&&(this.quessNumber>this.minRange)){
			return this.maxRange;
		}
		this.quessNumber=
		Math.ceil((this.maxRange-this.minRange)/2+this.minRange);
		return this.quessNumber;


    	
    }

    lower() {
    	this.maxRange=this.quessNumber;
return this;
    }

    greater() {
    	this.minRange=this.quessNumber;
return this;
    }
}

module.exports = GuessingGame;
