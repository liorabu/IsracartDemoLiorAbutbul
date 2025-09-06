import STRINGS from '../../language';

export const data:{label: string, value: keyof FetchBooksResponseProps}[] = [
    {
        label: STRINGS.BOOK_NAME,
        value:'title'
    },
     {
        label: STRINGS.RELEASE_DATE,
        value:'releaseDate'
    },
     {
        label: STRINGS.DESCRIPTION,
        value:'description'
    },
     {
        label: STRINGS.PAGES_NUMBER,
        value:'pages'
    }
]

