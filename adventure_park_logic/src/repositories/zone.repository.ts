import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {DataParkDataSource} from '../datasources';
import {Zone, ZoneRelations, Park, Fairground} from '../models';
import {ParkRepository} from './park.repository';
import {FairgroundRepository} from './fairground.repository';

export class ZoneRepository extends DefaultCrudRepository<
  Zone,
  typeof Zone.prototype.id,
  ZoneRelations
> {

  public readonly park: BelongsToAccessor<Park, typeof Zone.prototype.id>;

  public readonly fairgrounds: HasManyRepositoryFactory<Fairground, typeof Zone.prototype.id>;

  constructor(
    @inject('datasources.dataPark') dataSource: DataParkDataSource, @repository.getter('ParkRepository') protected parkRepositoryGetter: Getter<ParkRepository>, @repository.getter('FairgroundRepository') protected fairgroundRepositoryGetter: Getter<FairgroundRepository>,
  ) {
    super(Zone, dataSource);
    this.fairgrounds = this.createHasManyRepositoryFactoryFor('fairgrounds', fairgroundRepositoryGetter,);
    this.registerInclusionResolver('fairgrounds', this.fairgrounds.inclusionResolver);
    this.park = this.createBelongsToAccessorFor('park', parkRepositoryGetter,);
    this.registerInclusionResolver('park', this.park.inclusionResolver);
  }
}
