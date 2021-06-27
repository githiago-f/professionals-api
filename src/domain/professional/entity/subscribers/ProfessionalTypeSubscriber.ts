import { Inject } from '@nestjs/common';
import { Constants } from 'src/utils/constants';
import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
  UpdateEvent,
} from 'typeorm';
import { ProfessionalType } from '../ProfessionalType';

@EventSubscriber()
export class ProfessionalTypeSubscriber
  implements EntitySubscriberInterface<ProfessionalType> {
  constructor(@Inject(Constants.providers.db) connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return ProfessionalType;
  }

  beforeInsert(event: InsertEvent<ProfessionalType>) {
    event.entity.createdAt = new Date().toISOString();
  }

  beforeUpdate(event: UpdateEvent<ProfessionalType>) {
    event.entity.updatedAt = new Date().toISOString();
  }
}
