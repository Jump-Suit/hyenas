fs = require('fs')
http = require('http')
url = require('url')
require.extensions['.html'] = (mod, fn) ->
  mod.exports = fs.readFileSync(fn, 'binary')
  return
settings = new Map([
  ['ContextPath', "/"]
  ['HTTPPort', 80]
  ['HTTPSPort', 443]
  ['IssuerID', 1]
  ['JumboPacket', false]
  ['ForgedTickets', false]
  ['SettingCookies', true]
  ['Entitlements', true]
  ['RolesInPacks', true]
  ['IgnoreBeforeDates', false]
  ['IgnoreExpireDates', false]
  ['MaxUploadLimit', 286432168]
  ['MaxChunkSize', 69208]
])#upper
settings.forEach (value, key) ->
  if process.env[key.toUpperCase()] != undefined
    settings.set process.env[key.toUpperCase()]
  return
server = http.createServer((request, response) ->
  response.removeHeader 'Transfer-Encoding'
  socket = request.socket
  parsed = url.parse(request.url)
  requestURI = parsed.pathname
  actualHeaders = {}
  request.headers = {}
  response.sendDate = false
  _rhead = request.rawHeaders
  s = 0
  while s < _rhead.length
    h = _rhead[s]
    v = _rhead[s + 1]
    request.headers[h.toLowerCase()] = v
    actualHeaders[h] = v
    s++
    s++
  delete _rhead
  size = 0
  score = 0
  timestamp = 946645199
  cleared = 946645200
  thisFrame = 0
  maxUploadLimit = settings.get 'MaxUploadLimit'
  maxChunkSize = settings.get 'MaxChunkSize'
  anticipated = Number request.headers['content-length']
  anticipated = if anticipated != undefined then anticipated else 0
  unexceeding = anticipated > 0 and anticipated < maxUploadLimit
  recieved = if unexceeding then Buffer.alloc(anticipated) else null
  request.on('data', (chunk) ->
    size = chunk.length
    timestamp = Math.floor(Date.now() / 1000)
    withinRange = size > 0 and size < maxChunkSize
    positive = anticipated - size > -1
    if !unexceeding or !(withinRange and positive)
      size = 0 and request.pause()
    else
      recieved.fill(chunk, score, score + size, 'binary')
      throttled = thisFrame + size > maxChunkSize
      gradeTimerUncleared = timestamp == cleared
      unfinished = anticipated != thisFrame
      score += size
      if throttled and gradeTimerUncleared and unfinished
        request.pause() and setTimeout (->
          request.resume()
          anticipated -= size
          thisFrame += size
          return
        ), 200
      else
        cleared = timestamp
        anticipated -= size
        thisFrame = size
    if !size
      server.resetSocket 413, request, response, socket
    return
  ).on('error', ->
    request.pause()
    server.resetSocket 400, request, response, socket
    return
  ).on 'end', ->
    withinScope = requestURI.startsWith(contextPath)
    correctHTTP = request.httpVersion == '1.1'
    validMethod = request.method.match(/^(GET|POST)$/)
    validHeaders = Boolean(headers(actualHeaders))
    uriTooFuckingLong = parsed.href.length > 128
    if correctHTTP and !uriTooFuckingLong
      if withinScope and validMethod and validHeaders
        etag = String(request.headers['if-modified-since'])
        if etag.trim() == 'Friday, 31 December 1999 23:59:59'
          response.writeHead 304,
            'Clear-Site-Data': 'cookies'
            'Connection': 'Keep-Alive'
            'X-Powered-By': 'Hyenas'
          response.end index
        else
          response.writeHead 200,
            'Clear-Site-Data': 'cookies'
            'Connection': 'Keep-Alive'
            'Content-Length': index.length
            'Content-Type': 'text/html;charset=UTF-8;authoritative'
            'Last-Modified': 'Friday, 31 December 1999 23:59:59'
            'X-Powered-By': 'Hyenas'
          response.end index
      else if !withinScope or !validMethod or !validHeaders
        server.resetSocket 404, request, response, socket
      else
        server.resetSocket 404, request, response, socket
    else
      server.resetSocket 400, request, response, socket
    return
  return
).listen(httpdPort).on('timeout', (socket) ->
  server.resetSocket 408, request, response, null
  return
).on('clientError', (exception, socket) ->
  server.resetSocket 400, request, response, null
  return
).on('checkContinue', (request, response) ->
  server.resetSocket 417, request, response, null
  return
).on('checkExpectation', (request, response) ->
  server.resetSocket 417, request, response, null
  return
).on('connect', (request, socket) ->
  server.resetSocket 405, request, response, null
  return
).on('connection', ->
).on('listening', ->
  console.log "Hyenas server listening on ::1[:#{httpdPort}]"
  return
)
server.resetSocket = (code, request, response, socket) ->
  if socket == null
    socket = request.socket
  response.writeHead code,
    'Connection': 'close'
    'X-Powered-By': 'Hyenas'
  response.end ->
    socket.destroy() and request.destroy()
    return
  return
server.timeout = 300
server.keepAliveTimeout = 30000
server.headersTimeout = 1365
server.maxHeadersCount = 16
