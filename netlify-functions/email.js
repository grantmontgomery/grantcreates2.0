exports.handler = function (event, context, callback) {
  console.log(event)
  if (event.httpMethod === "POST" && event.path === "/send") {
    const requestBody = JSON.parse(event.body)
    const newValue = updateDatabase(requestBody)
    callback(null, {
      statusCode: 200,
      body: newValue,
    })
    console.log("send attempt")
  } else {
    callback(null, {
      statusCode: 400,
      body: {},
    })
  }
}
