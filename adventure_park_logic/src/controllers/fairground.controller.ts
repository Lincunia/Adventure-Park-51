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
} from '@loopback/rest';
import {Fairground} from '../models';
import {FairgroundRepository} from '../repositories';
import {authenticate} from '@loopback/authentication';

@authenticate('admin') //Protege según si eres administrador 
export class FairgroundController {
    constructor(
	@repository(FairgroundRepository)
	public fairgroundRepository : FairgroundRepository,
    ) {}
    
    @post('/fairgrounds')
    @response(200, {
	description: 'Fairground model instance',
	content: {'application/json': {schema: getModelSchemaRef(Fairground)}},
    })
    async create(
	@requestBody({
	    content: {
		'application/json': {
		    schema: getModelSchemaRef(Fairground, {
			title: 'NewFairground',
			exclude: ['id'],
		    }),
		},
	    },
	})
	fairground: Omit<Fairground, 'id'>,
    ): Promise<Fairground> {
	return this.fairgroundRepository.create(fairground);
    }

    @get('/fairgrounds/count')
    @response(200, {
	description: 'Fairground model count',
	content: {'application/json': {schema: CountSchema}},
    })
    async count(
	@param.where(Fairground) where?: Where<Fairground>,
    ): Promise<Count> {
	return this.fairgroundRepository.count(where);
    }

    @authenticate.skip() // Te saltas la protección en este método (el GET) 
    @get('/fairgrounds')
    @response(200, {
	description: 'Array of Fairground model instances',
	content: {
	    'application/json': {
		schema: {
		    type: 'array',
		    items: getModelSchemaRef(Fairground, {includeRelations: true}),
		},
	    },
	},
    })
    async find(
	@param.filter(Fairground) filter?: Filter<Fairground>,
    ): Promise<Fairground[]> {
	return this.fairgroundRepository.find(filter);
    }

    @patch('/fairgrounds')
    @response(200, {
	description: 'Fairground PATCH success count',
	content: {'application/json': {schema: CountSchema}},
    })
    async updateAll(
	@requestBody({
	    content: {
		'application/json': {
		    schema: getModelSchemaRef(Fairground, {partial: true}),
		},
	    },
	})
	fairground: Fairground,
	@param.where(Fairground) where?: Where<Fairground>,
    ): Promise<Count> {
	return this.fairgroundRepository.updateAll(fairground, where);
    }

    @get('/fairgrounds/{id}')
    @response(200, {
	description: 'Fairground model instance',
	content: {
	    'application/json': {
		schema: getModelSchemaRef(Fairground, {includeRelations: true}),
	    },
	},
    })
    async findById(
	@param.path.string('id') id: string,
	@param.filter(Fairground, {exclude: 'where'}) filter?: FilterExcludingWhere<Fairground>
    ): Promise<Fairground> {
	return this.fairgroundRepository.findById(id, filter);
    }

    @patch('/fairgrounds/{id}')
    @response(204, {
	description: 'Fairground PATCH success',
    })
    async updateById(
	@param.path.string('id') id: string,
	@requestBody({
	    content: {
		'application/json': {
		    schema: getModelSchemaRef(Fairground, {partial: true}),
		},
	    },
	})
	fairground: Fairground,
    ): Promise<void> {
	await this.fairgroundRepository.updateById(id, fairground);
    }

    @put('/fairgrounds/{id}')
    @response(204, {
	description: 'Fairground PUT success',
    })
    async replaceById(
	@param.path.string('id') id: string,
	@requestBody() fairground: Fairground,
    ): Promise<void> {
	await this.fairgroundRepository.replaceById(id, fairground);
    }

    @del('/fairgrounds/{id}')
    @response(204, {
	description: 'Fairground DELETE success',
    })
    async deleteById(@param.path.string('id') id: string): Promise<void> {
	await this.fairgroundRepository.deleteById(id);
    }
}
