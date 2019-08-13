import { LitElement, html, css } from 'lit-element';
import { GoogleCharts } from 'google-charts';

export class PieChart extends LitElement {
  constructor() {
    super();
    this.data = [
      ['Chart thing', 'Chart amount'],
      ['Lorem ipsum', 60],
      ['Dolor sit', 22],
      ['Sit amet', 18],
    ];
  }

  static get properties() {
    return {
      data: Array,
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        height: 200px;
        width: 400px;
      }
    `;
  }
  //   Load the charts library with a callback

  connectedCallback() {
    super.connectedCallback();

    GoogleCharts.load(this.drawChart.bind(this));
  }
  drawChart() {
    let wrapper = this.shadowRoot.getElementById('pie-chart-wrapper');

    // Standard google charts functionality is available as GoogleCharts.api after load
    const data = GoogleCharts.api.visualization.arrayToDataTable(this.data);
    const pie_1_chart = new GoogleCharts.api.visualization.PieChart(wrapper);
    pie_1_chart.draw(data);
  }
  render() {
    return html`
      <div id="pie-chart-wrapper"></div>
    `;
  }
}

customElements.define('pie-chart', PieChart);
