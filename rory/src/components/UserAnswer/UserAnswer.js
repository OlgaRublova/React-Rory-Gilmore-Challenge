import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserAnswer extends Component {
    render() {
        let answer = null;

        switch (this.props.answer) {
            case('no'):
                answer = <div className="heading-section">
                    <h1 className="text-heading">
                        It is OK. <br></br>
                        <span>Maybe next time</span>
                    </h1>
                </div>
                ;
                break;
            case('yes'):
                answer = <div className="heading-section">
                    <h1 className="text-heading">
                        Great <br></br>
                        <span>What genre do you like?</span>
                    </h1>
                </div>;
                break;

            default:
                answer = null;
        }
        return answer;
    }
}

UserAnswer.propTypes = {
    type: PropTypes.string.isRequired
}


export default UserAnswer;