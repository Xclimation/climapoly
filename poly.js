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
function Box(id, type, name, price, rent, owner, color) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.price = price;
    this.rent = rent;
    this.owner = owner;
    this.color = color;
    
    // TODO: calculateRent()
}

let boxes = [];

boxes[0] = new Box(0,'free', 'go', 0, 0, null, null);
boxes[1] = new Box(1, 'property', 'Abidjan', 20, 10, null, 'brown');
boxes[2] = new Box(2, 'card', 'chest', 0, 0, null, null);
boxes[3] = new Box('property', 'Abuja',  30,  12,  null,  'brown');
boxes[4] = new Box('tax', 'carbon_tax',  0,  200,  null,  null);
boxes[5] = new Box('utility', 'station',  200,  25,  null,  null);
boxes[6] = new Box('property', 'Accra',  100,  20,  null,  'blue');
boxes[7] = new Box('card', 'chance',  0,  0,  null,  null);
boxes[8] = new Box('property', 'Antananarivo',  100,  20,  null,  'blue');
boxes[9] = new Box('property', 'Bamako',  100,  20,  null,  'blue');
boxes[10] = new Box('free', 'jail',  0,  0,  null,  null);
boxes[11] = new Box('property', 'Conakry',  120,  25,  null,  'pink');
boxes[12] = new Box('utility', 'electricity',  120,  15,  null,  null);
boxes[13] = new Box('property', 'Dakar',  120,  25,  null,  'pink');
boxes[14] = new Box('property', 'Dodoma',  120,  25,  null,  'pink');
boxes[15] = new Box('utility', 'station',  200,  25,  null,  null);
boxes[16] = new Box('property', 'Freetown',  200,  30,  null,  'orange');
boxes[17] = new Box('card', 'chest',  0,  0,  null,  null);
boxes[18] = new Box('property', 'Gaborone',  200,  30,  null,  'orange');
boxes[19] = new Box('property', 'Kigali',  200,  30,  null,  'orange');
boxes[20] = new Box('free', 'nature_park',  0,  0,  null,  null);
boxes[21] = new Box('property', 'Nairobi',  220,  35,  null,  'red');
boxes[22] = new Box('card', 'chance',  0,  0,  null,  null);
boxes[23] = new Box('property', 'Kampala',  220,  35,  null,  'red');
boxes[24] = new Box('property', 'Harare',  220,  35,  null,  'red');
boxes[25] = new Box('utility', 'station',  200,  25,  null,  null);
boxes[26] = new Box('property', 'Juba',  250,  40,  null,  'yellow');
boxes[27] = new Box('utility', 'waste_management',  120,  15,  null,  null);
boxes[28] = new Box('property', 'Kinshasa',  250,  40,  null,  'yellow');
boxes[29] = new Box('property', 'Mbabane',  250,  40,  null,  'yellow');
boxes[30] = new Box('free', 'go_to_jail',  0,  50,  null,  null);
boxes[31] = new Box('property', 'Juba',  300,  45,  null,  'green');
boxes[32] = new Box('property', 'Tripoli',  300,  45,  null,  'green');
boxes[33] = new Box('card', 'chest',  0,  0,  null,  null);
boxes[34] = new Box('property', 'Tunis',  300,  45,  null,  'green');
boxes[35] = new Box('utility', 'station',  200,  25,  null,  null);
boxes[36] = new Box('card', 'chance',  0,  0,  null,  null);
boxes[37] = new Box('property', 'Victoria',  400,  50,  null,  'purple');
boxes[38] = new Box('tax', 'go_green',  0,  75,  null,  null);
boxes[39] = new Box('property', 'Monrovia',  400,  60,  null,  'purple');

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
        console.log(this.position);
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

    // what you can do when you land on a property/box
    this.landingAction = function(boxId) {
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
            console.log('Pay rent!')
            this.pay(property.rent, property.owner);
        } else {
            // develop your space if it meets criteria
        }
    }
    
    /* TODO 2.3: roll dice */
    /* TODO 2.4: bid */
    /* TODO 2.5: develop */
}

// Test
var p1 = new Player('cody', 'shoe', 'gold');
var p2 = new Player('koku', 'cat', 'blue');
//var greenland = boxes[20];
//var electricity = boxes[12];

p1.move(3) // Abuja
p2.move(11); // Accra
p1.move(6); // Conakry
p1.move(7); // Station