function domainType(domains: string[]): string[] {
    const list = [];
    for(let i = 0; i < domains.length; i++){
        let domain = domains[i].split('.');
        list.push(helperx(domain[domain.length - 1]));
    }
    return list;
}

function helperx(value) : string{
    if(!value) return undefined;
    switch(value.trim().toLowerCase()){
        case 'org':
            return 'organisation';
        case 'com':
            return 'commercial';
        case 'net':
            return 'network';
        case 'info':
            return 'information';
        default:
            return undefined;
    }
}
console.log(domainType(["en.wiki.org", "codefights.com", "happy.net", "code.info"]));