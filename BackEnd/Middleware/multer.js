import multer from "multer";
import path from "path";

// Multer storage configuration
const upload = multer({
  storage: multer.diskStorage({
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname).toLowerCase();
      if (![".jpg", ".jpeg", ".png", ".pdf", ".webp"].includes(ext)) {
        cb(new Error("File type is not supported"), false);
        return;
      }
      cb(null, "true"); // you can change this to a real filename if needed
    }
  })
});

export default upload; // ✅ ES Module export
