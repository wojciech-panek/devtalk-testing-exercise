import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import App from './app.component';
import { selectLocalesLanguage } from '../modules/locales/locales.selectors';
import { localesActions } from '../modules/locales/locales.actions';


const mapStateToProps = createStructuredSelector({
  language: selectLocalesLanguage,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  setLanguage: localesActions.setLanguage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
