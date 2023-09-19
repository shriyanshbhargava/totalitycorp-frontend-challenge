import { filterData, SearchType } from "filter-data";
import { PRODUCTS } from "../../products";

export default function getData({ searchName, searchCategory }) {
  const searchConditions = [
    {
      key: "productName",
      value: searchName,
      type: SearchType.LK
    },
    {
      key: "category",
      value: searchCategory,
      type: SearchType.LK
    }
  ];

  return filterData(PRODUCTS, searchConditions);
}
