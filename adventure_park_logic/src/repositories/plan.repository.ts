import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, ReferencesManyAccessor} from '@loopback/repository';
import {DataParkDataSource} from '../datasources';
import {Plan, PlanRelations, Park, Fairground} from '../models';
import {ParkRepository} from './park.repository';
import {FairgroundRepository} from './fairground.repository';

export class PlanRepository extends DefaultCrudRepository<
  Plan,
  typeof Plan.prototype.id,
  PlanRelations
> {

  public readonly parks: ReferencesManyAccessor<Park, typeof Plan.prototype.id>;

  public readonly fairgrounds: ReferencesManyAccessor<Fairground, typeof Plan.prototype.id>;

  constructor(
    @inject('datasources.dataPark') dataSource: DataParkDataSource, @repository.getter('ParkRepository') protected parkRepositoryGetter: Getter<ParkRepository>, @repository.getter('FairgroundRepository') protected fairgroundRepositoryGetter: Getter<FairgroundRepository>,
  ) {
    super(Plan, dataSource);
    this.fairgrounds = this.createReferencesManyAccessorFor('fairgrounds', fairgroundRepositoryGetter,);
    this.registerInclusionResolver('fairgrounds', this.fairgrounds.inclusionResolver);
    this.parks = this.createReferencesManyAccessorFor('parks', parkRepositoryGetter,);
    this.registerInclusionResolver('parks', this.parks.inclusionResolver);
  }
}
