import {
	Model,
	Column,
	Table,
	CreatedAt,
	UpdatedAt,
	DataType,
} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
	@Column({
		type: DataType.STRING,
	})
	name!: string;

	@Column
	lastname!: string;

	@Column
	age!: string;

	@CreatedAt
	@Column
	createdAt!: Date;

	@UpdatedAt
	@Column
	updatedAt!: Date;
}
