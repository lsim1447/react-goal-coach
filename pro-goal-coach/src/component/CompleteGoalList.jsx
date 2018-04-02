import React, { Component } from 'react';
import { completeGoalRef } from '../firebase'; 
import { setCompleted } from '../actions';
import { connect } from 'react-redux';

class CompleteGoalList extends Component {

    componentDidMount(){
        completeGoalRef.on('value', snap => {
            let completeGoals = [];
            snap.forEach( completeGoal => {
                const {email, title} = completeGoal.val();
                completeGoals.push({email, title});
            })
            this.props.setCompleted(completeGoals);
        })
    }

    render(){
        return (
            <div>
                {
                    this.props.completeGoals.map((completeGoal, index) => {
                        const { title, email } = completeGoal;
                        return (
                            <div key={index}>
                                <strong> {title} </strong> completed By <em> {email} </em>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    const { completeGoals } = state;
    console.log('state in CompleteGoalList', state);
    return {
        completeGoals: completeGoals
    }
}

export default connect (mapStateToProps, { setCompleted })(CompleteGoalList);