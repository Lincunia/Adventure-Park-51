import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Fairground,
  Zone,
} from '../models';
import {FairgroundRepository} from '../repositories';

export class FairgroundZoneController {
  constructor(
    @repository(FairgroundRepository)
    public fairgroundRepository: FairgroundRepository,
  ) { }

  @get('/fairgrounds/{id}/zone', {
    responses: {
      '200': {
        description: 'Zone belonging to Fairground',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Zone)},
          },
        },
      },
    },
  })
  async getZone(
    @param.path.string('id') id: typeof Fairground.prototype.id,
  ): Promise<Zone> {
    return this.fairgroundRepository.zone(id);
  }
}
