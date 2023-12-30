import app from "./app.js";

import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
}
);


const PORT = process.env.PORT 



app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`)
});
