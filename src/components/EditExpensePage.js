import React from 'react';


const EditExpensePage =(props) => {
console.log(props);
    return((
<div>
This is from my Edit Expense component {props.match.params.id}
</div>

));
};

export default EditExpensePage;