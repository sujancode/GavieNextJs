import React from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface SearchInputProps {
  placeholder: string
  className?: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  className,
  value,
  onChange,
}) => (
  <div className={`relative ${className}`}>
    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
    <Input
      className="pl-10"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  </div>
)

export default SearchInput
