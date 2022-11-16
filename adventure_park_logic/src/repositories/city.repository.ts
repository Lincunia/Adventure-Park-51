import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {AdparMongoDataSource} from '../datasources';
import {City, CityRelations, Park} from '../models';
import {ParkRepository} from './park.repository';

export class CityRepository extends DefaultCrudRepository<
  City,
  typeof City.prototype.id,
  CityRelations
> {

  public readonly parks: HasManyRepositoryFactory<Park, typeof City.prototype.id>;

  constructor(
    @inject('datasources.adpar_mongo') dataSource: AdparMongoDataSource, @repository.getter('ParkRepository') protected parkRepositoryGetter: Getter<ParkRepository>,
  ) {
    super(City, dataSource);
    this.parks = this.createHasManyRepositoryFactoryFor('parks', parkRepositoryGetter,);
    this.registerInclusionResolver('parks', this.parks.inclusionResolver);
  }
}
