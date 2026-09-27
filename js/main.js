vegaEmbed("#chart1", "specs/01_income_waffle.json", {
  actions: false
}).catch(console.error);

vegaEmbed("#chart2", "specs/02_income_distribution.json", {
  actions: false
}).catch(console.error);

vegaEmbed("#chart3", "specs/03_state_heatmap.json", {
  actions: false
}).catch(console.error);