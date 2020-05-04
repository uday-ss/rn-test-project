
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { Checkbox, Button } from 'react-native-material-ui'

import {
  Header,
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { connect } from 'react-redux'
import { withTheme } from 'react-native-material-ui'
import { sampleAction } from '../../actions/sample';
import styles from './style';

const sampleScreen = (props) => {

  const  [ agreeToTC, setAgreeToTC ] = useState(false);

  const { primaryColor } = props.theme.palette;

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Checkbox
            label="I agree to the Terms and Conditions, Privacy Policy, and Medical Disclaimer"
            uncheckedIcon="radio-button-unchecked"
            checkedIcon="check-circle"
            value="Value"
            checked={agreeToTC}
            onCheck={(val) => { setAgreeToTC(val) }}
          />
          <Button primary raised text="SIGN UP" style={{container: styles.buttonContainer}}/>
          <Button primary raised text="LOGIN" style={{container: {...styles.buttonContainer, borderColor: primaryColor, backgroundColor: "#ffffff", borderWidth: 1}, text: {color: primaryColor} }}/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const mapStateToProps = state => ({
  ...state
})

const mapDispatchToProps = dispatch => ({
  sampleAction: () => dispatch(sampleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(withTheme(sampleScreen))
