import { useState } from "react"
import { InputPropTypes } from "../../types/components.types";
import { Container, ErrorText, Input, InputContainer, Label, LeftIcon, Show } from "./InputField.styles"

const InputField : React.FC<InputPropTypes> = ({
    name,
    value,
    placeholder,
    onChange,
    disabled,
    leftIcon,
    label,
    isPassword,
    error,
    type,
    
}) => {

    const [show, setShow] = useState<boolean>(false);
    
    return (
        <Container>
            <Label>
                {label}
            </Label>
            <InputContainer>
            {leftIcon && <>{leftIcon}</>}
            <Input
            name = {name}
            value = {value}
            placeholder = {placeholder}
            onChange = {onChange}
            disabled = {disabled}
            
            />
            {
                isPassword && (
                    null
                    // <Show onClick = {() => setShow(!show)}>
                    //     {/* {!show ? <EyeIcon/> : <HiOutlineEyeOff size = {24}/>} */}
                    // </Show>
                )
            }
            {/* {rightIcon && <Show onClick = {() => setShow(!show)}>{rightIcon}</Show>} */}
            </InputContainer>
            {error && <ErrorText>{error}</ErrorText>}
        </Container>
        
    )
}

export default InputField