function Machine(power) {
  this._power = power;
  this._enabled = false;
  const self = this;
  this.enable = () => {
    self._enabled = true;
  };
  this.disable = () => {
    self._enabled = false;
  };
}

function Fridge(power) {
  Machine.call(this, power);
  let food = [];
  this.getFood = () => food.slice();
  this.addFood = (...moreFood) => {
    if (this._enabled) {
      if (food.length + moreFood.length <= this._power / 100) {
        food = food.concat(moreFood);
      } else {
        console.log('Not enough space');
      }
    } else {
      console.log('Fridge is disabled');
    }
  };
}

Fridge.prototype = Object.create(Machine.prototype);
