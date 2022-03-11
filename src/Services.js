export async function getUsers(num) {
  let response = await fetch(`https://randomuser.me/api/?results=${num}`, {
    method: "GET"
  });
  let user = await response.json();
  //console.log(user.results[0]);
  return user.results;
}
