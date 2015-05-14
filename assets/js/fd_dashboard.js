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
  // Session length (previous two weeks)
  // ----------------------------------------
  // var osShare = new Keen.Query("count_unique", {
  //   eventCollection: "pageviews",
  //   targetProperty: "session_id",
  //   groupBy: "user_agent.os.name",
  //   timeframe: "this_2_weeks"
  // });
  // client.draw(osShare, document.getElementById("session-length"), {
  //   chartType: "columnchart",
  //   title: false,
  //   height: 250,
  //   width: "auto",
  //   chartOptions: {
  //     bar: { groupWidth: "95%" },
  //     chartArea: {
  //       height: "85%",
  //       left: "5%",
  //       top: "5%",
  //       width: "100%"
  //     },
  //     pieHole: .4
  //   }
  // });

  // ----------------------------------------
  // Tracking by hour of day (previous two weeks)
  // ----------------------------------------
  // var trackingHourOfDay = new Keen.Query("count", {
  //   eventCollection: "entries",
  //   groupBy: "local_time_hour",
  //   timeframe: "this_2_weeks"
  // });
  // client.draw(trackingHourOfDay, document.getElementById("hour-of-day"), {
  //   chartType: "columnchart",
  //   title: false,
  //   height: 250,
  //   width: "auto",
  //   chartOptions: columnChartOptions
  // });

  // ----------------------------------------
  // Tracking by day of week (previous four weeks)
  // ----------------------------------------
  // var trackingDayOfWeek = new Keen.Query("count", {
  //   eventCollection: "entries",
  //   groupBy: "day_of_week",
  //   timeframe: "this_4_weeks"
  // });
  // client.draw(trackingDayOfWeek, document.getElementById("day-of-week"), {
  //   chartType: "columnchart",
  //   title: false,
  //   height: 250,
  //   width: "auto",
  //   chartOptions: columnChartOptions
  // });

  // ----------------------------------------
  // Sample five
  // ----------------------------------------
  // var impressions_timeline_by_country = new Keen.Query("count", {
  //   eventCollection: "impressions",
  //   groupBy: "user.geo_info.country",
  //   interval: "hourly",
  //   timeframe: {
  //     start: "2014-05-04T00:00:00.000Z",
  //     end: "2014-05-05T00:00:00.000Z"
  //   }
  // });
  // client.draw(impressions_timeline_by_country, document.getElementById("whatever"), {
  //   chartType: "columnchart",
  //   title: false,
  //   height: 250,
  //   width: "auto",
  //   chartOptions: {
  //     chartArea: {
  //       height: "75%",
  //       left: "10%",
  //       top: "5%",
  //       width: "60%"
  //     },
  //     bar: {
  //       groupWidth: "85%"
  //     },
  //     isStacked: true
  //   }
  // });
  // ----------------------------------------
  // End sample five
  // ----------------------------------------
});
