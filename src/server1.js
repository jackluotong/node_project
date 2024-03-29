/*
 * @Description:
 * @Date: 2022-09-19 22:20:15
 * @FilePath: \node_project\src\server1.js
 * @LastEditTime: 2022-09-19 22:36:36
 */
const express = require('express');
const app = express();

app.use((request, response, next) => {
  console.log('有人请求服务器1了');
  console.log('请求来自于', request.get('Host'));
  console.log('请求的地址', request.url);
  next();
});

app.get('/students', (request, response) => {
  const students = [
    { id: '001students', name: 'tom', age: 18 },
    { id: '002', name: 'jerry', age: 19 },
    { id: '004', name: 'tony', age: 120 },
  ];
  response.send(students);
});
app.get('/man', (request, response) => {
  const man = {
    code: 000,
    data: [{ id: '01', name: 'jerry', man: true }],
  };
  response.send(man);
});
app.listen(5000, (err) => {
  if (!err)
    console.log(
      '服务器1启动成功了,请求学生信息地址为：http://localhost:5000/students'
    );
});
