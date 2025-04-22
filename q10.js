db.employees.updateOne({ email: "mike@gmail.com" }, { $set: { salary: 1600 } });

db.employees.updateOne({}, { $set: { org: "Wipro" } });
db.employees.updateMany({}, { $set: { org: "Wipro" } });

db.employees.updateOne(
  { email: "brian@gmail.com" },
  { $set: { org: "Wipro" } },
  { upsert: true }
);

db.employees.find(
  { department: { $in: ["HR", "IT"] } }
);

db.employees.find(
  { department: { $nin: ["HR", "IT"] } }
);