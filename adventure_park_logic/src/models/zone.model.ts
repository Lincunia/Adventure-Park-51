import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Park} from './park.model';
import {Fairground} from './fairground.model';

@model()
export class Zone extends Entity {
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
    type: 'string',
    required: true,
  })
  description: string;

  @belongsTo(() => Park)
  parkId: string;

  @hasMany(() => Fairground)
  fairgrounds: Fairground[];

  constructor(data?: Partial<Zone>) {
    super(data);
  }
}

export interface ZoneRelations {
    // describe navigational properties here
}

export type ZoneWithRelations = Zone & ZoneRelations;
