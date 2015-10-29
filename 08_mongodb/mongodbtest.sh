// 전체 삭제
db.users.drop()

// Insert (Create)
db.users.insert({name: 'Kim', age: 30, tel: '555-6666', gender: 'm'})
db.users.insert({name: 'Lee', age: 22, tel: '444-6666', gender: 'm'})
db.users.insert({name: 'Cho', age: 23, tel: '222-2222', gender: 'm'})
db.users.insert({name: 'Park', age: 43, gender: 'f', scores: [100, 200, 600]})
db.users.insert({name: 'Choi', age: 26, gender: 'f', department: {name: 'CS', loc: 'Yongin'}})

// Query (Read)
db.users.find()
db.users.find({gender: 'm'})
db.users.find({name: { $in: ['Park', 'Choi']}})
db.users.find({gender: 'm', age: { $gt: 25}})
db.users.find({$or: [{age: {$lte: 23}}, {gender: 'f'}]})

db.users.find({scores: 200})
db.users.find({'department.name': 'CS'})

// Modify (Update)
db.users.update({name: 'Lee'}, {$set: {age: 23}})
db.users.update({name: 'Cho'}, {name: 'Choo', age: 40, scores: [100, 200]})
db.users.update({name: 'Jay'}, {name: 'Jay', gender: 'm', age: 50}, {upsert: true})
db.users.update({name: 'Jay'}, {name: 'Jay', gender: 'f', age: 25}, {upsert: true})
db.users.update({name: 'Choo'}, {$set: {gender: 'f'}})
db.users.update({name: 'Lee'}, {$unset: {tel: 1}})

// Remove (Delete)
db.users.count()
db.users.remove({name: 'Choi'})
db.users.count()

// Aggregate
db.users.find()
db.users.aggregate([
  {$match: {age: {$gt: 23}}},
  {$group: {_id: "$gender", cnt: {$sum: 1} }},
  {$sort: {cnt: -1}}
])
