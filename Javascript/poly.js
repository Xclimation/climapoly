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

function Box(id, type, name, price, rent, owner, color, rank) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.price = price;
    this.rent = rent;
    this.owner = owner;
    this.color = color;
    this.rank = rank;
    // TODO: calculateRent()
}

let boxes = [];

boxes[0] = new Box(0,'free', 'go', 0, 0, null, null, 0);
boxes[1] = new Box(1, 'property', 'Abidjan', 20, 10, null, 'brown', 0);
boxes[2] = new Box(2, 'card', 'chest', 0, 0, null, null, 0);
boxes[3] = new Box(3, 'property', 'Abuja',  30,  12,  null,  'brown', 0);
boxes[4] = new Box(4, 'tax', 'carbon_tax',  0,  200,  null,  null, 0);
boxes[5] = new Box(5, 'utility', 'station',  200,  25,  null,  null, 0);
boxes[6] = new Box(6, 'property', 'Accra',  100,  20,  null,  'blue', 0);
boxes[7] = new Box(7, 'card', 'chance',  0,  0,  null,  null, 0);
boxes[8] = new Box(8, 'property', 'Antananarivo',  100,  20,  null,  'blue', 0);
boxes[9] = new Box(9, 'property', 'Bamako',  100,  20,  null,  'blue', 0);
boxes[10] = new Box(10,'free', 'jail',  0,  0,  null,  null, 0);
boxes[11] = new Box(11, 'property', 'Conakry',  120,  25,  null,  'pink', 0);
boxes[12] = new Box(12, 'utility', 'electricity',  120,  15,  null,  null, 0);
boxes[13] = new Box(13, 'property', 'Dakar',  120,  25,  null,  'pink', 0);
boxes[14] = new Box(14, 'property', 'Dodoma',  120,  25,  null,  'pink', 0);
boxes[15] = new Box(15, 'utility', 'station',  200,  25,  null,  null, 0);
boxes[16] = new Box(16, 'property', 'Freetown',  200,  30,  null,  'orange', 0);
boxes[17] = new Box(17, 'card', 'chest',  0,  0,  null,  null, 0);
boxes[18] = new Box(18, 'property', 'Gaborone',  200,  30,  null,  'orange', 0);
boxes[19] = new Box(19, 'property', 'Kigali',  200,  30,  null,  'orange', 0);
boxes[20] = new Box(20, 'free', 'nature_park',  0,  0,  null,  null, 0);
boxes[21] = new Box(21, 'property', 'Nairobi',  220,  35,  null,  'red', 0);
boxes[22] = new Box(22,'card', 'chance',  0,  0,  null,  null, 0);
boxes[23] = new Box(23,'property', 'Kampala',  220,  35,  null,  'red', 0);
boxes[24] = new Box(24, 'property', 'Harare',  220,  35,  null,  'red', 0);
boxes[25] = new Box(25, 'utility', 'station',  200,  25,  null,  null, 0);
boxes[26] = new Box(26, 'property', 'Juba',  250,  40,  null,  'yellow', 0);
boxes[27] = new Box(27, 'utility', 'waste_management',  120,  15,  null,  null, 0);
boxes[28] = new Box(28, 'property', 'Kinshasa',  250,  40,  null,  'yellow', 0);
boxes[29] = new Box(29, 'property', 'Mbabane',  250,  40,  null,  'yellow', 0);
boxes[30] = new Box(30, 'free', 'go_to_jail',  0,  50,  null,  null, 0);
boxes[31] = new Box(31,'property', 'Juba',  300,  45,  null,  'green', 0);
boxes[32] = new Box(32, 'property', 'Tripoli',  300,  45,  null,  'green', 0);
boxes[33] = new Box(33, 'card', 'chest',  0,  0,  null,  null, 0);
boxes[34] = new Box(34, 'property', 'Tunis',  300,  45,  null,  'green', 0);
boxes[35] = new Box(35, 'utility', 'station',  200,  25,  null,  null, 0);
boxes[36] = new Box(36, 'card', 'chance',  0,  0,  null,  null, 0);
boxes[37] = new Box(37, 'property', 'Victoria',  400,  50,  null,  'purple', 0);
boxes[38] = new Box(38, 'tax', 'go_green',  0,  75,  null,  null, 0);
boxes[39] = new Box(39, 'property', 'Monrovia',  400,  60,  null,  'purple', 0);

function Game(numPlayers) {
    this.numPlayers = numPlayers;

    // complete with code
    
    /* TODO 1.1: Create player*/
}

function Bank() {
    this.balance = 1000; // check this!
    this.name = 'bank';
}
var bank = new Bank();

function Player(name, token, color) {
    this.name = name;
    this.token = token;
    this.color = color;
    this.balance = 1500;
    this.properties = [];
    this.position = 0;
    this.playing = false;
    
    this.move = function(steps) {
        let nextPos = this.position + steps;

        if (nextPos < 39) {
            this.position = nextPos;
        } else {
            this.position = nextPos - 40;
        }
        // perform some action based on the position
        console.log('Landing at:', this.position);
        this.landingAction(this.position);
    }

    this.goToJail = function() {
        this.position = 10;
        console.log('Moving directly to jail');
    }

    this.pay = function(amount, creditor) {
        if (amount <= this.balance) {
            this.balance -= amount;
            creditor.balance += amount;
            console.log(`${this.name} paid $${amount} to ${creditor.name}`);
            console.log(`${this.name}: ${this.balance}`);
            console.log(`${creditor.name}: ${creditor.balance}`);
            return true;
        } else {
            console.log('Insufficient funds.');
            return false;
        }
    }

    this.getMoney = function(amount) {
        this.balance += amount;
        console.log(`${this.name}: ${this.balance}`);
    }

    this.canDevelop = function(color) {
        let count = 0;
        let properties = this.properties;

        for (i = 0; i < properties.length; i++) {
            if (properties[i].color === color) {
                count += 1;
            }
        }

        if (color === 'brown' || color === 'purple' && count === 2) {
            return true;
        } else {
            if (count === 3) {
                return true;
            }
            return false;
        }
    }

    // what you can do when you land on a property/box
    this.landingAction = function(boxId) {
        console.log('Preparing for a safe landing...');
        let property = boxes[boxId];
        
        // can't buy free property or one with an owner
        if (!property.owner && property.type !== 'free') {
            console.log('Buying...');
           let paid = this.pay(property.price, bank);
           if (paid) {
               this.properties.push(property);
               console.log(`Acquired ${property.type}: ${property.name}`);
           } else {
               //  TODO 2.1.1: auction property
           }
        } else if (property.name === 'go') {
            this.getMoney(200);
        } else if (property.name === 'go to jail') {
            this.goToJail();
        } else if (property.owner !== this) {
            console.log(this);
            console.log(property.owner);
            console.log(property);
            console.log('Pay rent!')
            this.pay(property.rent, property.owner);
        } else {
            if (this.canDevelop(property.color)) {
                this.develop(property);
            }

            console.log(property.color);
        }
    }

    this.develop = function(property) {
        // plant n trees uniformly
        // if you get to 5 trees, raise the Green Flag
        // adjust rent accordingly
        console.log('You are a green champion, building your city to be green...');
        property.rank += 1;
        console.log(property.rank);
    }
    
    /* TODO 2.3: roll dice */
    /* TODO 2.4: bid */
    /* TODO 2.5: develop */
}

// Test
var p1 = new Player('cody', 'shoe', 'gold');
var abidjan = boxes[1];
var abuja = boxes[3];

abidjan.owner = p1;
abuja.owner = p1;

p1.properties = [abidjan, abuja];
p1.move(3); // green champion
