import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Attraction} from './attraction.model';

@model()
export class Plans extends Entity {
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
  color: string;

  @property({
    type: 'number',
    required: true,
  })
  value: number;

  @property({
    type: 'string',
    required: true,
  })
  park: string;

  @belongsTo(() => Attraction)
  attractionId: string;

  constructor(data?: Partial<Plans>) {
    super(data);
  }
}

export interface PlansRelations {
  // describe navigational properties here
}

export type PlansWithRelations = Plans & PlansRelations;
