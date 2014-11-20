People = new Mongo.Collection('players');
Food = new Mongo.Collection('food');

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
// Thanks MDN :-)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

if(Meteor.isClient) {
	Template.people.helpers({
		'person': function() {
			// Get array of people
			var people = People.find().fetch();
			
			// Generate random number 0 - length of people array
			var randomInt = getRandomInt(0, people.length);
			
			// Select random person
			var person = people[randomInt];
			
			// Return the person name
			return person.name;
		},
		'food': function () {
			// Get array of food
			var foods = Food.find().fetch();
			
			// Generate random number 0 - length of food array
			var randomInt = getRandomInt(0, foods.length);
			
			// Select random food
			var food = foods[randomInt];
			
			// Return the food name
			return food.name;
		}
	});
}

if (Meteor.isServer) {
	
}
