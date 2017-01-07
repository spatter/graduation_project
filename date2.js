      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data2 = new google.visualization.DataTable();
        data2.addColumn('string', '年度');
        data2.addColumn('number', '台数');
        data2.addRows([
          ['2015年度', 1379831],
          ['2014年度', 1337957],
          ['2013年度', 1509877],
          ['2012年度', 1345357],
          ['2011年度', 1311793]
        ]);
        var options2 = {'title':'新車販売台数',
                       'width':400,
                       'height':300};
        var chart2 = new google.visualization.BarChart(document.getElementById('chart2'));
        chart2.draw(data2, options2);
      }