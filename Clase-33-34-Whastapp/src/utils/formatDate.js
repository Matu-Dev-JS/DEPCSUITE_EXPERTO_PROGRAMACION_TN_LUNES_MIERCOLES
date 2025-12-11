export function getDateFormated (date) {
    const day = date.getDate()
    const month = date.getMonth() + 1 /* 0-11 */
    const year = date.getFullYear()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
}
