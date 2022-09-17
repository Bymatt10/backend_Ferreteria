const Pago = require('../models/forma_Pago');

module.exports = class metodo_PagoController {
    async list(req, res) {
        const list = await Pago.findAll();
        res.send(list);
    }

    async get(req, res) {
        const {id} = req.params;
        const pago = await Pago.findByPk(id);
        res.send(pago);
    }

    async create(req, res, next) {
        const {
            mp_nombre
        } = req.body;
        const pago = await Pago.create({
            mp_nombre
        });
        res.status(201).send(pago);
    }

    async update(req, res, next) {
        const mp_codigo = req.params.id
        const {
            mp_nombre
        } = req.body
        if (!mp_nombre) return res.status(400).send({message: 'El nombre del metodo de pago es requerido'})
       const pago = await Pago.update(
            {
                mp_nombre
            },
            {
                where: {
                    mp_codigo: id
                }
            }
        )
        res.status(204).send(pago)
    }

    async delete(req, res) {
        const mp_codigo = req.params.id

        const destroyResult = await Pago.destroy({
            where: {mp_codigo: mp_codigo}
        })

        if (destroyResult) {
            return res.sendStatus(204)
        }
        res.status(500)

    }
};
