// types/types.ts
export type UserLevel = "Ghost" | "Orghead" | "Unithead" | "Staff";

export const userLevelLabels: Record<UserLevel, string> = {
  Ghost: "سوپر ادمین",
  Orghead: "رئیس سازمان",
  Unithead: "رئیس واحد",
  Staff: "کارمند",
};

export const userLevelIcons: Record<UserLevel, string> = {
  Ghost: "👑",
  Orghead: "🏢",
  Unithead: "⭐",
  Staff: "👨‍💼",
};

export const userLevelColors: Record<UserLevel, string> = {
  Ghost: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  Orghead: "bg-red-500/20 text-red-400 border-red-500/30",
  Unithead: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Staff: "bg-green-500/20 text-green-400 border-green-500/30",
};

export interface GetMeResponse {
  error?: string;
  user?: {
    _id: string;
    first_name: string;
    last_name: string;
    phone: string;
    gender: string;
    birth_date: string;
    personnel_code: string;
    email: string;
    is_active: boolean;
    province: {
      _id: string;
      name: string;
    };
    city: {
      _id: string;
      name: string;
    };
    avatar: {
      _id: string;
      name: string;
      size: string;
      type: string;
    };
    org: {
      _id: string;
      name: string;
    }[];
    unit: {
      _id: string;
      name: string;
    }[];

    position: {
      _id: string,
      level: UserLevel
    }[]
  };
  success: boolean;
}

export type ReactSelectOption = { label: string; value: string }


export interface Position {
  _id: string
  level: string
  unit?: string
  permissions?: string[]
}