import { ArrowLeft, ArrowLeftToLine, ArrowRight, ArrowRightToLine, ChevronLeft, ChevronRight, SkipBackIcon, SkipForwardIcon } from "lucide-react";

export function Pagination() {
  return (
    <div className="flex justify-center bg-gray-200 w-fit px-4 rounded-full gap-1 my-5">

      <div className="flex items-center gap-1">
        <button className="h-full cursor-pointer hover:bg-gray-600">
          <SkipBackIcon className="text-gray-400" fill="#9ca3af" size={22} />
        </button>
        <button className="hover:bg-blue-500 h-full ">
          <ChevronLeft className="text-gray-400" />
        </button>
      </div>

      <div className="flex items-center justify-center">
        <p className="px-2 py-2 bg-blue-600 text-white">1</p>
      </div>

      <div className="flex items-center gap-1">
        <button className="hover:bg-blue-500 h-full ">
          <ChevronRight className="text-gray-400" />
        </button>
        <button className="hover:bg-blue-500 h-full ">
          <SkipForwardIcon className="text-gray-400" fill="#9ca3af" size={22} />
        </button>
      </div>
    </div>
  )
}
