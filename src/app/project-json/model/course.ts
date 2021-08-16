

export interface I_CourseJSON {
    id:number;
    description:string;
    iconUrl: string;
    longDescription: string;
    category:string;
    lessonsCount?:number;
}

// By adding the '?' this makes this key value optional
