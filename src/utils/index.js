import React from 'react'

const mapNavParamsToProps = (SomeComponent) => {
  return class extends React.Component {
    static navigationOptions = SomeComponent.navigationOptions;

    render() {
        return <SomeComponent {...this.props.navigation.state.params} {...this.props} />
    }
  }
}

export {
  mapNavParamsToProps,
}
