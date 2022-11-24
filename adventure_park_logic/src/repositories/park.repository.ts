import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DataParkDataSource} from '../datasources';
import {Park, ParkRelations, City} from '../models';
import {CityRepository} from './city.repository';

export class ParkRepository extends DefaultCrudRepository<
  Park,
  typeof Park.prototype.id,
  ParkRelations
> {

  public readonly city: BelongsToAccessor<City, typeof Park.prototype.id>;

  constructor(
    @inject('datasources.dataPark') dataSource: DataParkDataSource, @repository.getter('CityRepository') protected cityRepositoryGetter: Getter<CityRepository>,
  ) {
    super(Park, dataSource);
    this.city = this.createBelongsToAccessorFor('city', cityRepositoryGetter,);
    this.registerInclusionResolver('city', this.city.inclusionResolver);
  }
}
