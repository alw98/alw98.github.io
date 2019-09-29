export function switchTheme(): void {
    if(Theme === 'light') Theme = 'dark';
    else Theme = 'light';
}

let Theme = 'light';

export {Theme};
