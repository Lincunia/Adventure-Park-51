import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AdparMongoDataSource} from '../datasources';
import {Park, ParkRelations} from '../models';

export class ParkRepository extends DefaultCrudRepository<
  Park,
  typeof Park.prototype.id,
  ParkRelations
> {
  constructor(
    @inject('datasources.adpar_mongo') dataSource: AdparMongoDataSource,
  ) {
    super(Park, dataSource);
  }
}
