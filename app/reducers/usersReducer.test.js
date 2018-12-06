import usersReducer, { initialState } from "./usersReducer";
import { USERS } from "../actions/actionTypes";

describe("usersReducer", () => {
  it("should be defined", () => {
    expect(usersReducer).toBeDefined();
  });

  it("should be a function", () => {
    expect(usersReducer).toEqual(expect.any(Function));
  });

  it("should return the initial state", () => {
    expect(usersReducer(undefined, {})).toEqual(initialState);
  });

  it("should set loading users to `true` ", () => {
    const action = {
      type: USERS.LOADING_BEGIN
    };
    const expectedState = {
      ...initialState,
      fetch: {
        loading: true,
        error: null
      }
    };

    expect(usersReducer(initialState, action)).toEqual(expectedState);
  });

  it("should set loading users to `false`", () => {
    const action = {
      type: USERS.LOADING_COMPLETE
    };
    const expected = {
      ...initialState,
      fetch: {
        loading: false,
        error: null
      }
    };

    expect(usersReducer(initialState, action)).toEqual(expected);
  });

  it("should set loading users to `false` and set the error", () => {
    const action = {
      type: USERS.LOADING_FAILED,
      payload: {
        error: "foo"
      }
    };
    const expected = {
      ...initialState,
      fetch: {
        loading: false,
        error: "foo"
      }
    };

    expect(usersReducer(initialState, action)).toEqual(expected);
  });

  it("should load the fetched users into the store", () => {
    const action = {
      type: USERS.GET_ALL_SUCCESS,
      payload: {
        users: [
          {
            name: "John Doe"
          }
        ]
      }
    };
    const expected = {
      ...initialState,
      data: [
        {
          name: "John Doe"
        }
      ]
    };

    expect(usersReducer(initialState, action)).toEqual(expected);
  });

  it("should set the selected user in the store", () => {
    const action = {
      type: USERS.SELECT_SUCCESS,
      payload: {
        name: "John Doe"
      }
    };
    const expected = {
      ...initialState,
      selectedUser: {
        name: "John Doe"
      }
    };

    expect(usersReducer(initialState, action)).toEqual(expected);
  });

  it("should delete the given user from the store", () => {
    const action = {
      type: USERS.DELETE_SUCCESS,
      payload: {
        _id: "fake.id.joe",
        name: "John Doe"
      }
    };
    const expectedState = {
      ...initialState,
      data: [
        {
          _id: "fake.id.jane",
          name: "Jane Doe"
        }
      ]
    };

    const state = usersReducer(
      {
        ...initialState,
        data: [
          {
            _id: "fake.id.joe",
            name: "John Doe"
          },
          {
            _id: "fake.id.jane",
            name: "Jane Doe"
          }
        ]
      },
      action
    );

    expect(state).toEqual(expectedState);
  });

  it("should add the created user into the store", () => {
    const action = {
      type: USERS.CREATE_SUCCESS,
      payload: {
        name: "John Doe"
      }
    };
    const expectedState = {
      ...initialState,
      data: [
        {
          name: "John Doe"
        },
        {
          name: "Jane Doe"
        }
      ]
    };

    const state = usersReducer(
      {
        ...initialState,
        data: [
          {
            name: "Jane Doe"
          }
        ]
      },
      action
    );

    expect(state).toEqual(expectedState);
  });

  it("should update the modified user in the store", () => {
    const action = {
      type: USERS.UPDATE_SUCCESS,
      payload: {
        _id: "fake.id.john",
        name: "John Doe Jr."
      }
    };
    const expectedState = {
      ...initialState,
      data: [
        {
          _id: "fake.id.john",
          name: "John Doe Jr."
        },
        {
          _id: "fake.id.jane",
          name: "Jane Doe"
        }
      ]
    };

    const state = usersReducer(
      {
        ...initialState,
        data: [
          {
            _id: "fake.id.john",
            name: "John Doe"
          },
          {
            _id: "fake.id.jane",
            name: "Jane Doe"
          }
        ]
      },
      action
    );

    expect(state).toEqual(expectedState);
  });
});
