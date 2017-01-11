      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data1 = new google.visualization.DataTable();
        data1.addColumn('string', '年度');
        data1.addColumn('number', '台数');
        data1.addRows([
          ['2015年度', 4937638],
          ['2014年度', 5296993],
          ['2013年度', 5692019],
          ['2012年度', 5210232],
          ['2011年度', 4753232]
        ]);
        var options1 = {'title':'新車販売台数',
                       'width':400,
                       'height':300};
        var chart1 = new google.visualization.BarChart(document.getElementById('chart1'));
        chart1.draw(data1, options1);
      }