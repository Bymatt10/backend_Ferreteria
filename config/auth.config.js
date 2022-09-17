const bcrypt = require('bcrypt')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const Usuario = require('../models/usuario')

module.exports = class AuthenticationController {
    async login(req, res) {
        const {usr_nombre,
            usr_clave} = req.body


        const Usuario = await Usuario.findOne({
            where: {
                usr_nombre: usr_nombre,
                usr_estado: 1
            }
        })

        if (!usr_nombre) {
            return res.status(400).send({message: 'Usuario incorrecto'})
        }

        const match = await bcrypt.compare(usr_clave, usr_nombre.password)

        if (!match) {
            return res.status(400).send({message: 'Contraseña incorrecta'})
        }
        const token = jwt.sign({
                usr_codigo: usr_codigo, usr_nombre
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "2h",
            }
        )

        res.cookie('authtoken', token, {secure: true, expiresIn: 24 * 60 * 60})
        res.status(200).send({token})
    }

    async validate(req, res, next) {
        const authorization = req.headers.authorization

        if (!authorization) return res.status(401).send({message: 'No autorizado'})

        const [, token] = authorization.split('Bearer ')

        try {
            const valid = jwt.verify(token, process.env.JWT_SECRET)
            if (valid) {
                next()
            } else {
                res.status(401).send({message: 'No autorizado'})
            }
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                res.status(401).send({message: 'No autorizado'})
            }
        }
    }
}