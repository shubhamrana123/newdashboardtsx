export interface IInputFileds
{
    required : boolean,
    maxLength : number,
    minLength: number,
}

export interface IInputProps
{
    controller : string,
    label : string,
    type : string,
    fields : IInputFileds,
    errors : any,
    register : (controller : string, fields : IInputFileds)=> {},

}