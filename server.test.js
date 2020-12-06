const request = require("supertest");
const server = require("./server");

test("It should greet me with the default greeting", async (done) => {
  const response = await request(server).get("/");
  expect(response.statusCode).toBe(200);
  done();
});
