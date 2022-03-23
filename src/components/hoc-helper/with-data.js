import React, {Component} from 'react';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';

const withData = (View) => {
    return class extends Component {
  
      state = {
        data: null
      }
    
      componentDidMount() {
console.log('fd', this.props);
        this.props.getData
          .then((data) => {
            this.setState({data});
          });
      }
      render() {
  
        const {data} = this.state;
  
        if (!data) {
          return <Spinner/>
        }
  
        return <View {...this.props} data={data} />;
      }
    };
  };

  export default withData;