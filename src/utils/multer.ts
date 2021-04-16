import { diskStorage } from "multer"
import { extname } from "path"

// The ID of your GCS bucket
const bucketName = 'dreamie-hunting-bucket';

// The path to your file to upload
// const filePath = 'path/to/your/file';

// The new ID for your GCS file
// const destFileName = 'your-new-file-name';


export const multerConfig = {
    storage: diskStorage({
      destination: './uploads', 
      filename: (req, file, cb) => {
      const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
      return cb(null, `${randomName}${extname(file.originalname)}`)
    }
    })
  }