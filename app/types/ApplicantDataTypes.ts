export type YesNo = "yes" | "no"

export type PositionType = 'team' | 'solo'

export type CountryType = "canada" | 'usa'

export type RefferalSourceType = "" | "employee" | "facebook" | "linkedin" | "searchEngine" | "website"

export type ApplicantDataTypes = {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
    city: string;
    country: CountryType;

    position: PositionType;
    licenseStatus: YesNo;
    yearsOfExperience: string;
    diploma: YesNo;

    tickets: YesNo;
    demeritPoints?: string;
    roadAccident?: YesNo;
    workAccident?: YesNo;

    referralSource?: RefferalSourceType;
    referred?: YesNo;
    referringEmployee?: string;
    comments?: string;
}