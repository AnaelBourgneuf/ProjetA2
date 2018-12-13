var chakram = require('chakram'),
    expect = chakram.expect


describe("HTTP assertions", function () {
  it("It should return user list with users ", function () {
    var response = chakram.get("http://virtserver.swaggerhub.com/AnaelBM/testApi/v1/Users");
    expect(response).to.have.status(200);
    expect(response).to.have.header("content-type", "application/json");

    var expectedUserSchema = 
    {
      type: "array",
      items:
      {
        type: 'object',
        properties:
        {
          id:{type: 'integer'},
          firstName:{type: 'string'},
          name:{type: 'string'},
          birthD:{type: 'string'},
          alias:{type: 'string'},
          promo:
          {
            type: 'object',
            properties:
            {
              ID:{type: 'integer'},
              Name:{type: 'string'},
              Alias:{type: 'string'},
            }
          },
          mail:{type: 'string'},
          isAdmin:{type: 'boolean'}
        }
      }
    }
    var expectedUserData= 
    {
      id: 1, 
      firstName: "Roger", 
      name: "Duchamp", 
      birthD: "12/12/1212", 
      alias: "Roger's", 
      promo: 
      {
        id: 1, 
        name: "Dev-A2", 
        alias: "Autistart+"
      }, 
      mail: "prenom.nom@imie.fr", 
      isAdmin: false
    }
    expect(response).to.have.schema(expectedUserSchema);
    expect(response).to.have.json('[0]', expectedUserData);
    return chakram.wait();
  });
});
//(modifié)
