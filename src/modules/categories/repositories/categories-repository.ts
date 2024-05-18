import { IFindCategoryByIdDTO } from '@modules/categories/dtos/find-category-by-id-dto'
import { IFindCategoryByNameDTO } from '@modules/categories/dtos/find-category-by-name-dto'
import { IFindManyCategoriesDTO } from '@modules/categories/dtos/find-many-categories-dto'
import { Category } from '@modules/categories/entities/category'

export interface CategoriesRepository {
  findById({ userId, id }: IFindCategoryByIdDTO): Promise<Category | null>
  findByName({ userId, name }: IFindCategoryByNameDTO): Promise<Category | null>
  findMany({ pageIndex, userId }: IFindManyCategoriesDTO): Promise<Category[]>
  count(): Promise<number>
  create(contact: Category): Promise<void>
  save(contact: Category): Promise<void>
  remove({ userId, id }: IFindCategoryByIdDTO): Promise<void>
}
