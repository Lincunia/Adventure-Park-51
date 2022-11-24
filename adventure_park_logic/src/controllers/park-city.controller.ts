import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Park,
  City,
} from '../models';
import {ParkRepository} from '../repositories';

export class ParkCityController {
  constructor(
    @repository(ParkRepository)
    public parkRepository: ParkRepository,
  ) { }

  @get('/parks/{id}/city', {
    responses: {
      '200': {
        description: 'City belonging to Park',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(City)},
          },
        },
      },
    },
  })
  async getCity(
    @param.path.string('id') id: typeof Park.prototype.id,
  ): Promise<City> {
    return this.parkRepository.city(id);
  }
}
