"use client";
import { Briefcase, MapPin, Building2, ExternalLink } from "lucide-react";
import { FC } from "react";

export type JobCardProps = {
    _id: string;
    name: string;
    categories: string[];
    province: string;
    city: string;
    org: string;
};

export const UnitCard: FC<JobCardProps> = ({
    _id,
    name,
    categories,
    province,
    city,
    org
}) => {
    return (
        <div className="group bg-linear-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:from-blue-500/10 hover:to-indigo-500/10 hover:border-blue-400/50 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Briefcase className="text-white" size={24} />
                </div>

                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-bold text-lg group-hover:text-blue-300 transition-colors">
                            {name}
                        </h3>
                        <ExternalLink
                            className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"
                            size={16}
                        />
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                        <span className="font-medium bg-purple-500/20 px-2 py-1 rounded-lg">
                            {org}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <MapPin size={14} />
                        <span>{city}، {province}</span>
                    </div>
                </div>
            </div>

            {categories.length > 0 && (
                <div className="mt-3 pt-3 border-t border-white/10">
                    <div className="flex flex-wrap gap-1">
                        {categories.slice(0, 3).map((category, index) => (
                            <span
                                key={index}
                                className="bg-slate-700/50 text-slate-300 text-xs px-2 py-1 rounded-lg"
                            >
                                {category}
                            </span>
                        ))}
                        {categories.length > 3 && (
                            <span className="bg-slate-700/50 text-slate-400 text-xs px-2 py-1 rounded-lg">
                                +{categories.length - 3}
                            </span>
                        )}
                    </div>
                </div>
            )}

        </div>
    );
};