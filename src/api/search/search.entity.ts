import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ILike
} from "typeorm";
import { formatSearchResults } from './search.helpers';
import _ from "lodash";

@Entity()
export class Search extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  photo: string;

  @Column()
  description: string;

  @Column()
  shortDescription: string;

  static async getSearchResults(text?: string): Promise<Search | Search[] | null> {
    const found = await Search.find({
      where: { title: ILike(`%${text}%`)},
    });
    return formatSearchResults(found);
  }

  static async getSearchDetailById(id): Promise<Search | Search[] | null> {
    const found = await Search.find({
      where: { id },
    });
    return found;
  }
}
