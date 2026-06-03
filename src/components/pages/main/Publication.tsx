import React from 'react';
import { Section } from '../../Section';
import './Publication.scss';

const papers = [
    {
        authors: "Yiwen Wang, Hossein Khayami, Bongshin Lee, Amanda Lazar, Hernisa Kacorri, Eun Kyoung Choe",
        title: "Enabling Older Adults to Provide High-quality Activity Labels: Unpacking Accuracy, Precision, and Granularity in Activity Labeling",
        description: "ACM IMWUT 2025, Pages 1–24.",
        doi: "https://doi.org/10.1145/3770649",
        pdf: "https://mymove-collective.github.io/hiquality-imwut25.pdf",
    },

    {
        authors: "Mengying Li, Eun Kyoung Choe",
        title: "Identifying Design Opportunities for Behavior Displacement for Intervening Sedentary Time among Older Adults",
        description: "ACM IMWUT 2025, Pages 1–23.",
        doi: "https://doi.org/10.1145/3749476",
        pdf: "https://mymove-collective.github.io/behavior-imwut25.pdf",
    },


    {
        authors: "Hossein Khayami, Lining Wang, Young-Ho Kim, Bongshin Lee, David E. Conroy, Amanda Lazar, Eun Kyoung Choe, Hernisa Kacorri",
        title: "From Verbal Reports to Personalized Activity Trackers: Understanding the Challenges of Ground Truth Data Collection with Older Adults in the Wild",
        description: "ACM IMWUT 2025, Pages 1–33.",
        doi: "https://doi.org/10.1145/3731749",
        pdf: "https://mymove-collective.github.io/groundtruth-imwut25.pdf",
    },

    {
        authors: "Amelia Short, Norman Makoto Su, Ruipu Hu, Eun Kyoung Choe, Hernisa Kacorri, Margaret Danilovich, David E. Conroy, Shannon Jette, Beth Barnett, Amanda Lazar",
        title: "Tracking and its Potential for Older Adults with Memory Concerns",
        award: { text: "Best Paper Award", icon: "🏆" },
        description: "ACM CHI 2025, Pages 1–15.",
        doi: "https://doi.org/10.1145/3706598.3714093",
        pdf: "https://mymove-collective.github.io/potential-chi25.pdf",
    },

    {
        authors: "Yiwen Wang, Mengying Li, Young-Ho Kim, Bongshin Lee, Margaret Danilovich, Amanda Lazar, David E. Conroy, Hernisa Kacorri, and Eun Kyoung Choe",
        title: "Redefining Activity Tracking Through Older Adults' Reflections on Meaningful Activities",
        description: "ACM CHI 2024, Pages 1–15.",
        doi: "https://doi.org/10.1145/3613904.3642170",
        pdf: "https://mymove-collective.github.io/redefine-chi24.pdf",
    },

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
    link?: {title: string, url: string} | null,
    award?: { text: string, icon?: string } | null
}) => {
    return <div className="publication-info paragraph">
        <div className="authors">{props.authors}</div>
        <div className="title"><b>{props.title}</b>{props.award ? <span className="award" title={props.award.text}>{props.award.icon}</span> : null}</div>
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