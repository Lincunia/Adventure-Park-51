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
import {Plans} from '../models';
import {PlansRepository} from '../repositories';

export class PlanController {
  constructor(
    @repository(PlansRepository)
    public plansRepository : PlansRepository,
  ) {}

  @post('/plans')
  @response(200, {
    description: 'Plans model instance',
    content: {'application/json': {schema: getModelSchemaRef(Plans)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plans, {
            title: 'NewPlans',
            exclude: ['id'],
          }),
        },
      },
    })
    plans: Omit<Plans, 'id'>,
  ): Promise<Plans> {
    return this.plansRepository.create(plans);
  }

  @get('/plans/count')
  @response(200, {
    description: 'Plans model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Plans) where?: Where<Plans>,
  ): Promise<Count> {
    return this.plansRepository.count(where);
  }

  @get('/plans')
  @response(200, {
    description: 'Array of Plans model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Plans, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Plans) filter?: Filter<Plans>,
  ): Promise<Plans[]> {
    return this.plansRepository.find(filter);
  }

  @patch('/plans')
  @response(200, {
    description: 'Plans PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plans, {partial: true}),
        },
      },
    })
    plans: Plans,
    @param.where(Plans) where?: Where<Plans>,
  ): Promise<Count> {
    return this.plansRepository.updateAll(plans, where);
  }

  @get('/plans/{id}')
  @response(200, {
    description: 'Plans model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Plans, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Plans, {exclude: 'where'}) filter?: FilterExcludingWhere<Plans>
  ): Promise<Plans> {
    return this.plansRepository.findById(id, filter);
  }

  @patch('/plans/{id}')
  @response(204, {
    description: 'Plans PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Plans, {partial: true}),
        },
      },
    })
    plans: Plans,
  ): Promise<void> {
    await this.plansRepository.updateById(id, plans);
  }

  @put('/plans/{id}')
  @response(204, {
    description: 'Plans PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() plans: Plans,
  ): Promise<void> {
    await this.plansRepository.replaceById(id, plans);
  }

  @del('/plans/{id}')
  @response(204, {
    description: 'Plans DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.plansRepository.deleteById(id);
  }
}
