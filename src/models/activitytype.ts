import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "activity_types" })
export default class ActivityType extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  active!: boolean;
}
