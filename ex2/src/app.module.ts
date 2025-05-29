import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { Post } from './entities/post.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'test',
            entities: [User],
            synchronize: true,
        }),
        TypeOrmModule.forFeature([User, Post]),
    ],
    controllers: [AppController],
    providers: [AppService, UserService],
})
export class AppModule { }
