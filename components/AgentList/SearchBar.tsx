import React from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

const SearchBar = () => (
  <div className="relative w-96">
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
    <Input className="pl-10" placeholder="Search by Agent Name, Brand, Varia" />
  </div>
)

export default SearchBar
