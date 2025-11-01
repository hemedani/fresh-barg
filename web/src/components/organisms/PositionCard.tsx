// components/organisms/DeviceCard.tsx
"use client";
import { Cpu, Settings, ExternalLink, Shield, Zap, Smartphone, Monitor } from "lucide-react";
import { FC } from "react";

export type DeviceCardProps = {
    _id: string;
    name: string;
    unitId: string;
    orgId: string;
    panel: string;
    level: string;
    features: string[];
    positionId: string;
};

// داده‌های تستی برای نمایش
const panelMap: { [key: string]: string } = {
    'admin': 'مدیریت',
    'user': 'کاربری',
    'monitor': 'نظارتی',
    'report': 'گزارش‌گیری',
    'analytics': 'تحلیل داده'
};

const levelMap: { [key: string]: string } = {
    'basic': 'پایه',
    'standard': 'استاندارد',
    'advanced': 'پیشرفته',
    'enterprise': 'سازمانی'
};

const featureMap: { [key: string]: string } = {
    'monitoring': 'مانیتورینگ',
    'reporting': 'گزارش‌گیری',
    'analytics': 'تحلیل',
    'alerts': 'هشدار',
    'api': 'API',
    'export': 'خروجی',
    'customization': 'سفارشی',
    'mobile': 'موبایل'
};

const positionMap: { [key: string]: string } = {
    '1': 'سرور اصلی',
    '2': 'دستگاه کاربر',
    '3': 'ایستگاه کاری',
    '4': 'دستگاه نظارتی',
    '5': 'سرور پشتیبان'
};

const unitMap: { [key: string]: string } = {
    '1': 'فناوری اطلاعات',
    '2': 'واحد مالی',
    '3': 'بازاریابی',
    '4': 'منابع انسانی',
    '5': 'تحقیق و توسعه'
};

const orgMap: { [key: string]: string } = {
    '1': 'نوآوران',
    '2': 'هلدینگ توسعه',
    '3': 'بانک اقتصاد',
    '4': 'پتروشیمی مبین',
    '5': 'ویستا'
};

export const DeviceCard: FC<DeviceCardProps> = ({
    _id,
    name,
    unitId,
    orgId,
    panel,
    level,
    features,
    positionId
}) => {
    const getDeviceIcon = () => {
        switch (positionId) {
            case '1':
            case '5':
                return <Cpu className="text-white" size={24} />;
            case '2':
                return <Smartphone className="text-white" size={24} />;
            case '3':
                return <Monitor className="text-white" size={24} />;
            case '4':
                return <Settings className="text-white" size={24} />;
            default:
                return <Cpu className="text-white" size={24} />;
        }
    };

    return (
        <div className="group bg-linear-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-5 hover:from-purple-500/10 hover:to-pink-500/10 hover:border-purple-400/50 transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-linear-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    {getDeviceIcon()}
                </div>

                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-bold text-lg group-hover:text-purple-300 transition-colors">
                            {name}
                        </h3>
                        <ExternalLink
                            className="text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"
                            size={16}
                        />
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                        <span className="font-medium bg-purple-500/20 px-2 py-1 rounded-lg">
                            {panelMap[panel] || panel}
                        </span>
                        <span className="font-medium bg-pink-500/20 px-2 py-1 rounded-lg">
                            {levelMap[level] || level}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Shield size={14} />
                        <span>{unitMap[unitId] || unitId}</span>
                        <span className="text-slate-600">•</span>
                        <span>{orgMap[orgId] || orgId}</span>
                    </div>
                </div>
            </div>

            {features.length > 0 && (
                <div className="mt-3 pt-3 border-t border-white/10">
                    <div className="flex items-center gap-2 mb-2">
                        <Zap size={12} className="text-yellow-400" />
                        <span className="text-slate-400 text-xs">ویژگی‌ها:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                        {features.slice(0, 4).map((feature, index) => (
                            <span
                                key={index}
                                className="bg-slate-700/50 text-slate-300 text-xs px-2 py-1 rounded-lg"
                            >
                                {featureMap[feature] || feature}
                            </span>
                        ))}
                        {features.length > 4 && (
                            <span className="bg-slate-700/50 text-slate-400 text-xs px-2 py-1 rounded-lg">
                                +{features.length - 4}
                            </span>
                        )}
                    </div>
                </div>
            )}

            <div className="mt-3 pt-3 border-t border-white/10 flex justify-between items-center">
                <span className="text-slate-500 text-xs">
                    {positionMap[positionId] || positionId}
                </span>
                <span className="text-slate-500 text-xs font-mono">
                    ID: {_id.slice(-6)}
                </span>
            </div>
        </div>
    );
};