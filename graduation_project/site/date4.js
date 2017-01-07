      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data4 = new google.visualization.DataTable();
        data4.addColumn('string', '年度');
        data4.addColumn('number', '台数');
        data4.addRows([
          ['2015年度', 1427889],
          ['2014年度', 1760733],
          ['2013年度', 1820947],
          ['2012年度', 1571179],
          ['2011年度', 1277360]
        ]);
        var options4 = {'title':'新車販売台数',
                       'width':400,
                       'height':300};
        var chart4 = new google.visualization.BarChart(document.getElementById('chart1'));
        chart4.draw(data4, options4);
      }