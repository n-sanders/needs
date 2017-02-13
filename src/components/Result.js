import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import CategoryResult from './CategoryResult';

function Result(props) {
    function renderCategoryResults(key) {
        return (
            <CategoryResult
                key={key}
                categoryName={key}
                categoryValue={props.finalCategories[key]}
            />
        );
    }

    return (
        <ReactCSSTransitionGroup
            className="container result"
            component="div"
            transitionName="fade"
            transitionEnterTimeout={800}
            transitionLeaveTimeout={500}
            transitionAppear
            transitionAppearTimeout={500}
        >
            <table>
                <tbody>
                    {Object.keys(props.finalCategories).map(renderCategoryResults)}
                </tbody>
            </table>
            
        </ReactCSSTransitionGroup>
    );

}

Result.propTypes = {
    finalCategories: React.PropTypes.object.isRequired
};

export default Result;