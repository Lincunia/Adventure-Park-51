import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DataParkDataSource} from '../datasources';
import {Zone, ZoneRelations, Park} from '../models';
import {ParkRepository} from './park.repository';

export class ZoneRepository extends DefaultCrudRepository<
  Zone,
  typeof Zone.prototype.id,
  ZoneRelations
> {

  public readonly parkZone: BelongsToAccessor<Park, typeof Zone.prototype.id>;

  constructor(
    @inject('datasources.dataPark') dataSource: DataParkDataSource, @repository.getter('ParkRepository') protected parkRepositoryGetter: Getter<ParkRepository>,
  ) {
    super(Zone, dataSource);
    this.parkZone = this.createBelongsToAccessorFor('parkZone', parkRepositoryGetter,);
    this.registerInclusionResolver('parkZone', this.parkZone.inclusionResolver);
  }
}
