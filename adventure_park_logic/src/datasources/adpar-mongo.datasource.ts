import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'adpar_mongo',
  connector: 'mongodb',
  url: 'mongodb+srv://frere_gotlieb:u_Can_Win_4_g3nericdx@cluster-wprog.0dgnpm6.mongodb.net/AdventurePark?retryWrites=true&w=majority',
  host: '',
  port: 0,
  user: '',
  password: '',
  database: '',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class AdparMongoDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'adpar_mongo';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.adpar_mongo', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
