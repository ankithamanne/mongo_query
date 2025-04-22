//Aggregation Framework

db.employees.aggregate([
    {$match:{ department:"IT" }},
    {$project:{_id: 0, name:1, salary:1}},
]);


db.employees.aggregate([
    {$project:{_id: 0, name:1, salary:1}},
]);

db.employees.aggregate([
    { $addFields: {Bonus: { $multiply: ["$salary", 2]}}},
]);


db.employees.aggregate([
    {
        $project:{
            _id: 0,
            name:1,
            salary:1, 
        },
    },
]);




