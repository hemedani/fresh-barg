export function cn(...inputs: (string | undefined | null | boolean)[]): string {
    return inputs.filter(Boolean).join(" ");
}

const formatPersianTime = (date: Date): string => {
    const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    const timeString = date.toLocaleTimeString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Tehran",
    });
    return timeString.replace(
        /[0-9]/g,
        (digit) => persianDigits[parseInt(digit)],
    );
};

export const ArrayToSelectOptions = <T>(
    data: T[],
    valueKey: keyof T,
    labelKey: keyof T,
    secondaryLabelKey?: keyof T,
) => {
    return data.map((item) => ({
        value: String(item[valueKey]),
        label: `${item[labelKey]} ${secondaryLabelKey ? item[secondaryLabelKey] : ""
            }`,
    }));
};

export const translateOwnerShipType = (ownershipType: string): string => {
    switch (ownershipType) {
        case "semi-private":
            return "نیمه خصوصی";
        case "government":
            return "دولتی";
        case "private":
            return "خصوصی"
        default:
            return "نامشخص";
    }
};

export const translateOrganType = (organType: string): string => {
    switch (organType) {
        case "service":
            return "خدماتی";
        case "industrial":
            return "صنعتی";
        case "trading":
            return "تجاری"
        case "technology":
            return "فناوری"
        case "financial":
            return "مالی"
        case "healthcare":
            return "درمانی"
        default:
            return "نامشخص";
    }
};