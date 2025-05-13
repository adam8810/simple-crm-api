import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import Contact from "./contact";

@Table({ tableName: "activities" })
export default class Activity extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: "id",
  })
  declare id: number;

  @ForeignKey(() => Contact)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: "contact_id",
  })
  contact_id!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  type!: number;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  notes!: string;

  @BelongsTo(() => Contact)
  contact!: Contact;
}
