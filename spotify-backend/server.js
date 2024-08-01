//cloudinary ile görüntü ve mp3 dosyalarını saklayabiliriz
//cors ile backend ve frontend bağlanır
//dotenv çevresel değişkenleri örn veritabanı bağlantı bilgileri, API anahtarları) güvenli bir şekilde saklamak için kullanılır.
//mongoose veritabanına bağlanmak ve yönetmek için
//multer dosya yüklemeyi yönetmek için basit ve esnek bir çözüm sunar. Dosya yüklemelerini kontrol etmenizi ve yönetmenizi kolaylaştırır. HTTP POST istekleri ile sunucuya dosya yükleme işlemlerini yönetir
//nodemon  Kod değişikliklerini otomatik olarak algılayarak sunucunuzu yeniden başlatır ve böylece hızlı ve verimli bir geliştirme deneyimi sağlar.

import express from 'express';
import cors from 'cors';
import "dotenv/config"
import songRouter from "./src/routes/songRoute.js";
import connectDB from "./src/config/mongodb.js";
import connectCloudinary from "./src/config/cloudinary.js";

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary()

//middlewares
app.use(express.json());
app.use(cors());  //front ve back arası bağlantı için

//initilaizing routes
app.use("/api/song",songRouter)
app.get("/",(req,res)=> res.send("API Working"))

app.listen(port,()=>console.log(`Server started on port ${port}`));

