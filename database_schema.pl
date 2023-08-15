show dbs;
use clubcoord;

db.createCollection("clubs", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "description", "coordinator", "events", "email", "members", "creationDate"],
      properties: {
        name: { bsonType: "string" },
        description: { bsonType: "string" },
        coordinator: { bsonType: "string" },
        events: {
          bsonType: "array",
          items: { bsonType: "string" }
        },
        email: { bsonType: "string" },
        members: {
          bsonType: "array",
          items: { bsonType: "string" }
        },
        creationDate: { bsonType: "string" }
      }
    }
  }
})

db.createCollection("events", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "description", "domain", "start", "end", "venue", "coordinator", "status", "registrationDeadline", "club", "participants", "creationDate"],
      properties: {
        name: { bsonType: "string" },
        description: { bsonType: "string" },
        domain: { bsonType: "string" },
        start: { bsonType: "string" },
        end: { bsonType: "string" },
        venue: { bsonType: "string" },
        coordinator: { bsonType: "string" },
        status: { bsonType: "string" },
        registrationDeadline: { bsonType: "string" },
        club: { bsonType: "string" },
        participants: {
          bsonType: "array",
          items: { bsonType: "string" }
        },
        creationDate: { bsonType: "string" }
      }
    }
  }
})

db.users.insertOne({
  name: "Akanksha Singal",
  email: "akanksha21008@iiitd.ac.in",
  level: "Student"
})

db.users.insertOne({
  name: "Astronuts Club",
  email: "astronuts@sc.iiitd.ac.in",
  level: "Club Coordinator"
})