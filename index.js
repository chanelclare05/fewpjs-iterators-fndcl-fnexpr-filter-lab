const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, str) {
    return drivers.filter( name => name.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(name => name.split('').slice(0,2).join('') === str);
}

// const drivers = [
//   {
//     name: 'Bobby',
//     hometown: 'Pittsburgh' },
//   {
//     name: 'Sammy',
//     hometown: 'New York' } ,
//   {
//     name: 'Sally',
//     hometown: 'Cleveland' },
//   {
//     name: 'Annette',
//     hometown: 'Los Angeles' },
//   {
//     name: 'Bobby',
//     hometown: 'Tampa Bay' }
// ];

function matchName(drivers, str) {
  return drivers.filter(obj => obj.name === str)}
