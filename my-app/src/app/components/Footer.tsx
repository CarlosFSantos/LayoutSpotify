import {
  List,
  Maximize2,
  Mic,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-zinc-700 p-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src="/album.jpg" width={56} height={56} alt="album" />
        <div className="flex flex-col justify-center">
          <strong className="font-normal">Rope</strong>
          <span className="text-sm text-zinc-400">Foo Fighters</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle className="text-zinc-400" />
          <SkipBack className="text-zinc-400" />

          <button className="p-2 rounded-full text-black bg-white">
            <Play />
          </button>

          <SkipForward className="text-zinc-400" />
          <Repeat className="text-zinc-400" />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-300">0:41</span>
          <div className="h-1 w-96 bg-zinc-600 rounded-full">
            <div className="h-1 w-32 bg-zinc-100 rounded-full"></div>
          </div>
          <span className="text-xs text-zinc-300">2:34</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Mic size={20} />
        <List size={20} />
        <div className="flex items-center ">
          <Volume size={20} />
          <div className=" h-1 w-24 bg-zinc-600 rounded-full">
            <div className="h-1 w-10 bg-zinc-100 rounded-full"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}
