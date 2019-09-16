import React from 'react'

const mapNavParamsToProps = (SomeComponent) => {
  return class extends React.Component {
    static navigationOptions = SomeComponent.navigationOptions;

    render() {
        return <SomeComponent {...this.props.navigation.state.params} {...this.props} />
    }
  }
}

const replaceAll = (text, replace, to, once = false) => {
  let newString = text;

  while (newString.indexOf(replace) > -1) {
    newString = newString.split(replace).join(to);

    if (once) {
      break;
    }
  }

  return newString;
}

export {
  mapNavParamsToProps,
  replaceAll,
}
