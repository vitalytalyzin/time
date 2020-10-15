import React from 'react';
import PropTypes from 'prop-types';

const DateTimePretty = (getCurrentDateTime, propName) => Component => {
  return class extends React.Component {
    static get displayName() {
      const name = Component.displayName ||
        Component.name || 'Component';
      return `DateTimePretty(${name})`;
    }

    render() {
      const { date } = this.props;
      const props = {
        [propName]: getCurrentDateTime(date),
      };

      return <Component {...this.props} {...props} />;
    }
  };
};


DateTimePretty.propTypes = {
  getCurrentDateTime: PropTypes.func.isRequired,
  propName: PropTypes.string.isRequired,
};

export default DateTimePretty;
