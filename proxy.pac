function FindProxyForURL(url, host) {
    // return "PROXY 138.59.204.48:9289";

    // use proxy for specific domains
    if (shExpMatch(host, "*discord*|*metal-archives*|*https://play.google.com/log*|*youtube*|*hollywoodmetal*|*googlevideo.com*|*moddb*|*enot.io*|*steampay*|*outlinekeys*|*fextralife*|*wahapedia*|*fetchv*|*goonhammer*|*mito3d*|*rutracker*|*bamax.es*|*stlfinder*|*yeggi*|*tclark.io*|*nexus-cdn*|*myminifactory*|*etsy*|*heroesinfinite*|*newrecruit*|*lichess*|*passtechgames*|*cults3d*|*mecabricks*|*goo.gl*|*quora*|*ultimaker*|*facebook*|*instagram*|*fbsbx*|*pornhub*|*redgifs*|*bugsnag*|*teamviewer*|*twitter*|*twimg*|*fbcdn*|*cdninstagram*|*fburl*|*internalfb*"))
        return "PROXY Wfbbx0:ayJzHY@186.179.63.62:9102";
    if (shExpMatch(url, "*goo.gl*|*facebook*|*instagram*|*fbsbx*|*pornhub*|*redgifs*|*bugsnag*|*teamviewer*|*twitter*|*twimg*|*fbcdn*|*cdninstagram*|*fburl*|*internalfb*"))
        return "PROXY Wfbbx0:ayJzHY@186.179.63.62:9102";

    return "DIRECT";
}

