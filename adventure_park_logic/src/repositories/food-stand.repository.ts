import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {AdparMongoDataSource} from '../datasources';
import {FoodStand, FoodStandRelations, Zone} from '../models';
import {ZoneRepository} from './zone.repository';

export class FoodStandRepository extends DefaultCrudRepository<
  FoodStand,
  typeof FoodStand.prototype.id,
  FoodStandRelations
> {

  public readonly zone: BelongsToAccessor<Zone, typeof FoodStand.prototype.id>;

  constructor(
    @inject('datasources.adpar_mongo') dataSource: AdparMongoDataSource, @repository.getter('ZoneRepository') protected zoneRepositoryGetter: Getter<ZoneRepository>,
  ) {
    super(FoodStand, dataSource);
    this.zone = this.createBelongsToAccessorFor('zone', zoneRepositoryGetter,);
    this.registerInclusionResolver('zone', this.zone.inclusionResolver);
  }
}
