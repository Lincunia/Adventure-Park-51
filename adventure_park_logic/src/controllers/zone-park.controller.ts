import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Zone,
  Park,
} from '../models';
import {ZoneRepository} from '../repositories';

export class ZoneParkController {
  constructor(
    @repository(ZoneRepository)
    public zoneRepository: ZoneRepository,
  ) { }

  @get('/zones/{id}/park', {
    responses: {
      '200': {
        description: 'Park belonging to Zone',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Park)},
          },
        },
      },
    },
  })
  async getPark(
    @param.path.string('id') id: typeof Zone.prototype.id,
  ): Promise<Park> {
    return this.zoneRepository.park(id);
  }
}
