# basic-api-server

Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a database, using the REST standard

## Task Submission

1. [PR Link](https://github.com/karamalqinneh/basic-api-server/pull/6)
2. [Deployment Link](https://karam-basic-api-server.herokuapp.com/)

## Task Notes

1. To use sequelize first create a function that takes two arguments (The sequelize instance, DataTypes 'A built in method that will be used to define what's the type of the input for the column')

2. use `sequelize.define("tableName",{an object that has all the columns data}`

3. The object data is defined as the following example:

```

{
    firstProp: {
      type: dataTypes.STRING,
      allowNull: false,
      and there is many more to specify use the documentation to check them
    },
    secondPropName: {
      type: dataTypes.STRING,
      // allowNull: false,
    },
    .
    .
    .
    .
    ..

  }
```

4. export the function

5. install the sequelize package usuing `npm i pg sequelize` note that you have to install pg also as this package uses pg.

6. In the models Index initialize `const { Sequelize, DataTypes } = require("sequelize");`

7. Import your models

8. Instantiate Sequelize `new Sequelize(POSTGRES_URL, sequelizeOptions"will contain the connection options");`

9. Export your database and any created tables to use ex:

```

module.exports = {
  database: sequelize,
  User: user(sequelize, DataTypes),
  // User: "testing",
  Clothes: clothes(sequelize, DataTypes),
};

```

10. Where you need to use these tables (usually route handlers) import the needed table ex: `const { User } = require("../models/index"); `

11. To manipulate the table there are several methods to use:

    1. .findAll(): returns all the table data
    2. .findOne({where: {what are querying for}})
    3. .create(what you want to create)
    4. .destroy({where: {what are querying for}})

12. I your main index for the server import the database you exported in point nine and use it to start the server by applying the .sync() method whick returns a promise ex:

```

database.sync().then(() => {
  server.start(process.env.PORT || 5050);
});

```
