export function toNormalTime (time) {
    if (time) return time.replace('T', ' ').replace('.000Z', '')
}