import songModel from '../models/songModel.js';
import { v2 as cloudinary } from 'cloudinary';

const addSong = async (req, res) => {
    try {
        console.log('Files:', req.files); // Dosya yükleme durumunu kontrol edin
        const { name, desc, album } = req.body;
        const audioFile = req.files?.audio?.[0];
        const imageFile = req.files?.image?.[0];

        if (!audioFile || !imageFile) {
            throw new Error('Audio and image files are required');
        }

        const audioUpload = await cloudinary.uploader.upload(audioFile.path, { resource_type: 'video' });
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
        const duration = `${Math.floor(audioUpload.duration / 60)}:${Math.floor(audioUpload.duration % 60)}`;

        const songData = {
            name,
            desc,
            album,
            image: imageUpload.secure_url,
            file: audioUpload.secure_url,
            duration,
        };

        const song = new songModel(songData);
        await song.save();

        res.json({ success: true, message: 'Song Added' });
    } catch (error) {
        console.error('Error in addSong:', error);
        res.json({ success: false, message: error.message });
    }
};

// listSongs fonksiyonunun tanımı
const listSongs = async (req, res) => {
    try {
        const songs = await songModel.find();
        res.json({ success: true, data: songs });
    } catch (error) {
        console.error('Error in listSongs:', error);
        res.json({ success: false, message: error.message });
    }
};

export { addSong, listSongs };
