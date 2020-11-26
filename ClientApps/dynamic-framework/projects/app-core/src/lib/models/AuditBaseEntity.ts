export class BaseEntity {
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}

export class AuditBaseEntity extends BaseEntity {
  createdBy: string;
  createdOn: Date;
  modifiedBy: string;
  modifiedOn: Date;
  isDeleted: boolean;
}
