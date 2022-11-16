import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AdparMongoDataSource} from '../datasources';
import {Attraction, AttractionRelations} from '../models';

export class AttractionRepository extends DefaultCrudRepository<
  Attraction,
  typeof Attraction.prototype.id,
  AttractionRelations
> {
  constructor(
    @inject('datasources.adpar_mongo') dataSource: AdparMongoDataSource,
  ) {
    super(Attraction, dataSource);
  }
}
