// Write your code in this file!
const currentUser = 'Grace Hopper';

//const welcomeMessage = currentUser;
//const welcomeMessage = 'Welcome to Flatbook, currentUser';
const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';

const upperCaseCurrentUser = currentUser.toUpperCase();

const excitedWelcomeMessage= `WELCOME TO FLATBOOK, ${upperCaseCurrentUser}!`;

//const shortGreeting = `Welcome, ${currentUser}`;
const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;




console.log(excitedWelcomeMessage);