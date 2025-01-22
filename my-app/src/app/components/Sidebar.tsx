import { House, LibraryBig, Search } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <nav className="space-y-4">
        <a href="" className="flex items-center gap-2 text-sm font-semibold">
          <House />
          Home
        </a>
        <a href="" className="flex items-center gap-2 text-sm font-semibold">
          <Search />
          Search
        </a>
        <a href="" className="flex items-center gap-2 text-sm font-semibold">
          <LibraryBig />
          Library
        </a>
      </nav>

      <nav className="flex flex-col gap-3 mt-10 pt-10 border-t border-zinc-800 text-zinc-400 text-sm ">
        <a href="" className="hover:text-zinc-100">
          Sertanejo
        </a>
        <a href="" className="hover:text-zinc-100">
          Trap
        </a>
        <a href="" className="hover:text-zinc-100">
          Funk
        </a>
        <a href="" className="hover:text-zinc-100">
          Pagode
        </a>
        <a href="" className="hover:text-zinc-100">
          Samba
        </a>
      </nav>
    </aside>
  );
}
