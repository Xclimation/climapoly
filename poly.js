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

let boxes = [
    {type: 'free', name:'go', price: 0, rent: 0, owner: null, color: null},
    {type: 'property', name:'Abidjan', price: 20, rent: 10, owner: null, color: 'brown'},
    {type: 'card', name:'chest', price: 0, rent: 0, owner: null, color: null},
    {type: 'property', name:'Abuja', price: 30, rent: 12, owner: null, color: 'brown'},
    {type: 'tax', name:'carbon_tax', price: 0, rent: 200, owner: null, color: null},
    {type: 'utility', name:'station', price: 200, rent: 25, owner: null, color: null},
    {type: 'property', name:'Accra', price: 100, rent: 20, owner: null, color: 'blue'},
    {type: 'card', name:'chance', price: 0, rent: 0, owner: null, color: null},
    {type: 'property', name:'Antananarivo', price: 100, rent: 20, owner: null, color: 'blue'},
    {type: 'property', name:'Bamako', price: 100, rent: 20, owner: null, color: 'blue'},
    {type: 'free', name:'jail', price: 0, rent: 0, owner: null, color: null},
    {type: 'property', name:'Conakry', price: 120, rent: 25, owner: null, color: 'pink'},
    {type: 'utility', name:'electricity', price: 120, rent: 15, owner: null, color: null},
    {type: 'property', name:'Dakar', price: 120, rent: 25, owner: null, color: 'pink'},
    {type: 'property', name:'Dodoma', price: 120, rent: 25, owner: null, color: 'pink'},
    {type: 'utility', name:'station', price: 200, rent: 25, owner: null, color: null},
    {type: 'property', name:'Freetown', price: 200, rent: 30, owner: null, color: 'orange'},
    {type: 'card', name:'chest', price: 0, rent: 0, owner: null, color: null},
    {type: 'property', name:'Gaborone', price: 200, rent: 30, owner: null, color: 'orange'},
    {type: 'property', name:'Kigali', price: 200, rent: 30, owner: null, color: 'orange'},
    {type: 'free', name:'nature_park', price: 0, rent: 0, owner: null, color: null},
    {type: 'property', name:'Nairobi', price: 220, rent: 35, owner: null, color: 'red'},
    {type: 'card', name:'chance', price: 0, rent: 0, owner: null, color: null},
    {type: 'property', name:'Kampala', price: 220, rent: 35, owner: null, color: 'red'},
    {type: 'property', name:'Harare', price: 220, rent: 35, owner: null, color: 'red'},
    {type: 'utility', name:'station', price: 200, rent: 25, owner: null, color: null},
    {type: 'property', name:'Juba', price: 250, rent: 40, owner: null, color: 'yellow'},
    {type: 'utility', name:'waste_management', price: 120, rent: 15, owner: null, color: null},
    {type: 'property', name:'Kinshasa', price: 250, rent: 40, owner: null, color: 'yellow'},
    {type: 'property', name:'Mbabane', price: 250, rent: 40, owner: null, color: 'yellow'},
    {type: 'free', name:'go_to_jail', price: 0, rent: 50, owner: null, color: null},
    {type: 'property', name:'Juba', price: 300, rent: 45, owner: null, color: 'green'},
    {type: 'property', name:'Tripoli', price: 300, rent: 45, owner: null, color: 'green'},
    {type: 'card', name:'chest', price: 0, rent: 0, owner: null, color: null},
    {type: 'property', name:'Tunis', price: 300, rent: 45, owner: null, color: 'green'},
    {type: 'utility', name:'station', price: 200, rent: 25, owner: null, color: null},
    {type: 'card', name:'chance', price: 0, rent: 0, owner: null, color: null},
    {type: 'property', name:'Victoria', price: 400, rent: 50, owner: null, color: 'purple'},
    {type: 'tax', name:'go_green', price: 0, rent: 75, owner: null, color: null},
    {type: 'property', name:'Monrovia', price: 400, rent: 60, owner: null, color: 'purple'},
];


/*
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

boxes[0] = new Box(0, 'free', 'go', 0, 0, 0, null, null);
boxes[1] = new Box(1, 'property', 'go', 0, 0, 0, null, null);
*/

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