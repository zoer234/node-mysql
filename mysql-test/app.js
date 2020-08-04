// 이거는 살려둬야함
const connection = require('./mysql_connection.js')



// let query = 'select * from memo'

// connection.query(query , function (error , results , fields) {
    //console.log(results)
//})

// 1-1 문제 

// let query = 'select first_name , title , grade from papers as p join students as s on s.id = p.student_id order by grade desc'

// 2-2 문제

//query = 'select first_name , title , grade from students as s left join papers as p on p.student_id = s.id'


// connection.query(query, function(error, results, fields){        
//     console.log(results)    
//     })

// 3-3 문제

//query = 'select first_name , ifnull(title , "MISSING" ) as title , ifnull(grade) as grade from students as s left join papers as p on p.student_id = s.id'

// 3-4 문제 

query = 'select first_name , avg(grade) as average from students as s left join papers as p on s.id = p.student_id group by first_name order by average desc'

connection.query(query, function(error, results, fields){        
    console.log(results)    
    })


connection.end()



