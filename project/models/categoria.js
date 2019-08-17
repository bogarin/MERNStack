import mongoose from "mongoose";
const shema = mongoose.Schema;
const categoriaShema = shema({
  nombre: { Type: String, maxlength: 50, unique: true, requied: true },
  descripćion: { type: String, maxlength: 255 },
  estado: { type: Number, default: 1 },
  createdAt: { type: Date, default: Date.now() }
});
module.exports = mongoose.model("Categorias", categoriaShema);