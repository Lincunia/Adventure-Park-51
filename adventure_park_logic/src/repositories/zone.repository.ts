import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {AdparMongoDataSource} from '../datasources';
import {Zone, ZoneRelations, Park} from '../models';
import {ParkRepository} from './park.repository';

export class ZoneRepository extends DefaultCrudRepository<
  Zone,
  typeof Zone.prototype.id,
  ZoneRelations
> {

  public readonly park: BelongsToAccessor<Park, typeof Zone.prototype.id>;

  constructor(
    @inject('datasources.adpar_mongo') dataSource: AdparMongoDataSource, @repository.getter('ParkRepository') protected parkRepositoryGetter: Getter<ParkRepository>,
  ) {
    super(Zone, dataSource);
    this.park = this.createBelongsToAccessorFor('park', parkRepositoryGetter,);
    this.registerInclusionResolver('park', this.park.inclusionResolver);
  }
}
