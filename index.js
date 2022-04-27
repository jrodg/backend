const Dragon = require('./dragon');

const jooey = new Dragon({birthday:new Date(), nickname:'jooey'});
const booey = new Dragon(new Date(), 'booey');

console.log('jooey', jooey)