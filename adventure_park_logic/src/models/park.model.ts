import {Entity, model, property, belongsTo} from '@loopback/repository';
import {City} from './city.model';

@model()
export class Park extends Entity {
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
  direction: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'number',
    required: true,
  })
  amount_of_guests: number;

  @property({
    type: 'string',
    required: true,
  })
  img_logo: string;

  @property({
    type: 'string',
    required: true,
  })
  img_map: string;

  @property({
    type: 'string',
    required: true,
  })
  motto: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @belongsTo(() => City)
  cityId: string;

  constructor(data?: Partial<Park>) {
    super(data);
  }
}

export interface ParkRelations {
    // describe navigational properties here
}

export type ParkWithRelations = Park & ParkRelations;
