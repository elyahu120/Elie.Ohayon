


connection_DBjs = require("../Directory_DB/db")

module.exports = {

    getMainRoute: function (app) {
        app.get ('/', (request, response) => {
            console.log ('request.session')
            response.render ('pages/CV.html', {test: 'salut'})
        }) // על כל request שתתקבל זה יפתח את index
    }
}



