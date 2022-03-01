"use strict";

const server = require("../src/server");

const supertest = require("supertest");

const request = supertest(server.app);

describe("testing API server", () => {
  //   beforeEach(() => {
  //     jest.setTimeout(50000000);
  //   });

  it("404 on a bad route", async () => {
    const response = await request.get("/brokeLink");
    expect(response.status).toEqual(404);
  });
  it("404 on a bad method", async () => {
    const response = await request.post("/user/5");
    expect(response.status).toEqual(404);
  });
  it("Create a record using POST", async () => {
    jest.setTimeout(50000000);
    const body = {
      firstName: "test",
    };
    const response = await request
      .post("/user")
      .send(JSON.stringify(body))
      .set("Accept", "application/json");
    expect(response.status).toEqual(201);
    end(function (err, res) {
      if (err) return done(err);
      return done();
    });
  });
  it("Read a list of records using GET", async () => {
    const response = await request.get("/user");
    expect(typeof response.body).toEqual("object");
  });
  it("Update a record using PUT", async () => {
    const response = await request.put("/user/1");
    expect(typeof response.body).toEqual("object");
  });

  it("Destroy a record using DELETE", async () => {
    const response = await request.delete("/user/1");
    expect(response.status).toEqual(201);
  });
});
