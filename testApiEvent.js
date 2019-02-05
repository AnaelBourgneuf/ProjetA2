var chakram = require('chakram'),
    expect = chakram.expect


var Promo = {id: 1, name: 'Dev-A2', alias: 'Autistart+'}
var User = {id: 1, firstName: 'Roger', name: 'Duchamp', birthD: '12/12/1212', alias: "Roger's", promo: Promo, mail: 'prenom.nom@imie.fr', isAdmin: false}
var Event = {id: 1, title: "Jour de l'an", dateTime: "01/01/2019", createDateTime: '01/12/2018', users: [User]}
var Idea = {id: 1, title: "Mon idée1", text: "Blablabla Blablabla Blablabla", dateTime: "9/12/2018 11:11:02", user: User}





describe("HTTP assertions", function () {
  it("It should return event list with events ", function () {
    var response = chakram.get("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Events");
    expect(response).to.have.status(200);
    expect(response).to.have.header("content-type", "application/json"); 
    expect(response).to.have.schema(expectedUserSchema);
    expect(response).to.have.json('[0]', expectedUserData);
    return chakram.wait();
  });
});

describe("HTTP assertions", function () {
  it("It should return an event ", function () {
    var response = chakram.get("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Events/1");
    expect(response).to.have.status(200);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedUserSchema);
    expect(response).to.have.json(expectedUserData);
    return chakram.wait();
  });
});

describe("HTTP assertions", function () {
  it("It should return a created event ", function () {
    var response = chakram.post("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Events/new", Event);
    expect(response).to.have.status(201);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedUserSchema);
    expect(response).to.have.json(expectedUserData);
    return chakram.wait();
  });
});

describe("HTTP assertions", function () {
  it("It should return an updated event ", function () {
    var response = chakram.put("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Events/update/1", Event);
    expect(response).to.have.status(202);
    expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedUserSchema);
    expect(response).to.have.json(expectedUserData);
    return chakram.wait();
  });
});

describe("HTTP assertions", function () {
  it("It should return deleted an event ", function () {
    var response = chakram.delete("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Events/delete/1", );
    expect(response).to.have.status(200);
    expect(response).to.have.header("content-type", "application/json");
    return chakram.wait();
  });
});