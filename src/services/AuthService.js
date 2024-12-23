import http from "../http-common";

class AuthService {
  login(data) {
    return http.post("/login", data);
  }

  register(data) {
    // Overwrite active and roleId to enforce the constants
    const updatedData = {
      ...data,
      active: false, // Enforce active as false
      roleId: 3, // Enforce roleId as 3
    };
    return http.post("/users", updatedData);
  }

  // Get an user data by Id
  getUserDetailbyId(userId) {
    return http.get(`/users/${userId}`);
  }

  // Update an user data by Id
  updateUserById(userId, data) {
    return http.put(`/users/${userId}`, data);
  }
}

export default new AuthService();
