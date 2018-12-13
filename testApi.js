var chakram = require('chakram'),
    expect = chakram.expect


//------------------------------------------------------------------------------------------------
//                        Declaration de variables utiles
//------------------------------------------------------------------------------------------------

var PromoData = {id: 1, name: 'Dev-A2', alias: 'Autistart+'}
var UserData = {id: 1, firstName: 'Roger', name: 'Duchamp', birthD: '12/12/1212', alias: "Roger's", promo: Promo, mail: 'prenom.nom@imie.fr', isAdmin: false}
var EventData = {id: 1, title: "Jour de l'an", dateTime: "01/01/2019", createDateTime: '01/12/2018', users: [User]}
var IdeaData = {id: 1, title: "Mon idée1", text: "Blablabla Blablabla Blablabla", dateTime: "9/12/2018 11:11:02", user: User}

var expectedPromoSchema = {type: 'object', properties: {ID: {type: 'integer'}, Name: {type: 'string'}, Alias:{type: 'string'}}}
var expectedUserSchema = {type: 'object', properties: {id: {type: 'integer'}, firstName: {type: 'string'}, name:{type: 'string'}, birthD:{type: 'string'}, alias:{type: 'string'}, promo: expectedPromoSchema,mail:{type: 'string'},isAdmin:{type: 'boolean'}}}
var expectedIdeaSchema = {type: 'object', properties: {id: {type: 'integer'}, title: {type: 'string'}, text:{type: 'string'}, dateTime:{type: 'string'}, user: expectedUserSchema}}
var expectedEventSchema = {type: 'object', properties: {id: {type: 'integer'}, title: {type: 'string'}, dateTime: {type: "string"}, createDateTime: {type: 'string'}, users: {type: 'array', items: {user: expectedUserSchema, joinDateTime: {type: 'string'}}}}}



//------------------------------------------------------------------------------------------------
//                              Tests sur /Users
//------------------------------------------------------------------------------------------------


//          Retrive all Users
//--------------------------------
describe("HTTP assertions", function () {
  it("It should return HTTP_200 : list with users ", function () {
    var response = chakram.get("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Users");
    expect(response).to.have.status(200);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(Users: {type: 'array', items: {user: expectedIdeaSchema}});
    expect(response).to.have.json('[0]', UserData);
    return chakram.wait();
  });
});

//          Retrive one User
//--------------------------------
describe("HTTP assertions", function () {
  it("It should return HTTP_200 : user ", function () {
    var response = chakram.get("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Users/1");
    expect(response).to.have.status(200);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedUserSchema);
    expect(response).to.have.json(UserData);
    return chakram.wait();
  });
});

//          Add one User
//--------------------------------
describe("HTTP assertions", function () {
  it("It should return HTTP_200 : user ", function () {
    var response = chakram.post("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Users/new", User);
    expect(response).to.have.status(201);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(UserSchema);
    expect(response).to.have.json(UserData);
    return chakram.wait();
  });
});

//          Update one User
//--------------------------------
describe("HTTP assertions", function () {
  it("It should return HTTP_202 : user ", function () {
    var response = chakram.put("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Users/update/1", User);
    expect(response).to.have.status(202);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(UserSchema);
    expect(response).to.have.json(UserData);
    return chakram.wait();
  });
});

//          Delete one User
//--------------------------------
describe("HTTP assertions", function () {
  it("It should return HTTP_200", function () {
    var response = chakram.delete("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Users/delete/1");
    expect(response).to.have.status(200);
    expect(response).to.have.header("content-type", "application/json");
    return chakram.wait();
  });
});








//------------------------------------------------------------------------------------------------
//                        Tests sur /Ideas
//------------------------------------------------------------------------------------------------


//          Retrive all Ideas
//--------------------------------
describe("HTTP assertions", function () {
  it("It should return HTTP_200 : list with ideas ", function () {
    var response = chakram.get("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Ideas");
    expect(response).to.have.status(200);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(Ideas: {type: 'array', items: {idea: expectedIdeaSchema}});
    expect(response).to.have.json('[0]', IdeaData);
    return chakram.wait();
  });
});

//          Retrive one Idea
//--------------------------------
describe("HTTP assertions", function () {
  it("It should return HTTP_200 : idea ", function () {
    var response = chakram.get("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Ideas/1");
    expect(response).to.have.status(200);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedIdeaSchema);
    expect(response).to.have.json(IdeaData);
    return chakram.wait();
  });
});

//          Add one Idea
//--------------------------------
describe("HTTP assertions", function () {
  it("It should return HTTP_200 : idea ", function () {
    var response = chakram.post("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Ideas/new", Idea);
    expect(response).to.have.status(201);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedIdeaSchema);
    expect(response).to.have.json(IdeaData);
    return chakram.wait();
  });
});

//          Update one User
//--------------------------------
describe("HTTP assertions", function () {
  it("It should return HTTP_202 : user ", function () {
    var response = chakram.put("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Ideas/update/1", Idea);
    expect(response).to.have.status(202);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedIdeaSchema);
    expect(response).to.have.json(IdeaData);
    return chakram.wait();
  });
});

//          Delete one User
//--------------------------------
describe("HTTP assertions", function () {
  it("It should return HTTP_200", function () {
    var response = chakram.delete("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Ideas/delete/1");
    expect(response).to.have.status(200);
    expect(response).to.have.header("content-type", "application/json");
    return chakram.wait();
  });
});