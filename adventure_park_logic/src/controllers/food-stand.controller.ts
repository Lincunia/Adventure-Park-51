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
import {FoodStand} from '../models';
import {FoodStandRepository} from '../repositories';

export class FoodStandController {
  constructor(
    @repository(FoodStandRepository)
    public foodStandRepository : FoodStandRepository,
  ) {}

  @post('/food-stands')
  @response(200, {
    description: 'FoodStand model instance',
    content: {'application/json': {schema: getModelSchemaRef(FoodStand)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FoodStand, {
            title: 'NewFoodStand',
            exclude: ['id'],
          }),
        },
      },
    })
    foodStand: Omit<FoodStand, 'id'>,
  ): Promise<FoodStand> {
    return this.foodStandRepository.create(foodStand);
  }

  @get('/food-stands/count')
  @response(200, {
    description: 'FoodStand model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(FoodStand) where?: Where<FoodStand>,
  ): Promise<Count> {
    return this.foodStandRepository.count(where);
  }

  @get('/food-stands')
  @response(200, {
    description: 'Array of FoodStand model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(FoodStand, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(FoodStand) filter?: Filter<FoodStand>,
  ): Promise<FoodStand[]> {
    return this.foodStandRepository.find(filter);
  }

  @patch('/food-stands')
  @response(200, {
    description: 'FoodStand PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FoodStand, {partial: true}),
        },
      },
    })
    foodStand: FoodStand,
    @param.where(FoodStand) where?: Where<FoodStand>,
  ): Promise<Count> {
    return this.foodStandRepository.updateAll(foodStand, where);
  }

  @get('/food-stands/{id}')
  @response(200, {
    description: 'FoodStand model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(FoodStand, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(FoodStand, {exclude: 'where'}) filter?: FilterExcludingWhere<FoodStand>
  ): Promise<FoodStand> {
    return this.foodStandRepository.findById(id, filter);
  }

  @patch('/food-stands/{id}')
  @response(204, {
    description: 'FoodStand PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(FoodStand, {partial: true}),
        },
      },
    })
    foodStand: FoodStand,
  ): Promise<void> {
    await this.foodStandRepository.updateById(id, foodStand);
  }

  @put('/food-stands/{id}')
  @response(204, {
    description: 'FoodStand PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() foodStand: FoodStand,
  ): Promise<void> {
    await this.foodStandRepository.replaceById(id, foodStand);
  }

  @del('/food-stands/{id}')
  @response(204, {
    description: 'FoodStand DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.foodStandRepository.deleteById(id);
  }
}
