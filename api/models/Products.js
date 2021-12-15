/**
 * Products.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  tableName: 'productos',
  attributes: {
    id: { type: 'string', columnName: '_id' },
    title: {type: 'string', columnName: 'title', required: true},
    price: {type: 'number', columnName: 'price', required: true},
    thumbnail: {type: 'string', columnName: 'thumbnail', required: true},
    createdAt: false,
    updatedAt: false
  },
};
