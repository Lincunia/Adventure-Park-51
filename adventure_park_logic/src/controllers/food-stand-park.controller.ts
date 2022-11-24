import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  FoodStand,
  Park,
} from '../models';
import {FoodStandRepository} from '../repositories';

export class FoodStandParkController {
  constructor(
    @repository(FoodStandRepository)
    public foodStandRepository: FoodStandRepository,
  ) { }

  @get('/food-stands/{id}/park', {
    responses: {
      '200': {
        description: 'Park belonging to FoodStand',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Park)},
          },
        },
      },
    },
  })
  async getPark(
    @param.path.string('id') id: typeof FoodStand.prototype.id,
  ): Promise<Park> {
    return this.foodStandRepository.park(id);
  }
}
