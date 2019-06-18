import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../app";

// Configure chai
chai.use(chaiHttp);
//chai.should();

describe("GET /api/cryptocurrency/listings/latest", () => {
  it("should response without error", (done) => {
    chai
      .request(app)
      .get("/api/cryptocurrency/listings/latest")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(err).to.be.null;
        expect(res.body.data.data[0]).to.have.property("name").equals("Bitcoin");
        done();
      });
  });
});
