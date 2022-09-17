const Persona = require('../models/persona');

module.exports = class PersonaController {
    async list(req, res) {
        const list = await Persona.findAll();
        res.send(list);
    }

    async get(req, res) {
        const {id} = req.params;
        const persona = await Persona.findByPk(id);
        res.send(persona);
    }

    async create(req, res, next) {
        const {
            persona_codigo_identificacion,
            persona_tipo_identificacion,
            persona_correo,
            persona_nombre,
            persona_telefono,
            persona_fecha_nacimiento,
            persona_genero,
            persona_direccion,
        } = req.body;
        const persona = await Persona.create({
            persona_codigo_identificacion,
            persona_tipo_identificacion,
            persona_correo,
            persona_nombre,
            persona_telefono,
            persona_fecha_nacimiento,
            persona_genero,
            persona_direccion,
        });
        res.status(201).send(persona);
    }

    async update(req, res, next) {
        const persona_codigo = req.params.id
        const {
            persona_codigo_identificacion,
            persona_tipo_identificacion,
            persona_correo,
            persona_nombre,
            persona_telefono,
            persona_fecha_nacimiento,
            persona_genero,
            persona_direccion,
        } = req.body
        if (!persona_codigo) return res.status(400).send({message: 'El codigo es requerido de la persona'})
        if (!persona_codigo_identificacion) return res.status(400).send({message: 'La identificacion es requerida'})
        if (!persona_tipo_identificacion) return res.status(400).send({message: 'El tipo de identificacion es requerida'})
        if (!persona_correo) return res.status(400).send({message: 'Correo requerido'})
        const persona = await Persona.update(
            {
                persona_codigo_identificacion,
                persona_tipo_identificacion,
                persona_correo,
                persona_nombre,
                persona_telefono,
                persona_fecha_nacimiento,
                persona_genero,
                persona_direccion,
            },
            {
                where: {
                    persona_codigo: id
                }
            }
        )
        res.status(204).send(persona)
    }

    async delete(req, res) {
        const persona_codigo = req.params.id

        const destroyResult = await Persona.destroy({
            where: {persona_codigo: persona_codigo}
        })

        if (destroyResult) {
            return res.sendStatus(204)
        }
        res.status(500)

    }
};
