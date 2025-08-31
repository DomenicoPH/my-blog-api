import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Env } from './env.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService<Env>) => ({
        type: 'postgres',
        host: config.get('POSTGRES_HOST', { infer: true }),
        port: config.get('POSTGRES_PORT', { infer: true }),
        username: config.get('POSTGRES_USER', { infer: true }),
        password: config.get('POSTGRES_PASSWORD', { infer: true }),
        database: config.get('POSTGRES_DB', { infer: true }),
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
  ],
})
export class AppModule {}
