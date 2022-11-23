import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  City,
  Park,
} from '../models';
import {CityRepository} from '../repositories';

export class CityParkController {
  constructor(
    @repository(CityRepository) protected cityRepository: CityRepository,
  ) { }

  @get('/cities/{id}/parks', {
    responses: {
      '200': {
        description: 'Array of City has many Park',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Park)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Park>,
  ): Promise<Park[]> {
    return this.cityRepository.cityPark(id).find(filter);
  }

  @post('/cities/{id}/parks', {
    responses: {
      '200': {
        description: 'City model instance',
        content: {'application/json': {schema: getModelSchemaRef(Park)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof City.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Park, {
            title: 'NewParkInCity',
            exclude: ['id'],
            optional: ['parks']
          }),
        },
      },
    }) park: Omit<Park, 'id'>,
  ): Promise<Park> {
    return this.cityRepository.cityPark(id).create(park);
  }

  @patch('/cities/{id}/parks', {
    responses: {
      '200': {
        description: 'City.Park PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Park, {partial: true}),
        },
      },
    })
    park: Partial<Park>,
    @param.query.object('where', getWhereSchemaFor(Park)) where?: Where<Park>,
  ): Promise<Count> {
    return this.cityRepository.cityPark(id).patch(park, where);
  }

  @del('/cities/{id}/parks', {
    responses: {
      '200': {
        description: 'City.Park DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Park)) where?: Where<Park>,
  ): Promise<Count> {
    return this.cityRepository.cityPark(id).delete(where);
  }
}
