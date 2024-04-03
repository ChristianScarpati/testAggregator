export default interface GuardianInterface {
    response: Response;
}

export interface Response {
    status:      string;
    userTier:    string;
    total:       number;
    startIndex:  number;
    pageSize:    number;
    currentPage: number;
    pages:       number;
    orderBy:     string;
    results:     Result[];
}

export interface Result {
    id:                 string;
    type:               Type;
    sectionId:          string;
    sectionName:        string;
    webPublicationDate: Date;
    webTitle:           string;
    webUrl:             string;
    apiUrl:             string;
    fields:             Fields;
    isHosted:           boolean;
    pillarId:           PillarID;
    pillarName:         PillarName;
}

export interface Fields {
    thumbnail: string;
}

export enum PillarID {
    PillarLifestyle = "pillar/lifestyle",
    PillarNews = "pillar/news",
    PillarSport = "pillar/sport",
}

export enum PillarName {
    Lifestyle = "Lifestyle",
    News = "News",
    Sport = "Sport",
}

export enum Type {
    Article = "article",
    Liveblog = "liveblog",
}
