export async function getUsers(num) {
  let response = await fetch(`https://randomuser.me/api/?results=${num}`, {
    method: "GET"
  });
  let user = await response.json();
  //console.log(user.results[0]);
  return user.results;
}

export function getDate(user) {
  let DOB = user ? (user.dob ? user.dob.date : "") : "";

  DOB = DOB.split("T")[0];

  const getMonth = (x) => {
    switch (x) {
      case "01":
        return "January";
      case "02":
        return "February";
      case "03":
        return "March";
      case "04":
        return "April";
      case "05":
        return "May";
      case "06":
        return "June";
      case "07":
        return "July";
      case "08":
        return "August";
      case "09":
        return "September";
      case "10":
        return "October";
      case "11":
        return "November";
      case "12":
        return "December";
      default:
        return "";
    }
  };
  let m = getMonth(DOB.split("-")[1]);
  DOB = m + " " + DOB.split("-")[2] + "," + DOB.split("-")[0];
  return DOB;
}
