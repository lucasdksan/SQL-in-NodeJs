const Tech = require('../models/Tech');
const User = require('../models/User');

module.exports = {
    async store(req, res){
       const {user_id} = req.params;
       const {name} = req.body;
       const user = User.findByPk(user_id);
       if(!user){
            return res.status(400).json({error: 'User not found'});
       }
       const [tech] = await Tech.findOrCreate({
           where: {name},
       });
       await user.addTech(tech);
       return res.json(tech);
    },
    async index(req, res){
        const {user_id} = req.params;
        const user = await User.findByPk(user_id, {
            include: {association: 'techs'}
        });
    },
    async delete(req, res){
        const {user_id} = req.params;
        const {name} = req.body;
        const user = User.findByPk(user_id);
        if(!user){
            return res.status(400).json({error: 'User not found'});
        }
        const tech = await Tech.findOne({
            where: {name}
        });
        await user.removeTech(tech);
        return res.json({
            message: 'Deletado com sucesso!'
        });
    }
}