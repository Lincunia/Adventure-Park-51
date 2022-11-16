import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Zone} from './zone.model';

@model()
export class FoodStand extends Entity {
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
    type: 'array',
    itemType: 'string',
    required: true,
  })
  menu: string[];

  @belongsTo(() => Zone)
  zoneId: string;

  constructor(data?: Partial<FoodStand>) {
    super(data);
  }
}

export interface FoodStandRelations {
  // describe navigational properties here
}

export type FoodStandWithRelations = FoodStand & FoodStandRelations;
