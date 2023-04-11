// 😳
var FollowersList = [];

async function HandlePOST(request, response) {
  const { ammount, gettingFollowers } = JSON.parse(request.body);
  try {
    const res = await fetch(`https://randomuser.me/api/?results=${ammount}`);
    const data = await res.json();
    if (gettingFollowers == true) {
      FollowersList = data;
    }
    return response.status(200).json(data);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Error fetching data" });
  }
}

async function HandleGET(request, response) {
  try {
    return response.status(200).json(FollowersList);
  } catch (error) {
    console.log(error);
    return response.status(500).json({ message: "Error fetching data" });
  }
}

export default async function handler(request, response) {
  const requestMethod = request.method;
  if (requestMethod == "POST") return HandlePOST(request, response);
  if (requestMethod == "GET") return HandleGET(request, response);
}
