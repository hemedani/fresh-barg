"use client";
import { translateOrganType, translateOwnerShipType } from "@/utils/helper";
import { Building2, MapPin, ExternalLink, FileText } from "lucide-react";
import { FC } from "react";

export type OrganizationCardProps = {
    _id: string;
    address: string;
    description: string;
    ownership: string;
    type: string;
    name: string;
    location?: {
        longitude?: number;
        latitude?: number;
    };
};

export const OrganizationCard: FC<OrganizationCardProps> = ({
    _id,
    address,
    description,
    ownership,
    type,
    location,
    name
}) => {
    return (
        <div className="group bg-linear-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:from-blue-500/10 hover:to-indigo-500/10 hover:border-blue-400/50 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Building2 className="text-white" size={24} />
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
                        <span className="font-medium bg-blue-500/20 px-2 py-1 rounded-lg">
                            {translateOwnerShipType(ownership)}
                        </span>
                        <span className="font-medium bg-purple-500/20 px-2 py-1 rounded-lg">
                            {translateOrganType(type)}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <MapPin size={14} />
                        <span className="truncate">{address}</span>
                    </div>
                </div>
            </div>

            {location && (
                <div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2 text-slate-400 text-xs">
                    <MapPin size={12} />
                    <span>
                        مختصات: {location.latitude} - {location.longitude}
                    </span>
                </div>
            )}

            <div className="mt-3 pt-3 border-t border-white/10">
                <div className="flex items-center gap-2 text-slate-300 text-xs mb-2">
                    <FileText size={12} />
                    <span className="font-medium">توضیحات:</span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                    {description || "توضیحاتی برای این سازمان وارد نشده است."}
                </p>
            </div>

        </div>
    );
};