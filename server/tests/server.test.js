const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

var {app} = require('./../server');
var {Todo} = require('./../models/todo');

const todos = [
  {
    _id: new ObjectID(),
    text: "first test todo"
  },
  {
    _id: new ObjectID(),
    text: "second test todo",
    completed: true,
    completedAt: 333
  }
];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST /todos', () => {
  it('Should create a new todo', (done) => {
    var text = 'some text';

    request(app)
      .post('/todos')
      .send({text})
      .expect(200)
      .expect((req) => {
        expect(req.body.text).toBe(text)
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find({text}).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });

  it('Should not create todo with invalid body data', (done) => {

    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err)
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      })

  });
});

describe('GET /todos', () => {
  it('Should get all todos', (done) => {

    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});

describe('GET /todos/:id', () => {
  it('Should return todo doc', (done) => {
    request(app)
      .get(`/todos/${todos[0]._id.toHexString()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(todos[0].text)
      })
      .end(done);
  });

  it('Should return 404 if todo not found', (done) => {
    var hexId = new ObjectID().toHexString();

    request(app)
      .get(`/todos/${hexId}`)
      .expect(404)
      .end(done);
  });

  it('Should return 404 if non-object id', (done) => {
    var invalidId = 123;

    request(app)
      .get(`/todos/${invalidId}`)
      .expect(404)
      .end(done);
  });
});

describe('DELETE /todos/:id', () => {
  it('Should remove a todo', (done) => {
    var hexId = todos[0]._id.toHexString();

    request(app)
      .delete(`/todos/${hexId}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo._id).toBe(hexId);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.findById(hexId).then((todo) => {
          expect(todo).toNotExist();
          done();
        }).catch((e) => done(e));
      });
  });

  it('Should return 404 if todo not found', (done) => {
    var hexId = new ObjectID().toHexString();

    request(app)
      .delete(`/todos/${hexId}`)
      .expect(404)
      .end(done);

  });

  it('Should return 404 if non-object id', (done) => {
    var id = 123;

    request(app)
      .delete(`/todos/${id}`)
      .expect(404)
      .end(done);
  });
});

describe('PATCH /todos/:id', () => {

  it('Should update the todo', (done) => {
    var id = todos[0]._id.toHexString();

    var newBody = {
      text: 'new text',
      completed: true
    };

    request(app)
      .patch(`/todos/${id}`)
      .send(newBody)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(newBody.text);
        expect(res.body.todo.completed).toBe(newBody.completed);
        expect(res.body.todo.completedAt).toBeA('number');
      })
      .end(done)
  });

  it('Should nullify completedAt if not completed', (done) => {
    var id = todos[1]._id.toHexString();

    var newBody = {
      text: "gyuasgd",
      completed: false
    };

    request(app)
      .patch(`/todos/${id}`)
      .send(newBody)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(newBody.text),
        expect(res.body.todo.completed).toBe(false),
        expect(res.body.todo.completedAt).toNotExist()
      })
      .end(done);
  });

  it('Should return 404 if todo not found', (done) => {
    var hexId = new ObjectID().toHexString();

    request(app)
      .patch(`/todos/${hexId}`)
      .expect(404)
      .end(done);

  });

  it('Should return 404 if non-object id', (done) => {
    var id = 123;

    request(app)
      .patch(`/todos/${id}`)
      .expect(404)
      .end(done);
  });
});



























































