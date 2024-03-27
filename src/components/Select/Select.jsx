import React from "react";
import { Select } from "@chakra-ui/react";

const CategorySelect = ({ value, onChange }) => {
  return (
    <Select value={value} onChange={onChange} placeholder="Категории">
      <option value="Работа в Германии">Работа в Германии</option>
      <option value="Жизнь в Германии">Жизнь в Германии</option>
      <option value="Учёба в Германии">Учёба в Германии</option>
    </Select>
  );
};

export default CategorySelect;
