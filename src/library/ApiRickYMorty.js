
const rp = require('request-promise')

function pjConfirmado( personaje ){

    let option = {
        url:'https://rickandmortyapi.com/api/character/'+ personaje +'/status/confirmed',
        json:true
    }

    return rp(option)

}

module.exports = pjConfirmado;