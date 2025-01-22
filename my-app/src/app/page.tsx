import {
  House,
  Search,
  LibraryBig,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-4">
            <a
              href=""
              className="flex items-center gap-2 text-sm font-semibold"
            >
              <House />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-sm font-semibold"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-2 text-sm font-semibold"
            >
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
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button>
              <ChevronLeft className="rounded-full bg-black/40 " />
            </button>
            <button>
              <ChevronRight className="rounded-full bg-black/40 " />
            </button>
          </div>

          <div>
            <h1 className="text-3xl font-semibold mt-10">Good Afternoon</h1>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <div className="bg-white/20 rounded flex items-center gap-6 text-2xl overflow-hidden">
              <Image src="/album.jpg" width={180} height={180} alt="album" />
              <strong>wasting light</strong>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-zinc-700 p-6">footer</footer>
    </div>
  );
}
