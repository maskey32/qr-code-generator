import { Controller, Delete, Get, Patch, Post } from "@nestjs/common";
import { MoviesService } from "./movies.service";

@Controller('movies')
export class MoviesController {
    constructor(private moviesService: MoviesService) {}

    @Post()
    addMovie() {
        const movie = this.moviesService.addMovie();
    }

    @Get()
    getMovies() {
        const movies = this.moviesService.getMovies();
    }
    
    @Get()
    getMovieById() {
        const movie = this.moviesService.getMovieById();
    }

    @Patch()
    updateMovieById() {
        const movie = this.moviesService.updateMovieById();
    }

    @Delete()
    deleteMovieById() {
        const movie = this.moviesService.deleteMovieById();
    }
};