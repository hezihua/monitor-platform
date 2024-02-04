export class CreateErrorInfoDto {
  reportTime: Date;

  type: string;

  info?: {
    title: string;
    userAgent: string;
    url: string;
    locale: string;
    time: Date;
  };

  detail?: any;
}
