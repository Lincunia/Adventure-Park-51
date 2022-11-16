import {Entity, model, property} from '@loopback/repository';

@model()
export class Attraction extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  img: string;

  @property({
    type: 'string',
    required: true,
  })
  height: string;

  @property({
    type: 'string',
    required: true,
  })
  youtube_link: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;


  constructor(data?: Partial<Attraction>) {
    super(data);
  }
}

export interface AttractionRelations {
  // describe navigational properties here
}

export type AttractionWithRelations = Attraction & AttractionRelations;
