// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require('axios').default;

export default function handler(req, res) {
  let file = "./wind_turbine.csv";
  console.log("start working here...");
  axios.get("http://andersonc137.pythonanywhere.com/").then((response) => {
      console.log("DONE SON !!!!!")
      console.log(response.data)
      return response.data
  });



  res.status(200).json({ status: 'ok' })
}
