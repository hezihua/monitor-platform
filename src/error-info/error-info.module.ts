import { Module } from '@nestjs/common';
import { ErrorInfoService } from './error-info.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ErrorInfoController } from './error-info.controller';
import { ErrorInfo } from './entities/error-info.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ErrorInfo])],
  controllers: [ErrorInfoController],
  providers: [ErrorInfoService],
})
export class ErrorInfoModule {}

// import { Module } from '@nestjs/common';
// import { UserService } from './user.service';
// import { UserController } from './user.controller';
// import {TypeOrmModule} from '@nestjs/typeorm'
// import { User } from './entities/user.entity';
// @Module({
//   imports:[TypeOrmModule.forFeature([User])],
//   controllers: [UserController],
//   providers: [UserService]
// })
// export class UserModule {}
