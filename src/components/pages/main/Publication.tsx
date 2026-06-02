import React from 'react';
import { Section } from '../../Section';
import './Publication.scss';

const papers = [
    {
        year: 2024,
        authors: "Yiwen Wang, Mengying Li, Young-Ho Kim, Bongshin Lee, Margaret Danilovich, Amanda Lazar, David E. Conroy, Hernisa Kacorri, and Eun Kyoung Choe",
        title: "Redefining Activity Tracking Through Older Adults' Reflections on Meaningful Activities",
        description: "ACM CHI 2024, Pages 1–15.",
        doi: "https://doi.org/10.1145/3613904.3642170",
    },

    {
        year: 2022,
        authors: "Young-Ho Kim, Diana Chou, Bongshin Lee, Margaret Danilovich, Amanda Lazar, David E. Conroy, Hernisa Kacorri, and Eun Kyoung Choe",
        title: "MyMove: Facilitating Older Adults to Collect In-Situ Activity Labels on a Smartwatch with Speech",
        description: "ACM CHI 2022, Article 416, Pages 1–21.",
        doi: "https://doi.org/10.1145/3491102.3517457",
        pdf: "https://mymove-collective.github.io/mymove-chi22-preprint.pdf",
        link: {title: "Details", url:"/chi2022"}
    },
    
    {
        year: 2021,
        authors: "Sabahat Fatima",
        title: "Activity Recognition in Older Adults with Training Data from Younger Adults: Preliminary Results on In Vivo Smartwatch Sensor Data",
        description: "ACM ASSETS 2021 Student Research Competition. 26:1–26:8",
        doi: "https://doi.org/10.1145/3441852.3476475",
    }
]

export const Publication = () => {
    const [filterYear, setFilterYear] = React.useState<number | 'all'>('all');
    const years = Array.from(new Set(papers.map(p => p.year))).sort((a, b) => b - a);
    const filteredPapers = filterYear === 'all'
        ? papers
        : papers.filter(p => p.year === filterYear);

    return <Section title="Publication" hashId="publication">
        <div className="publication-filter">
            <label htmlFor="publication-year-select">Filter by year:</label>
            <select
                id="publication-year-select"
                value={filterYear}
                onChange={e => setFilterYear(e.target.value === 'all' ? 'all' : Number(e.target.value))}
            >
                <option value="all">All</option>
                {years.map(year => (
                    <option key={year} value={year}>{year}</option>
                ))}
            </select>
        </div>
        {
            filteredPapers.length > 0
                ? filteredPapers.map(p => (
                    <Paper
                        key={`${p.title}-${p.year}`}
                        {...p}
                    />
                ))
                : <div className="publication-empty">No publications found for {filterYear}.</div>
        }
    </Section>
}


const Paper = (props: {
    year: number,
    authors: string,
    title: string,
    description: string,
    doi?: string | null,
    pdf?: string | null,
    link?: {title: string, url: string} | null
}) => {
    return <div className="publication-info paragraph">
        <div className="authors">{props.authors}</div>
        <div className="title"><b>{props.title}</b></div>
        <div>
            {props.description}
            {
                props.doi != null ? <a className="doi" href={props.doi} target="_blank">DOI</a> : null
            }
            {
                props.pdf != null ? <a className="pdf" href={props.pdf} target="_blank">PDF</a> : null
            }
            {
                props.link != null ? <a className="doi" href={props.link.url} target="_blank">{props.link.title}</a> : null
            }
        </div>

    </div>
}