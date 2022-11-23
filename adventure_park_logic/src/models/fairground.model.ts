import {Entity, model, property} from '@loopback/repository';

@model()
export class Fairground extends Entity {
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
    type: 'number',
    required: true,
  })
  height: number;

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


  constructor(data?: Partial<Fairground>) {
    super(data);
  }
}

export interface FairgroundRelations {
  // describe navigational properties here
}

export type FairgroundWithRelations = Fairground & FairgroundRelations;
