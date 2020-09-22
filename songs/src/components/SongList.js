import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions/index';

class SongList extends React.Component {

    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button
                            onClick={() => this.props.selectSong(song)}
                            className="ui button primary">
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    };

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    };
};

// receives the store state and returns object that has songs from state
// destructured out and assigned to 'songs' property and exposes that property
// using this.props
const mapStateToProps = (state) => {
    return { songs: state.songs };
}

const mapDispatchProps = { selectSong };

const connectToStore = connect(mapStateToProps, mapDispatchProps);

// Returns a new wrapped SongList class, doesn't modify original.
export default connectToStore(SongList);




