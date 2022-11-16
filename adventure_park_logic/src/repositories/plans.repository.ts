import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {AdparMongoDataSource} from '../datasources';
import {Plans, PlansRelations, Attraction} from '../models';
import {AttractionRepository} from './attraction.repository';

export class PlansRepository extends DefaultCrudRepository<
  Plans,
  typeof Plans.prototype.id,
  PlansRelations
> {

  public readonly attraction: BelongsToAccessor<Attraction, typeof Plans.prototype.id>;

  constructor(
    @inject('datasources.adpar_mongo') dataSource: AdparMongoDataSource, @repository.getter('AttractionRepository') protected attractionRepositoryGetter: Getter<AttractionRepository>,
  ) {
    super(Plans, dataSource);
    this.attraction = this.createBelongsToAccessorFor('attraction', attractionRepositoryGetter,);
    this.registerInclusionResolver('attraction', this.attraction.inclusionResolver);
  }
}
