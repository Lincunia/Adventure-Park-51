import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataParkDataSource} from '../datasources';
import {Park, ParkRelations} from '../models';

export class ParkRepository extends DefaultCrudRepository<
  Park,
  typeof Park.prototype.id,
  ParkRelations
> {
  constructor(
    @inject('datasources.dataPark') dataSource: DataParkDataSource,
  ) {
    super(Park, dataSource);
  }
}
