import { Module } from '@nestjs/common';
import { MoviesModule } from './Movies/movies.module';
import { QrcodeModule } from './Qrcode/qrcode.module';

@Module({
  imports: [MoviesModule, QrcodeModule],
})
export class AppModule {}
