
import { Fragment } from "react";
import { IInputProps } from "../../../type/common.type";

const Input = (props: IInputProps) => {
    const fields = props.fields;
    return (
        <Fragment>
            <label>{props.label}</label>
            <input
                className="form-control" type={props.type}
                {...props.register(props.controller,{ required: fields.required, maxLength:fields.maxLength, minLength: fields.minLength })}
            />

            <br />
            {props.errors[props.controller] && <p className="text-danger">This field is required </p>}
        </Fragment>
    )
}

export default Input;