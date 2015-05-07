/*
 Tower defense is a subgenre of real-time strategy video games,
 where the goal is to stop the enemies from reaching a specific point
 on the map by building a variety of different towers which shoot at them
 as they pass. (source: wikipedia)
 */

describe('TowerDefense', function() {

  var minion, tower;
  beforeEach(function() {
    minion = new Minion(0, 10);
    tower = new Tower(0, 20);
  });

  describe('Minion', function() {

    describe('position', function() {
      it('provides information about its position', function() {
        const position = minion.getPosition();
        assert.deepEqual(position, [0, 10]);
      });

      it('moves to a position', function() {
        minion.move(10, 10);

        const position = minion.getPosition();
        assert.deepEqual(position, [10, 10]);
      });
    });

    describe('health', function() {
      it('provides information about its health', function() {
        const health = minion.getHealth();
        assert.deepEqual(health, 100);
      });

      it('takes damage', function() {
        minion.takeDamage(10);

        const health = minion.getHealth();
        assert.deepEqual(health, 90);
      });

      it('takes damage but health never drops below 0', function() {
        minion.takeDamage(110);

        const health = minion.getHealth();
        assert.deepEqual(health, 0);
      });

      it('holds its current health internally', function() {
        minion.takeDamage(20);
        minion.takeDamage(20);

        const health = minion.getHealth();
        assert.deepEqual(health, 60);
      });
    });

    describe('isDead', function() {
      it('is not dead with more then 0 health', function() {
        const dead = minion.isDead();
        assert.equal(dead, false);
      });

      it('is dead when health is 0', function() {
        minion.takeDamage(100);

        const dead = minion.isDead();
        assert(dead);
      });
    });
  });

  describe('Tower', function() {

    describe('position', function() {
      it('has a position but can not be moved', function() {
        const position = tower.getPosition();
        assert.deepEqual(position, [0, 20]);
      });
    });

    describe('isInRange', function() {
      it('returns true if a given minion is in range', function() {
        const isInRange = tower.isInRange(new Minion(0, 15));
        assert(isInRange);
      });

      it('returns false if a given minion is out of range', function() {
        const isInRange = tower.isInRange(new Minion(0, 0));
        assert.equal(isInRange, false);
      });
    });

    describe('dealDamage', function() {
      it('deals damage to a minion', function() {
        tower.dealDamage(minion);

        const minionHealth = minion.getHealth();
        assert.equal(minionHealth, 80);
      });

      it('does not deal damage when the minion is out of range', function() {
        const minion2 = new Minion(0, 0);
        tower.dealDamage(minion2);

        const minionHealth = minion2.getHealth();
        assert.equal(minionHealth, 100);
      })
    });
  });
});

class Minion {

  constructor(...position) {
    this._position = [...position];
    this._health = 100;
  }

  getPosition() {
    return this._position;
  }

  getHealth() {
    return this._health;
  }

  isDead() {
    return this._health === 0;
  }

  move(...position) {
    this._position = [...position];
  }

  takeDamage(damage) {
    this._health -= damage;
    if (this._health < 0) {
      this._health = 0;
    }
  }
}

class Tower {
  constructor(...position) {
    this._position = [...position];
    this._range = 10;
    this._damage = 20;
  }

  getPosition() {
    return this._position;
  }

  isInRange(minion) {
    const distance = this._determineDistance(minion.getPosition());
    return this._range >= distance;
  }

  dealDamage(minion) {
    if (!this.isInRange(minion)) {
      return;
    }
    minion.takeDamage(this._damage);
  }

  _determineDistance(minionPosition) {
    const [xTower, yTower] = this._position;
    const [xMinion, yMinion] = minionPosition;

    const distanceX = xTower - xMinion;
    const distanceY = yTower - yMinion;

    const distanceSquared = Math.pow(distanceX, 2) + Math.pow(distanceY, 2);

    return Math.sqrt(distanceSquared);
  }
}
