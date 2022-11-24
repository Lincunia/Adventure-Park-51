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
  Zone,
  Fairground,
} from '../models';
import {ZoneRepository} from '../repositories';

export class ZoneFairgroundController {
  constructor(
    @repository(ZoneRepository) protected zoneRepository: ZoneRepository,
  ) { }

  @get('/zones/{id}/fairgrounds', {
    responses: {
      '200': {
        description: 'Array of Zone has many Fairground',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Fairground)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Fairground>,
  ): Promise<Fairground[]> {
    return this.zoneRepository.fairgrounds(id).find(filter);
  }

  @post('/zones/{id}/fairgrounds', {
    responses: {
      '200': {
        description: 'Zone model instance',
        content: {'application/json': {schema: getModelSchemaRef(Fairground)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Zone.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fairground, {
            title: 'NewFairgroundInZone',
            exclude: ['id'],
            optional: ['zoneId']
          }),
        },
      },
    }) fairground: Omit<Fairground, 'id'>,
  ): Promise<Fairground> {
    return this.zoneRepository.fairgrounds(id).create(fairground);
  }

  @patch('/zones/{id}/fairgrounds', {
    responses: {
      '200': {
        description: 'Zone.Fairground PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fairground, {partial: true}),
        },
      },
    })
    fairground: Partial<Fairground>,
    @param.query.object('where', getWhereSchemaFor(Fairground)) where?: Where<Fairground>,
  ): Promise<Count> {
    return this.zoneRepository.fairgrounds(id).patch(fairground, where);
  }

  @del('/zones/{id}/fairgrounds', {
    responses: {
      '200': {
        description: 'Zone.Fairground DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Fairground)) where?: Where<Fairground>,
  ): Promise<Count> {
    return this.zoneRepository.fairgrounds(id).delete(where);
  }
}
