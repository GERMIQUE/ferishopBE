import Sitio from '../services/sitio.services.js';

const getSitios = async (req, res) => {
    try {
        console.log("entro a getsitio de controller")
        const result = await new Sitio().getSitios(req.body);
        res.status(200).json(result);
    } catch (error) {
        console.log("Error =", error)
        res.status(500).json({ error: error + ' Error en proceso' });
    }
};

const select_sitio_x_padre = async (req, res) => {
    try {
        console.log("entro a getsitio de controller")
        const result = await new Sitio().select_sitio_x_padre(req.body);
        res.status(200).json(result);
    } catch (error) {
        console.log("Error =", error)
        res.status(500).json({ error: error + ' Error en proceso' });
    }
};

const select_detalle_sitio_x_hijo = async (req, res) => {
    try {
        console.log("entro a select_detalle_sitio_x_hijo de controller")
        const result = await new Sitio().select_detalle_sitio_x_hijo(req.body);
        res.status(200).json(result);
    } catch (error) {
        console.log("Error =", error)
        res.status(500).json({ error: error + ' Error en proceso' });
    }
};

// Cambiar module.exports por export
export {
    getSitios,
    select_sitio_x_padre,
    select_detalle_sitio_x_hijo
};