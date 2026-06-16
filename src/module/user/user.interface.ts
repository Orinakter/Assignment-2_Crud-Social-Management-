export interface IUserBody{
    name:string,
    email:string,
    password:string,
    role?:string,

}

export type UserUpdateBody=Partial<IUserBody>