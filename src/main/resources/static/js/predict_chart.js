let ticker = document.getElementById
async function fetchData() {
	    // fetch 함수를 사용하여 지정된 URL로 POST 요청을 보냅니다.
	    const response = await fetch('http://127.0.0.1:8000/', {
	        method: 'GET',
	        headers: {
	            'Content-Type': 'application/json',
	        },
	        // 'data'를 JSON 문자열로 변환하여 요청 본문에 포함시킵니다.
	        body: JSON.stringify(data),
	    });
	
	    // 응답을 기다리고 JSON으로 파싱합니다.
	    const result = await response.json();
	    return result;
}


// Create the echarts instance
/*var myChart = echarts.init(document.getElementById('main'));

// Draw the chart
myChart.setOption({
  title: {
    text: 'ECharts Getting Started Example'
  },
  tooltip: {},
  xAxis: {
    data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
  },
  yAxis: {},
  series: [
    {
      name: 'sales',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
});*/