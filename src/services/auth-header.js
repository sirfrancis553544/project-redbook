export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
  // checking local storage for user
  if (user && user.accessToken) {
    return { Authentication: "Bearer" + user.accessToken };
    //node.js express backend
    // return { "x-access-token": user.accessToken };
  } else {
    return {};
  }
}
