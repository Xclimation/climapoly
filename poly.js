// Climapoly => Monopoly for climate change
// chance - pop quiz
// chest - mystery box
// carbon tax - sponsor
// CSR - eco-champion
// Stations 
// Electricity - Go Green
// Waste Management - Go Green
// Green Park - Miss a turn
// Property extends Box
// station
// Utility extends Box [electricity => solar | waste management => recycling | station => electric]
// Card extends Box [chest | chance]
// free [nature park, jail, go to jail, go]
class Box {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    // box methods here
}

class Asset extends Box {
    constructor(id, name, price, rent, color) {
        super(id, name);
        this.price = price;
        this.rent = rent;
        this.color = color;
        this.owner = null;
        this.rank = 0;
    }

    // asset methods here
    canBeDeveloped() {
        if (this.owner && this.color) {
          let count = 0;

          this.owner.properties.forEach(property => {
              if (property.color === this.color) {
                  count += 1;
              }
          });

          switch (this.color) {
              case 'brown' || 'purple':
                  return count === 2;
                  break;
              default:
                  return count === 3;
          }
        }

        // player must own all properties to start developing
        // player cannot develop utilities or stations (these have no color)
        return false;
    }
}

class PenaltyBox extends Box {
    constructor(id, name, penalty) {
        super(id, name);
        this.penalty = penalty;
    }

    // tax box methods here
}

// Card - chest or chance

let boxes = [];

boxes[0]  = new Box(0, 'go');
boxes[1]  = new Asset(1, 'Abidjan', 20, 4, 'brown');
boxes[2]  = new Box(2, 'chest');
boxes[3]  = new Asset(3, 'Abuja', 30, 6, 'brown');
boxes[4]  = new PenaltyBox(4, 'carbon_tax', 200);
boxes[5]  = new Asset(5, 'station', 200, 25, null);
boxes[6]  = new Asset(6, 'Accra', 100, 20,'blue');
boxes[7]  = new Box(7, 'chance');
boxes[8]  = new Asset(8, 'Antananarivo', 100, 20, 'blue');
boxes[9]  = new Asset(9, 'Bamako', 100, 20, 'blue');
boxes[10] = new Box(10, 'jail');
boxes[11] = new Asset(11, 'Conakry', 120,  25, 'pink');
boxes[12] = new Asset(12, 'electricity',  120,  15,  null);
boxes[13] = new Asset(13, 'Dakar',  120,  25, 'pink');
boxes[14] = new Asset(14, 'Dodoma',  120,  25, 'pink');
boxes[15] = new Asset(15, 'station',  200,  25,  null);
boxes[16] = new Asset(16, 'Freetown',  200,  30, 'orange');
boxes[17] = new Box(17, 'chest');
boxes[18] = new Asset(18, 'Gaborone',  200,  30, 'orange');
boxes[19] = new Asset(19, 'Kigali',  200,  30, 'orange');
boxes[20] = new Box(20, 'nature_park');
boxes[21] = new Asset(21, 'Nairobi',  220,  35, 'red');
boxes[22] = new Box(22,'chance');
boxes[23] = new Asset(23,'Kampala',  220,  35, 'red');
boxes[24] = new Asset(24, 'Harare',  220,  35, 'red');
boxes[25] = new Asset(25, 'station',  200,  25,  null);
boxes[26] = new Asset(26, 'Juba',  250,  40, 'yellow');
boxes[27] = new Asset(27, 'waste_management',  120,  15,  null);
boxes[28] = new Asset(28, 'Kinshasa',  250,  40, 'yellow');
boxes[29] = new Asset(29, 'Mbabane',  250,  40, 'yellow');
boxes[30] = new PenaltyBox(30, 'go_to_jail', 50);
boxes[31] = new Asset(31,'Juba',  300,  45, 'green');
boxes[32] = new Asset(32, 'Tripoli',  300,  45, 'green');
boxes[33] = new Box(33, 'chest');
boxes[34] = new Asset(34, 'Tunis',  300,  45, 'green');
boxes[35] = new Asset(35, 'station',  200,  25,  null);
boxes[36] = new Box(36, 'chance');
boxes[37] = new Asset(37, 'Victoria',  400,  50, 'purple');
boxes[38] = new PenaltyBox(38, 'go_green', 75);
boxes[39] = new Asset(39, 'Monrovia',  400,  60, 'purple');

class Game {
    constructor(numPlayers) {
        this.numPlayers = numPlayers;
        // complete with code
    }
    /* TODO 1.1: Create player*/
}

class Bank {
    constructor() {
        this.balance = 1000; // check this!
        this.name = 'bank';
    }
}
var bank = new Bank();

class Player {
    constructor(name, token, color) {
        this.name = name;
        this.token = token;
        this.color = color;
        this.balance = 1500;
        this.properties = [];
        this.position = 0;
        this.playing = false;
    }

    move(steps) {
        let nextPos = this.position + steps;
        if (nextPos < 39) {
            this.position = nextPos;
        }
        else {
            this.position = nextPos - 40;
        }
        this.landingAction(this.position);
    };
    
    goToJail() {
        this.position = 10;
        console.log('Moving directly to jail');
    };
    
    pay(amount, creditor) {
        if (amount <= this.balance) {
            this.balance -= amount;
            creditor.balance += amount;

            // update playerBalance and creditor balance
            console.log(`${this.name} paid $${amount} to ${creditor.name}`);
            console.log(`${this.name}: ${this.balance}`);
            console.log(`${creditor.name}: ${creditor.balance}`);
            return true;
        }
        else {
            console.log('Insufficient funds.');
            return false;
        }
    }
    
    getMoney(amount) {
        this.balance += amount;

        // updateBalance
        console.log(`${this.name}: ${this.balance}`);
    };
    
    buy(property) {
        if (this.pay(property.price, bank)) {
            property.owner = this;
            this.properties.push(property);
            console.log(`Acquired ${property.name}`);
        } else {
            // auction
        }
    }

    // plant n trees uniformly; if you get to 5 trees, raise the Green Flag; adjust rent accordingly
    develop(property) {
        if (property.canBeDeveloped()) {
            console.log('You are a champion, building your city to be green...');
            property.rank += 1; // develop property as you land on it
            console.log(property.rank);
        }
    }
    
    landingAction(boxId) {
        console.log('Preparing for a safe landing...');
        let box = boxes[boxId];

        if (box instanceof Asset) {
            // buy if asset has no owner
            if (!box.owner) {
                this.buy(box);
            } else if (box.owner === this) {
                this.develop(box);
            } else {
                // landed on someone else's property, pay rent!
                console.log('Pay rent!');
                this.pay(box.rent, box.owner);
            }
        } else if (box.id === 4 || box.id === 38) { // penalty boxes
            this.pay(box.penalty, bank);
        } else if (box.id === 0) { // GO
            this.getMoney(200);
        }
        else if (box.id === 30) { // GO TO JAIL
            this.goToJail();
        } else if (box.name === 'chance' || box.name === 'chest') {
            // draw card
            console.log('You picked a', box.name);
        }
    };
    
    /* TODO 2.3: roll dice */
    /* TODO 2.4: bid */
}

// Test
var p1 = new Player('cody', 'shoe', 'gold');
var p2 = new Player('loki', 'hat', 'blue');

p1.move(7);