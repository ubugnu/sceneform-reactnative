'use strict';
import React from 'react';
import { requireNativeComponent, View } from 'react-native';

class NoARScene extends React.Component {
  constructor() {
    super();
    this.NativeArView = undefined;
    this.onChange = this.onChange.bind(this);
    this.subscriptions = [];
    this.mounted = false;
    this.state = {
      recording: false,
    };
  }

  onChange() {}

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.subscriptions.forEach((sub) => sub.remove());
    this.subscriptions = [];
    this.mounted = false;
  }

  render() {
    return (
      <NativeArView
        ref={(c) => (this.NativeArView = c)}
        {...this.props}
        onChange={this.onChange}
      />
    );
  }
}

NoARScene.propTypes = {
  ...View.propTypes,
};

const NativeArView = requireNativeComponent('SceneformNoARView', NoARScene, {
  nativeOnly: { onChange: true },
});

module.exports = NoARScene;
