import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ActionSelect = () => (
  <Select>
    <SelectTrigger className="w-32">
      <SelectValue placeholder="Action" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="edit">Edit</SelectItem>
      <SelectItem value="delete">Delete</SelectItem>
      <SelectItem value="duplicate">Duplicate</SelectItem>
    </SelectContent>
  </Select>
);

export default ActionSelect;