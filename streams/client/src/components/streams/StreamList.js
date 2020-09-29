import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../actions/index';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {   // if the current users userId is the same as the userId that created the tream
            return (
                <div className="right floated content">
                    { /* If below buttons are clicked, a GET request will be sent to the edit endpoint with the users userId as a variable */}
                    <Link to={`/streams/edit/${stream.userId}`} className="ui button primary">Edit</Link>
                    <Link to={`/streams/edit/${stream.userId}`} className="ui button primary">Delete</Link>
                </div>
            );
        }
    }

    renderCreate() { // if user is signed in and button is clicked, takes user to endpoint where they can create a new stream
        if (this.props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to='streams/new' className="ui button primary">
                        Create Stream
                        </Link>
                </div>
            )
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreate()}
            </div>
        )
    }
};
const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams), // turn object of objects into list of objects
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}
export default connect(mapStateToProps, { fetchStreams })(StreamList);