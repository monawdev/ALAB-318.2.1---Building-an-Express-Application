import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

// fix __dirname 
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// middleware 
app.use(express.urlencoded({ extended: true }));

// EJS setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// static files (images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// MIDDLEWARE 

app.use((req, res, next) => {
  console.log(`[LOG] ${req.method} ${req.url}`);
  next();
});

// ROUTES

// HOME
app.get("/", (req, res) => {
  res.render("home");
});

// ABOUT
app.get("/about", (req, res) => {
  res.render("about");
});

// USER
app.get("/user/:id", (req, res) => {
  res.render("user", { id: req.params.id });
});

// FORM POST
app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Form submitted successfully!");
});

// DOWNLOAD IMAGE
app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "public", "image.jpg");
  res.download(filePath);
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});