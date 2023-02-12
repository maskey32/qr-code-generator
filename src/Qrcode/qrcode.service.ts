import { Injectable } from "@nestjs/common";
import * as qrcode from 'qrcode';
import { MoviesService } from "../Movies/movies.service";

@Injectable()
export class QrcodeService {
  constructor(private movieService: MoviesService) {}

  async generateQRCode(data: string): Promise<string> {
    const link = `https://chukwuma-qr-code-generator.netlify.app/movie?movies=${data}`;

    return qrcode.toDataURL(link);
  }

  async getQrcode() {
    const randomMovies = await this.movieService.getMovies();

    const filteredArray = randomMovies.map(item => {
        const { id, createdAt, updatedAt, ...filteredProperties } = item;
        return filteredProperties;
    });

    const data = JSON.stringify(filteredArray);

    return this.generateQRCode(data);
  }
}
