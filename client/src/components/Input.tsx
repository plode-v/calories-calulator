const Input = ({label, placeholder, value, type, onChange, inputStyle, divStyle, labelStyle, min} :any) => {
    return (
        <div className={divStyle}>
            <label className={labelStyle}>{label}</label>
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value} 
                onChange={onChange} 
                className={inputStyle}
                min={min}
            />
        </div>
    )
}

export default Input