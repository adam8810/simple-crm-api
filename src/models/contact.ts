import { Table, Column, Model, DataType, HasMany } from "sequelize-typescript";
import Activity from "./activity";

@Table({ tableName: "contacts" })
export default class Contact extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: "company_id",
  })
  company_id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: "first_name",
  })
  first_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    field: "last_name",
  })
  last_name!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  active!: boolean;

  @HasMany(() => Activity)
  activities!: Activity[];
}
