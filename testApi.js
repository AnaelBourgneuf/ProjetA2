var chakram = require('chakram'),
    expect = chakram.expect
//var mocha = require('mocha').current


//------------------------------------------------------------------------------------------------
//                        Declaration de variables utiles
//------------------------------------------------------------------------------------------------

var PromosData = [
  { id: '3651ac54-d393-495b-b2ae-a26616de3fc4', name: 'IT-Start', alias: null},
  { id: 'b66245cd-c1db-48dc-8c26-1c3ef8349175', name: 'Dev-A2', alias: null},
  { id: '488351f0-699a-4828-adba-4275c954efdb', name: 'Dev-A3', alias: null}
]
var UsersData = [
  { id: '3651ac54-d393-495b-b2ae-a26616de3fc4', firstName: 'Alice', name: 'Duvent', gender: 'female', birthD: new Date().setFullYear(1995, 11, 3), alias: "Lice", promo: "b66245cd-c1db-48dc-8c26-1c3ef8349175", email: "alice.apdm@gmail.com", isAdmin: false},
  { id: 'b66245cd-c1db-48dc-8c26-1c3ef8349175', firstName: 'Bob', name: 'Leponge', gender: 'male', birthD: new Date().setFullYear(1990, 3, 1), alias: null, promo: "b66245cd-c1db-48dc-8c26-1c3ef8349175", email: "bob.leponge@gmail.com", isAdmin: false},
  { id: '488351f0-699a-4828-adba-4275c954efdb', firstName: 'Charlie', name: 'Ouest', gender: 'male', birthD: new Date().setFullYear(2001, 9, 30), alias: "Charlot", promo: "b66245cd-c1db-48dc-8c26-1c3ef8349175", email: "charlie.ouest@gmail.com", isAdmin: false},
]
var EventsData = [
  { id: '3651ac54-d393-495b-b2ae-a26616de3fc4', title: 'Pokemon Go', dateTime: new Date('February 8, 2019 10:30:00'), createDateTime: new Date('January 18, 2019 10:10:00'), creator: "3651ac54-d393-495b-b2ae-a26616de3fc4", users: [{user: "3651ac54-d393-495b-b2ae-a26616de3fc4", joinDateTime: new Date('February 3, 2019 10:9:00')},{user: "b66245cd-c1db-48dc-8c26-1c3ef8349175", joinDateTime: new Date('February 3, 2019 10:9:00')}]},
  { id: 'b66245cd-c1db-48dc-8c26-1c3ef8349175', title: 'Pizza', dateTime: new Date('March 10, 2019 10:10:00'), createDateTime: new Date('January 3, 2019 13:45:00'), creator: "3651ac54-d393-495b-b2ae-a26616de3fc4", users: [{user: "3651ac54-d393-495b-b2ae-a26616de3fc4", joinDateTime: new Date('February 3, 2019 10:9:00')} ,{user: "b66245cd-c1db-48dc-8c26-1c3ef8349175", joinDateTime: new Date('February 3, 2019 10:9:00')}]},
  { id: '488351f0-699a-4828-adba-4275c954efdb', title: 'KFC du Mardi', dateTime: new Date('February 5, 2019 10:9:00'), createDateTime: new Date('January 5, 2019 16:00:00'), creator: "3651ac54-d393-495b-b2ae-a26616de3fc4", users: [{user: "3651ac54-d393-495b-b2ae-a26616de3fc4", joinDateTime: new Date('February 3, 2019 10:9:00')} ,{user: "b66245cd-c1db-48dc-8c26-1c3ef8349175", joinDateTime: new Date('February 3, 2019 10:9:00')}]}
]
var IdeasData = [
  { id: '3651ac54-d393-495b-b2ae-a26616de3fc4', title: 'idea1', text: 'texte idea 1', dateTime: new Date('March 10, 2019 10:10:00'), creator: '3651ac54-d393-495b-b2ae-a26616de3fc4'},
  { id: 'b66245cd-c1db-48dc-8c26-1c3ef8349175', title: 'idea2', text: 'texte idea 2', dateTime: new Date('March 12, 2019 12:30:00'), creator: '3651ac54-d393-495b-b2ae-a26616de3fc4'},
  { id: '488351f0-699a-4828-adba-4275c954efdb', title: 'idea3', text: 'texte idea 3', dateTime: new Date('March 1, 2019 09:00:00'), creator: '3651ac54-d393-495b-b2ae-a26616de3fc4'}
]
var ReviewsData = [
  { id: '3651ac54-d393-495b-b2ae-a26616de3fc4', title: 'Module API', dateTime: new Date('March 10, 2019 10:10:00'), adress: 'http://www.google.com/', promo: '3651ac54-d393-495b-b2ae-a26616de3fc4'}
]

var PromoData = { id: '3651ac54-d393-495b-b2ae-a26616de3fc4', name: 'IT-Start', alias: null}
var UserData = { id: '3651ac54-d393-495b-b2ae-a26616de3fc4', firstName: 'Alice', name: 'Duvent', gender: 'female', birthD: new Date().setFullYear(1995, 11, 3), alias: "Lice", promo: "b66245cd-c1db-48dc-8c26-1c3ef8349175", email: "alice.apdm@gmail.com", isAdmin: false}
var EventData = { id: '3651ac54-d393-495b-b2ae-a26616de3fc4', title: 'Pokemon Go', dateTime: new Date('February 8, 2019 10:30:00'), createDateTime: new Date('January 18, 2019 10:10:00'), creator: "3651ac54-d393-495b-b2ae-a26616de3fc4", users: [{user: "3651ac54-d393-495b-b2ae-a26616de3fc4", joinDateTime: new Date('February 3, 2019 10:9:00')},{user: "b66245cd-c1db-48dc-8c26-1c3ef8349175", joinDateTime: new Date('February 3, 2019 10:9:00')}]}
var IdeaData = { id: '3651ac54-d393-495b-b2ae-a26616de3fc4', title: 'idea1', text: 'texte idea 1', dateTime: new Date('March 10, 2019 10:10:00'), creator: '3651ac54-d393-495b-b2ae-a26616de3fc4'}
var ReviewData = { id: '3651ac54-d393-495b-b2ae-a26616de3fc4', title: 'Module API', dateTime: new Date('March 10, 2019 10:10:00'), adress: 'http://www.google.com/', promo: '3651ac54-d393-495b-b2ae-a26616de3fc4'}

var expectedPromosSchema = [
    {type: 'object', properties: {ID: {type: 'integer'}, Name: {type: 'string'}, Alias:{type: 'string'}}},
    {type: 'object', properties: {ID: {type: 'integer'}, Name: {type: 'string'}, Alias:{type: 'string'}}},
    {type: 'object', properties: {ID: {type: 'integer'}, Name: {type: 'string'}, Alias:{type: 'string'}}}
]
var expectedUsersSchema = [
    {type: 'object', properties: {id: {type: 'integer'}, firstName: {type: 'string'}, name:{type: 'string'}, birthD:{type: 'string'}, alias:{type: 'string'}, promo: {type: 'integer'},mail:{type: 'string'},isAdmin:{type: 'boolean'}}},
    {type: 'object', properties: {id: {type: 'integer'}, firstName: {type: 'string'}, name:{type: 'string'}, birthD:{type: 'string'}, alias:{type: 'string'}, promo: {type: 'integer'},mail:{type: 'string'},isAdmin:{type: 'boolean'}}},
    {type: 'object', properties: {id: {type: 'integer'}, firstName: {type: 'string'}, name:{type: 'string'}, birthD:{type: 'string'}, alias:{type: 'string'}, promo: {type: 'integer'},mail:{type: 'string'},isAdmin:{type: 'boolean'}}}
 ]
var expectedIdeasSchema = [
    {type: 'object', properties: {id: {type: 'integer'}, title: {type: 'string'}, text:{type: 'string'}, dateTime:{type: 'string'}, users: {type: 'string'}}},
    {type: 'object', properties: {id: {type: 'integer'}, title: {type: 'string'}, text:{type: 'string'}, dateTime:{type: 'string'}, users: {type: 'string'}}},
    {type: 'object', properties: {id: {type: 'integer'}, title: {type: 'string'}, text:{type: 'string'}, dateTime:{type: 'string'}, users: {type: 'string'}}}
]
var expectedEventsSchema = [
    {type: 'object', properties: {id: {type: 'integer'}, title: {type: 'string'}, dateTime: {type: "string"}, createDateTime: {type: 'string'}, users: {type: 'array', items: {user: {type: 'string'}, joinDateTime: {type: 'string'}}}}},
    {type: 'object', properties: {id: {type: 'integer'}, title: {type: 'string'}, dateTime: {type: "string"}, createDateTime: {type: 'string'}, users: {type: 'array', items: {user: {type: 'string'}, joinDateTime: {type: 'string'}}}}},
    {type: 'object', properties: {id: {type: 'integer'}, title: {type: 'string'}, dateTime: {type: "string"}, createDateTime: {type: 'string'}, users: {type: 'array', items: {user: {type: 'string'}, joinDateTime: {type: 'string'}}}}}
]
var expectedReviewsSchema = [
    {type: 'object', properties: {id: {type: 'integer'}, title: {type: 'string'}, dateTime: {type: 'string'}, adress: {type: 'string'}, promo: {type: 'integer'}}}
]

var expectedPromoSchema = {type: 'object', properties: {ID: {type: 'integer'}, Name: {type: 'string'}, Alias:{type: 'string'}}}
var expectedUserSchema = {type: 'object', properties: {id: {type: 'integer'}, firstName: {type: 'string'}, name:{type: 'string'}, birthD:{type: 'string'}, alias:{type: 'string'}, promo: {type: 'integer'},mail:{type: 'string'},isAdmin:{type: 'boolean'}}}
var expectedIdeaSchema = {type: 'object', properties: {id: {type: 'integer'}, title: {type: 'string'}, text:{type: 'string'}, dateTime:{type: 'string'}, users: {type: 'string'}}}
var expectedEventSchema = {type: 'object', properties: {id: {type: 'integer'}, title: {type: 'string'}, dateTime: {type: "string"}, createDateTime: {type: 'string'}, users: {type: 'array', items: {user: {type: 'string'}, joinDateTime: {type: 'string'}}}}}
var expectedReviewSchema = {type: 'object', properties: {id: {type: 'integer'}, title: {type: 'string'}, dateTime: {type: 'string'}, adress: {type: 'string'}, promo: {type: 'integer'}}}

const urlSwagger = "http://virtserver.swaggerhub.com/AnaelBM/testApi/v1"
const url = "http://127.0.0.1:3000"

//------------------------------------------------------------------------------------------------
//                              Tests sur /Users
//------------------------------------------------------------------------------------------------


//          Retrive all Users
//--------------------------------
describe("HTTP assertions : Retrive all Users", function () {
  it("It should return HTTP_200 : list with users ", function () {
    var response = chakram.get(url+"/Users");
    expect(response).to.have.status(200);
    ////expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedUserSchema);
    expect(response).to.have.json(UserData);
    return chakram.wait();
  });
});

//          Retrive one User
//--------------------------------
describe("HTTP assertions : Retrive one User", function () {
  it("It should return HTTP_200 : user ", function () {
    var response = chakram.get(url+"/Users/1");
    expect(response).to.have.status(200);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedUserSchema);
    expect(response).to.have.json(UserData);
    return chakram.wait();
  });
});

//          Add one User
//--------------------------------
describe("HTTP assertions : Add one User", function () {
  it("It should return HTTP_201 : user ", function () {
    var response = chakram.post(url+"/Users", UserData);
    expect(response).to.have.status(201);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedUserSchema);
    expect(response).to.have.json(UserData);
    return chakram.wait();
  });
});

//          Update one User
//--------------------------------
describe("HTTP assertions : Update one User", function () {
  it("It should return HTTP_202 : user ", function () {
    var response = chakram.put(url+"/Users/1", UserData);
    expect(response).to.have.status(202);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedUserSchema);
    expect(response).to.have.json(UserData);
    return chakram.wait();
  });
});

//          Delete one User
//--------------------------------
describe("HTTP assertions : Delete one User", function () {
  it("It should return HTTP_200", function () {
    var response = chakram.delete(url+"/Users/1");
    expect(response).to.have.status(200);
    //expect(response).to.have.header("content-type", "application/json");
    return chakram.wait();
  });
});





//------------------------------------------------------------------------------------------------
//                        Tests sur /Events
//------------------------------------------------------------------------------------------------


//          Retrive all Events
//--------------------------------
describe("HTTP assertions : Retrive all Events", function () {
  it("It should return HTTP_200 : list with events ", function () {
    var response = chakram.get(url+"/Events");
    expect(response).to.have.status(200);
    //expect(response).to.have.header("content-type", "application/json"); 
    expect(response).to.have.schema(expectedEventSchema);
    expect(response).to.have.json(EventData);
    return chakram.wait();
  });
});


//          Retrive one Event
//--------------------------------
describe("HTTP assertions : Retrive one Event", function () {
  it("It should return HTTP_200 : event ", function () {
    var response = chakram.get(url+"/Events/1");
    expect(response).to.have.status(200);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedEventSchema);
    expect(response).to.have.json(EventData);
    return chakram.wait();
  });
});

//          Add one Event
//--------------------------------
describe("HTTP assertions : Add one Event", function () {
  it("It should return HTTP_201 : event ", function () {
    var response = chakram.post(url+"/Events", EventData);
    expect(response).to.have.status(201);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedEventSchema);
    expect(response).to.have.json(EventData);
    return chakram.wait();
  });
});

//          Update one Event
//--------------------------------
describe("HTTP assertions : Update one Event", function () {
  it("It should return HTTP_202 : event ", function () {
    var response = chakram.put(url+"/Events/1", EventData);
    expect(response).to.have.status(202);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedEventSchema);
    expect(response).to.have.json(EventData);
    return chakram.wait();
  });
});

//          Delete one Event
//--------------------------------
describe("HTTP assertions : Delete one Event", function () {
  it("It should return HTTP_200", function () {
    var response = chakram.delete(url+"/Events/1");
    expect(response).to.have.status(200);
    //expect(response).to.have.header("content-type", "application/json");
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
    var response = chakram.get(url+"/Ideas");
    expect(response).to.have.status(200);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedIdeaSchema);
    expect(response).to.have.json(IdeaData);
    return chakram.wait();
  });
});

//          Retrive one Idea
//--------------------------------
describe("HTTP assertions : Retrive one Idea", function () {
  it("It should return HTTP_200 : idea ", function () {
    var response = chakram.get(url+"/Ideas/1");
    expect(response).to.have.status(200);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedIdeaSchema);
    expect(response).to.have.json(IdeaData);
    return chakram.wait();
  });
});

//          Add one Idea
//--------------------------------
describe("HTTP assertions : Add one Idea", function () {
  it("It should return HTTP_201 : idea ", function () {
    var response = chakram.post(url+"/Ideas", IdeaData);
    expect(response).to.have.status(201);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedIdeaSchema);
    expect(response).to.have.json(IdeaData);
    return chakram.wait();
  });
});

//          Update one Idea
//--------------------------------
describe("HTTP assertions : Update one Idea", function () {
  it("It should return HTTP_202 : idea ", function () {
    var response = chakram.put(url+"/Ideas/1", IdeaData);
    expect(response).to.have.status(202);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedIdeaSchema);
    expect(response).to.have.json(IdeaData);
    return chakram.wait();
  });
});

//          Delete one Idea
//--------------------------------
describe("HTTP assertions : Delete one Idea", function () {
  it("It should return HTTP_200", function () {
    var response = chakram.delete(url+"/Ideas/1");
    expect(response).to.have.status(200);
    //expect(response).to.have.header("content-type", "application/json");
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
    var response = chakram.get(url+"/Promos");
    expect(response).to.have.status(200);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedPromosSchema);
    expect(response).to.have.json(PromosData);
    return chakram.wait();
  });
});

//          Retrive one Promo
//--------------------------------
describe("HTTP assertions : Retrive one Promo", function () {
  it("It should return HTTP_200 : promo ", function () {
    var response = chakram.get(url+"/Promos/1");
    expect(response).to.have.status(200);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedPromoSchema);
    expect(response).to.have.json(PromoData);
    return chakram.wait();
  });
});

//          Add one Promo
//--------------------------------
describe("HTTP assertions : Add one Promo", function () {
  it("It should return HTTP_201 : promo ", function () {
    var response = chakram.post(url+"/Promos", PromoData);
    expect(response).to.have.status(201);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedPromoSchema);
    expect(response).to.have.json(PromoData);
    return chakram.wait();
  });
});

//          Update one Promo
//--------------------------------
describe("HTTP assertions : Update one Promo", function () {
  it("It should return HTTP_202 : promo ", function () {
    var response = chakram.put(url+"/Promos/1", PromoData);
    expect(response).to.have.status(202);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedPromoSchema);
    expect(response).to.have.json(PromoData);
    return chakram.wait();
  });
});

//          Delete one Promo
//--------------------------------
describe("HTTP assertions : Delete one Promo", function () {
  it("It should return HTTP_200", function () {
    var response = chakram.delete(url+"/Promos/1");
    expect(response).to.have.status(200);
    //expect(response).to.have.header("content-type", "application/json");
    return chakram.wait();
  });
});





//------------------------------------------------------------------------------------------------
//                              Tests sur /Reviews
//------------------------------------------------------------------------------------------------


//          Retrive all Reviews
//--------------------------------
describe("HTTP assertions : Retrive all Reviews", function () {
  it("It should return HTTP_200 : list with reviews ", function () {
    var response = chakram.get(url+"/Reviews");
    expect(response).to.have.status(200);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedReviewsSchema);
    expect(response).to.have.json(ReviewsData);
    return chakram.wait();
  });
});

//          Retrive one Review
//--------------------------------
describe("HTTP assertions : Retrive one Review", function () {
  it("It should return HTTP_200 : review ", function () {
    var response = chakram.get(url+"/Reviews/1");
    expect(response).to.have.status(200);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedReviewSchema);
    expect(response).to.have.json(ReviewData);
    return chakram.wait();
  });
});

//          Add one Review
//--------------------------------
describe("HTTP assertions : Add one Review", function () {
  it("It should return HTTP_201 : review ", function () {
    var response = chakram.post(url+"/Reviews", ReviewData);
    expect(response).to.have.status(201);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedReviewSchema);
    expect(response).to.have.json(ReviewData);
    return chakram.wait();
  });
});

//          Update one Review
//--------------------------------
describe("HTTP assertions : Update one Review", function () {
  it("It should return HTTP_202 : review ", function () {

    var response = chakram.put(url+"/Reviews/1", ReviewData);
    expect(response).to.have.status(202);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedReviewSchema);
    expect(response).to.have.json(ReviewData);
    return chakram.wait();
  });
});

//          Delete one Review
//--------------------------------
describe("HTTP assertions : Delete one Review", function () {
  it("It should return HTTP_200", function () {
    var response = chakram.delete(url+"/Reviews/1");
    expect(response).to.have.status(200);
    //expect(response).to.have.header("content-type", "application/json");
    return chakram.wait();
  });
});