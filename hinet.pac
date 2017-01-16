function FindProxyForURL(url, host) {
  var proxyDomains = ['mail.google.com', 'gmail.com', 'docs.google.com', 'dropbox.com', 'drive.google.com', 'slideshare.net', 'www.evernote.com', 'blog.xuite.net'];
  host = host.toLowerCase();
  for(var i = 0; i < proxyDomains.length; ++i) {
    if(dnsDomainIs(host, proxyDomains[i]))
      return "PROXY proxy.hinet.net:80";
  }
  return "DIRECT";
}
