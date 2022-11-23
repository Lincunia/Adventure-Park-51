import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DataParkDataSource} from '../datasources';
import {FoodStand, FoodStandRelations, Zone} from '../models';
import {ZoneRepository} from './zone.repository';

export class FoodStandRepository extends DefaultCrudRepository<
  FoodStand,
  typeof FoodStand.prototype.id,
  FoodStandRelations
> {

  public readonly ZoneFoodStand: BelongsToAccessor<Zone, typeof FoodStand.prototype.id>;

  constructor(
    @inject('datasources.dataPark') dataSource: DataParkDataSource, @repository.getter('ZoneRepository') protected zoneRepositoryGetter: Getter<ZoneRepository>,
  ) {
    super(FoodStand, dataSource);
    this.ZoneFoodStand = this.createBelongsToAccessorFor('ZoneFoodStand', zoneRepositoryGetter,);
    this.registerInclusionResolver('ZoneFoodStand', this.ZoneFoodStand.inclusionResolver);
  }
}
