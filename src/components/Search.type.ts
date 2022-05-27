
export type SearchProps = {
  value: string;
  placeholder?: string;
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: () => void;
};
