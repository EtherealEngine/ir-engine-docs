async function handler(event) {
    const request = event.request;
    const uri = request.uri;
    const rewriteRegex = /^[^.]+$|\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json|webp)$)([^.]+$)/

    if (rewriteRegex.test(uri)) {
      request.uri = '/index.html';
    }

    return request;
}
