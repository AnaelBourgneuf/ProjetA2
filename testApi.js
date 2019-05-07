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
  { id: '3651ac54-d393-495b-b2ae-a26616de3fc4', firstName: 'Alice', name: 'Duvent', gender: 'female', birthD: new Date(818003483771).toString(), alias: "Lice", promo: "b66245cd-c1db-48dc-8c26-1c3ef8349175", email: "alice.apdm@gmail.com", isAdmin: false},
  { id: 'b66245cd-c1db-48dc-8c26-1c3ef8349175', firstName: 'Bob', name: 'Leponge', gender: 'male', birthD: new Date(638979083772).toString(), alias: null, promo: "b66245cd-c1db-48dc-8c26-1c3ef8349175", email: "bob.leponge@gmail.com", isAdmin: false},
  { id: '488351f0-699a-4828-adba-4275c954efdb', firstName: 'Charlie', name: 'Ouest', gender: 'male', birthD: new Date(1004454683772).toString(), alias: "Charlot", promo: "b66245cd-c1db-48dc-8c26-1c3ef8349175", email: "charlie.ouest@gmail.com", isAdmin: false},
]
var EventsData = [
  { id: '3651ac54-d393-495b-b2ae-a26616de3fc4', title: 'Pokemon Go', dateTime: new Date('February 8, 2019 10:30:00').toString(), createDateTime: new Date('January 18, 2019 10:10:00').toString(), creator: "3651ac54-d393-495b-b2ae-a26616de3fc4", users: [{user: "3651ac54-d393-495b-b2ae-a26616de3fc4", joinDateTime: new Date('February 3, 2019 10:9:00').toString()},{user: "b66245cd-c1db-48dc-8c26-1c3ef8349175", joinDateTime: new Date('February 3, 2019 10:9:00').toString()}]},
  { id: 'b66245cd-c1db-48dc-8c26-1c3ef8349175', title: 'Pizza', dateTime: new Date('March 10, 2019 10:10:00').toString(), createDateTime: new Date('January 3, 2019 13:45:00').toString(), creator: "3651ac54-d393-495b-b2ae-a26616de3fc4", users: [{user: "3651ac54-d393-495b-b2ae-a26616de3fc4", joinDateTime: new Date('February 3, 2019 10:9:00').toString()} ,{user: "b66245cd-c1db-48dc-8c26-1c3ef8349175", joinDateTime: new Date('February 3, 2019 10:9:00').toString()}]},
  { id: '488351f0-699a-4828-adba-4275c954efdb', title: 'KFC du Mardi', dateTime: new Date('February 5, 2019 10:9:00').toString(), createDateTime: new Date('January 5, 2019 16:00:00').toString(), creator: "3651ac54-d393-495b-b2ae-a26616de3fc4", users: [{user: "3651ac54-d393-495b-b2ae-a26616de3fc4", joinDateTime: new Date('February 3, 2019 10:9:00').toString()} ,{user: "b66245cd-c1db-48dc-8c26-1c3ef8349175", joinDateTime: new Date('February 3, 2019 10:9:00').toString()}]}
]
var IdeasData = [
  { id: '3651ac54-d393-495b-b2ae-a26616de3fc4', title: 'idea1', text: 'texte idea 1', dateTime: new Date('March 10, 2019 10:10:00').toString(), creator: '3651ac54-d393-495b-b2ae-a26616de3fc4', plus: [], moins: []},
  { id: 'b66245cd-c1db-48dc-8c26-1c3ef8349175', title: 'idea2', text: 'texte idea 2', dateTime: new Date('March 12, 2019 12:30:00').toString(), creator: '3651ac54-d393-495b-b2ae-a26616de3fc4', plus: [], moins: []},
  { id: '488351f0-699a-4828-adba-4275c954efdb', title: 'idea3', text: 'texte idea 3', dateTime: new Date('March 1, 2019 09:00:00').toString(), creator: '3651ac54-d393-495b-b2ae-a26616de3fc4', plus: [], moins: []}
]
var ReviewsData = [
  { id: '3651ac54-d393-495b-b2ae-a26616de3fc4', title: 'Module API', dateTime: new Date('March 10, 2019 10:10:00').toString(), adress: 'http://www.google.com/', promo: '3651ac54-d393-495b-b2ae-a26616de3fc4'}
]

var userToAdd = { userId: "b66245cd-c1db-48dc-8c26-1c3ef8349175" }

var NewUserData = { firstName: 'Jean', name: 'Valjean', gender: 'Male', birthD: new Date(818003483771).toString(), alias: 'JV', promo: "b66245cd-c1db-48dc-8c26-1c3ef8349175", email: "jean.valjean@imie.fr", isAdmin: false}
var UpdatedUserData = { isAdmin: true }
var NewEventData = { title: 'Soiree Mousse', dateTime: new Date('May 18, 2019 20:30:00').toString(), creator: "3651ac54-d393-495b-b2ae-a26616de3fc4" }
var UpdatedEventData = { dateTime: new Date('March 8, 2019 10:30:00').toString() }
var NewIdeaData = { title: 'idea5', text: 'texte idea 5', creator: '3651ac54-d393-495b-b2ae-a26616de3fc4' }
var UpdatedIdeaData = { text: 'voiçi mon idée' }
var NewPromoData = { name: 'Dev-A4', alias: 'les viocs' }
var UpdatedPromoData = { alias: 'autistart' }
var NewReviewData = { title: 'Module théatre', adress: 'http://www.google.com/', promo: '3651ac54-d393-495b-b2ae-a26616de3fc4' }
var UpdatedReviewData = { adress: 'http://www.google.com/1' }

var PromoData = { id: '3651ac54-d393-495b-b2ae-a26616de3fc4', name: 'IT-Start', alias: null}
var UserData = { id: '3651ac54-d393-495b-b2ae-a26616de3fc4', firstName: 'Alice', name: 'Duvent', gender: 'female', birthD: new Date(818003483771).toString(), alias: "Lice", promo: "b66245cd-c1db-48dc-8c26-1c3ef8349175", email: "alice.apdm@gmail.com", isAdmin: false}
var EventData = { id: '3651ac54-d393-495b-b2ae-a26616de3fc4', title: 'Pokemon Go', dateTime: new Date('February 8, 2019 10:30:00').toString(), createDateTime: new Date('January 18, 2019 10:10:00').toString(), creator: "3651ac54-d393-495b-b2ae-a26616de3fc4", users: [{user: "3651ac54-d393-495b-b2ae-a26616de3fc4", joinDateTime: new Date('February 3, 2019 10:9:00').toString()},{user: "b66245cd-c1db-48dc-8c26-1c3ef8349175", joinDateTime: new Date('February 3, 2019 10:9:00').toString()}]}
var IdeaData = { id: '3651ac54-d393-495b-b2ae-a26616de3fc4', title: 'idea1', text: 'texte idea 1', dateTime: new Date('March 10, 2019 10:10:00').toString(), creator: '3651ac54-d393-495b-b2ae-a26616de3fc4', plus: [], moins: []}
var ReviewData = { id: '3651ac54-d393-495b-b2ae-a26616de3fc4', title: 'Module API', dateTime: new Date('March 10, 2019 10:10:00').toString(), adress: 'http://www.google.com/', promo: '3651ac54-d393-495b-b2ae-a26616de3fc4'}

var expectedPromosSchema = [
    {type: 'object', properties: {ID: {type: 'string'}, Name: {type: 'string'}, Alias:{type: 'string'}}},
    {type: 'object', properties: {ID: {type: 'string'}, Name: {type: 'string'}, Alias:{type: 'string'}}},
    {type: 'object', properties: {ID: {type: 'string'}, Name: {type: 'string'}, Alias:{type: 'string'}}}
]
var expectedUsersSchema = [
    {type: 'object', properties: {id: {type: 'string'}, firstName: {type: 'string'}, name:{type: 'string'}, birthD:{type: 'string'}, alias:{type: 'string'}, promo: {type: 'string'},mail:{type: 'string'},isAdmin:{type: 'boolean'}}},
    {type: 'object', properties: {id: {type: 'string'}, firstName: {type: 'string'}, name:{type: 'string'}, birthD:{type: 'string'}, alias:{type: 'string'}, promo: {type: 'string'},mail:{type: 'string'},isAdmin:{type: 'boolean'}}},
    {type: 'object', properties: {id: {type: 'string'}, firstName: {type: 'string'}, name:{type: 'string'}, birthD:{type: 'string'}, alias:{type: 'string'}, promo: {type: 'string'},mail:{type: 'string'},isAdmin:{type: 'boolean'}}}
 ]
var expectedIdeasSchema = [
    {type: 'object', properties: {id: {type: 'string'}, title: {type: 'string'}, text:{type: 'string'}, dateTime:{type: 'string'}, users: {type: 'string'}, plus: {type: 'array'}, moins: {type: 'array'}}},
    {type: 'object', properties: {id: {type: 'string'}, title: {type: 'string'}, text:{type: 'string'}, dateTime:{type: 'string'}, users: {type: 'string'}, plus: {type: 'array'}, moins: {type: 'array'}}},
    {type: 'object', properties: {id: {type: 'string'}, title: {type: 'string'}, text:{type: 'string'}, dateTime:{type: 'string'}, users: {type: 'string'}, plus: {type: 'array'}, moins: {type: 'array'}}}
]
var expectedEventsSchema = [
    {type: 'object', properties: {id: {type: 'string'}, title: {type: 'string'}, dateTime: {type: "string"}, createDateTime: {type: 'string'}, users: {type: 'array', items: {user: {type: 'string'}, joinDateTime: {type: 'string'}}}}},
    {type: 'object', properties: {id: {type: 'string'}, title: {type: 'string'}, dateTime: {type: "string"}, createDateTime: {type: 'string'}, users: {type: 'array', items: {user: {type: 'string'}, joinDateTime: {type: 'string'}}}}},
    {type: 'object', properties: {id: {type: 'string'}, title: {type: 'string'}, dateTime: {type: "string"}, createDateTime: {type: 'string'}, users: {type: 'array', items: {user: {type: 'string'}, joinDateTime: {type: 'string'}}}}}
]
var expectedReviewsSchema = [
    {type: 'object', properties: {id: {type: 'string'}, title: {type: 'string'}, dateTime: {type: 'string'}, adress: {type: 'string'}, promo: {type: 'string'}}}
]

var expectedPromoSchema = {type: 'object', properties: {ID: {type: 'string'}, Name: {type: 'string'}, Alias:{type: 'string'}}}
var expectedUserSchema = {type: 'object', properties: {id: {type: 'string'}, firstName: {type: 'string'}, name:{type: 'string'}, birthD:{type: 'string'}, alias:{type: 'string'}, promo: {type: 'string'},mail:{type: 'string'},isAdmin:{type: 'boolean'}}}
var expectedIdeaSchema = {type: 'object', properties: {id: {type: 'string'}, title: {type: 'string'}, text:{type: 'string'}, dateTime:{type: 'string'}, users: {type: 'string'}, plus: {type: 'array'}, moins: {type: 'array'}}}
var expectedEventSchema = {type: 'object', properties: {id: {type: 'string'}, title: {type: 'string'}, dateTime: {type: "string"}, createDateTime: {type: 'string'}, users: {type: 'array', items: {user: {type: 'string'}, joinDateTime: {type: 'string'}}}}}
var expectedReviewSchema = {type: 'object', properties: {id: {type: 'string'}, title: {type: 'string'}, dateTime: {type: 'string'}, adress: {type: 'string'}, promo: {type: 'string'}}}

const urlSwagger = "http://virtserver.swaggerhub.com/AnaelBM/testApi/v1"
const url = "http://127.0.0.1:3000"

//------------------------------------------------------------------------------------------------
//                              Tests sur /Users
//------------------------------------------------------------------------------------------------


//          Retrive all Users
//--------------------------------
describe("HTTP assertions : Retrive all Users", function () {
  it("It should return HTTP_200 : list with users ", function () {
    var response = chakram.get(url+"/users");
    expect(response).to.have.status(200);
    ////expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedUsersSchema);
    expect(response).to.have.json(UsersData);
    return chakram.wait();
  });
});

//          Retrive one User
//--------------------------------
describe("HTTP assertions : Retrive one User", function () {
  it("It should return HTTP_200 : user ", function () {
    var response = chakram.get(url+"/users/3651ac54-d393-495b-b2ae-a26616de3fc4");
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
    var response = chakram.post(url+"/users", NewUserData);
    expect(response).to.have.status(201);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedUserSchema);
    //expect(response).to.have.json(UserData);
    return chakram.wait();
  });
});

//          Update one User
//--------------------------------
describe("HTTP assertions : Update one User", function () {
  it("It should return HTTP_202 : user ", function () {
    var response = chakram.put(url+"/users/3651ac54-d393-495b-b2ae-a26616de3fc4", UpdatedUserData);
    expect(response).to.have.status(202);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedUserSchema);
    //expect(response).to.have.json(UserData);
    return chakram.wait();
  });
});

//          Delete one User
//--------------------------------
describe("HTTP assertions : Delete one User", function () {
  it("It should return HTTP_200", function () {
    var response = chakram.delete(url+"/users/3651ac54-d393-495b-b2ae-a26616de3fc4");
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
    var response = chakram.get(url+"/ideas");
    expect(response).to.have.status(200);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedIdeasSchema);
    expect(response).to.have.json(IdeasData);
    return chakram.wait();
  });
});

//          Retrive one Idea
//--------------------------------
describe("HTTP assertions : Retrive one Idea", function () {
  it("It should return HTTP_200 : idea ", function () {
    var response = chakram.get(url+"/ideas/3651ac54-d393-495b-b2ae-a26616de3fc4");
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
    var response = chakram.post(url+"/ideas", NewIdeaData);
    expect(response).to.have.status(201);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedIdeaSchema);
    //expect(response).to.have.json(IdeaData);
    return chakram.wait();
  });
});

//          Update one Idea
//--------------------------------
describe("HTTP assertions : Update one Idea", function () {
  it("It should return HTTP_202 : idea ", function () {
    var response = chakram.put(url+"/ideas/3651ac54-d393-495b-b2ae-a26616de3fc4", UpdatedIdeaData);
    expect(response).to.have.status(202);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedIdeaSchema);
    //expect(response).to.have.json(IdeaData);
    return chakram.wait();
  });
});


//          Add one user to an Idea
//--------------------------------
describe("HTTP assertions : Add one user to an Idea", function () {
  it("It should return HTTP_202", function () {
    var response = chakram.put(url+"/ideas/users/3651ac54-d393-495b-b2ae-a26616de3fc4", userToAdd);
    expect(response).to.have.status(202);
    expect(response).to.have.schema(expectedEventSchema);
    //expect(response).to.have.header("content-type", "application/json");
    return chakram.wait();
  });
});

//          Delete one user from an Idea
//--------------------------------
describe("HTTP assertions : Delete one user from an Idea", function () {
  it("It should return HTTP_202", function () {
    var response = chakram.delete(url+"/ideas/users/3651ac54-d393-495b-b2ae-a26616de3fc4", userToAdd);
    expect(response).to.have.status(202);
    expect(response).to.have.schema(expectedEventSchema);
    //expect(response).to.have.header("content-type", "application/json");
    return chakram.wait();
  });
});

//          Delete one Idea
//--------------------------------
describe("HTTP assertions : Delete one Idea", function () {
  it("It should return HTTP_200", function () {
    var response = chakram.delete(url+"/ideas/3651ac54-d393-495b-b2ae-a26616de3fc4");
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
    var response = chakram.get(url+"/promos");
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
    var response = chakram.get(url+"/promos/3651ac54-d393-495b-b2ae-a26616de3fc4");
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
    var response = chakram.post(url+"/promos", NewPromoData);
    expect(response).to.have.status(201);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedPromoSchema);
    //expect(response).to.have.json(PromoData);
    return chakram.wait();
  });
});

//          Update one Promo
//--------------------------------
describe("HTTP assertions : Update one Promo", function () {
  it("It should return HTTP_202 : promo ", function () {
    var response = chakram.put(url+"/promos/3651ac54-d393-495b-b2ae-a26616de3fc4", UpdatedPromoData);
    expect(response).to.have.status(202);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedPromoSchema);
    //expect(response).to.have.json(PromoData);
    return chakram.wait();
  });
});

//          Delete one Promo
//--------------------------------
describe("HTTP assertions : Delete one Promo", function () {
  it("It should return HTTP_200", function () {
    var response = chakram.delete(url+"/promos/3651ac54-d393-495b-b2ae-a26616de3fc4");
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
    var response = chakram.get(url+"/reviews");
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
    var response = chakram.get(url+"/reviews/3651ac54-d393-495b-b2ae-a26616de3fc4");
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
    var response = chakram.post(url+"/reviews", NewReviewData);
    expect(response).to.have.status(201);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedReviewSchema);
    //expect(response).to.have.json(ReviewData);
    return chakram.wait();
  });
});

//          Update one Review
//--------------------------------
describe("HTTP assertions : Update one Review", function () {
  it("It should return HTTP_202 : review ", function () {

    var response = chakram.put(url+"/reviews/3651ac54-d393-495b-b2ae-a26616de3fc4", UpdatedReviewData);
    expect(response).to.have.status(202);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedReviewSchema);
    //expect(response).to.have.json(ReviewData);
    return chakram.wait();
  });
});

//          Delete one Review
//--------------------------------
describe("HTTP assertions : Delete one Review", function () {
  it("It should return HTTP_200", function () {
    var response = chakram.delete(url+"/reviews/3651ac54-d393-495b-b2ae-a26616de3fc4");
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
    var response = chakram.get(url+"/events");
    expect(response).to.have.status(200);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedEventsSchema);
    expect(response).to.have.json(EventsData);
    return chakram.wait();
  });
});


//          Add one Event
//--------------------------------
describe("HTTP assertions : Add one Event", function () {
  it("It should return HTTP_201 : event ", function () {
    var response = chakram.post(url+"/events", NewEventData);
    expect(response).to.have.status(201);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedEventSchema);
    //expect(response).to.have.json(EventData);
    return chakram.wait();
  });
});


//          Retrive one Event
//--------------------------------
describe("HTTP assertions : Retrive one Event", function () {
  it("It should return HTTP_200 : event ", function () {
    var response = chakram.get(url+"/events/3651ac54-d393-495b-b2ae-a26616de3fc4");
    expect(response).to.have.status(200);
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
    var response = chakram.put(url+"/events/3651ac54-d393-495b-b2ae-a26616de3fc4", UpdatedEventData);
    expect(response).to.have.status(202);
    //expect(response).to.have.header("content-type", "application/json");
    expect(response).to.have.schema(expectedEventSchema);
    //expect(response).to.have.json(EventData);
    return chakram.wait();
  });
});


//          Add one user to an Event
//--------------------------------
describe("HTTP assertions : Add one user to an Event", function () {
  it("It should return HTTP_202", function () {
    var response = chakram.put(url+"/events/users/3651ac54-d393-495b-b2ae-a26616de3fc4", userToAdd);
    expect(response).to.have.status(202);
    expect(response).to.have.schema(expectedEventSchema);
    //expect(response).to.have.header("content-type", "application/json");
    return chakram.wait();
  });
});

//          Delete one user from an Event
//--------------------------------
describe("HTTP assertions : Delete one user from an Event", function () {
  it("It should return HTTP_202", function () {
    var response = chakram.delete(url+"/events/users/3651ac54-d393-495b-b2ae-a26616de3fc4", userToAdd);
    expect(response).to.have.status(202);
    expect(response).to.have.schema(expectedEventSchema);
    //expect(response).to.have.header("content-type", "application/json");
    return chakram.wait();
  });
});

//          Delete one Event
//--------------------------------
describe("HTTP assertions : Delete one Event", function () {
  it("It should return HTTP_200", function () {
    var response = chakram.delete(url+"/events/3651ac54-d393-495b-b2ae-a26616de3fc4");
    expect(response).to.have.status(200);
    //expect(response).to.have.header("content-type", "application/json");
    return chakram.wait();
  });
});


