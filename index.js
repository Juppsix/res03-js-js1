const name = window.prompt('Quel est votre nom?');
const lastname= window.prompt('Quel est votre prénom?')
const birthday = window.prompt('Quel est votre date de naissance?')
const currentYear = 2023;
const age = currentYear - birthday;
console.log(`Salut ${name} ${lastname}, cette année tu as ${age} ans`);
