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
import {Attraction} from '../models';
import {AttractionRepository} from '../repositories';

export class AttractionController {
  constructor(
    @repository(AttractionRepository)
    public attractionRepository : AttractionRepository,
  ) {}

  @post('/attractions')
  @response(200, {
    description: 'Attraction model instance',
    content: {'application/json': {schema: getModelSchemaRef(Attraction)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Attraction, {
            title: 'NewAttraction',
            exclude: ['id'],
          }),
        },
      },
    })
    attraction: Omit<Attraction, 'id'>,
  ): Promise<Attraction> {
    return this.attractionRepository.create(attraction);
  }

  @get('/attractions/count')
  @response(200, {
    description: 'Attraction model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Attraction) where?: Where<Attraction>,
  ): Promise<Count> {
    return this.attractionRepository.count(where);
  }

  @get('/attractions')
  @response(200, {
    description: 'Array of Attraction model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Attraction, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Attraction) filter?: Filter<Attraction>,
  ): Promise<Attraction[]> {
    return this.attractionRepository.find(filter);
  }

  @patch('/attractions')
  @response(200, {
    description: 'Attraction PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Attraction, {partial: true}),
        },
      },
    })
    attraction: Attraction,
    @param.where(Attraction) where?: Where<Attraction>,
  ): Promise<Count> {
    return this.attractionRepository.updateAll(attraction, where);
  }

  @get('/attractions/{id}')
  @response(200, {
    description: 'Attraction model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Attraction, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Attraction, {exclude: 'where'}) filter?: FilterExcludingWhere<Attraction>
  ): Promise<Attraction> {
    return this.attractionRepository.findById(id, filter);
  }

  @patch('/attractions/{id}')
  @response(204, {
    description: 'Attraction PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Attraction, {partial: true}),
        },
      },
    })
    attraction: Attraction,
  ): Promise<void> {
    await this.attractionRepository.updateById(id, attraction);
  }

  @put('/attractions/{id}')
  @response(204, {
    description: 'Attraction PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() attraction: Attraction,
  ): Promise<void> {
    await this.attractionRepository.replaceById(id, attraction);
  }

  @del('/attractions/{id}')
  @response(204, {
    description: 'Attraction DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.attractionRepository.deleteById(id);
  }
}
