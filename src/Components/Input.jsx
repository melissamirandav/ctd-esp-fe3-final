import React from 'react';
import './Input.css';

const Input = ({placeholder, tittle, value, setValue, setError, error, regex,errorMessage}) => {

	const onChange =(valueInput)=> {
		setValue(valueInput);
		if(valueInput.length>0){
			setError("")
		}
	}

    const ValidateInput= () => {
		if(!regex.test(value)){
			setError(errorMessage)
		}
	}

    return (
		<div className="input-container">
			<div className="input-flex-container">
				<label className="input-label" htmlFor="">{tittle}</label>
				<input
				value={value}
				type="text"
				placeholder={placeholder}
				onChange={(e) => onChange(e.target.value)}
				onBlur={() => ValidateInput()}
				className="input-field"
				/>
			</div>
			{error !== '' && <p className="error-message">{error}</p>}
    </div>
	);
};
export default Input;