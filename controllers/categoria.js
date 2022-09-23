const Categoria = require('../models/categoria');

module.exports = class categoriaController {
    async list(req, res) {
        // #swagger.tags = ['Categoria']
        // #swagger.description = 'Para obtener los que es la categoria'
        const list = await Categoria.findAll();
        res.send(list);
    }

    async get(req, res) {
        // #swagger.tags = ['Categoria']
        const {id} = req.params;
        const categoria = await Categoria.findByPk(id);
        res.send(categoria);
    }

    async create(req, res, next) {
        const {
            categoria_nombre
        } = req.body;
        const pago = await Categoria.create({
            categoria_nombre
        });
        res.status(201).send(pago);
    }

    async update(req, res) {
        const categoria_codigo = req.params.id
        const {
            categoria_nombre
        } = req.body
        if (!categoria_nombre) return res.status(400).send({message: 'El nombre de la categoria es requerido'})
        const categoria = await Categoria.update(
            {
                categoria_nombre
            },
            {
                where: {
                    categoria_codigo: categoria_codigo
                }
            }
        )
        res.status(204).send(categoria)
    }

    async delete(req, res) {
        const categoria_codigo = req.params.id

        const destroyResult = await Categoria.destroy({
            where: {categoria_codigo: categoria_codigo}
        })

        if (destroyResult) {
            return res.sendStatus(204)
        }
        res.status(500)

    }
};
