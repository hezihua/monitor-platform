import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ErrorInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reportTime: Date;

  @Column()
  type: string;

  @Column('simple-json')
  info: {
    title: string;
    userAgent: string;
    url: string;
    locale: string;
    time: Date;
  };

  @Column('simple-json')
  detail: any;
}
