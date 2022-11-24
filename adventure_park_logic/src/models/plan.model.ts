import {Entity, model, property, referencesMany} from '@loopback/repository';
import {Fairground} from './fairground.model';
import {Park} from './park.model';

@model()
export class Plan extends Entity {
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

  @referencesMany(() => Park)
  parkIds: string[];

  @referencesMany(() => Fairground)
  fairgroundIds: string[];

  constructor(data?: Partial<Plan>) {
    super(data);
  }
}

export interface PlanRelations {
    // describe navigational properties here
}

export type PlanWithRelations = Plan & PlanRelations;