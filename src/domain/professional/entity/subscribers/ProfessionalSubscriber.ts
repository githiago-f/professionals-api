import { Inject } from '@nestjs/common';
import { Constants } from 'src/utils/constants';
import { Connection, EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent } from 'typeorm';
import { Professional } from '../Professional';

@EventSubscriber()
export class ProfessionalSubscriber implements EntitySubscriberInterface<Professional> {
  constructor(@Inject(Constants.providers.db) connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return Professional;
  }

  beforeInsert(event: InsertEvent<Professional>) {
    event.entity.createdAt = new Date().toISOString();
  }

  beforeUpdate(event: UpdateEvent<Professional>) {
    event.entity.updatedAt = new Date().toISOString();
  }
}
