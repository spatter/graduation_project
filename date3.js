      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data3 = new google.visualization.DataTable();
        data3.addColumn('string', '年度');
        data3.addColumn('number', '台数');
        data3.addRows([
          ['2015年度', 1307629],
          ['2014年度', 1354706],
          ['2013年度', 1505788],
          ['2012年度', 1522536],
          ['2011年度', 1420820]
        ]);
        var options3 = {'title':'小型車販売台数',
                       'width':400,
                       'height':300};
        var chart3 = new google.visualization.BarChart(document.getElementById('chart3'));
        chart3.draw(data3, options3);
      }