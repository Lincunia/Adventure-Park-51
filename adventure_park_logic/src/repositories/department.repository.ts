import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DataParkDataSource} from '../datasources';
import {Department, DepartmentRelations} from '../models';

export class DepartmentRepository extends DefaultCrudRepository<
  Department,
  typeof Department.prototype.id,
  DepartmentRelations
> {
  constructor(
    @inject('datasources.dataPark') dataSource: DataParkDataSource,
  ) {
    super(Department, dataSource);
  }
}
