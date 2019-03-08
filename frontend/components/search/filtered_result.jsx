import React from 'react';

class FilteredResult extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { result } = this.props
        return (
            <div>
                <div>{result.name}</div>
            </div>
        )
    }
}

export default FilteredResult;