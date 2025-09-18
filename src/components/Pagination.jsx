import { ArrowLeft, ArrowLeftToLine, ArrowRight, ArrowRightToLine } from "lucide-react";

export function Pagination() {
  return (
    <div className="flex justify-center py-4 bg-gray-200 w-16 rounded-2xl">
      <ArrowLeftToLine />
      <ArrowLeft />
      <p>1</p>
      <p>2</p>
      <ArrowRight />
      <ArrowRightToLine />
    </div>
  )
}
