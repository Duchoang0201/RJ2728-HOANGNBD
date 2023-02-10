import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

type Props={};
type State={
  currentSecond: number,
}

class CountClassComponent extends PureComponent<Props, State> {
  DEFAULT_MAX_SECOND: number;
  timer: ReturnType<typeof setInterval> | undefined;
  constructor(props: Props) {
    super(props);
    this.DEFAULT_MAX_SECOND = 100;
    this.state = {
      currentSecond: this.DEFAULT_MAX_SECOND
    }
  }


  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState: State) => ({
        currentSecond: prevState.currentSecond -1
      }));
    },1000)
  }


  componentDidUpdate(prevProps: Props ) {
    console.log("Component DID UPDATE");
    
  }

  componentWillUnmount() {
    if(this.timer){
      clearInterval(this.timer)
    }
  }

  render() {
    const { currentSecond } = this.state
    return (
      <div>
        <div className={`w-50 m-auto mt-3 text-center`}>{currentSecond}</div>
      </div>
    );
  }
}



export default CountClassComponent;