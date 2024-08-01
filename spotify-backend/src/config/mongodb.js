import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        // Bağlantı sağlandığında tetiklenecek olan olay dinleyicisi
        mongoose.connection.on('connected', () => {
        });

        // Bağlantı hatası olduğunda tetiklenecek olan olay dinleyicisi
        mongoose.connection.on('error', (err) => {
        });

        // Bağlantı kesildiğinde tetiklenecek olan olay dinleyicisi
        mongoose.connection.on('disconnected', () => {
        });

        // MongoDB'ye bağlantı kur
        await mongoose.connect(`${process.env.MONGODB_URI}/spotify`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('MongoDB bağlantısı başarılı.');
    } catch (error) {
        console.error('MongoDB bağlantısı başarısız:', error);
        // Hata durumunda uygulamanın kapanmasını isteyebilirsiniz
        process.exit(1);
    }
};

export default connectDB;
