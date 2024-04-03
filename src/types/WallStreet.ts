export default interface WallStreetInterface {
    status:       string;
    totalResults: number;
    articles:     Article[];
}

export interface Article {
    source:      Source;
    author:      string;
    title:       string;
    description: null | string;
    url:         string;
    urlToImage:  null | string;
    publishedAt: Date;
    content:     string;
}

interface Source {
    id:   ID;
    name: Name;
}

enum ID {
    TheWallStreetJournal = "the-wall-street-journal",
}

enum Name {
    TheWallStreetJournal = "The Wall Street Journal",
}
