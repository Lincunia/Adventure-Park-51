import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DataParkDataSource} from '../datasources';
import {FoodStand, FoodStandRelations, Park} from '../models';
import {ParkRepository} from './park.repository';

export class FoodStandRepository extends DefaultCrudRepository<
  FoodStand,
  typeof FoodStand.prototype.id,
  FoodStandRelations
> {

  public readonly park: BelongsToAccessor<Park, typeof FoodStand.prototype.id>;

  constructor(
    @inject('datasources.dataPark') dataSource: DataParkDataSource, @repository.getter('ParkRepository') protected parkRepositoryGetter: Getter<ParkRepository>,
  ) {
    super(FoodStand, dataSource);
    this.park = this.createBelongsToAccessorFor('park', parkRepositoryGetter,);
    this.registerInclusionResolver('park', this.park.inclusionResolver);
  }
}
