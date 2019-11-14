exports.seed = function(knex) {
  // // Deletes ALL existing entries
  // return knex('table_name').del()
  //   .then(function () {
  //     // Inserts seed entries
  return knex("users").insert([
    {
      email: "email1",
      name: "testing",
      password: "pass",
      phone_number: "35123512"
    },
    {
      email: "email2",
      name: "testing",
      password: "pass",
      phone_number: "35123512"
    },
    {
      email: "email3",
      name: "testing",
      password: "pass",
      phone_number: "35123512"
    }
  ]);
  // });
};
