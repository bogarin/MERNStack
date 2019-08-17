import { app, express } from "./routers/routes";
import path from "path";
import config from "./services/config";
import mongoose from "mongoose";



console.log("El Esteban es un bro chevere");



mongoose
  .connect(`mongodb://${config.urlmongodb}${config.namedb}`, {
    useNewUrlParser: true
  })
  .then(db => console.log("connect"))
  .catch(err => console.log(`No conecto ${err}`));

app.use(express.static(path.join(__dirname, "public")));

app.listen(config.port, () => {
  console.log(config.port);
});
