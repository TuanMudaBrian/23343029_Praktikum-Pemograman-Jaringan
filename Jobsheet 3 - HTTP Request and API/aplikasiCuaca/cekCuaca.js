const request = require("postman-request");
const urlCuaca = `http://api.weatherstack.com/current?access_key=e436890c86e6b5edaba2e3375b724915&query=-0.8970925271039868,%20100.35069537156373`;

request({ url: urlCuaca }, (err, res) => {
  const { current } = JSON.parse(res.body);
  console.log(`Cuaca saat ini: ${current.weather_descriptions[0]}`);
  console.log(
    `Saat ini suhu diluar mencapai ${current.temperature} derajat celcius. Kemungkinan terjadinya hujan adalah ${current.precip} %`
  );
});
