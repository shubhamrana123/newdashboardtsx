export interface IInputFileds
{
    required : boolean,
    maxLength : number,
    minLength: number,
}
// export interface ISelectFields
// {
//     required : boolean,
//     maxLength : number,
//     minLength: number,
// }
export interface IInputProps
{
    controller : string,
    label : string,
    type : string,
    fields : IInputFileds,
    errors : any,
   
    register : (controller : string, fields : IInputFileds)=> {},

}
export interface ISelectBoxProps
{
    controller : string,
  
    fields : IInputFileds,
    errors : any,
   country:any
    register : (controller : string, fields : IInputFileds)=> {},

}

export interface IUserInfo{
    id: number,
    fname : string,
    lname : string,
    email :string,
    phone : string,
    country: string
}