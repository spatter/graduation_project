      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data4 = new google.visualization.DataTable();
        data4.addColumn('string', '年度');
        data4.addColumn('number', '台数');
        data4.addRows([
          ['2015年度', 1427976],
          ['2014年度', 1760847],
          ['2013年度', 1821081],
          ['2012年度', 1571199],
          ['2011年度', 1277375],
          ['2010年度', 1207674],
          ['2009年度', 1276584],
          ['2008年度', 1388487],
          ['2007年度', 1425751],
          ['2006年度', 1529201]
        ]);
        var options4 = {'title':'軽乗用車販売台数',
                       'width':400,
                       'height':300};
        var chart4 = new google.visualization.BarChart(document.getElementById('chart4'));
        chart4.draw(data4, options4);
      }