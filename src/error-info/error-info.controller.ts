import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ErrorInfoService } from './error-info.service';
import { CreateErrorInfoDto } from './dto/create-error-info.dto';
import { UpdateErrorInfoDto } from './dto/update-error-info.dto';

@Controller('error-info')
export class ErrorInfoController {
  constructor(private readonly errorinfoService: ErrorInfoService) {}

  @Post()
  create(@Body() createErrorInfoDto: CreateErrorInfoDto) {
    return this.errorinfoService.create(createErrorInfoDto);
  }

  @Get('report')
  report(@Query() query: { event: string }) {
    return this.errorinfoService.report(query);
  }

  @Get()
  findAll(@Query() query: { type: string; page: number; pageSize: number }) {
    return this.errorinfoService.findAll(query);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateErrorInfoDto: UpdateErrorInfoDto,
  ) {
    return this.errorinfoService.update(+id, updateErrorInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.errorinfoService.remove(+id);
  }
}
