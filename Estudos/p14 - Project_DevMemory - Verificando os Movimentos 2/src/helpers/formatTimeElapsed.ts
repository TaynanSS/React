export const formatTimeElapsed = (seconds: number): string => {
    let minutes = Math.floor(seconds / 60); // Math.floor => ele arredonda. Caso tenha 70 segundos, ele vai arredondar o 1.10 para apenas 1
    seconds -= (minutes * 60);

    let secString = `${seconds < 10 ? '0' + seconds: seconds}`;
    let minString = `${minutes < 10 ? '0' + minutes : minutes}`;

    return `${minString}:${secString}`;
}