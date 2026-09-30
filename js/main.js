vegaEmbed("#chart1", "specs/01_income_waffle.json", {
  actions: false
}).catch(console.error);

vegaEmbed("#chart2", "specs/02_income_distribution.json", {
  actions: false
}).catch(console.error);

vegaEmbed("#chart3", "specs/03_state_heatmap.json", {
  actions: false
}).catch(console.error);

vegaEmbed("#chart4", "specs/04_state_sa2_boxplot.json", {
  actions: false
}).catch(console.error);

vegaEmbed("#chart5", "specs/05_sa2_choropleth.json", {
  actions: false
}).catch(console.error);

vegaEmbed("#chart6", "specs/06_city_dot_density.json", {
  actions: false
}).catch(console.error);

vegaEmbed("#chart7", "specs/07_city_proportional_symbols.json", {
  actions: false
}).catch(console.error);
