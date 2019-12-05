/* Climapoly => Monopoly for climate change*/

function Game(numPlayers) {
    this.numPlayers = numPlayers;

    // complete with code
    
    /* TODO 1.1: Create player*/
}

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
        console.log(this.position);
    }

    this.pay = function(amount, creditor) {
        if (amount <= this.balance) {
            this.balance -= amount;
            creditor.balance += amount;
        } else {
            console.log('Insufficient funds.');
        }
        console.log(this.balance);
    }
    /* TODO 2.1: buy */
    /* TODO 2.2: pay */
    /* TODO 2.3: roll dice */
    /* TODO 2.4: bid */

}

// Test
var p1 = new Player('cody', 'shoe', 'gold', 1500, [], 38, true);
p1.move(10);