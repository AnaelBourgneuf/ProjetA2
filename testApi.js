var chakram = require('chakram'),
    expect = chakram.expect


//------------------------------------------------------------------------------------------------
//                        Declaration de variables utiles
//------------------------------------------------------------------------------------------------

var PromoData = {id: 1, name: 'Dev-A2', alias: 'Autistart+'}
var UserData = {id: 1, firstName: 'Roger', name: 'Duchamp', birthD: '12/12/1212', alias: "Roger's", promo: PromoData, mail: 'prenom.nom@imie.fr', isAdmin: false}
var EventData = {id: 1, title: "Jour de l'an", dateTime: "01/01/2019", createDateTime: '01/12/2018', users: [{user: UserData, joinDateTime: "11/12/2018 11:11:00"}]}
var IdeaData = {id: 1, title: "Mon idée1", text: "Blablabla Blablabla Blablabla", dateTime: "9/12/2018 11:11:02", user: UserData}
var ReviewData = {id: 1, title: "Module Api", dateTime: "14/12/2018 17:00:00", adress: "http://www.google.com/", promo: PromoData}

var PromoDataResponse = {message: "Une promo", promo: PromoData, method: "GET"}
var UserDataResponse = {message: "Un utilisateur", user: UserData, method: "GET"}
var EventDataResponse = {message: "Un evenement", event: EventData, method: "GET"}
var IdeaDataResponse = {message: "Une idee", idea: IdeaData, method: "GET"}
var ReviewDataResponse = {message: "Une review", review: ReviewData, method: "GET"}

var PromosDataResponse = {message: "Liste de toutes les promos", promos: [PromoData], method: "GET"}
var UsersDataResponse = {message: "Liste de tous les utilisateurs", users: [UserData], method: "GET"}
var EventsDataResponse = {message: "Liste de tous les evenements", events: [EventData], method: "GET"}
var IdeasDataResponse = {message: "Liste de toutes les idees", ideas: [IdeaData], method: "GET"}
var ReviewsDataResponse = {message: "Liste de toutes les reviews", reviews: [ReviewData], method: "GET"}

var CreatePromoDataResponse = {message: "Ajout d'une promo", promo: PromoData, method: "POST"}
var CreateUserDataResponse = {message: "Ajout d'un utilisateur", user: UserData, method: "POST"}
var CreateEventDataResponse = {message: "Ajout d'un evenement", event: EventData, method: "POST"}
var CreateIdeaDataResponse = {message: "Ajout d'une idee", idea: IdeaData, method: "POST"}
var CreateReviewDataResponse = {message: "Ajout d'une review", review: ReviewData, method: "POST"}

var UpdatePromoDataResponse = {message: "Mise a jour d'une promo", promo: PromoData, method: "PUT"}
var UpdateUserDataResponse = {message: "Mise a jour d'un utilisateur", user: UserData, method: "PUT"}
var UpdateEventDataResponse = {message: "Mise a jour d'un evenement", event: EventData, method: "PUT"}
var UpdateIdeaDataResponse = {message: "Mise a jour d'une idee", idea: IdeaData, method: "PUT"}
var UpdateReviewDataResponse = {message: "Mise a jour d'une review", review: ReviewData, method: "PUT"}


var expectedPromoSchema = {type: 'object', properties: {ID: {type: 'integer'}, Name: {type: 'string'}, Alias:{type: 'string'}}}
var expectedUserSchema = {type: 'object', properties: {id: {type: 'integer'}, firstName: {type: 'string'}, name:{type: 'string'}, birthD:{type: 'string'}, alias:{type: 'string'}, promo: expectedPromoSchema,mail:{type: 'string'},isAdmin:{type: 'boolean'}}}
var expectedIdeaSchema = {type: 'object', properties: {id: {type: 'integer'}, title: {type: 'string'}, text:{type: 'string'}, dateTime:{type: 'string'}, users: expectedUserSchema}}
var expectedEventSchema = {type: 'object', properties: {id: {type: 'integer'}, title: {type: 'string'}, dateTime: {type: "string"}, createDateTime: {type: 'string'}, users: {type: 'array', items: {user: expectedUserSchema, joinDateTime: {type: 'string'}}}}}
var expectedReviewSchema = {type: 'object', properties: {id: {type: 'integer'}, title: {type: 'string'}, dateTime: {type: 'string'}, adress: {type: 'string'}, promo: expectedPromoSchema}}

var expectedPromoSchemaResponse = {type: 'object', properties: {message: {type: 'string'}, promo: expectedPromoSchema, method: {type: 'string'}}}
var expectedUserSchemaResponse = {type: 'object', properties: {message: {type: 'string'}, user: expectedUserSchema, method: {type: 'string'}}}
var expectedIdeaSchemaResponse = {type: 'object', properties: {message: {type: 'string'}, idea: expectedIdeaSchema, method: {type: 'string'}}}
var expectedEventSchemaResponse = {type: 'object', properties: {message: {type: 'string'}, event: expectedEventSchema, method: {type: 'string'}}}
var expectedReviewSchemaResponse = {type: 'object', properties: {message: {type: 'string'}, review: expectedReviewSchema, method: {type: 'string'}}}

var expectedPromosSchemaResponse = {type: 'object', properties: {message: {type: 'string'}, promos: [expectedPromoSchema], method: {type: 'string'}}}
var expectedUsersSchemaResponse = {type: 'object', properties: {message: {type: 'string'}, users: [expectedUserSchema], method: {type: 'string'}}}
var expectedIdeasSchemaResponse = {type: 'object', properties: {message: {type: 'string'}, ideas: [expectedIdeaSchema], method: {type: 'string'}}}
var expectedEventsSchemaResponse = {type: 'object', properties: {message: {type: 'string'}, events: [expectedEventSchema], method: {type: 'string'}}}
var expectedReviewsSchemaResponse = {type: 'object', properties: {message: {type: 'string'}, reviews: [expectedReviewSchema], method: {type: 'string'}}}

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
    expect(response).to.have.schema(expectedUsersSchemaResponse);
    expect(response).to.have.json(UsersDataResponse);
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
    expect(response).to.have.schema(expectedUserSchemaResponse);
    expect(response).to.have.json(UserDataResponse);
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
    expect(response).to.have.schema(expectedUserSchemaResponse);
    expect(response).to.have.json(CreateUserDataResponse);
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
    expect(response).to.have.schema(expectedUserSchemaResponse);
    expect(response).to.have.json(UpdateUserDataResponse);
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
    expect(response).to.have.schema(expectedEventsSchemaResponse);
    expect(response).to.have.json(EventsDataResponse);
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
    expect(response).to.have.schema(expectedEventSchemaResponse);
    expect(response).to.have.json(EventDataResponse);
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
    expect(response).to.have.schema(expectedEventSchemaResponse);
    expect(response).to.have.json(CreateEventDataResponse);
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
    expect(response).to.have.schema(expectedEventSchemaResponse);
    expect(response).to.have.json(UpdateEventDataResponse);
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
    expect(response).to.have.schema(expectedIdeasSchemaResponse);
    expect(response).to.have.json(IdeasDataResponse);
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
    expect(response).to.have.schema(expectedIdeaSchemaResponse);
    expect(response).to.have.json(IdeaDataResponse);
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
    expect(response).to.have.schema(expectedIdeaSchemaResponse);
    expect(response).to.have.json(CreateIdeaDataResponse);
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
    expect(response).to.have.schema(expectedIdeaSchemaResponse);
    expect(response).to.have.json(UpdateIdeaDataResponse);
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
    expect(response).to.have.schema(expectedPromosSchemaResponse);
    expect(response).to.have.json(PromosDataResponse);
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
    expect(response).to.have.schema(expectedPromoSchemaResponse);
    expect(response).to.have.json(PromoDataResponse);
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
    expect(response).to.have.schema(expectedPromoSchemaResponse);
    expect(response).to.have.json(CreatePromoDataResponse);
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
    expect(response).to.have.schema(expectedPromoSchemaResponse);
    expect(response).to.have.json(UpdatePromoDataResponse);
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
    expect(response).to.have.schema(expectedReviewsSchemaResponse);
    expect(response).to.have.json(ReviewsDataResponse);
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
    expect(response).to.have.schema(expectedReviewSchemaResponse);
    expect(response).to.have.json(ReviewDataResponse);
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
    expect(response).to.have.schema(expectedReviewSchemaResponse);
    expect(response).to.have.json(CreateReviewDataResponse);
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
    expect(response).to.have.schema(expectedReviewSchemaResponse);
    expect(response).to.have.json(UpdateReviewDataResponse);
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