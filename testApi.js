var chakram = require('chakram'),
    expect = chakram.expect


//------------------------------------------------------------------------------------------------
//                        Declaration de variables utiles
//------------------------------------------------------------------------------------------------

var PromoData = {id: 1, name: 'Dev-A2', alias: 'Autistart+'}
var UserData = {id: 1, firstName: 'Roger', name: 'Duchamp', birthD: '12/12/1212', alias: "Roger's", promo: PromoData, mail: 'prenom.nom@imie.fr', isAdmin: false}
var EventData = {id: 1, title: "Jour de l'an", dateTime: "01/01/2019", createDateTime: '01/12/2018', users: [UserData]}
var IdeaData = {id: 1, title: "Mon idée1", text: "Blablabla Blablabla Blablabla", dateTime: "9/12/2018 11:11:02", user: UserData}

var expectedPromoSchema = {type: 'object', properties: {ID: {type: 'integer'}, Name: {type: 'string'}, Alias:{type: 'string'}}}
var expectedUserSchema = {type: 'object', properties: {id: {type: 'integer'}, firstName: {type: 'string'}, name:{type: 'string'}, birthD:{type: 'string'}, alias:{type: 'string'}, promo: expectedPromoSchema,mail:{type: 'string'},isAdmin:{type: 'boolean'}}}
var expectedEventSchema = {type: 'object', properties: {id: {type: 'integer'}, title: {type: 'string'}, text:{type: 'string'}, dateTime:{type: 'string'}, user: expectedUserSchema}}
var expectedIdeaSchema = {type: 'object', properties: {id: {type: 'integer'}, title: {type: 'string'}, dateTime: {type: "string"}, createDateTime: {type: 'string'}, users: {type: 'array', items: {user: expectedUserSchema, joinDateTime: {type: 'string'}}}}}



//------------------------------------------------------------------------------------------------
//                              Tests sur /Users
//------------------------------------------------------------------------------------------------


//          Retrive all Users
//--------------------------------
describe("HTTP assertions : Retrive all Users", function () {
  it("It should return HTTP_200 : list with users ", function () {
    var response = chakram.get("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Users");
    expect(response).to.have.status(200);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema({Users: {type: 'array', items: {user: expectedIdeaSchema}}});
    expect(response).to.have.json('[0]', UserData);
    return chakram.wait();
  });
});

//          Retrive one User
//--------------------------------
describe("HTTP assertions : Retrive one User", function () {
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
describe("HTTP assertions : Add one User", function () {
  it("It should return HTTP_200 : user ", function () {
    var response = chakram.post("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Users/new", UserData);
    expect(response).to.have.status(201);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedUserSchema);
    expect(response).to.have.json(UserData);
    return chakram.wait();
  });
});

//          Update one User
//--------------------------------
describe("HTTP assertions : Update one User", function () {
  it("It should return HTTP_202 : user ", function () {
    var response = chakram.put("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Users/update/1", UserData);
    expect(response).to.have.status(202);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedUserSchema);
    expect(response).to.have.json(UserData);
    return chakram.wait();
  });
});

//          Delete one User
//--------------------------------
describe("HTTP assertions : Delete one User", function () {
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
describe("HTTP assertions : Retrive all Ideas", function () {
  it("It should return HTTP_200 : list with ideas ", function () {
    var response = chakram.get("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Ideas");
    expect(response).to.have.status(200);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema({Ideas: {type: 'array', items: {idea: expectedIdeaSchema}}});
    expect(response).to.have.json('[0]', IdeaData);
    return chakram.wait();
  });
});

//          Retrive one Idea
//--------------------------------
describe("HTTP assertions : Retrive one Idea", function () {
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
describe("HTTP assertions : Add one Idea", function () {
  it("It should return HTTP_200 : idea ", function () {
    var response = chakram.post("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Ideas/new", IdeaData);
    expect(response).to.have.status(201);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedIdeaSchema);
    expect(response).to.have.json(IdeaData);
    return chakram.wait();
  });
});

//          Update one Idea
//--------------------------------
describe("HTTP assertions : Update one Idea", function () {
  it("It should return HTTP_202 : idea ", function () {
    var response = chakram.put("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Ideas/update/1", IdeaData);
    expect(response).to.have.status(202);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedIdeaSchema);
    expect(response).to.have.json(IdeaData);
    return chakram.wait();
  });
});

//          Delete one Idea
//--------------------------------
describe("HTTP assertions : Delete one Idea", function () {
  it("It should return HTTP_200", function () {
    var response = chakram.delete("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Ideas/delete/1");
    expect(response).to.have.status(200);
    expect(response).to.have.header("content-type", "application/json");
    return chakram.wait();
  });
});










//------------------------------------------------------------------------------------------------
//                        Tests sur /Promos
//------------------------------------------------------------------------------------------------


//          Retrive all Promos
//--------------------------------
describe("HTTP assertions : Retrive all Promos", function () {
  it("It should return HTTP_200 : list with promos ", function () {
    var response = chakram.get("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Promos");
    expect(response).to.have.status(200);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema({Promos: {type: 'array', items: {promo: expectedPromoSchema}}});
    expect(response).to.have.json('[0]', PromoData);
    return chakram.wait();
  });
});

//          Retrive one Promo
//--------------------------------
describe("HTTP assertions : Retrive one Promo", function () {
  it("It should return HTTP_200 : promo ", function () {
    var response = chakram.get("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Promos/1");
    expect(response).to.have.status(200);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedPromoSchema);
    expect(response).to.have.json(PromoData);
    return chakram.wait();
  });
});

//          Add one Promo
//--------------------------------
describe("HTTP assertions : Add one Promo", function () {
  it("It should return HTTP_200 : promo ", function () {
    var response = chakram.post("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Promos/new", PromoData);
    expect(response).to.have.status(201);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedPromoSchema);
    expect(response).to.have.json(PromoData);
    return chakram.wait();
  });
});

//          Update one Promo
//--------------------------------
describe("HTTP assertions : Update one Promo", function () {
  it("It should return HTTP_202 : promo ", function () {
    var response = chakram.put("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Promos/update/1", PromoData);
    expect(response).to.have.status(202);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedPromoSchema);
    expect(response).to.have.json(PromoData);
    return chakram.wait();
  });
});

//          Delete one Promo
//--------------------------------
describe("HTTP assertions : Delete one Promo", function () {
  it("It should return HTTP_200", function () {
    var response = chakram.delete("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Promos/delete/1");
    expect(response).to.have.status(200);
    expect(response).to.have.header("content-type", "application/json");
    return chakram.wait();
  });
});