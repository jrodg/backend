const TRAITS = require('../data/traits')

const DEFAULT_PROPERTIES = {
    nickname: 'unnmaed',
    get birthday(){
      return new Date()
    },
    get randomTraits(){
        const traist = [];

        TRAITS.forEach(TRAITS => {
            const traitsType = TRAITS.type;
            const traistValues = TRAITS.values;

            const traistValue = traistValues[
                Math.floor(Math.random() * traistValues.length)
            ];

            traist.push({traitsType, traistValue})
        });

        return traist;
    }
}

class Dragon{
    constructor({birthday, nickname, traits}= {}){
        this.birthday = birthday || DEFAULT_PROPERTIES.birthday;
        this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
        this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
    }
}

module.exports = Dragon