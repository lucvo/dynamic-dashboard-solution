export interface IBaseEntity {
  id: string;
}

export interface IEntity extends IBaseEntity {
  createdBy: string;
  createdOn: Date;
  modifiedBy: string | undefined;
  modifiedOn: Date | undefined;
}
