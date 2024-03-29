
var saveByteArray = function (data, name) {
    console.log(a);
    var a = document.createElement("a");
    document.body.appendChild(a);
    a.style = "display: none";
    var blob = new Blob(data, { type: "application/pdf" }),
        url = window.URL.createObjectURL(blob);
    a.href = url;
    a.download = name;
    a.click();
    window.URL.revokeObjectURL(url);
};

window.addEventListener('message', function (event1) {
    var event = JSON.parse(event1.data);
    if (event.event_code == 'custom-event' && event.data.code == "pdf") {
        var data = event.data.data;
        var decoded = atob(data.body);
        var name = data.doc_name; var saveByteArray = function (data, name) {
            console.log(a);
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            var blob = new Blob(data, { type: "application/pdf" }),
                url = window.URL.createObjectURL(blob);
            a.href = url;
            a.download = name;
            a.click();
            window.URL.revokeObjectURL(url);
        };

        var byteNumbers = Array(decoded.length);
        for (i = 0; i < decoded.length; i++) {
            byteNumbers[i] = decoded.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        a = event.data.data;
        saveByteArray([byteArray], name + ".pdf");
        document.getElementById('ymIframe').contentWindow.postMessage(JSON.stringify({
            event_code: 'ym-client-event',
            data: JSON.stringify({
                event: {
                    code: "document_downloaded"
                }
            })
        }), '*');
    }
    else if (event.event_code == 'custom-event' && event.data.code == 'load_pdf') {
        var data = event.data.data;
        var title = data.title;
        var url = data.url;
        window.open(url, '_blank', 'location=yes');
    }
}, false);
