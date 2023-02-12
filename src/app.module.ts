import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MoviesModule } from './Movies/movies.module';
import { PrismaModule } from './Prisma/prisma.module';
import { QrcodeModule } from './Qrcode/qrcode.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }), 
    MoviesModule, 
    QrcodeModule, 
    PrismaModule
  ],
})
export class AppModule {}
