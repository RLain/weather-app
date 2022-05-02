const setIcons = (icon) => {
    switch (icon) {
      case '01d':
        return "<i class='wi wi-day-sunny' style='font-size: 5em'></i>";
      case '01n':
        return "<i class='wi wi-night-clear' style='font-size: 5em'></i>";
      case '02d':
        return "<i class='wi wi-day-cloudy' style='font-size: 5em'></i>";
      case '02n':
        return "<i class='wi wi-night-alt-cloudy' style='font-size: 5em'></i>";
      case '03n || 03d || 04d || 04n':
        return "<i class='wi wi-cloud' style='font-size: 5em'></i>";
      case '10d || 10n || 09d || 09n':
        return "<i class='wi wi-rain' style='font-size: 5em'></i>";
      case '11d || 11n':
        return "<i class='wi wi-sleet' style='font-size: 5em'></i>";
      case '13d || 13n':
        return "<i class='wi wi-snow' style='font-size: 5em'></i>";
      case '50d || 50n':
        return "<i class='wi wi-cloudy-gusts' style='font-size: 5em'></i>";
      case '50d || 50n':
        return "<i class='wi wi-fog' style='font-size: 5em'></i>";
    }
  return icon;
  }