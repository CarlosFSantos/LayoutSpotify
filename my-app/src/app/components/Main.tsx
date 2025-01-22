import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export function Main() {
  return (
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
        <a className="bg-white/10 rounded flex items-center gap-6 text-2xl overflow-hidden hover:bg-white/30 transition-colors group">
          <Image src="/album.jpg" width={104} height={104} alt="album" />
          <strong>wasting light</strong>
          <button className="p-2 ml-auto mr-8 rounded-full text-black bg-green-300 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a className="bg-white/10 rounded flex items-center gap-6 text-2xl overflow-hidden hover:bg-white/30 transition-colors group">
          <Image src="/album.jpg" width={104} height={104} alt="album" />
          <strong>wasting light</strong>
          <button className="p-2 ml-auto mr-8 rounded-full text-black bg-green-300 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a className="bg-white/10 rounded flex items-center gap-6 text-2xl overflow-hidden hover:bg-white/30 transition-colors group">
          <Image src="/album.jpg" width={104} height={104} alt="album" />
          <strong>wasting light</strong>
          <button className="p-2 ml-auto mr-8 rounded-full text-black bg-green-300 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a className="bg-white/10 rounded flex items-center gap-6 text-2xl overflow-hidden hover:bg-white/30 transition-colors group">
          <Image src="/album.jpg" width={104} height={104} alt="album" />
          <strong>wasting light</strong>
          <button className="p-2 ml-auto mr-8 rounded-full text-black bg-green-300 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a className="bg-white/10 rounded flex items-center gap-6 text-2xl overflow-hidden hover:bg-white/30 transition-colors group">
          <Image src="/album.jpg" width={104} height={104} alt="album" />
          <strong>wasting light</strong>
          <button className="p-2 ml-auto mr-8 rounded-full text-black bg-green-300 invisible group-hover:visible">
            <Play />
          </button>
        </a>
        <a className="bg-white/10 rounded flex items-center gap-6 text-2xl overflow-hidden hover:bg-white/30 transition-colors group">
          <Image src="/album.jpg" width={104} height={104} alt="album" />
          <strong>wasting light</strong>
          <button className="p-2 ml-auto mr-8 rounded-full text-black bg-green-300 invisible group-hover:visible">
            <Play />
          </button>
        </a>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mt-10">Made for you</h2>
      </div>

      <div className="grid grid-cols-8 gap-4 mt-5">
        <a className="bg-white/10 rounded flex flex-col items-center gap-2 p-2 hover:bg-white/30 transition-colors">
          <Image
            src="/album.jpg"
            className="w-full"
            width={104}
            height={104}
            alt="album"
          />
          <strong>Daily Mix 1</strong>
          <span className="text-xs text-zinc-400">Artists</span>
        </a>
        <a className="bg-white/10 rounded flex flex-col items-center gap-2 p-2 hover:bg-white/30 transition-colors">
          <Image
            src="/album.jpg"
            className="w-full"
            width={104}
            height={104}
            alt="album"
          />
          <strong>Daily Mix 1</strong>
          <span className="text-xs text-zinc-400">Artists</span>
        </a>
        <a className="bg-white/10 rounded flex flex-col items-center gap-2 p-2 hover:bg-white/30 transition-colors">
          <Image
            src="/album.jpg"
            className="w-full"
            width={104}
            height={104}
            alt="album"
          />
          <strong>Daily Mix 1</strong>
          <span className="text-xs text-zinc-400">Artists</span>
        </a>
        <a className="bg-white/10 rounded flex flex-col items-center gap-2 p-2 hover:bg-white/30 transition-colors">
          <Image
            src="/album.jpg"
            className="w-full"
            width={104}
            height={104}
            alt="album"
          />
          <strong>Daily Mix 1</strong>
          <span className="text-xs text-zinc-400">Artists</span>
        </a>
        <a className="bg-white/10 rounded flex flex-col items-center gap-2 p-2 hover:bg-white/30 transition-colors">
          <Image
            src="/album.jpg"
            className="w-full"
            width={104}
            height={104}
            alt="album"
          />
          <strong>Daily Mix 1</strong>
          <span className="text-xs text-zinc-400">Artists</span>
        </a>
        <a className="bg-white/10 rounded flex flex-col items-center gap-2 p-2 hover:bg-white/30 transition-colors">
          <Image
            src="/album.jpg"
            className="w-full"
            width={104}
            height={104}
            alt="album"
          />
          <strong>Daily Mix 1</strong>
          <span className="text-xs text-zinc-400">Artists</span>
        </a>
      </div>
    </main>
  );
}
