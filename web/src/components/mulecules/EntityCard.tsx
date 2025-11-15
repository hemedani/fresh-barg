"use client";
import { MapPin, ExternalLink } from "lucide-react";
import { FC } from "react";

export type EntityCardProps = {
  name: string;
  enName: string;
  abb: string;
};

export const EntityCard: FC<EntityCardProps> = ({ name, enName, abb }) => {
  return (
    <div className="group bg-linear-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:from-green-500/10 hover:to-emerald-500/10 hover:border-green-400/50 transition-all duration-300 cursor-pointer">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-linear-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
          <MapPin className="text-white" size={24} />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-white font-bold text-lg group-hover:text-green-300 transition-colors">
              {name}
            </h3>
            <ExternalLink
              className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity"
              size={16}
            />
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-300">
            <span className="font-mono">{enName}</span>
            <span className="font-mono font-bold text-amber-300">{abb}</span>
          </div>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-white/10">
        <p className="text-slate-300 text-xs leading-relaxed">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </p>
      </div>
    </div>
  );
};
