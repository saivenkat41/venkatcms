import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './AllFields.css';
//import AddField from '../AddField/AddField';
import ViewTable from '../../ViewTable/ViewTable';

class AllFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fieldsKeys: {
        FieldLabel: '',
        MachineName: '',
        Type: '',
        TypeOption: '',
        Unique: '',
        Visible: '',
        Required: '',
        CssClasses: '',
        CustomCss: ''
      }
    };
  }

  static propTypes = {
    allFields: PropTypes.array
  };

  render() {
    return (
      <div className="AllFields">
        <ViewTable items={this.props.allFields} keys={this.state.fieldsKeys} />
      </div>
    );
  }
}

export default AllFields;
