exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      //USERS TABLE
      tbl.increments();

      tbl
        .string("email")
        .unique()
        .notNullable();
      tbl.string("name").notNullable();
      tbl.string("password").notNullable();
      tbl.string("phone_number").notNullable();
    })
    .createTable("projects", tbl => {
      tbl.increments();

      tbl
        .string("project_name")
        .unique()
        .notNullable();
      tbl.integer("baths");
      tbl.integer("beds");
      tbl.string("city");
      tbl.string("imageURL");
      tbl.integer("square_ft");
      tbl.string("state");
      tbl.string("status");
      tbl.string("street_address");
      tbl.integer("zip_code");
    });
};

exports.down = function(knex) {
  return knex.scheme.dropTableIfExists("users");
};
