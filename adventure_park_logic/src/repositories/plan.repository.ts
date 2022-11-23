import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, ReferencesManyAccessor} from '@loopback/repository';
import {DataParkDataSource} from '../datasources';
import {Plan, PlanRelations, Fairground} from '../models';
import {FairgroundRepository} from './fairground.repository';

export class PlanRepository extends DefaultCrudRepository<
  Plan,
  typeof Plan.prototype.id,
  PlanRelations
> {

  public readonly fairgroundPlan: ReferencesManyAccessor<Fairground, typeof Plan.prototype.id>;

  constructor(
    @inject('datasources.dataPark') dataSource: DataParkDataSource, @repository.getter('FairgroundRepository') protected fairgroundRepositoryGetter: Getter<FairgroundRepository>,
  ) {
    super(Plan, dataSource);
    this.fairgroundPlan = this.createReferencesManyAccessorFor('fairgroundPlan', fairgroundRepositoryGetter,);
    this.registerInclusionResolver('fairgroundPlan', this.fairgroundPlan.inclusionResolver);
  }
}
