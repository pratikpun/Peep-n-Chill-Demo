import server from "../server.js";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import User from "../src/models/user.model.js";
import { testUsers } from "./testData/sampleUsers.js";

chai.use(chaiHttp);
describe("User tests", async () => {
  const testServer = chat.request(server).keepOpen();
  describe("register a user", () => {
    it("should register a user successfully", async () => {
      const newTestUser = {
        name: "testUser",
        email: "testuser@test.com",
        password: "123",
      };
      const res = await testServer.post("/register").send(newTestUser);

      expect(res).to.have.status(200);
      expect(res.body.message).to.be.eql(`Successfully registered`);
    });
  });
});
