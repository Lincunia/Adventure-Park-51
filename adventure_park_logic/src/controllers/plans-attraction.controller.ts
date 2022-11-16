import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Plans,
  Attraction,
} from '../models';
import {PlansRepository} from '../repositories';

export class PlansAttractionController {
  constructor(
    @repository(PlansRepository)
    public plansRepository: PlansRepository,
  ) { }

  @get('/plans/{id}/attraction', {
    responses: {
      '200': {
        description: 'Attraction belonging to Plans',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Attraction)},
          },
        },
      },
    },
  })
  async getAttraction(
    @param.path.string('id') id: typeof Plans.prototype.id,
  ): Promise<Attraction> {
    return this.plansRepository.attraction(id);
  }
}
