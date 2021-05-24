'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    static async search(query) {
      const limit = query.limit ? parseInt(query.limit) : 20;
      const offset = query.offset ? parseInt(query.limit) : 0

      let where = {}

      if (query.nome) where.foto = {
          [Op.like]: `%${query.foto}%` //filtrando pelo nome

      }
      if (query.foto) where.foto = q.query.foto;

      const entities = await Carro.findAndCountAll({
          where: where,
          limit: limit,
          offset: offset
      })

      return {
          entities: entities.rows,
          meta: {
              count: entities.count,
              limit: limit,
              offset: offset
          }
      };
  }
  };
  Carro.init({
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Carro',
  });
  return Carro;
};