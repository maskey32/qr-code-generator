import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/Prisma/prisma.service";
// import { Movie } from "@prisma/client";
import { CreateMovieDto, UpdateMovieDto } from "./dto";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable()
export class MoviesService {
    constructor(private prisma: PrismaService) {};

    addMovie(dto: CreateMovieDto) {
        try {
            const movie = this.prisma.movie.create({
                data: { ...dto }
            })
    
            return movie;
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002')
                    throw new ForbiddenException('Credentials taken');
            }

            throw error;
        }
    }

    async getMovies() {
        try {
            const movies = await this.prisma.movie.findMany();
    
            const randomMovies = [];
            for (let i = 0; i < 10; i++) {
                const randomIndex = Math.floor(Math.random() * movies.length);
                randomMovies.push(movies[randomIndex]);
            }
    
            return randomMovies;  
        } catch (error) {
            throw error;
        }
    }
    
    async getMovieById(movieId: number) {
        try {
            const movie = await this.prisma.movie.findUnique({
                where: { id: movieId }
            })

            if (!movie) throw new ForbiddenException('Movie does not exist');

            const retrievedMovie = await this.prisma.movie.findUnique({
                where: { id: movieId }
            })

            return retrievedMovie;
        } catch (error) {
            throw error;
        }
    }

    async updateMovieById(movieId: number, dto: UpdateMovieDto) {
        try {
            const movie = await this.prisma.movie.findUnique({
                where: { id: movieId }
            })

            if (!movie) throw new ForbiddenException('Movie does not exist');

            const updatedMovie = await this.prisma.movie.update({
                where: { id: movieId },
                data: { ...dto }
            })
            
            return updatedMovie;
        } catch (error) {
            throw error;
        }
    }

    async deleteMovieById(movieId: number) {
        try {
            const movie = await this.prisma.movie.findUnique({
                where: { id: movieId }
            })

            if (!movie) throw new ForbiddenException('Movie does not exist');

            const deletedMovie = await this.prisma.movie.delete({
                where: { id: movieId }
            })

            return deletedMovie;
        } catch (error) {
            throw error;
        }
    }
};