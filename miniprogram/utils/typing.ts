export interface FileType {
    fid?: number
    name?: string,
    catagory?: number,
    submitter?: string,
    time?: string,
    isChecked?: boolean;
}


export enum fileCatagory {
    'doc' = 0,
    'docx' = 1,
    'xls' = 2,
    'xlsx' = 3,
    'ppt' = 4,
    'pptx' = 5,
    'zip' = 6,
    'pdf' = 7,
}