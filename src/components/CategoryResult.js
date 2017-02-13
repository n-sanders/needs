import React from 'react';

function CategoryResult(props) {
    return (
        <tr>
            <td><label className="resultCustomLabel">{props.categoryName}</label></td>
            <td><label>{props.categoryValue}</label></td>
        </tr>
    );
}

CategoryResult.propTypes = {
    categoryName: React.PropTypes.string.isRequired,
    categoryValue: React.PropTypes.number.isRequired
};

export default CategoryResult;