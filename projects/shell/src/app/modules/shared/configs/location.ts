export function getHostName() {
    let allowURLDemo = [''];
    return location.hostname === 'localhost' || allowURLDemo.includes(location.hostname) ? '' : location.hostname;
}