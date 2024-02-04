import { Injectable } from '@nestjs/common';
import { CreateErrorInfoDto } from './dto/create-error-info.dto';
import { UpdateErrorInfoDto } from './dto/update-error-info.dto';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorInfo } from './entities/error-info.entity';
@Injectable()
export class ErrorInfoService {
  constructor(
    @InjectRepository(ErrorInfo)
    private readonly errorinfo: Repository<ErrorInfo>,
  ) {}
  create(createErrorInfoDto: CreateErrorInfoDto) {
    const data = new ErrorInfo();
    data.reportTime = createErrorInfoDto.reportTime;
    data.type = createErrorInfoDto.type;
    data.info = createErrorInfoDto.info;
    data.detail = createErrorInfoDto.detail;
    return this.errorinfo.save(data);
  }

  async findAll(query: { type: string; page: number; pageSize: number }) {
    const data = await this.errorinfo.find({
      where: {
        type: Like(`%${query.type}%`),
      },
      order: {
        id: 'DESC',
      },
      skip: (query.page - 1) * query.pageSize,
      take: query.pageSize,
    });
    const total = await this.errorinfo.count({
      where: {
        type: Like(`%${query.type}%`),
      },
    });
    return {
      data,
      total,
    };
  }

  async report(query: { event: string }) {
    const data = new ErrorInfo();
    const reportErrorInfoDto = JSON.parse(decodeURIComponent(query.event));
    console.log(reportErrorInfoDto, 'reportErrorInfoDto');
    data.reportTime = reportErrorInfoDto.reportTime;
    data.type = reportErrorInfoDto.type;
    data.info = reportErrorInfoDto.info;
    data.detail = reportErrorInfoDto.detail;
    return this.errorinfo.save(data);
  }

  update(id: number, updateErrorInfoDto: UpdateErrorInfoDto) {
    return this.errorinfo.update(id, updateErrorInfoDto);
  }

  remove(id: number) {
    return this.errorinfo.delete(id);
  }
}
