function hash () {
  return window.location.hash ? window.location.hash.substr(1, window.location.hash.length - 1) : ''
}

function query () {
  return new URLSearchParams(window.location.search)
}
