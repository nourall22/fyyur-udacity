window.parseISOString = function parseISOString(s) {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
};

deleteVenue = id => {
  return fetch(`/venues/${id}`, {
    method: 'DELETE'
  }).then(() => window.location = '/venues')
    .catch(e => console.log('error to delete the venue', e))
}
