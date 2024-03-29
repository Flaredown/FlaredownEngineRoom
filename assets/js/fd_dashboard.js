var client = new Keen({
  projectId: "55327e0646f9a75ef4402fc1",
  readKey: "6c4dfeb182ebda9bb824420a5c6982c8f70309436bf92772e92f8134f016b0dbbcf554e221415c31e9a182f568b3339ebdad420271e3c36e0ebaa06b6756328bf01c0b1f27fcee5887b3e4bd295f0529035d4429dccd7da6632e3c4922bf045b249c77473236e83dc6ee3daac7e2e625"
});

var areaChartOptions = {
  chartArea: {
    height: "85%",
    left: "5%",
    top: "5%",
    width: "80%"
  },
  isStacked: true
};

var ringChartOptions = {
  chartArea: {
    height: "85%",
    left: "5%",
    top: "5%",
    width: "100%"
  },
  pieHole: .4  
};

var columnChartOptions = {
  chartArea: {
    height: "75%",
    left: "10%",
    top: "5%",
    width: "100%"
  },
  bar: {
    groupWidth: "85%"
  },
  isStacked: true,
  legend: {
    position: "none"
  }
};

var barChartOptions = {
  chartArea: {
    height: "85%",
    left: "25%",
    top: "5%",
    width: "65%"
  },
  bar: {
    groupWidth: "85%"
  },
  legend: {
    position: "none"
  }
};

Keen.ready(function(){
  // ----------------------------------------
  // Unique daily visits by browser (previous two weeks)
  // ----------------------------------------
  var visitsByBrowserTimeline = new Keen.Query("count_unique", {
    eventCollection: "pageviews",
    targetProperty: "session_id",
    interval: "daily",
    groupBy: "user_agent.browser.name",
    timeframe: "this_2_weeks"
  });
  client.draw(visitsByBrowserTimeline, document.getElementById("browser-timeline"), {
    chartType: "areachart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: areaChartOptions
  });

  // ----------------------------------------
  // Browser share (previous two weeks)
  // ----------------------------------------
  var browserShare = new Keen.Query("count_unique", {
    eventCollection: "pageviews",
    targetProperty: "session_id",
    groupBy: "user_agent.browser.name",
    timeframe: "this_2_weeks"
  });
  client.draw(browserShare, document.getElementById("browser-share"), {
    chartType: "piechart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: ringChartOptions
  });

  // ----------------------------------------
  // OS share (previous two weeks)
  // ----------------------------------------
  var osShare = new Keen.Query("count_unique", {
    eventCollection: "pageviews",
    targetProperty: "session_id",
    groupBy: "user_agent.os.name",
    timeframe: "this_2_weeks"
  });
  client.draw(osShare, document.getElementById("os-share"), {
    chartType: "piechart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: ringChartOptions
  });

  // ----------------------------------------
  // Top conditions tracked (previous two weeks)
  // ----------------------------------------
  var topConditions = new Keen.Query("count_unique", {
    eventCollection: "conditions",
    targetProperty: "user_id",
    groupBy: "name",
    timeframe: "this_2_weeks"
  });
  client.draw(topConditions, document.getElementById("top-conditions"), {
    chartType: "barchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: barChartOptions
  });

  // ----------------------------------------
  // Top symptoms tracked (previous two weeks)
  // ----------------------------------------
  var topSymptoms = new Keen.Query("count_unique", {
    eventCollection: "symptoms",
    targetProperty: "user_id",
    groupBy: "name",
    timeframe: "this_2_weeks"
  });
  client.draw(topSymptoms, document.getElementById("top-symptoms"), {
    chartType: "barchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: barChartOptions
  });

  // ----------------------------------------
  // Top treatments tracked (previous two weeks)
  // ----------------------------------------
  var topTreatments = new Keen.Query("count_unique", {
    eventCollection: "treatments",
    targetProperty: "user_id",
    groupBy: "name",
    timeframe: "this_2_weeks"
  });
  client.draw(topTreatments, document.getElementById("top-treatments"), {
    chartType: "barchart",
    title: false,
    height: 250,
    width: "auto",
    chartOptions: barChartOptions
  });

});
