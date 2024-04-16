const FormRow = ({label, value, type, name, handler}) => {
    return (
        <div className='form-row'>
            <label htmlFor={name} className='form-label'>
                {label || name}
            </label>

            <input
            id={name}
            type={type}
            value={value}
            name={name}
            onChange={handler}
            className='form-input'
            />
        </div>
    );
};

export default FormRow;