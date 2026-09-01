import { Link } from "react-router-dom";
import type { Tool } from "../data/tools";

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      to={tool.path}
      className="group block bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 no-underline"
    >
      <div className="flex items-start gap-4">

        <div className="w-12 h-12 shrink-0 rounded-xl bg-purple-50 flex items-center justify-center text-2xl group-hover:scale-110 transition">
          {tool.icon}
        </div>

        <div className="min-w-0">

          <h2 className="font-bold text-gray-900 text-lg">
            {tool.title}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {tool.description}
          </p>

        </div>

      </div>
    </Link>
  );
}