export default function login({ username = "", password = "" }) {
  if (username === "username" && password === "password") {
    const user = {
      name: "John"
    };
    return new Promise(resolve => {
      setTimeout(resolve, Math.random() * 200, user);
    });
  }

  const message = "Invalid credentials.";
  return new Promise((resolve, reject) => {
    setTimeout(reject, Math.random() * 200, message);
  });
}
