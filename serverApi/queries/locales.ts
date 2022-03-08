enum Locale {
    CS = 'CS',
    EN = 'EN'
}

export const locales = (_parent: any, _args: any) => {
    return Object.values(Locale);
}