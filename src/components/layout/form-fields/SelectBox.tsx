import { Fragment } from "react"
import { IInputProps, ISelectBoxProps } from "../../../type/common.type"
const SelectBox = (props:ISelectBoxProps) =>{
    const fields = props.fields;
    return (
        <Fragment>
            <select className="form-control" {...props.register(props.controller, { required: fields.required, maxLength:fields.maxLength, minLength: fields.minLength })}>
                <option selected={true} value="0">Please Choose Country Name</option>
             
                {props.country.map((item:any)=> (
                    <option value={item.name}>{item.name}</option>
                ))}
            </select>
            </Fragment>
    )
}
export default SelectBox