import { image } from "@/utils/types/image.type";

export default class PhotoService {
  static async getPhotos(): Promise<image[]> {
    const data = await fetch(`${process.env.VUE_APP_SERVER_ADDRESS}/images`);
    const photos = await data.json();
    return photos.map((photo: image) => ({
      ...photo,
      id: parseInt(photo.id),
    }));
  }
}
