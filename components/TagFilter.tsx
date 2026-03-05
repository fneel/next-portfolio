type TagFilterProps = {
  tags: string[];
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
};

export default function TagFilter({
  tags,
  selectedTag,
  onSelectTag,
}: TagFilterProps) {
  const baseStyle =
    "text-sm border border-zinc-300 px-4 text-center py-1 rounded-full cursor-pointer [font-variant:all-small-caps] transition-all duration-200 active:scale-1";
  return (
    <nav className="flex w-full gap-6 rounded-md shadow-md py-4 items-center px-4 my-8 mx-auto">
      <span className="">Filter view</span>
      <button
        className={`${baseStyle} ${
          !selectedTag ? "bg-zinc-900 text-white border-zinc-900" : ""
        }`}
        onClick={() => onSelectTag(null)}
      >
        All
      </button>

      {tags.map((tag) => (
        <button
          key={tag}
          className={`${baseStyle} ${
            selectedTag === tag ? "bg-zinc-900 text-white border-zinc-900" : ""
          }`}
          onClick={() => onSelectTag(selectedTag === tag ? null : tag)}
        >
          {tag}
        </button>
      ))}
    </nav>
  );
}
