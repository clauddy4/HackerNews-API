export function toNormalTime (time) {
    if (time) return time.replace('T', ' ').replace('.000Z', '')
}

export function host (url) {
    const host = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '');
    const parts = host.split('.').slice(-3);
    if(parts[0] === 'www') parts.shift();
    return parts.join('.');
}