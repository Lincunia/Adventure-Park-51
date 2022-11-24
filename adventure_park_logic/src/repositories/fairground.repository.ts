import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DataParkDataSource} from '../datasources';
import {Fairground, FairgroundRelations, Zone} from '../models';
import {ZoneRepository} from './zone.repository';

export class FairgroundRepository extends DefaultCrudRepository<
  Fairground,
  typeof Fairground.prototype.id,
  FairgroundRelations
> {

  public readonly zone: BelongsToAccessor<Zone, typeof Fairground.prototype.id>;

  constructor(
    @inject('datasources.dataPark') dataSource: DataParkDataSource, @repository.getter('ZoneRepository') protected zoneRepositoryGetter: Getter<ZoneRepository>,
  ) {
    super(Fairground, dataSource);
    this.zone = this.createBelongsToAccessorFor('zone', zoneRepositoryGetter,);
    this.registerInclusionResolver('zone', this.zone.inclusionResolver);
  }
}
