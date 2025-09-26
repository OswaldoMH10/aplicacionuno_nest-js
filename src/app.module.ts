import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'dmidecimo25',
      database: 'omhdatabase',
      entities: [__dirname + '/**/*.entity{.ts,.js}' ],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
