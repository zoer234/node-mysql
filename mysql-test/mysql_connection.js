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


// 1-1 문제 
query = 'select first_name , title , grade from papers as p join students as s on s.id = p.student_id order by grade desc'

