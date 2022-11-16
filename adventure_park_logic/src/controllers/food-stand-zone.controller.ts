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
  Zone,
} from '../models';
import {FoodStandRepository} from '../repositories';

export class FoodStandZoneController {
  constructor(
    @repository(FoodStandRepository)
    public foodStandRepository: FoodStandRepository,
  ) { }

  @get('/food-stands/{id}/zone', {
    responses: {
      '200': {
        description: 'Zone belonging to FoodStand',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Zone)},
          },
        },
      },
    },
  })
  async getZone(
    @param.path.string('id') id: typeof FoodStand.prototype.id,
  ): Promise<Zone> {
    return this.foodStandRepository.zone(id);
  }
}
