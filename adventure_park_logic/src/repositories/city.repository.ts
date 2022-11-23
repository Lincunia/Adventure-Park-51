import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {DataParkDataSource} from '../datasources';
import {City, CityRelations, Department, Park} from '../models';
import {DepartmentRepository} from './department.repository';
import {ParkRepository} from './park.repository';

export class CityRepository extends DefaultCrudRepository<
  City,
  typeof City.prototype.id,
  CityRelations
> {

  public readonly departmentCity: BelongsToAccessor<Department, typeof City.prototype.id>;

  public readonly cityPark: HasManyRepositoryFactory<Park, typeof City.prototype.id>;

  constructor(
    @inject('datasources.dataPark') dataSource: DataParkDataSource, @repository.getter('DepartmentRepository') protected departmentRepositoryGetter: Getter<DepartmentRepository>, @repository.getter('ParkRepository') protected parkRepositoryGetter: Getter<ParkRepository>,
  ) {
    super(City, dataSource);
    this.cityPark = this.createHasManyRepositoryFactoryFor('cityPark', parkRepositoryGetter,);
    this.registerInclusionResolver('cityPark', this.cityPark.inclusionResolver);
    this.departmentCity = this.createBelongsToAccessorFor('departmentCity', departmentRepositoryGetter,);
    this.registerInclusionResolver('departmentCity', this.departmentCity.inclusionResolver);
  }
}
