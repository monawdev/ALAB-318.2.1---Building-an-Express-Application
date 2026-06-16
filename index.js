import express from "express"
import path from "path"
import { fileURLToPath } from "url"
const app = express();
const port = 3000;


// Resolve __dirname in an ES module so the views path is absolute
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Set up the Pug view engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));


//view engine
// app.set("veiw engine", "pug");

// app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res,) => {
  res.json().render("index", {
    title: "Home"
  });
});

app.listen(port, () => {
    console.log('Listening on port: ' + port)
})