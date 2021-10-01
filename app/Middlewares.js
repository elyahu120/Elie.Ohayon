const express = require("express");
let bodyParser = require ('body-parser') //  analyseur de corps de requêtes entrantes disponibles sous la req.body propriété
let session = require ('express-session')

module.exports = {

    motor_template_ejs: function (app){
        app.set ('view engine', 'ejs')
    },

    public_directory_is_static: function (app) {
        app.use ('/assets', express.static ('public'))
    },  // כאן אני מעדכן את express שהתיקייה public מכילה קבצים סטטיים

    annalize_www_form_urlencoded: function (app) {
        app.use (bodyParser.urlencoded ({extended: false}))
    },  // analyse l'application /x-www-form-urlencoded

    middleware3: function (app) {
        app.use (bodyParser.json)
    },   // analyse l'application json

    use_session_middleware: function (app) {
        app.use (session ({
            secret: 'mghgj', // secret key
            resave: false,
            saveUninitialized: true,
            cookie: { secure: false }  // false - http, true- https
        }))
    },

    use_flash: function (app) {
        app.use (function (request, response, next) {
            if (request.session.flash) {
                response.locals.flash = request.session.flash
                request.session.flash = undefined
            }
            request.flash = function (type, content) {
                if (request.session.flash === undefined) {
                    request.session.flash = {}
                }
                request.session.flash[type] = content
            }
            next ()
        })
    }
}

