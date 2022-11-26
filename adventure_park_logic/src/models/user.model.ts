import {Entity, model, property} from '@loopback/repository';

@model()
export class User extends Entity {
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
    names: string;

    @property({
	type: 'string',
	required: true,
    })
    surnames: string;

    @property({
	type: 'string',
	required: true,
    })
    email: string;

    @property({
	type: 'string',
    })
    key?: string;

    @property({
	type: 'number',
	required: true,
    })
    phone: number;

    @property({
	type: 'string',
	required: true,
    })
    charge: string;

    constructor(data?: Partial<User>) {
	super(data);
    }
}

export interface UserRelations {
    // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
