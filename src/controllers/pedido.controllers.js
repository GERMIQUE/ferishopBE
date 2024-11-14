
import Pedido from '../services/pedido.services.js';

const Listar_Cabecerapedido = async (req, res) => {
    try {
        console.log("entro a Listar_Cabecerapedido de controller",req.body)
        const result = await new Pedido().Listar_Cabecerapedido(req.body);
        res.status(200).json(result);
    } catch (error) {
        console.log("Error =", error)
        res.status(500).json({ error: error + ' Error en proceso' });
    }
};

const Listar_Clientes = async (req, res) => {
    try {
        console.log("entro a Listar_Clientes de controller")
        const result = await new Pedido().Listar_Clientes(req.body);
        res.status(200).json(result);
    } catch (error) {
        console.log("Error =", error)
        res.status(500).json({ error: error + ' Error en proceso' });
    }
};

const Listar_Productos = async (req, res) => {
    try {
        console.log("entro a Listar_Productos de controller")
        const result = await new Pedido().Listar_Productos(req.body);
        res.status(200).json(result);
    } catch (error) {
        console.log("Error =", error)
        res.status(500).json({ error: error + ' Error en proceso' });
    }
};

const Listar_Detalle_Productos = async (req, res) => {
    try {
        console.log("entro a Listar_Detalle_Productos de controller")
        const result = await new Pedido().Listar_Detalle_Productos(req.body);
        res.status(200).json(result);
    } catch (error) {
        console.log("Error =", error)
        res.status(500).json({ error: error + ' Error en proceso' });
    }
};

 





const Insertar_CabeceraPedido = async (req, res) => {
    try {
        console.log("entro a Insertar_CabeceraPedido de controller")
        const result = await new Pedido().Insertar_CabeceraPedido(req.body);
        res.status(200).json(result);
    } catch (error) {
        console.log("Error =", error)
        res.status(500).json({ error: error + ' Error en proceso' });
    }
};

const Insertar_Pedido = async (req, res) => {
    try {
        console.log("entro a Insertar_Pedido de controller")
        const result = await new Pedido().Insertar_Pedido(req.body);
        res.status(200).json(result);
    } catch (error) {
        console.log("Error =", error)
        res.status(500).json({ error: error + ' Error en proceso' });
    }
};





const Listar_detallePedido = async (req, res) => {
    try {
        console.log("entro a Listar_detallePedido de controller")
        const result = await new Pedido().Listar_detallePedido(req.body);
        res.status(200).json(result);
    } catch (error) {
        console.log("Error =", error)
        res.status(500).json({ error: error + ' Error en proceso' });
    }
};

// Cambiar module.exports por export
export {
    Listar_detallePedido,
    Listar_Cabecerapedido,
    Listar_Clientes,
    Listar_Productos,
    Listar_Detalle_Productos,
    Insertar_CabeceraPedido,
    Insertar_Pedido 
};