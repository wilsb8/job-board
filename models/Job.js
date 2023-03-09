const MySql = require('mysql2')
const db = require('../database/database')

const Job = db.define('jobs', {
    title: {
        type: MySql.STRING
    },
    technologies: {
        type: MySql.STRING
    },
    description: {
        type: MySql.STRING
    },
    budget: {
        type: MySql.STRING
    },
    contact_email: {
        type: MySql.STRING
    },
    username : {
        type: MySql.STRING
    },
    password: {
        type: MySql.STRING
    }

})

Job.sync().then(() => {
    console.log('\ntable jobs created\n');
});
  
module.exports = Job