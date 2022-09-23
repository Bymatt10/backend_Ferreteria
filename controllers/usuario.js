const bcrypt = require('bcrypt')
const Usuario = require('../models/usuario')


module.exports = class usuarioController {
    async list(req, res, next) {
        const list = await Usuario.findAll()
        res.send(list)
    }

    async get(req, res) {
        const id = req.params.id
        const usuario = await Usuario.findAll(
            {
                where: {
                    usr_codigo: id
                }
            }
        )
        res.send(usuario)
    }

    async update(req, res, next) {
        const id = req.params.id
        const {
            usr_nombre,
            usr_clave,
        } = req.body
        if (!id) return res.status(400).send({message: 'id es requerido'})
        if (!usr_nombre) return res.status(400).send({message: 'Nombre es requerido'})
        if (!usr_clave) return res.status(400).send({message: 'contrasena es requerido'})
        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(usr_clave, salt)
        const usuario = await Usuario.update(
            {
                usr_nombre,
                usr_clave: hash,
            },
            {
                where: {
                    idUsuario: id
                }
            }
        )
        res.status(204).send(usuario)
    }

    async create(req, res, next) {
        const {
            usr_nombre,
            usr_clave,
        } = req.body
        if (!usr_nombre) return res.status(400).send({message: 'Nombre es requerido'})
        if (!usr_clave) return res.status(400).send({message: 'Contrasena es requerido'})

        const salt = await bcrypt.genSalt()
        const hash = await bcrypt.hash(usr_clave, salt)
        const usuario = await Usuario.create({
            usr_nombre,
            usr_clave: hash,
        })
        res.status(201).send(usuario)
    }

    async login(req, res) {
        const usuario = await Usuario.findOne({usr_nombre: req.body.usr_nombre});
        if (!usuario) return res.status(400).json({error: 'Usuario no encontrado'});

        const validPassword = await bcrypt.compare(req.body.usr_clave, usuario.usr_clave);
        if (!validPassword) return res.status(400).json({error: 'contraseña no válida'})

        res.status(201).send("Bienvendio")
    }

    async delete(req, res, next) {
        const id = req.params.id
        const {
            usr_estado
        } = req.body
        if (!id) return res.status(400).send({message: 'id es requerido'})
        const destroyResult = await UsuarioEst.update(
            {
                usr_estado
            },
            {
                where: {
                    usr_codigo: id
                }
            }
        )
        if (destroyResult) {
            return res.sendStatus(204)
        }

        res.status(500)
    }
}