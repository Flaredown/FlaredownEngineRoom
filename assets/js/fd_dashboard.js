var client = new Keen({
  projectId: "55327e0646f9a75ef4402fc1",
  readKey: "6c4dfeb182ebda9bb824420a5c6982c8f70309436bf92772e92f8134f016b0dbbcf554e221415c31e9a182f568b3339ebdad420271e3c36e0ebaa06b6756328bf01c0b1f27fcee5887b3e4bd295f0529035d4429dccd7da6632e3c4922bf045b249c77473236e83dc6ee3daac7e2e625"
});

Keen.ready(function(){
// ----------------------------------------
// Sample one
// ----------------------------------------
var pageviews_timeline = new Keen.Query("count_unique", {
  eventCollection: "pageviews",
  targetProperty: "session_id",
  interval: "daily",
  groupBy: "user_agent.browser.name",
  timeframe: "previous_2_weeks"
});
client.draw(pageviews_timeline, document.getElementById("grid-1-1"), {
  chartType: "areachart",
  title: false,
  height: 250,
  width: "auto",
  chartOptions: {
    chartArea: {
      height: "85%",
      left: "5%",
      top: "5%",
      width: "80%"
    },
    isStacked: true
  }
});
// ----------------------------------------
//  End sample one
// ----------------------------------------
// ----------------------------------------
// Sample two
// ----------------------------------------
var pageviews_static = new Keen.Query("count_unique", {
  eventCollection: "pageviews",
  targetProperty: "session_id",
  groupBy: "user_agent.browser.name",
  timeframe: "previous_2_weeks"
});
client.draw(pageviews_static, document.getElementById("chart-02"), {
  chartType: "piechart",
  title: false,
  height: 250,
  width: "auto",
  chartOptions: {
    chartArea: {
      height: "85%",
      left: "5%",
      top: "5%",
      width: "100%"
    },
    pieHole: .4
  }
});
// ----------------------------------------
// End sample two
// ----------------------------------------
// ----------------------------------------
// Sample three
// ----------------------------------------
var impressions_timeline = new Keen.Query("count", {
  eventCollection: "impressions",
  groupBy: "ad.advertiser",
  interval: "hourly",
  timeframe: {
    start: "2014-05-04T00:00:00.000Z",
    end: "2014-05-05T00:00:00.000Z"
  }
});
client.draw(impressions_timeline, document.getElementById("chart-03"), {
  chartType: "columnchart",
  title: false,
  height: 250,
  width: "auto",
  chartOptions: {
    chartArea: {
      height: "75%",
      left: "10%",
      top: "5%",
      width: "60%"
    },
    bar: {
      groupWidth: "85%"
    },
    isStacked: true
  }
});
// ----------------------------------------
// End sample three
// ----------------------------------------
// ----------------------------------------
// Sample four
// ----------------------------------------
var impressions_timeline_by_device = new Keen.Query("count", {
  eventCollection: "impressions",
  groupBy: "user.device_info.device.family",
  interval: "hourly",
  timeframe: {
    start: "2014-05-04T00:00:00.000Z",
    end: "2014-05-05T00:00:00.000Z"
  }
});
client.draw(impressions_timeline_by_device, document.getElementById("chart-04"), {
  chartType: "columnchart",
  title: false,
  height: 250,
  width: "auto",
  chartOptions: {
    chartArea: {
      height: "75%",
      left: "10%",
      top: "5%",
      width: "60%"
    },
    bar: {
      groupWidth: "85%"
    },
    isStacked: true
  }
});
// ----------------------------------------
// End sample four
// ----------------------------------------
// ----------------------------------------
// Sample five
// ----------------------------------------
var impressions_timeline_by_country = new Keen.Query("count", {
  eventCollection: "impressions",
  groupBy: "user.geo_info.country",
  interval: "hourly",
  timeframe: {
    start: "2014-05-04T00:00:00.000Z",
    end: "2014-05-05T00:00:00.000Z"
  }
});
client.draw(impressions_timeline_by_country, document.getElementById("chart-05"), {
  chartType: "columnchart",
  title: false,
  height: 250,
  width: "auto",
  chartOptions: {
    chartArea: {
      height: "75%",
      left: "10%",
      top: "5%",
      width: "60%"
    },
    bar: {
      groupWidth: "85%"
    },
    isStacked: true
  }
});
// ----------------------------------------
// End sample five
// ----------------------------------------
});
