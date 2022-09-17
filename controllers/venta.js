const Venta = require('../models/venta');

module.exports = class VentaController {
    async list(req, res) {
        const list = await Venta.findAll();
        res.send(list);
    }

    async get(req, res) {
        const {id} = req.params;
        const venta = await Venta.findByPk(id);
        res.send(venta);
    }

    async create(req, res, next) {
        const {
            venta_cliente_id,
            venta_forma_pago,
            venta_num_factura,
            venta_descripcion,
            venta_descuento,
            venta_impuesto,
            venta_subtotal,
            venta_total,
            venta_fecha_registro
        } = req.body;
        const venta = await Venta.create({

            venta_cliente_id,
            venta_forma_pago,
            venta_num_factura,
            venta_descripcion,
            venta_descuento,
            venta_impuesto,
            venta_subtotal,
            venta_total,
            venta_fecha_registro
        });
        res.status(201).send(venta);
    }

    async update(req, res, next) {
        const venta_codigo = req.params.id
        const {

            venta_cliente_id,
            venta_forma_pago,
            venta_num_factura,
            venta_descripcion,
            venta_descuento,
            venta_impuesto,
            venta_subtotal,
            venta_total,
            venta_fecha_registro
        } = req.body
        if (!venta_codigo) return res.status(400).send({message: 'El codigo es requerido de la persona'})
        if (!venta_num_factura) return res.status(400).send({message: 'La identificacion es requerida'})
        if (!venta_descripcion) return res.status(400).send({message: 'El tipo de identificacion es requerida'})
        if (!venta_descuento) return res.status(400).send({message: 'Correo requerido'})
        const venta = await Venta.update(
            {

                venta_cliente_id,
                venta_forma_pago,
                venta_num_factura,
                venta_descripcion,
                venta_descuento,
                venta_impuesto,
                venta_subtotal,
                venta_total,
                venta_fecha_registro
            },
            {
                where: {
                    venta_codigo: id
                }
            }
        )
        res.status(204).send(venta)
    }

    async delete(req, res) {
        const venta_codigo = req.params.id

        const destroyResult = await Venta.destroy({
            where: {venta_codigo: venta_codigo}
        })

        if (destroyResult) {
            return res.sendStatus(204)
        }
        res.status(500)

    }
};
