const mysql = require('mysql')
const { connect } = require('http2')

const connection = mysql.createConnection(
    {
        host : 'database-1.cfxtcmls0tk9.ap-northeast-2.rds.amazonaws.com',
        user : 'node_user',
        database : 'my_test',
        password : 'dl871018'
    }
)

module.exports = connection



