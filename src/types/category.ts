export interface CategoryDetail {
  dirName: string
  publicName: string
  count: number
}

export interface MainCategoryDetail extends CategoryDetail {
  subCategoryList: CategoryDetail[]
}
