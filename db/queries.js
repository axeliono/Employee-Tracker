const connection = require("./connection");

const viewDepartmentQuery = () => {
  const query = connection.query(
    "SELECT * FROM departments",
    function (err, res) {
      if (err) throw err;
      console.table(res.affectedRows);
    }
  );
  console.log(query.sql);
};

module.exports = {
  viewDepartmentQuery,
};
