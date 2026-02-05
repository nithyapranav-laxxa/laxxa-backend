const { app } = require("./app");

require("dotenv").config();

app.listen(5001, () => {
    console.log(`[server] listening on http://localhost:${5001}`);
});
