/**
 * PrenomController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


module.exports = {
  
    list: async function (req, res) {
        const prenoms = await Prenom.find({});
        return res.json(prenoms);
      },

    create: async function (req, res) {
    try {
      const { prenom } = req.body;
      if (!prenom) {
        return res.badRequest('Missing prenom field');
      }
      const createdPrenom = await Prenom.create({ prenom }).fetch();
      return res.ok(createdPrenom);
    } catch (error) {
      return res.serverError('Failed to create prenom');
    }
  },  

};

