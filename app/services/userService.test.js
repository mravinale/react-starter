import * as Service from "./service";
import {
  createUsers,
  deleteUsers,
  fetchUsers,
  updateUsers
} from "./userService";

jest.mock("./service", () => ({
  get: jest.fn().mockReturnValueOnce(
    Promise.resolve({
      statusCode: 200,
      statusText: "OK",
      data: ["id"]
    })
  ),
  post: jest.fn().mockReturnValueOnce(
    Promise.resolve({
      statusCode: 200,
      statusText: "OK",
      data: ["id"]
    })
  ),
  put: jest.fn(),
  delete: jest.fn()
}));

describe("User Service", () => {
  describe("fetchUsers", () => {
    it("should be defined", () => {
      // Assert
      expect(fetchUsers).toBeDefined();
    });

    it("should be a function", () => {
      // Assert
      expect(fetchUsers).toEqual(expect.any(Function));
    });

    it("should call the service Once", () => {
      // Act
      fetchUsers();

      // Assert
      expect(Service.get).toHaveBeenCalledTimes(1);
    });

    it("should call the service with the expected params", () => {
      // Act
      fetchUsers({
        foo: "",
        bar: ""
      });

      // Assert
      expect(Service.get).toHaveBeenCalledWith("users", {
        foo: "",
        bar: ""
      });
    });
  });

  describe("createUsers", () => {
    it("should be defined", () => {
      // Assert
      expect(createUsers).toBeDefined();
    });

    it("should be a function", () => {
      // Assert
      expect(createUsers).toEqual(expect.any(Function));
    });

    it("should call the service with the expected params", () => {
      // Act
      createUsers({
        foo: "",
        bar: ""
      });

      // Assert
      expect(Service.post).toHaveBeenCalledWith("users", {
        foo: "",
        bar: ""
      });
    });

    it("should call the service without any data", () => {
      // Act
      createUsers();

      // Assert
      expect(Service.post).toHaveBeenCalledWith("users", {});
    });
  });

  describe("updateUsers", () => {
    it("should be defined", () => {
      // Assert
      expect(updateUsers).toBeDefined();
    });

    it("should be a function", () => {
      // Assert
      expect(updateUsers).toEqual(expect.any(Function));
    });

    it("should call the service with the expected params", () => {
      // Act
      updateUsers("id", {
        foo: "",
        bar: ""
      });

      // Assert
      expect(Service.put).toHaveBeenCalledWith("users", "id", {
        foo: "",
        bar: ""
      });
    });

    it("should call the service without any data", () => {
      // Act
      updateUsers("id");

      // Assert
      expect(Service.put).toHaveBeenCalledWith("users", "id", {});
    });
  });

  describe("deleteUsers", () => {
    it("should be defined", () => {
      // Assert
      expect(deleteUsers).toBeDefined();
    });

    it("should be a function", () => {
      // Assert
      expect(deleteUsers).toEqual(expect.any(Function));
    });

    it("should call the service Once", () => {
      // Act
      deleteUsers();

      // Assert
      expect(Service.delete).toHaveBeenCalledTimes(1);
    });

    it("should call the service with the expected params", () => {
      // Act
      deleteUsers("id");

      // Assert
      expect(Service.delete).toHaveBeenCalledWith("users", "id");
    });
  });
});
