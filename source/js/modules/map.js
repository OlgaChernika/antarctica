export const initMap = () => {
  const MapContainer = document.querySelector('#map');
  if (!MapContainer) {
    return;
  }

  window.ymaps.ready(function () {
    const map = new window.ymaps.Map(document.querySelector('#map'), {
      center: [59.938788, 30.323118],
      controls: [],
      zoom: 16,
    });
    const myPlaceMark = new window.ymaps.Placemark([59.938788, 30.323126], null, {
      iconLayout: 'default#image',
      iconImageHref: 'img/sprite/map-pin.svg',
      iconImageSize: [18, 22],
      iconImageOffset: [-9 / 2, -11 / 2],
    });
    map.geoObjects.add(myPlaceMark);
  });
};
