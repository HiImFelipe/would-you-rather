import http from "node:http";
import queryString from "node:querystring";
import "dotenv/config";

import routes from "./routes/index.js";
import { HTTPMethod } from "./helpers/index.js";

const host = process.env.HOST || "127.0.0.1";
const port = Number(process.env.PORT) || 3000;

if (isNaN(port)) throw new Error("Port is not a number");

const buildBody = (request: http.IncomingMessage) => {
  let bodyBufferedData: Array<Uint8Array> = [];
  let stringifiedBodyData = "";

  request
    .on("data", (chunk) => {
      bodyBufferedData.push(chunk);
    })
    .on("end", () => {
      stringifiedBodyData = Buffer.concat(bodyBufferedData).toString();
    });

  let body = {};

  try {
    body = stringifiedBodyData ? JSON.parse(stringifiedBodyData) : {};

    return body;
  } catch (e) {
    console.log("Received params are not in JSON format.", e);

    throw new Error("Received params are not in JSON format.");
  }
};

const serverInstance = http.createServer((request, response) => {
  const { url, method } = request;

  const route = routes.find((route) => url?.startsWith(route.path));

  if (route) {
    const body = buildBody(request);

    route.routes.execute(
      {
        body,
        headers: request.headers,
        method: method as HTTPMethod,
        queryParams: queryString.decode(url?.split("?")[1] || ""),
      },
      {
        setBody: (params) => {
          response.setHeader("Content-Type", "application/json");
          response.write(JSON.stringify(params));
          response.end();
        },
        setStatus: (status) => {
          response.statusCode = status;
        },
        setHeaders: (params) => {
          Object.keys(params).forEach((key) => {
            response.setHeader(key, params[key]);
          });
        },
      }
    );

    return;
  }

  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json");

  response.end(JSON.stringify({ hello: "world" }));
});

serverInstance.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
