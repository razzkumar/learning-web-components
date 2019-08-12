import { LitElement, html, css } from 'lit-element';

export class BarDiagram extends LitElement {
  constructor() {
    super();
    this.data = [
      ['City', '2010 Population', '2000 Population'],
      ['New York City, NY', 8175000, 8008000],
      ['Los Angeles, CA', 3792000, 3694000],
      ['Chicago, IL', 2695000, 2896000],
      ['Houston, TX', 2099000, 1953000],
      ['Philadelphia, PA', 1526000, 1517000],
    ];
    this.config = {
      chart: {
        title: 'Population of Largest U.S. Cities',
      },
      hAxis: {
        title: 'Total Population',
        minValue: 0,
      },
      vAxis: {
        title: 'City',
      },
      bars: 'horizontal',
    };
  }
  static get styles() {
    return css`
      :host {
        display: block;
      }
    `;
  }

  static get properties() {
    return {
      data: Array,
      config: Object,
    };
  }

  connectedCallback() {
    super.connectedCallback();

    google.charts.load('current', { packages: ['bar'] });

    google.charts.setOnLoadCallback(this.drawMaterial.bind(this));
  }

  drawMaterial() {
    let wrapper = this.shadowRoot.querySelector('#bar-diagram-wrapper');

    var data = google.visualization.arrayToDataTable(this.data);

    var materialChart = new google.charts.Bar(wrapper);

    materialChart.draw(data, this.config);
  }

  render() {
    return html`
      <div id="bar-diagram-wrapper"></div>
    `;
  }
}
customElements.define('bar-diagram', BarDiagram);
