export type UserLevel = "Ghost" | "Orghead" | "Unithead" | "Staff" | null;


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
