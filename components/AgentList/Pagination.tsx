import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const Pagination = () => (
  <div className="flex justify-between items-center mt-4">
    <span className="text-sm text-muted-foreground">1-10 of 195 items</span>
    <div className="flex space-x-2">
      <Button variant="outline" size="sm">
        &lt;
      </Button>
      <Button variant="outline" size="sm">
        1
      </Button>
      <Button variant="outline" size="sm">
        2
      </Button>
      <Button variant="outline" size="sm">
        3
      </Button>
      <Button variant="outline" size="sm">
        4
      </Button>
      <Button variant="outline" size="sm">
        5
      </Button>
      <Button variant="outline" size="sm">
        ...
      </Button>
      <Button variant="outline" size="sm">
        19
      </Button>
      <Button variant="outline" size="sm">
        &gt;
      </Button>
      <Select defaultValue="10">
        <SelectTrigger className="w-16">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="10">10</SelectItem>
          <SelectItem value="20">20</SelectItem>
          <SelectItem value="50">50</SelectItem>
        </SelectContent>
      </Select>
    </div>
  </div>
)

export default Pagination
