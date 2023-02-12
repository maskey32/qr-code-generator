import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { MoviesService } from "./movies.service";
// import { Movie } from "@prisma/client";
import { CreateMovieDto, UpdateMovieDto } from "./dto";
import { RouteNames, routesV1Prefix } from "../common/config";

@Controller(`${routesV1Prefix}/${RouteNames.MOVIES}`)
export class MoviesController {
    constructor(private moviesService: MoviesService) {}

    @HttpCode(HttpStatus.CREATED)
    @Post()
    async addMovie(@Body() dto: CreateMovieDto): Promise<{ message: string; data: any; }> {
        const movie = await this.moviesService.addMovie(dto);

        return {
            message: 'Successfully created a movie',
            data: movie
        }
    }

    @Get()
    async getMovies(): Promise<{ message: string; data: any; }> {
        const movies = await this.moviesService.getMovies();

        return {
            message: 'Successfully fetched movies',
            data: movies
        }
    }
    
    @Get(':id')
    async getMovieById(@Param('id', ParseIntPipe) movieId: number): Promise<{ message: string; data: any; }> {
        const movie = await this.moviesService.getMovieById(movieId);

        return {
            message: 'Successfully fetched movie',
            data: movie
        }
    }

    @Patch(':id')
    async updateMovieById(@Param('id', ParseIntPipe) movieId: number, dto: UpdateMovieDto): Promise<{ message: string; data: any; }> {
        const movie = await this.moviesService.updateMovieById(movieId, dto);

        return {
            message: 'Successfully updated movie',
            data: movie
        }
    }
    
    @Delete(':id')
    async deleteMovieById(@Param('id', ParseIntPipe) movieId: number): Promise<{ message: string; data: any; }> {
        const movie = await this.moviesService.deleteMovieById(movieId);

        return {
            message: 'Successfully deleted movie',
            data: movie
        }
    }
};