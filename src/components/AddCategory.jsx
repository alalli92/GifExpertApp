import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, SetInputValue] = useState('');
    const onInputChange = ({ target }) => {
        SetInputValue(target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        SetInputValue('');
        onNewCategory(inputValue.trim());
        
    }
    return (
        <form onSubmit={ onSubmit } aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}