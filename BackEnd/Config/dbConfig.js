const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "localhost",
    user: "root",
    password: "Neetu@#123",
    database: "food_menu"
  }
});

knex.schema.createTable("user", (table) => {
  table.increments("id");
  table.string("userName");
  table.string("password").notNullable().unique();
  table.string("email").notNullable().unique();
  table.string("phoneNo");
  table.timestamp("createAt").defaultTo(knex.fn.now());
}).then((result) => {
  console.log("Users table has created successfully!");
}).catch((err) => {
  // console.log(err);
});

knex.schema.createTable("menu", (table) => {
  table.increments("id");
  table.string("userId");
  table.string("foodItems");
  table.string("ratePerItem");
  table.timestamp("createAt").defaultTo(knex.fn.now());
}).then(() => {
  console.log("Menu table created successfully!");
}).catch((err) => {
  // console.log(err);
})

knex.schema.createTable("Foodstorage", (table) => {
  table.increments("id").notNullable();
  table.string("user_id").notNullable();
  table.string("foodtype").notNullable();
  table.string("imageURL").notNullable();
  table.string("foodName").notNullable();
  table.string("foodinfo").notNullable();
  table.string("price").notNullable();
  table.timestamp("create_at").defaultTo(knex.fn.now());
})
  .then((result) => {
    console.log("table Foodstorage created");
  })
  .catch((err) => {
    // console.log(err);
  });


knex.schema.createTable("foodOrder", (table) => {
  table.increments("id");
  table.string("user_id").notNullable();
  table.string("foodId").notNullable();
  table.string("price");
  table.timestamp("create_at").defaultTo(knex.fn.now());
})
  .then((result) => {
    console.log("Table foodOerder created");
  })
  .catch((err) => {
    // console.log(err);
  });

module.exports = knex;