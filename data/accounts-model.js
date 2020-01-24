const knex = require("knex");

const knexFile = require('../knexfile.js');

const environment = process.env.NODE_ENV || "development";
const knexConfigration = knexFile[environment];
const db = knex(knexConfigration)

