import {
    Count,
    CountSchema,
    Filter,
    FilterExcludingWhere,
    repository,
    Where,
} from '@loopback/repository';
import {
    post,
    param,
    get,
    getModelSchemaRef,
    patch,
    put,
    del,
    requestBody,
    response,
    HttpErrors
} from '@loopback/rest';
import {
    User,
    Credentials,
    Cred
} from '../models';
import {UserRepository} from '../repositories';
import {Keys} from '../config/keys';

import {service} from '@loopback/core';
import {AuthenticationService} from '../services'

const fetch=require('node-fetch');

export class UserController {
    constructor(
	@repository(UserRepository)
	public userRepository : UserRepository,
	@service(AuthenticationService)
	public authService: AuthenticationService
    ) {}

    @post('/identifyAdmin', {
	responses: {
	    '200': {
		description: 'Admin identification made correctly'
	    }
	}
    })
    async identifySilly(
	@requestBody() credential: Credentials
    ){
	let p=await this.authService.identifyAdm(credential.user, credential.key, credential.charge, credential.phone);
	if(p){
	    let token=this.authService.generateTokenJWT(p);
	    return {
		data: {
		    name: `${p.names} ${p.surnames}`,
		    email: p.email,
		    charge: p.charge,
		    phone: p.phone,
		    id: p.id
		},
		tk: token
	    }
	}
	else throw new HttpErrors[401]('Datos inválidos');
    }
    @post('/identifySomeone', {
	responses: {
	    '200': {
		description: 'Users identification made correctly'
	    }
	}
    })
    async identifyPerson(
	@requestBody() credential: Cred
    ){
	let p=await this.authService.identifyPer(credential.user, credential.key);
	if(p){
	    let token=this.authService.generateTokenJWT(p);
	    return {
		data: {
		    id: p.id,
		    name: `${p.names} ${p.surnames}`,
		    email: p.email
		},
		tk: token
	    }
	}
	else throw new HttpErrors[401]('Datos inválidos');
    }
    @post('/users')
    @response(200, {
	description: 'User model instance',
	content: {'application/json': {schema: getModelSchemaRef(User)}},
    })
    async create(
	@requestBody({
	    content: {
		'application/json': {
		    schema: getModelSchemaRef(User, {
			title: 'NewUser',
			exclude: ['id'],
		    }),
		},
	    },
	})
	user: Omit<User, 'id'>,
    ): Promise<User> {
	// Generate key
	let key=this.authService.generator();
	user.key=this.authService.cipherKey(key);
	let u=await this.userRepository.create(user);
	// Notify the user
	let matter='Registro en la plataforma'
	let content=`Hola ${user.names} ${user.surnames} esta es tu siguiente contraseña<br><br><strong>${key}</strong>`;
	fetch(`${Keys.urlNotificationService}/email_send?email=${user.email}&message=${content}&matter=${matter}`)
	.then((data:any)=>{
	    console.log(data);
	})
	return u;
    }

    @get('/users/count')
    @response(200, {
	description: 'User model count',
	content: {'application/json': {schema: CountSchema}},
    })
    async count(
	@param.where(User) where?: Where<User>,
    ): Promise<Count> {
	return this.userRepository.count(where);
    }

    @get('/users')
    @response(200, {
	description: 'Array of User model instances',
	content: {
	    'application/json': {
		schema: {
		    type: 'array',
		    items: getModelSchemaRef(User, {includeRelations: true}),
		},
	    },
	},
    })
    async find(
	@param.filter(User) filter?: Filter<User>,
    ): Promise<User[]> {
	return this.userRepository.find(filter);
    }

    @patch('/users')
    @response(200, {
	description: 'User PATCH success count',
	content: {'application/json': {schema: CountSchema}},
    })
    async updateAll(
	@requestBody({
	    content: {
		'application/json': {
		    schema: getModelSchemaRef(User, {partial: true}),
		},
	    },
	})
	user: User,
	@param.where(User) where?: Where<User>,
    ): Promise<Count> {
	return this.userRepository.updateAll(user, where);
    }

    @get('/users/{id}')
    @response(200, {
	description: 'User model instance',
	content: {
	    'application/json': {
		schema: getModelSchemaRef(User, {includeRelations: true}),
	    },
	},
    })
    async findById(
	@param.path.string('id') id: string,
	@param.filter(User, {exclude: 'where'}) filter?: FilterExcludingWhere<User>
    ): Promise<User> {
	return this.userRepository.findById(id, filter);
    }

    @patch('/users/{id}')
    @response(204, {
	description: 'User PATCH success',
    })
    async updateById(
	@param.path.string('id') id: string,
	@requestBody({
	    content: {
		'application/json': {
		    schema: getModelSchemaRef(User, {partial: true}),
		},
	    },
	})
	user: User,
    ): Promise<void> {
	await this.userRepository.updateById(id, user);
    }

    @put('/users/{id}')
    @response(204, {
	description: 'User PUT success',
    })
    async replaceById(
	@param.path.string('id') id: string,
	@requestBody() user: User,
    ): Promise<void> {
	await this.userRepository.replaceById(id, user);
    }

    @del('/users/{id}')
    @response(204, {
	description: 'User DELETE success',
    })
    async deleteById(@param.path.string('id') id: string): Promise<void> {
	await this.userRepository.deleteById(id);
    }
}
