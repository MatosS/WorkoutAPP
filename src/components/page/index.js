import React, { useState } from 'react';
import { View, Animated, Easing } from 'react-native';
import { withNavigation } from 'react-navigation';

import Header from 'components/header';
import Menu from 'components/menu';

import styles from './style';
import { ScrollView } from 'react-native-gesture-handler';

const Page = ({ children, navigation, style = {}, showHeader, title }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  const [topDashPosition] = useState(new Animated.Value(0));
  const [topDashRotate] = useState(new Animated.Value(0));
  const [middleDashOpacity] = useState(new Animated.Value(1));
  const [bottomDashPosition] = useState(new Animated.Value(0));
  const [bottomDashRotate] = useState(new Animated.Value(0));
  const [titleOpacity] = useState(new Animated.Value(1));

  const [menuOpacity] = useState(new Animated.Value(0));
  const [menuScale] = useState(new Animated.Value(0.9));
  const [menuZIndex] = useState(new Animated.Value(0));

  const [pageContentOpacity] = useState(new Animated.Value(1));
  const [pageContentScale] = useState(new Animated.Value(1));
  const [pageContentZIndex] = useState(new Animated.Value(1));

  const animateOpts = {
    easing: Easing.linear,
  };

  const animate = (value, to, opts) => {
    return Animated.timing(
      value,
      {
        toValue: to,
        duration: 300,
        ...opts,
      }
    );
  }

  const showMenuAndHideContent = () => {
    Animated.parallel([
      animate(topDashPosition, 13),
      animate(topDashRotate, 1, animateOpts),
      animate(middleDashOpacity, 0),
      animate(bottomDashPosition, 14),
      animate(bottomDashRotate, 1, animateOpts),
      animate(titleOpacity, 0),
      animate(menuOpacity, 1),
      animate(menuScale, 1, { easing: Easing.linear }),
      animate(menuZIndex, 1),
      animate(pageContentOpacity, 0),
      animate(pageContentScale, 0.9,  { easing: Easing.linear }),
      animate(pageContentZIndex, 0),
    ]).start();

    setMenuOpened(true);
  }

  const showContentAndHideMenu = () => {
    Animated.parallel([
      animate(topDashPosition, 0),
      animate(topDashRotate, 0, animateOpts),
      animate(middleDashOpacity, 1),
      animate(bottomDashPosition, 0),
      animate(bottomDashRotate, 0, animateOpts),
      animate(titleOpacity, 1),
      animate(menuOpacity, 0),
      animate(menuScale, 0.9, animateOpts),
      animate(menuZIndex, 0),
      animate(pageContentOpacity, 1),
      animate(pageContentScale, 1,  animateOpts),
      animate(pageContentZIndex, 1),
    ]).start();

    setMenuOpened(false);
  }

  const handleHeaderPress = () => {
    if (menuOpened) {
      showContentAndHideMenu();
    } else {
      showMenuAndHideContent();
    }
  }

  const renderHeader = () => {
    const topRotate = topDashRotate.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg'],
    });

    const hamburguerButtonTopDashStyle = {
      top: topDashPosition,
      transform: [
        { rotate: topRotate },
      ],
    };

    const hamburguerButtonMiddleDashStyle = {
      opacity: middleDashOpacity,
    }

    const bottomRotate = bottomDashRotate.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '135deg'],
    });

    const hamburguerButtonBottomDashStyle = {
      bottom: bottomDashPosition,
      transform: [
        { rotate: bottomRotate },
      ],
    }

    const titleStyle = {
      opacity: titleOpacity,
    }

    const headerStyle = {
      hamburguerButtonTopDashStyle,
      hamburguerButtonMiddleDashStyle,
      hamburguerButtonBottomDashStyle,
      titleStyle,
    }

    return (
      <Header
        style={headerStyle}
        title={title}
        onPress={handleHeaderPress}
      />
    );
  }

  const renderMenu = () => {
    const menuStyle = {
      opacity: menuOpacity,
      transform: [
        { scale: menuScale },
      ],
      zIndex: menuZIndex,
    };

    const handleMenuOnPress = (page) => {
      if (navigation.state.routeName !== page) {
        navigation.navigate(page);
      } else {
        showContentAndHideMenu();
      }
    }

    return (
      <Menu
        style={menuStyle}
        onPress={handleMenuOnPress}
      />
    );
  }

  const renderContent = () => {
    const pageContentStyle = {
      opacity: pageContentOpacity,
      transform: [
        { scale: pageContentScale },
      ],
      zIndex: pageContentZIndex,
    };

    return (
      <Animated.View style={[styles.content, pageContentStyle]}>
        <ScrollView style={styles.scrollview} contentContainerStyle={style}>
          {children}
        </ScrollView>
      </Animated.View>
    );
  }

  return (
    <View style={styles.main}>
      {showHeader && renderHeader()}
      {renderMenu()}
      {renderContent()}
    </View>
  );
}

export default withNavigation(Page);
