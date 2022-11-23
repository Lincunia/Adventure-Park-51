import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataParkDataSource} from '../datasources';
import {Fairground, FairgroundRelations} from '../models';

export class FairgroundRepository extends DefaultCrudRepository<
  Fairground,
  typeof Fairground.prototype.id,
  FairgroundRelations
> {
  constructor(
    @inject('datasources.dataPark') dataSource: DataParkDataSource,
  ) {
    super(Fairground, dataSource);
  }
}
