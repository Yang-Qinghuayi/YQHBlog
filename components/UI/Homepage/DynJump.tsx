import {
  PaperClipIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";


const DynJump = () => {
  return (
    <div className="no-scrollbar overflow-x-scroll">
      <div className="grid min-w-[64rem] auto-cols-fr grid-flow-col gap-x-4 lg:min-w-0">
        <Link
          href={"/posts"}
          className="primary px-4 py-2 transition-all hover:bg-gray-50">
          <PaperClipIcon className="my-2 h-8 w-8 rounded-lg bg-purple-100 p-1 text-purple-500" />
          <div>
            <h2 className="font-title text-xl font-semibold">
              Posts
            </h2>
            <p className="text-sm">Full list of articles.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DynJump;
