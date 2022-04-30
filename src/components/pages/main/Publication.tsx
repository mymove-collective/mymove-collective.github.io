import React from 'react';
import { Section } from '../../Section';
import './Publication.scss';

const papers = [
    {
        authors: "Young-Ho Kim, Diana Chou, Bongshin Lee, Margaret Danilovich, Amanda Lazar, David E. Conroy, Hernisa Kacorri, and Eun Kyoung Choe",
        title: "MyMove: Facilitating Older Adults to Collect In-Situ Activity Labels on a Smartwatch with Speech",
        description: "ACM CHI 2022, Article 416, Pages 1–21.",
        doi: "https://doi.org/10.1145/3491102.3517457",
        pdf: "https://mymove-collective.github.io/mymove-chi22-preprint.pdf",
        link: {title: "Details", url:"/chi2022"}
    },
    
    {
        authors: "Sabahat Fatima",
        title: "Activity Recognition in Older Adults with Training Data from Younger Adults: Preliminary Results on In Vivo Smartwatch Sensor Data",
        description: "ACM ASSETS 2021 Student Research Competition. 26:1–26:8",
        doi: "https://doi.org/10.1145/3441852.3476475",
    }
]

export const Publication = () => {
    return <Section title="Publication" hashId="publication">
        {
            papers.map(p => {
                return <Paper
                    key={p.title}
                    {...p}
                />
            })
        }
    </Section>
}


const Paper = (props: {
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