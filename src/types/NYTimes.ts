export default interface NYTimesInterface {
    status:      string;
    copyright:   string;
    num_results: number;
    results:     Result[];
}

export interface Result {
    uri:            string;
    url:            string;
    id:             number;
    asset_id:       number;
    source:         Source;
    published_date: Date;
    updated:        Date;
    section:        string;
    subsection:     Subsection;
    nytdsection:    string;
    adx_keywords:   string;
    column:         null;
    byline:         string;
    type:           ResultType;
    title:          string;
    abstract:       string;
    des_facet:      string[];
    org_facet:      string[];
    per_facet:      string[];
    geo_facet:      string[];
    media:          Media[];
    eta_id:         number;
}

export interface Media {
    type:                     MediaType;
    subtype:                  Subtype;
    caption:                  string;
    copyright:                string;
    approved_for_syndication: number;
    "media-metadata":         MediaMetadatum[];
}

export interface MediaMetadatum {
    url:    string;
    format: Format;
    height: number;
    width:  number;
}

export enum Format {
    MediumThreeByTwo210 = "mediumThreeByTwo210",
    MediumThreeByTwo440 = "mediumThreeByTwo440",
    StandardThumbnail = "Standard Thumbnail",
}

export enum Subtype {
    Empty = "",
    Photo = "photo",
}

export enum MediaType {
    Image = "image",
}

export enum Source {
    NewYorkTimes = "New York Times",
}

export enum Subsection {
    ArtDesign = "Art & Design",
    Empty = "",
    Europe = "Europe",
}

export enum ResultType {
    Article = "Article",
    Interactive = "Interactive",
}
