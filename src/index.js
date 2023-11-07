import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './css/styles.css';
import './css/main.css'
import APOD from './js/apod.js';
import Rover from './js/rover.js';
// import Mars from './js/martianweather.js';
import MarsLogo from './assets/img/logo.jpeg';

$("link").attr("href", MarsLogo);
$(document).ready(function () {
  const imagesPerPage = 6;
  let loadedImages = 0;

  function displayImages(images) {
    const gallery = $("#rover-gallery");
    images.photos.slice(loadedImages, loadedImages + imagesPerPage).forEach((photo) => {
      const img = $("<img>").attr("src", photo.img_src);
      gallery.append(img);
    });
    loadedImages += imagesPerPage;
  }

  function fetchMarsRoverImages() {
    Rover.getMarsRover()
      .then((data) => {
        const images = JSON.parse(data);
        displayImages(images);
      })
      .catch((error) => {
        console.error("Error fetching Mars Rover images:", error);
      });
  }
  fetchMarsRoverImages();

  $("#load-more").on("click", function () {
    fetchMarsRoverImages();
  });

  function updateAstronomyPictureOfTheDay() {
    APOD.fetchAstronomyPicture()
      .then(function (response) {
        if (response.media_type === "image") {
          $("#apod-image img").attr("src", response.url);
        } else if (response.media_type === "video") {
          const videoIframe = $("<iframe>")
            .attr("src", response.url)
            .attr("width", "100%")
            .attr("height", "100%");
          $("#apod-image").empty().append(videoIframe);
        }
        $("#apod-description").text(response.explanation);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  updateAstronomyPictureOfTheDay();
  
  const currentPath = window.location.pathname;
  $('.nav-link').each(function() {
    if ($(this).attr('href') === currentPath) {
      $(this).addClass('active');
    }
  });
});
