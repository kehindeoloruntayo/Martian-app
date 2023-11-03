export default class Mars {
  static fetchMartianWeather(successCallback, errorCallback) {
    let request = new XMLHttpRequest();
    const url = `https://api.nasa.gov/insight_weather/?api_key=${process.env.API_KEY}&feedtype=json&ver=1.0`;

    request.onload = function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          const response = JSON.parse(this.responseText);
          successCallback(response);
        } else {
          errorCallback('Failed to fetch Martian weather data.');
        }
      }
    };

    request.open("GET", url, true);
    request.send();
  }
}