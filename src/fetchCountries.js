const BASE_URL = 'https://restcountries.com/v3.1';
const END_POINT = `/name/`;

function fetchCountries(name) {
  return fetch(
    `${BASE_URL}${END_POINT}${name}?fields=name,capital,population,flags,languages`
  ).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

export { fetchCountries };