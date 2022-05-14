interface IMovie {
    displayTitle: string;
    mpaaRating: string;
    criticsPick: number,
    byline: string;
    headline: string;
    summaryShort: string;
    publicationDate: string;
    openingDate: string;
    dateUpdated: string;
    link: {
        type: string;
        url: string;
        suggestedLinkText: string;
    },
    multimedia: {
        type: string;
        src: string;
        height: number,
        width: number,
    },
}

export type { IMovie };
