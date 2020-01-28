import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "../client/Routes";

// req is from server.js
export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter localtion={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  );

  return `
    <html>
      <head>
          <body>
              <div id='root'>${content}</div>
              <script src="bundle.js"></script>
          </body>
      </head>
    </html>
    `;
};
