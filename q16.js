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
            grade:{
                //cond:[condition, if-true, if-false]
                $cond:[{
                    $gte:["$salary", 1500]}, //gte = greater than or equal to
                    "Grade A", 
                    "Grade B"],
            },
        },
    },
]);


db.employees.aggregate([
    {
        $project:{
            _id: 0,
            name:1,
            salary:1, 
            grade:{
                //cond:[if,then,else]
                $cond:{
                    if:{$gte:["$salary", 1500]},
                    then:"Grade A",
                    else:"Grade B",
                }
            },
        },
    },
]);


db.employees.aggregate([
    {
        $project:{
            _id: 0,
            name:1,
            salary:1, 
            grade:{
                $switch:{
                    branches:[
                        {case: { $gte:["$salary", 1500]},then:"Grade A"},
                        {case: { $lt:["$salary", 1500]},then:"Grade B"}, //lt = less than
                    ],
                    default: "Unknwon",
                },
            },
        },
    },
]);




