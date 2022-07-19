import React, {useState} from "react";
import {useListContext} from "../context/list_context";


const Checkbox = ({book}) => {
    const { checked_items, toggleList } = useListContext();
    const {_id, firstName, lastName, title, cover} = book;

    const [checkedState, setCheckedState] = useState(new Array(checked_items.length).fill(false));
    const [total, setTotal] = useState(0);


    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );
        setCheckedState(updatedCheckedState);

        const totalCheckedBooks = updatedCheckedState.reduce(
            (count, currentState, index) => {
                if (currentState === true) {
                    return count + checked_items[index];
                }
                return count;
            },
            0
        );
        setTotal(totalCheckedBooks);
    };


    return (

        <div className="ax-cb-div">
            <input
                className="inp-cbx " // important to  keep it for the stroke to work
                id={`custom-checkbox-${_id}`}
                type="checkbox"
                style={{"display": "none"}}
                checked={checkedState[_id]}
                onChange={() => handleOnChange(_id)}
                onClick={() => toggleList(_id, firstName, lastName, title, cover)}
            />
            <label className="cbx" htmlFor={`custom-checkbox-${_id}`}>
                <span>
                    <svg width="12px" height="10px" viewBox="0 0 12 10">
                    <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                    </svg>
                </span>
            </label>
        </div>
    )
}

export default Checkbox;