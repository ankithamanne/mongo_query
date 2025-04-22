db.posts.insertOne({
    title: "This a title 2",
    desc: "Sample desc of title 2",
    author: {
        name: "Mike",
        email: "mike@email.com",
    },
});

//display all the posts
db.posts.find();

//display all the posts by cathy
db.posts.find(
    {"author.email": "cathy@email.com"},
    {_id: 0, "author.name":1, title:1, desc:1}
);

//
db.posts.drop()


db.authors.insertOne({
    name: "Cathy",
    email: "cathy@email.com"
});

db.posts.insertOne({
    title: "This is title 1",
    desc: "Description of title 1",
    authorId:ObjectId('6807184f854fa81495b5f89d')
})

//need lookup operatiion

//schema validation
//db.careteCollection("customers", {validator:{}})
db.createCollection("customers",{
    validator:{
        $jsonSchema:{
            bsonType:"object",
            required:["name", "email"],
            properties: {
                name: {
                    bsonType: "string",
                    description: "must be string and required",
                },
            },
        },
    },
});

//insert document
db.customers.insertOne({
    name: "Shawn",
    email: "shawn@email.com",
    age: 12,
});