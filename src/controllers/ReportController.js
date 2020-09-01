const {Op} = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req, res){
        const users = User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@gmail.com'
                }
            },
            include:[
                {association: 'addresses', where: {street: 'nome da rua'}},
                {association: 'techs', 
                     require: false,
                    where: {
                        [Op.iLike]: 'React%'
                    }
                }
            ]
        });
    }
}