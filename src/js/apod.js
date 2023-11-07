export default class APOD {
  static fetchAstronomyPicture() {
    return new Promise(function (resolve, reject) {
      let apd = new XMLHttpRequest();
      const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}`;
      apd.onload = function () {
        if (apd.readyState === 4) {
          if (apd.status === 200) {
            const response = JSON.parse(apd.responseText);
            resolve(response);
          } else {
            reject('Failed to fetch Astronomy Picture of the Day data.');
          }
        }
      };
      apd.open("GET", apiUrl, true);
      apd.send();
    });
  }
}