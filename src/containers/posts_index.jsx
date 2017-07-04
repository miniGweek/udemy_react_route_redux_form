import React,{Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import fetchPosts from '../actions'

class PostsIndex extends Component{

    componentDidMount(){
        this.props.fetchPosts()
    }

    render(){
        return(
            <div>
                Posts Index
            </div>
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({'fetchPosts' : fetchPosts}, dispatch);
}

export default connect(null, mapDispatchToProps)(PostsIndex)