db.employees.find(
    { email:"cathy@email.com" })
    .explain("executionStats");

db.employees.createIndex({email:1})

db.employees.find(
    { name: "Cathy George"})
    .explain("executionStats");

db.employees.createIndex

db.employees.getIndexes()

db.employees.dropIndexes() // all indexes

db.employees.dropIndex("name_1") //paticulat index
