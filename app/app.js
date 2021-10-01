
let express = require ('express');
const {getMainRoute} = require("../Routes/routes");
const path = require("express-session");
const {public_directory_is_static} = require("./Middlewares"); let app = express()


app.listen (8080, () => {
    console.log ('server is running on port 8000')
})

public_directory_is_static(app)
getMainRoute(app)