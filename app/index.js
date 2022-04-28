const express = require('express')
const GenerationEngine = require('./generation/engine');
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation')

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);
engine.start();

module.exports = app;

// const Dragon = require('./dragon');

// const jooey = new Dragon({birthday:new Date(), nickname:'jooey'});
// const booey = new Dragon(new Date(), 'booey');

// console.log('jooey', jooey)

// const Generation = require('./genetation');

// const generation = new Generation();

// console.log('generation', generation);

// const gooby = generation.newDragon();

// console.log('gooby', gooby)