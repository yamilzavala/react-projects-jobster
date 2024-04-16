const FormSelect = ({label, name, value, handler, list}) => {
    return (
        <div className='form-row'>
            <label htmlFor={name} className='form-label'>
                {label || name}
            </label>
            <select id={name} value={value} name={name} onChange={handler} className='form-select'>
                {list.map((option, idx) => {
                   return (<option key={idx} value={option}>{option}</option>)
                })}
            </select>
        </div>
    );
};

export default FormSelect;