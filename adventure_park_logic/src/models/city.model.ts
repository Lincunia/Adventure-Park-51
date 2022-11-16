import {Entity, model, property, hasMany} from '@loopback/repository';
import {Park} from './park.model';

@model()
export class City extends Entity {
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
  department: string;

  @property({
    type: 'string',
  })
  departmentId?: string;

  @hasMany(() => Park)
  parks: Park[];

  constructor(data?: Partial<City>) {
    super(data);
  }
}

export interface CityRelations {
  // describe navigational properties here
}

export type CityWithRelations = City & CityRelations;
