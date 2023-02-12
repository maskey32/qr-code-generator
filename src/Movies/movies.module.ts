import { Global, Module } from "@nestjs/common";
import { MoviesController } from "./movies.controller";
import { MoviesService } from "./movies.service";

@Global()
@Module({
    controllers: [MoviesController],
    providers: [MoviesService],
    exports: [MoviesService]
})
export class MoviesModule {};