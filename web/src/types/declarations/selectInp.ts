
    export type provinceInp = {
      
      cities?: number | cityInp
orgs?: number | orgInp
units?: number | unitInp
users?: number | userInp
    }


    export type provinceSchema = {
_id?: string;
name: string;
enName: string;
abb: string;
cities: {
_id?: string;
name: string;
enName: string;
abb: string;
}[];
orgs: {
_id?: string;
name: string;
address: string;
ownership: ("private" | "government" | "semi-private" );
type: ("service" | "industrial" | "trading" | "technology" | "financial" | "healthcare" );
location?: {
longitude: number;
latitude: number;
};
description: string;
}[];
units: {
_id?: string;
name: string;
categories?: string[];
}[];
users: {
_id?: string;
first_name: string;
last_name: string;
phone: number;
gender: ("Male" | "Female" );
birth_date?: Date;
personnel_code: string;
email?: string;
is_active?: boolean;
}[];
};
;


    export type cityInp = {
      province?: number | provinceInp
      orgs?: number | orgInp
units?: number | unitInp
users?: number | userInp
    }


    export type citySchema = {
_id?: string;
name: string;
enName: string;
abb: string;
province: {
_id?: string;
name: string;
enName: string;
abb: string;
};
orgs: {
_id?: string;
name: string;
address: string;
ownership: ("private" | "government" | "semi-private" );
type: ("service" | "industrial" | "trading" | "technology" | "financial" | "healthcare" );
location?: {
longitude: number;
latitude: number;
};
description: string;
}[];
units: {
_id?: string;
name: string;
categories?: string[];
}[];
users: {
_id?: string;
first_name: string;
last_name: string;
phone: number;
gender: ("Male" | "Female" );
birth_date?: Date;
personnel_code: string;
email?: string;
is_active?: boolean;
}[];
};
;


    export type orgInp = {
      province?: number | provinceInp
city?: number | cityInp
      units?: number | unitInp
positions?: number | positionInp
users?: number | userInp
letters?: number | letterInp
preDefLetters?: number | preDefLetterInp
priorities?: number | priorityInp
    }


    export type orgSchema = {
_id?: string;
name: string;
address: string;
ownership: ("private" | "government" | "semi-private" );
type: ("service" | "industrial" | "trading" | "technology" | "financial" | "healthcare" );
location?: {
longitude: number;
latitude: number;
};
description: string;
province: {
_id?: string;
name: string;
enName: string;
abb: string;
};
city: {
_id?: string;
name: string;
enName: string;
abb: string;
};
units: {
_id?: string;
name: string;
categories?: string[];
}[];
positions: {
_id?: string;
name: string;
panel: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
features: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
level: ("Ghost" | "Orghead" | "Unithead" | "Staff" );
}[];
users: {
_id?: string;
first_name: string;
last_name: string;
phone: number;
gender: ("Male" | "Female" );
birth_date?: Date;
personnel_code: string;
email?: string;
is_active?: boolean;
}[];
letters: {
_id?: string;
author: {
first_name: string;
last_name: string;
phone: number;
gender: ("Male" | "Female" );
birth_date?: Date;
personnel_code: string;
email?: string;
is_active?: boolean;
};
sender: {
_id?: string;
name: string;
panel: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
features: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
level: ("Ghost" | "Orghead" | "Unithead" | "Staff" );
};
recievers: {
_id?: string;
name: string;
panel: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
features: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
level: ("Ghost" | "Orghead" | "Unithead" | "Staff" );
};
number: number;
subject: string;
created_at?: Date;
updated_at?: Date;
delivered?: boolean;
is_end?: {
text: string;
done: boolean;
};
tags: string[];
leed: string;
content: string;
}[];
preDefLetters: {
_id?: string;
title: string;
description: string;
number: number;
}[];
priorities: {
_id?: string;
name: string;
}[];
};
;


    export type unitInp = {
      province?: number | provinceInp
city?: number | cityInp
org?: number | orgInp
      positions?: number | positionInp
users?: number | userInp
letters?: number | letterInp
forms?: number | formInp
    }


    export type unitSchema = {
_id?: string;
name: string;
categories?: string[];
province: {
_id?: string;
name: string;
enName: string;
abb: string;
};
city: {
_id?: string;
name: string;
enName: string;
abb: string;
};
org: {
_id?: string;
name: string;
address: string;
ownership: ("private" | "government" | "semi-private" );
type: ("service" | "industrial" | "trading" | "technology" | "financial" | "healthcare" );
location?: {
longitude: number;
latitude: number;
};
description: string;
};
positions: {
_id?: string;
name: string;
panel: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
features: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
level: ("Ghost" | "Orghead" | "Unithead" | "Staff" );
}[];
users: {
_id?: string;
first_name: string;
last_name: string;
phone: number;
gender: ("Male" | "Female" );
birth_date?: Date;
personnel_code: string;
email?: string;
is_active?: boolean;
}[];
letters: {
_id?: string;
author: {
first_name: string;
last_name: string;
phone: number;
gender: ("Male" | "Female" );
birth_date?: Date;
personnel_code: string;
email?: string;
is_active?: boolean;
};
sender: {
_id?: string;
name: string;
panel: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
features: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
level: ("Ghost" | "Orghead" | "Unithead" | "Staff" );
};
recievers: {
_id?: string;
name: string;
panel: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
features: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
level: ("Ghost" | "Orghead" | "Unithead" | "Staff" );
};
number: number;
subject: string;
created_at?: Date;
updated_at?: Date;
delivered?: boolean;
is_end?: {
text: string;
done: boolean;
};
tags: string[];
leed: string;
content: string;
}[];
forms: {
_id?: string;
order: number;
title: string;
isActive: boolean;
created_at?: Date;
updated_at?: Date;
}[];
};
;


    export type positionInp = {
      org?: number | orgInp
unit?: number | unitInp
      user?: number | userInp
readedLetter?: number | letterInp
sendReffer?: number | refferInp
recievedReffer?: number | refferInp
readedReffers?: number | refferInp
    }


    export type positionSchema = {
_id?: string;
name: string;
panel: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
features: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
level: ("Ghost" | "Orghead" | "Unithead" | "Staff" );
org?: {
_id?: string;
name: string;
address: string;
ownership: ("private" | "government" | "semi-private" );
type: ("service" | "industrial" | "trading" | "technology" | "financial" | "healthcare" );
location?: {
longitude: number;
latitude: number;
};
description: string;
};
unit?: {
_id?: string;
name: string;
categories?: string[];
};
user: {
_id?: string;
first_name: string;
last_name: string;
phone: number;
gender: ("Male" | "Female" );
birth_date?: Date;
personnel_code: string;
email?: string;
is_active?: boolean;
}[];
readedLetter: {
_id?: string;
author: {
first_name: string;
last_name: string;
phone: number;
gender: ("Male" | "Female" );
birth_date?: Date;
personnel_code: string;
email?: string;
is_active?: boolean;
};
sender: {
_id?: string;
name: string;
panel: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
features: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
level: ("Ghost" | "Orghead" | "Unithead" | "Staff" );
};
recievers: {
_id?: string;
name: string;
panel: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
features: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
level: ("Ghost" | "Orghead" | "Unithead" | "Staff" );
};
number: number;
subject: string;
created_at?: Date;
updated_at?: Date;
delivered?: boolean;
is_end?: {
text: string;
done: boolean;
};
tags: string[];
leed: string;
content: string;
}[];
sendReffer: {
_id?: string;
number: number;
delivered: boolean;
type: ("inUnit" | "inOrg" | "outOrg" );
created_at?: Date;
updated_at?: Date;
deadline?: Date;
isMoving: boolean;
description?: {
text: string;
viewed: boolean;
};
reply?: {
_id: string;
text: string;
viewed: boolean;
}[];
}[];
recievedReffer: {
_id?: string;
number: number;
delivered: boolean;
type: ("inUnit" | "inOrg" | "outOrg" );
created_at?: Date;
updated_at?: Date;
deadline?: Date;
isMoving: boolean;
description?: {
text: string;
viewed: boolean;
};
reply?: {
_id: string;
text: string;
viewed: boolean;
}[];
}[];
readedReffers: {
_id?: string;
number: number;
delivered: boolean;
type: ("inUnit" | "inOrg" | "outOrg" );
created_at?: Date;
updated_at?: Date;
deadline?: Date;
isMoving: boolean;
description?: {
text: string;
viewed: boolean;
};
reply?: {
_id: string;
text: string;
viewed: boolean;
}[];
}[];
};
;


    export type userInp = {
      province?: number | provinceInp
city?: number | cityInp
org?: number | orgInp
unit?: number | unitInp
position?: number | positionInp
avatar?: number | fileInp
      uploadedAssets?: number | fileInp
readedLetter?: number | letterInp
readedReffers?: number | refferInp
    }


    export type userSchema = {
_id?: string;
first_name: string;
last_name: string;
phone: number;
gender: ("Male" | "Female" );
birth_date?: Date;
personnel_code: string;
email?: string;
is_active?: boolean;
province: {
_id?: string;
name: string;
enName: string;
abb: string;
};
city: {
_id?: string;
name: string;
enName: string;
abb: string;
};
org: {
_id?: string;
name: string;
address: string;
ownership: ("private" | "government" | "semi-private" );
type: ("service" | "industrial" | "trading" | "technology" | "financial" | "healthcare" );
location?: {
longitude: number;
latitude: number;
};
description: string;
}[];
unit: {
_id?: string;
name: string;
categories?: string[];
}[];
position: {
_id?: string;
name: string;
panel: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
features: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
level: ("Ghost" | "Orghead" | "Unithead" | "Staff" );
}[];
avatar?: {
_id?: string;
name: string;
type: string;
size: number;
};
uploadedAssets: {
_id?: string;
name: string;
type: string;
size: number;
}[];
readedLetter: {
_id?: string;
author: {
first_name: string;
last_name: string;
phone: number;
gender: ("Male" | "Female" );
birth_date?: Date;
personnel_code: string;
email?: string;
is_active?: boolean;
};
sender: {
_id?: string;
name: string;
panel: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
features: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
level: ("Ghost" | "Orghead" | "Unithead" | "Staff" );
};
recievers: {
_id?: string;
name: string;
panel: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
features: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
level: ("Ghost" | "Orghead" | "Unithead" | "Staff" );
};
number: number;
subject: string;
created_at?: Date;
updated_at?: Date;
delivered?: boolean;
is_end?: {
text: string;
done: boolean;
};
tags: string[];
leed: string;
content: string;
}[];
readedReffers: {
_id?: string;
number: number;
delivered: boolean;
type: ("inUnit" | "inOrg" | "outOrg" );
created_at?: Date;
updated_at?: Date;
deadline?: Date;
isMoving: boolean;
description?: {
text: string;
viewed: boolean;
};
reply?: {
_id: string;
text: string;
viewed: boolean;
}[];
}[];
};
;


    export type fileInp = {
      uploader?: number | userInp
      
    }


    export type fileSchema = {
_id?: string;
name: string;
type: string;
size: number;
uploader: {
_id?: string;
first_name: string;
last_name: string;
phone: number;
gender: ("Male" | "Female" );
birth_date?: Date;
personnel_code: string;
email?: string;
is_active?: boolean;
};
};
;


    export type letterInp = {
      org?: number | orgInp
unit?: number | unitInp
readByUsers?: number | userInp
readByPositions?: number | positionInp
      reffers?: number | refferInp
    }


    export type letterSchema = {
_id?: string;
author: {
first_name: string;
last_name: string;
phone: number;
gender: ("Male" | "Female" );
birth_date?: Date;
personnel_code: string;
email?: string;
is_active?: boolean;
};
sender: {
_id?: string;
name: string;
panel: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
features: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
level: ("Ghost" | "Orghead" | "Unithead" | "Staff" );
};
recievers: {
_id?: string;
name: string;
panel: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
features: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
level: ("Ghost" | "Orghead" | "Unithead" | "Staff" );
};
number: number;
subject: string;
created_at?: Date;
updated_at?: Date;
delivered?: boolean;
is_end?: {
text: string;
done: boolean;
};
tags: string[];
leed: string;
content: string;
org: {
_id?: string;
name: string;
address: string;
ownership: ("private" | "government" | "semi-private" );
type: ("service" | "industrial" | "trading" | "technology" | "financial" | "healthcare" );
location?: {
longitude: number;
latitude: number;
};
description: string;
};
unit: {
_id?: string;
name: string;
categories?: string[];
};
readByUsers?: {
_id?: string;
first_name: string;
last_name: string;
phone: number;
gender: ("Male" | "Female" );
birth_date?: Date;
personnel_code: string;
email?: string;
is_active?: boolean;
}[];
readByPositions?: {
_id?: string;
name: string;
panel: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
features: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
level: ("Ghost" | "Orghead" | "Unithead" | "Staff" );
}[];
reffers: {
_id?: string;
number: number;
delivered: boolean;
type: ("inUnit" | "inOrg" | "outOrg" );
created_at?: Date;
updated_at?: Date;
deadline?: Date;
isMoving: boolean;
description?: {
text: string;
viewed: boolean;
};
reply?: {
_id: string;
text: string;
viewed: boolean;
}[];
}[];
};
;


    export type preDefLetterInp = {
      org?: number | orgInp
      
    }


    export type preDefLetterSchema = {
_id?: string;
title: string;
description: string;
number: number;
org: {
_id?: string;
name: string;
address: string;
ownership: ("private" | "government" | "semi-private" );
type: ("service" | "industrial" | "trading" | "technology" | "financial" | "healthcare" );
location?: {
longitude: number;
latitude: number;
};
description: string;
};
};
;


    export type refferInp = {
      letter?: number | letterInp
refferer?: number | positionInp
reffered?: number | positionInp
readByUsers?: number | userInp
readByPositions?: number | positionInp
      
    }


    export type refferSchema = {
_id?: string;
number: number;
delivered: boolean;
type: ("inUnit" | "inOrg" | "outOrg" );
created_at?: Date;
updated_at?: Date;
deadline?: Date;
isMoving: boolean;
description?: {
text: string;
viewed: boolean;
};
reply?: {
_id: string;
text: string;
viewed: boolean;
}[];
letter: {
_id?: string;
author: {
first_name: string;
last_name: string;
phone: number;
gender: ("Male" | "Female" );
birth_date?: Date;
personnel_code: string;
email?: string;
is_active?: boolean;
};
sender: {
_id?: string;
name: string;
panel: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
features: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
level: ("Ghost" | "Orghead" | "Unithead" | "Staff" );
};
recievers: {
_id?: string;
name: string;
panel: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
features: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
level: ("Ghost" | "Orghead" | "Unithead" | "Staff" );
};
number: number;
subject: string;
created_at?: Date;
updated_at?: Date;
delivered?: boolean;
is_end?: {
text: string;
done: boolean;
};
tags: string[];
leed: string;
content: string;
};
refferer: {
_id?: string;
name: string;
panel: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
features: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
level: ("Ghost" | "Orghead" | "Unithead" | "Staff" );
};
reffered: {
_id?: string;
name: string;
panel: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
features: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
level: ("Ghost" | "Orghead" | "Unithead" | "Staff" );
};
readByUsers?: {
_id?: string;
first_name: string;
last_name: string;
phone: number;
gender: ("Male" | "Female" );
birth_date?: Date;
personnel_code: string;
email?: string;
is_active?: boolean;
}[];
readByPositions?: {
_id?: string;
name: string;
panel: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
features: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
level: ("Ghost" | "Orghead" | "Unithead" | "Staff" );
}[];
};
;


    export type priorityInp = {
      org?: number | orgInp
      
    }


    export type prioritySchema = {
_id?: string;
name: string;
org: {
_id?: string;
name: string;
address: string;
ownership: ("private" | "government" | "semi-private" );
type: ("service" | "industrial" | "trading" | "technology" | "financial" | "healthcare" );
location?: {
longitude: number;
latitude: number;
};
description: string;
};
};
;


    export type formInp = {
      questions?: number | questionInp
org?: number | orgInp
unit?: number | unitInp
      
    }


    export type formSchema = {
_id?: string;
order: number;
title: string;
isActive: boolean;
created_at?: Date;
updated_at?: Date;
questions?: {
_id?: string;
order: number;
label: string;
isActive: boolean;
questionType: ("Text" | "LongText" | "Checkbox" | "MultiSelect" | "Image" | "Radio" );
created_at?: Date;
updated_at?: Date;
}[];
org?: {
_id?: string;
name: string;
address: string;
ownership: ("private" | "government" | "semi-private" );
type: ("service" | "industrial" | "trading" | "technology" | "financial" | "healthcare" );
location?: {
longitude: number;
latitude: number;
};
description: string;
};
unit?: {
_id?: string;
name: string;
categories?: string[];
};
};
;


    export type questionInp = {
      forms?: number | formInp
org?: number | orgInp
unit?: number | unitInp
      
    }


    export type questionSchema = {
_id?: string;
order: number;
label: string;
isActive: boolean;
questionType: ("Text" | "LongText" | "Checkbox" | "MultiSelect" | "Image" | "Radio" );
created_at?: Date;
updated_at?: Date;
forms: {
_id?: string;
order: number;
title: string;
isActive: boolean;
created_at?: Date;
updated_at?: Date;
}[];
org: {
_id?: string;
name: string;
address: string;
ownership: ("private" | "government" | "semi-private" );
type: ("service" | "industrial" | "trading" | "technology" | "financial" | "healthcare" );
location?: {
longitude: number;
latitude: number;
};
description: string;
};
unit: {
_id?: string;
name: string;
categories?: string[];
};
};
;


    export type ReqType = {

  
        main: {

      
        province: {

      
            addProvince: {
set: {
name: string;
enName: string;
abb: string;
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
cities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
};
};

          
            updateProvince: {
set: {
_id: string;
name?: string;
enName?: string;
abb?: string;
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
cities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
};
};

          
            getProvince: {
set: {
_id: string;
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
cities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
};
};

          
            getProvinces: {
set: {
page: number;
limit: number;
name?: string;
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
cities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
};
};

          
            removeProvince: {
set: {
_id: string;
};
get: {
success?: (0 | 1 );
};
};

          
            countProvinces: {
set: {
name?: string;
enName?: string;
abb?: string;
};
get: {
qty?: (0 | 1 );
};
};

          
          }

        
        city: {

      
            addCity: {
set: {
name: string;
enName: string;
abb: string;
provinceId: string;
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
cities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
};
};

          
            updateCity: {
set: {
_id: string;
name?: string;
enName?: string;
abb?: string;
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
cities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
};
};

          
            getCity: {
set: {
_id: string;
positionId: string;
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
cities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
};
};

          
            getCities: {
set: {
page: number;
limit: number;
name?: string;
provinceId?: string;
positionId: string;
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
cities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
};
};

          
            removeCity: {
set: {
_id: string;
};
get: {
success?: (0 | 1 );
};
};

          
            countCities: {
set: {
enName?: string;
name?: string;
abb?: string;
provinceId?: string;
};
get: {
qty?: (0 | 1 );
};
};

          
          }

        
        user: {

      
            addUser: {
set: {
first_name: string;
last_name: string;
phone: number;
gender: ("Male" | "Female" );
birth_date?: Date;
personnel_code: string;
email?: string;
province: string;
city: string;
orgIds: string[];
unitIds: string[];
positionId: string;
position: string[];
};
get: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
};

          
            getMe: {
set: {
};
get: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
cities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
user?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
sendReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
recievedReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
uploader?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
uploader?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
letter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
refferer?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffered?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
};
};
};

          
            updateUser: {
set: {
first_name?: string;
last_name?: string;
gender?: ("Male" | "Female" );
birth_date?: Date;
personnel_code?: string;
email?: string;
is_active?: boolean;
positionId: string;
};
get: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
};

          
            getUser: {
set: {
_id: string;
positionId: string;
};
get: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
cities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
user?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
sendReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
recievedReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
uploader?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
uploader?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
letter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
refferer?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffered?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
};
};
};

          
            login: {
set: {
phone: number;
code: number;
};
get?: {
token?: (0 | 1 );
user: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
};
};

          
            loginReq: {
set: {
phone: number;
};
get: {
phone: (1 );
};
};

          
            tempUser: {
set: {
first_name: string;
last_name: string;
phone: number;
};
get: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
};

          
            getUsers: {
set: {
page: number;
limit: number;
orgId?: string;
unitId?: string;
city?: string;
province?: string;
is_active?: boolean;
gender?: ("Male" | "Female" );
position?: string[];
};
get: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
cities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
user?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
sendReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
recievedReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
uploader?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
uploader?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
letter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
refferer?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffered?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
};
};
};

          
            addPosToUser: {
set: {
positionId: string;
position: string;
userId: string;
};
get: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
};
};
};
};

          
            removeUser: {
set: {
_id: string;
};
get: {
success?: (0 | 1 );
};
};

          
            countUsers: {
set: {
first_name?: string;
last_name?: string;
gender?: ("Male" | "Female" );
birth_date?: Date;
province?: string;
city?: string;
orgIds?: string[];
unitIds?: string[];
position?: string[];
positionId: string;
};
get: {
qty?: (0 | 1 );
};
};

          
            addAvatar: {
set: {
avatarId: string;
};
get: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
};

          
          }

        
        org: {

      
            addOrg: {
set: {
name: string;
address: string;
ownership: ("private" | "government" | "semi-private" );
type: ("service" | "industrial" | "trading" | "technology" | "financial" | "healthcare" );
longitude?: number;
latitude?: number;
description: string;
provinceId: string;
cityId: string;
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
cities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
user?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
sendReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
recievedReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
};
};
};

          
            updateOrg: {
set: {
_id: string;
name?: string;
address?: string;
ownership?: ("private" | "government" | "semi-private" );
type?: ("service" | "industrial" | "trading" | "technology" | "financial" | "healthcare" );
location?: {
longitude: number;
latitude: number;
};
description?: string;
positionId: string;
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
};

          
            getOrg: {
set: {
_id: string;
positionId: string;
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
};

          
            getOrgs: {
set: {
page: number;
limit: number;
provinceId?: string;
cityId?: string;
ownership?: ("private" | "goverment" | "semi-private" );
type?: ("service" | "industrial" | "trading" | "technology" | "financial" | "healthcare" );
positionId: string;
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
cities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
user?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
sendReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
recievedReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
};
};
};

          
            removeOrg: {
set: {
_id: string;
};
get: {
success?: (0 | 1 );
};
};

          
            countOrgs: {
set: {
name?: string;
address?: string;
ownership?: ("private" | "government" | "semi-private" );
type?: ("service" | "industrial" | "trading" | "technology" | "financial" | "healthcare" );
longitude?: number;
latitude?: number;
provinceId?: string;
cityId?: string;
};
get: {
qty?: (0 | 1 );
};
};

          
          }

        
        unit: {

      
            addUnit: {
set: {
name: string;
categories?: string[];
positionId: string;
provinceId: string;
cityId: string;
orgId: string;
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
cities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
user?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
sendReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
recievedReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
questions?: {
_id?: (0 | 1 );
order?: (0 | 1 );
label?: (0 | 1 );
isActive?: (0 | 1 );
questionType?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
};
};
};

          
            updateUnit: {
set: {
_id: string;
name?: string;
categories?: string[];
positionId: string;
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
};

          
            getUnit: {
set: {
_id: string;
positionId: string;
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
};
};

          
            getUnits: {
set: {
page: number;
limit: number;
orgId?: string;
provinceId?: string;
cityId?: string;
positionId: string;
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
cities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
orgs?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
user?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
sendReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
recievedReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
questions?: {
_id?: (0 | 1 );
order?: (0 | 1 );
label?: (0 | 1 );
isActive?: (0 | 1 );
questionType?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
};
};
};

          
            removeUnit: {
set: {
_id: string;
};
get: {
success?: (0 | 1 );
};
};

          
            countUnits: {
set: {
name?: string;
categories?: string[];
};
get: {
qty?: (0 | 1 );
};
};

          
          }

        
        letter: {

      
            addLetter: {
set: {
number: number;
subject: string;
authorId: string;
positionId: string;
recieversId: string;
tags: string[];
leed: string;
content: string;
orgId: string;
unitId: string;
};
get: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
user?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
sendReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
recievedReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
reffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
letter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
refferer?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffered?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
};
};
};

          
            updateLetter: {
set: {
_id: string;
subject?: string;
delivered?: boolean;
is_end?: {
text: string;
done: boolean;
};
tags?: string[];
lid?: string;
positionId: string;
};
get: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
};

          
            getLetter: {
set: {
_id: string;
positionId: string;
};
get: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
};

          
            getLetters: {
set: {
authorId?: string;
senderId?: string;
recieversId?: string;
number?: number;
subject?: string;
is_end?: boolean;
tags?: string[];
leed?: string;
content?: string;
orgId?: string;
unitId?: string;
readByUsers?: string;
readByPositions?: string;
refferIds?: string[];
positionId: string;
};
get: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
user?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
sendReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
recievedReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
reffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
letter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
refferer?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffered?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
};
};
};

          
            removeLetter: {
set: {
_id: string;
};
get: {
success?: (0 | 1 );
};
};

          
            countLetters: {
set: {
positionId: string;
authorId?: string;
senderId?: string;
recieversId?: string;
subject?: string;
is_end?: boolean;
tags?: string[];
leed?: string;
content?: string;
text?: string;
orgId?: string;
unitId?: string;
readByUsers?: string;
readByPositions?: string;
refferIds?: string[];
};
get: {
qty?: (0 | 1 );
};
};

          
            addReplyToLetter: {
set: {
_id: string;
positionId: string;
text: string;
};
get: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
user?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
sendReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
recievedReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
reffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
letter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
refferer?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffered?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
};
};
};

          
          }

        
        position: {

      
            addPosition: {
set: {
name: string;
unitId?: string;
orgId: string;
panel: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
level: ("Ghost" | "Orghead" | "Unithead" | "Staff" );
userId?: string;
features?: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
positionId: string;
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};
user?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
sendReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
letter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
refferer?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffered?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
};
recievedReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
letter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
refferer?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffered?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
letter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
refferer?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffered?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
};
};
};

          
            updatePosition: {
set: {
_id: string;
name?: string;
positionId: string;
panel?: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
features?: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};
user?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
sendReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
letter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
refferer?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffered?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
};
recievedReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
letter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
refferer?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffered?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
letter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
refferer?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffered?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
};
};
};

          
            getPosition: {
set: {
_id: string;
positionId: string;
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
};

          
            getPositions: {
set: {
page: number;
limit: number;
orgId?: string;
unitId?: string;
positionId?: string;
filterPositions: ("all" | "free" | "busy" );
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};
user?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
sendReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
letter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
refferer?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffered?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
};
recievedReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
letter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
refferer?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffered?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
letter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
refferer?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffered?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
};
};
};

          
            countPositions: {
set: {
name?: string;
unitId?: string;
orgId?: string;
panel?: ("darya" | "johar" | "nameh" | "anbar" | "bita" );
level?: ("Ghost" | "Orghead" | "Unithead" | "Staff" );
userId?: string;
features?: ("create unit" | "create chart" | "read letters" | "create letters" | "reffer letters" | "add staff" | "add position" | "add position to user" | "read positions" | "edit org" | "edit unit" )[];
positionId: string;
};
get: {
qty?: (0 | 1 );
};
};

          
          }

        
        preDefLetter: {

      
            addPredefletter: {
set: {
title: string;
description: string;
number: number;
orgId: string;
};
get: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
};
};

          
            updatePredefletter: {
set: {
_id: string;
title?: string;
description?: string;
number: number;
};
get: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
};

          
            getPredefletter: {
set: {
_id: string;
};
get: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
};

          
            removePredefLetter: {
set: {
_id: string;
};
get: {
success?: (0 | 1 );
};
};

          
            getPredefletters: {
set: {
page: number;
limit: number;
description?: string;
title?: string;
org?: string;
number?: number;
};
get: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
};

          
            countPredefletters: {
set: {
title?: string;
orgId?: string;
};
get: {
qty?: (0 | 1 );
};
};

          
          }

        
        reffer: {

      
            addReffer: {
set: {
positionId: string;
refferedId: string;
number: number;
type: ("inUnit" | "inOrg" | "outOrg" );
deadline?: Date;
isMoving: boolean;
description?: {
text: string;
viewed: boolean;
};
letterId: string;
};
get: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
letter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
refferer?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffered?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
};
};

          
            updateReffer: {
set: {
_id: string;
number: number;
deadline?: Date;
isMoving: boolean;
};
get: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};

          
            getReffer: {
set: {
_id: string;
positionId: string;
};
get: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};

          
            removeReffer: {
set: {
_id: string;
};
get: {
success?: (0 | 1 );
};
};

          
            addReplyToReffer: {
set: {
_id: string;
positionId: string;
text: string;
};
get: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
letter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
refferer?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
user?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
sendReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
recievedReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
reffered?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
user?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
sendReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
recievedReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
user?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
sendReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
recievedReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
};
};

          
            readReplyToReffer: {
set: {
_id: string;
replyId: string;
positionId: string;
};
get: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
letter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
refferer?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
user?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
sendReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
recievedReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
reffered?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
user?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
sendReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
recievedReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
user?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
sendReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
recievedReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
};
};

          
            getReffers: {
set: {
page: number;
limit: number;
positionId: string;
number?: number;
readByUsers?: string;
readByPositions?: string;
type?: ("inUnit" | "inOrg" | "outOrg" );
refferer?: string[];
reffered?: string[];
description?: string;
letterIds?: string;
};
get: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
letter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
reffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
refferer?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
user?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
sendReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
recievedReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
reffered?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
user?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
sendReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
recievedReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
readByUsers?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
position?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
avatar?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
uploadedAssets?: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
readByPositions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
user?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
readedLetter?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
sendReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
recievedReffer?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
readedReffers?: {
_id?: (0 | 1 );
number?: (0 | 1 );
delivered?: (0 | 1 );
type?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
deadline?: (0 | 1 );
isMoving?: (0 | 1 );
description?: (0 | 1 );
reply?: (0 | 1 );
};
};
};
};

          
            countReffers: {
set: {
positionId: string;
refferedId?: string;
type?: ("inUnit" | "inOrg" | "outOrg" );
deadline?: Date;
isMoving?: boolean;
};
get: {
qty?: (0 | 1 );
};
};

          
          }

        
        priority: {

      
            addPriority: {
set: {
name: string;
orgId: string;
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
};
};

          
            updatePriority: {
set: {
_id: string;
name: string;
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};

          
            getPriority: {
set: {
_id: string;
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};

          
          }

        
        form: {

      
            addForm: {
set: {
title: string;
isActive: boolean;
orgId: string;
unitId: string;
};
get: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
questions?: {
_id?: (0 | 1 );
order?: (0 | 1 );
label?: (0 | 1 );
isActive?: (0 | 1 );
questionType?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
};
};

          
            getForm: {
set: {
_id: string;
};
get: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};

          
            getForms: {
set: {
orgId?: string;
unitId?: string;
filterForms?: ("active" | "notActive" );
};
get: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
questions?: {
_id?: (0 | 1 );
order?: (0 | 1 );
label?: (0 | 1 );
isActive?: (0 | 1 );
questionType?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};
};
};

          
            updateForm: {
set: {
id: string;
title?: string;
isActive?: boolean;
};
get: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
questions?: {
_id?: (0 | 1 );
order?: (0 | 1 );
label?: (0 | 1 );
isActive?: (0 | 1 );
questionType?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
};
};

          
          }

        
        question: {

      
            addQuestion: {
set: {
order: number;
label: string;
isActive: boolean;
questionType: ("Text" | "LongText" | "Checkbox" | "MultiSelect" | "Image" | "Radio" );
formId: string;
orgId: string;
unitId: string;
};
get: {
_id?: (0 | 1 );
order?: (0 | 1 );
label?: (0 | 1 );
isActive?: (0 | 1 );
questionType?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
};
};

          
            getQuestion: {
set: {
id: string;
};
get: {
_id?: (0 | 1 );
order?: (0 | 1 );
label?: (0 | 1 );
isActive?: (0 | 1 );
questionType?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};

          
            getQuestions: {
set: {
orgId?: string;
unitId?: string;
filterQuestions?: ("active" | "notActive" );
};
get: {
_id?: (0 | 1 );
order?: (0 | 1 );
label?: (0 | 1 );
isActive?: (0 | 1 );
questionType?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
questions?: {
_id?: (0 | 1 );
order?: (0 | 1 );
label?: (0 | 1 );
isActive?: (0 | 1 );
questionType?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
units?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
preDefLetters?: {
_id?: (0 | 1 );
title?: (0 | 1 );
description?: (0 | 1 );
number?: (0 | 1 );
};
priorities?: {
_id?: (0 | 1 );
name?: (0 | 1 );
};
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
province?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
city?: {
_id?: (0 | 1 );
name?: (0 | 1 );
enName?: (0 | 1 );
abb?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
positions?: {
_id?: (0 | 1 );
name?: (0 | 1 );
panel?: (0 | 1 );
features?: (0 | 1 );
level?: (0 | 1 );
};
users?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
letters?: {
_id?: (0 | 1 );
author?: (0 | 1 );
sender?: (0 | 1 );
recievers?: (0 | 1 );
number?: (0 | 1 );
subject?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
delivered?: (0 | 1 );
is_end?: (0 | 1 );
tags?: (0 | 1 );
leed?: (0 | 1 );
content?: (0 | 1 );
};
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
};
};
};

          
            updateQuestion: {
set: {
id: string;
order?: number;
title?: string;
isActive?: boolean;
};
get: {
_id?: (0 | 1 );
order?: (0 | 1 );
label?: (0 | 1 );
isActive?: (0 | 1 );
questionType?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
forms?: {
_id?: (0 | 1 );
order?: (0 | 1 );
title?: (0 | 1 );
isActive?: (0 | 1 );
created_at?: (0 | 1 );
updated_at?: (0 | 1 );
};
org?: {
_id?: (0 | 1 );
name?: (0 | 1 );
address?: (0 | 1 );
ownership?: (0 | 1 );
type?: (0 | 1 );
location?: (0 | 1 );
description?: (0 | 1 );
};
unit?: {
_id?: (0 | 1 );
name?: (0 | 1 );
categories?: (0 | 1 );
};
};
};

          
          }

        
        file: {

      
            uploadImage: {
set: {
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
uploader?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
};

          
            uploadFile: {
set: {
};
get: {
_id?: (0 | 1 );
name?: (0 | 1 );
type?: (0 | 1 );
size?: (0 | 1 );
uploader?: {
_id?: (0 | 1 );
first_name?: (0 | 1 );
last_name?: (0 | 1 );
phone?: (0 | 1 );
gender?: (0 | 1 );
birth_date?: (0 | 1 );
personnel_code?: (0 | 1 );
email?: (0 | 1 );
is_active?: (0 | 1 );
};
};
};

          
          }

        
        }

      
    };

  
export type DeepPartial<T> = {
	[P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export const lesanApi = (
	{ URL, settings, baseHeaders }: {
		URL: string;
		settings?: Record<string, any>;
		baseHeaders?: Record<string, any>;
	},
) => {
	const setting = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			...baseHeaders,
		},
		...settings,
	};

	const setHeaders = (headers: Record<string, any>) => {
		setting.headers = {
			...setting.headers,
			...headers,
		};
	};

	const getSetting = () => setting;

	const send = async <
		TService extends keyof ReqType,
		TModel extends keyof ReqType[TService],
		TAct extends keyof ReqType[TService][TModel],
		TSet extends DeepPartial<ReqType[TService][TModel][TAct]["set"]>,
		TGet extends DeepPartial<ReqType[TService][TModel][TAct]["get"]>,
	>(body: {
		service?: TService;
		model: TModel;
		act: TAct;
		details: {
			set: TSet;
			get: TGet;
		};
	}, additionalHeaders?: Record<string, any>) => {
		const req = await fetch(URL, {
			...getSetting(),
			headers: {
				...getSetting().headers,
				...additionalHeaders,
		    connection: "keep-alive",
			},
			body: JSON.stringify(body),
		});

		return await req.json();
	};

	return { send, setHeaders };
};

  