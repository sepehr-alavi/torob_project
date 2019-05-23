import React, { Component } from 'react';
import { Line, Bar } from 'react-chartjs-2';

class Chart extends Component {
  constructor(props) {
    super(props);

    const { chartData } = this.props;
    let entriesValues1 = [];
    let entriesValues2 = [];
    {
      this.props.chartData.dataSets[0].entries.map(entry => {
        entriesValues1.push(entry.val);
      });
    }
    {
      this.props.chartData.dataSets[1].entries.map(entry => {
        entriesValues2.push(entry.val);
      });
    }
    this.state = {
      chartData: {
        labels: chartData.labels,
        datasets: [
          {
            label: chartData.dataSets[0].label,
            fill: false,
            backgroundColor: chartData.dataSets[0].color,
            data: entriesValues1,
          },
          {
            label: chartData.dataSets[1].label,
            fill: false,
            backgroundColor: chartData.dataSets[1].color,
            data: entriesValues2,
          }
        ]
      }
    };
  }

  render() {
    return (
      <Line
        data={this.state.chartData}
        options={{
          maintainAspectRatio: false
        }}
      />
    );
  }
}

export default Chart;
