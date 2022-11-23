import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Department} from './department.model';
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

  @belongsTo(() => Department, {name: 'departmentCity'})
  departmentName: string;

  @hasMany(() => Park, {keyTo: 'parks'})
  cityPark: Park[];

  constructor(data?: Partial<City>) {
    super(data);
  }
}

export interface CityRelations {
  // describe navigational properties here
}

export type CityWithRelations = City & CityRelations;
