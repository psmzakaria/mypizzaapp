const request = require("supertest");
const app = require("./app");

test("GET / should return hello pizzas", async () => {
  const response = await request(app).get("/");
  expect(response.status).toEqual(200);
  expect(response.body).toEqual({ message: "hello pizzas" });
});

test("POST/ should return an object", async () => {
  const Test_Data = {
    id: "1",
    name: "Hawaiian",
    price: "10.50"
  };
  const response = await request(app)
    .post("/pizzas")
    .send(Test_Data);
  expect(response.status).toEqual(200);
  expect(response.body).toEqual(Test_Data);
});

test("PUT/ should return an array", async () => {
  const Test_Data = {
    name: "Test Pizza",
    price: "10.50"
  };
  const response = await request(app)
    .put("/pizzas/2")
    .send(Test_Data);
  expect(response.status).toEqual(200);
  expect(response.body).toMatchObject(Test_Data);
});

test("DELETE/ should delete an object", async () => {
  const ID = "1";
  const response = await request(app).delete("/pizzas/1");
  // expect(response.status).toEqual(200);
  expect(response.body).toEqual("Deleted Success " + ID);
});
