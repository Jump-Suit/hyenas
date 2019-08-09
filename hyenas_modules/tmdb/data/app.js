function calcHMAC(text) {
  var hmacObj = new jsSHA('SHA-1', 'TEXT');
  hmacObj.setHMACKey('F5DE66D2680E255B2DF79E74F890EBF349262F618BCAE2A9ACCDEE5156CE8DF2CDF2D48C71173CDC2594465B87405D197CF1AED3B7E9671EEB56CA6753C2E6B0', 'HEX');
  hmacObj.update(text);
  return hmacObj.getHMAC('HEX').toUpperCase();
}

function resetReport() {
  lastTitleID = '';
  $('#icon0-container').css('display', 'none');
  $('#icon0').attr('src', '');
  $('#title').text('');
  $('#report').text('');
}

function formatRepEntry(value, text) {
  if (!['', undefined].includes(value)) {
    return '\n'+(text+':').padEnd(13)+value
  } else { return ''; }
}

function mod(n, m) {
  return ((n % m) + m) % m;
}

function getTitle(instance) {
  if (instance) {
    var start = instance.selectionStart;
    var end = instance.selectionEnd;
    instance.value = instance.value.toUpperCase();
    instance.setSelectionRange(start, end);
  }
  matchPS3 = $('#input-id').val().match(/^NP[AEHJKUIX][A-Z][0-9]{5}(_00)?$|^[BMX][CLR][AETHJKU][BCDMSTVXZ][0-9]{5}(_00)?$/);
  matchPSV = $('#input-id').val().match(/^PCS[A-I][0-9]{5}(_00)?$|^V[CL][AJ]S[0-9]{5}(_00)?$/);
  if ($('#input-id').val() == '') {
    resetReport();
    $('#status').text('');
    return;
  } else if (matchPS3) {
    var id = matchPS3[0].replace('_00', '') + '_00';
    var hash = calcHMAC(id);
    var xmlurl = `http://tmdb.np.dl.playstation.net/tmdb/${id}_${hash}/${id}.xml`;
  } else if (matchPSV) {
    var id = matchPSV[0].replace('_00', '') + '_00';
    var hash = calcHMAC(id);
    var xmlurl = `http://tmdb.np.dl.playstation.net/psp2-tmdb/${id}_${hash}/${id}.xml`;
  } else {
    $('.button-count').hide();
    $('#input-id').css('width', '100%');
    resetReport();
    $('#status').text(`Invalid TitleID`);
    return;
  }

  $('.button-count').show();
  $('#input-id').css('width', '84%');
  if (id != lastTitleID) {
    resetReport();
    $('#status').text('Loading...');
    $(function() {
      $.ajax({
        type: "get",
        url: xmlurl,
        dataType: "xml",
        success: function(data) {
          $('#status').text('');
          $('#icon0-container').css('display', 'flex');
          $('#icon0').attr('src', '');
          $('#icon0').attr('src', $(data).find('icon').first().text() || '/tmdb/unknownTitleID');
          $('#title').text($(data).find('name').first().text());
          var report = '';
          report += `Hash:        <a href="${xmlurl}" target="_blank">${hash}</a>`;
          report += formatRepEntry($(data).find('id').text(), 'TitleID');
          report += formatRepEntry($(data).find('content-id').text(), 'ContentID');
          report += formatRepEntry($(data).find('np-communication-id').text(), 'NPCommsID');
          report += formatRepEntry($(data).find('resolution').text(), 'Resolution');
          report += formatRepEntry($(data).find('sound-format').text(), 'SndFormat');
          report += formatRepEntry($(data).find('console').text(), 'Console');
          report += formatRepEntry($(data).find('media-type').text(), 'MediaType');
          report += formatRepEntry($(data).find('parental-level').text(), 'Parental');
          report += formatRepEntry($(data).find('title-info').attr('rev'), 'Rev');
          $("#report").html(report);
          lastTitleID = id;
        },
        error: function(xhr, status) {
          resetReport();
          $('#status').text(`Title '${id}' not found in TMDB`);
          lastTitleID = id;
        }
      });
    });
  }
}

function buttonCount(n) {
  $('#input-id').val($('#input-id').val().replace(/(\d+)/, function(){return (mod(arguments[1]*1+n, 100000)).toString().padStart(5, '0')}));
  getTitle(null);
}

var lastTitleID = '';

$('#input-id').on('input', function() { getTitle(this); });
$('#button-inc').click(function() { buttonCount(1); });
$('#button-dec').click(function() { buttonCount(-1); });