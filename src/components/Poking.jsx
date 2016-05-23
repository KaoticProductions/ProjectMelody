import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export const Poking = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return <div>
        <button onClick={() => this.props.poke()}>
          Poke
        </button>
        <p>{this.props.pokes}</p>
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    pokes: state.get('poke')
  };
}

export const PokingContainer = connect(
  mapStateToProps,
  actionCreators
)(Poking);
