const Carro = require('../models').Carro;
const ResourceController = require("./resource_controller");


class CarrosController extends ResourceController {

    constructor() {
        super()
        this.setModel(Carro);
    }      
   
}

module.exports = new CarrosController