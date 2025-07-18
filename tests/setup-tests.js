let server;
const fs = require('fs');
const path = require('path');

beforeEach(function(done) {
  // Нулиране на students.json
  const originalStudents = [
    {"name" : "Steve", "email" : "steve@gmail.com"},
    {"name" : "Tina", "email" : "tina@yahoo.com"}
  ];
  fs.writeFileSync(
    path.join(__dirname, '../models/students.json'),
    JSON.stringify(originalStudents, null, 2)
  );

  // Стартиране на сървъра
  const express = require('express');
  const app = express();
  server = require('http').createServer(app);
  app.set('view engine', 'pug');
  app.use(require('body-parser').urlencoded({extended:true}));
  const studentsController = require("../controllers/students-controller");
  // Презареждам students-масива от файла
  let students = require("../models/students-model");
  studentsController.setup(app, students);
  server.listen(8888, done);
});

afterEach(function(done) {
  server.close(done);
  // Изчистване на require cache, за да се презареди students.json следващия път
  delete require.cache[require.resolve("../models/students-model")];
});
