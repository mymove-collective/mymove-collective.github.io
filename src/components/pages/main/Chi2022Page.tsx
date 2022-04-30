import React from 'react';
import { Section } from '../../Section';
import { amanda, blee, david, diana, echoe, hernisa, margaret, Team, yhkim } from './Team';
import './Chi2022Page.scss';

export const Chi2022Page = () => {
    return <>
        <div className="container">
            <div className='title'>MyMove: Facilitating Older Adults to Collect In-Situ Activity Labels on a Smartwatch with Speech</div>

            <div className="aspect-ratio">
                <iframe width="100%" height="480" src="https://www.youtube.com/embed/2I8vvP4hdfs"
                    frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div>
        <Section title="Abstract" hashId="">
            <p>Self-tracking using commodity wearables such as smartwatches can help older adults reduce sedentary behaviors and engage in physical activity. However, activity recognition applications that are typically deployed in these wearables tend to be trained on datasets that best represent younger adults. We explore how our activity recognition model, a hybrid of long short-term memory and convolutional layers, pre-trained on smartwatch data from younger adults, performs on older adult data. We report results on week-long data from two older adults collected in a preliminary study in the wild with ground-truth annotations based on activPAL, a thigh-worn sensor. We find that activity recognition for older adults remains challenging even when comparing our model’s performance to state of the art deployed models such as the Google Activity Recognition API. More so, we show that models trained on younger adults tend to perform worse on older adults.
            </p>
            <a href="https://mymove-collective.github.io/mymove-chi22-preprint.pdf" target="_blank" className="pdf">PDF</a>
            <a href="https://doi.org/10.1145/3491102.3517457" target="_blank" className="doi">ACM</a>
            
        </Section>

        <Section title="15-Min Presentation (CHI 2022)" hashId="video">
            <div className="aspect-ratio">
                <iframe width="100%" height="480" src="https://www.youtube.com/embed/9VnfcXIaQ8M"
                    frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </Section>

        <Section title="Supplementary Material" hashId="supplementary">
            <table className="supplementary-material">
                <tr>
                    <th>A <b>presentation slide</b> used in the introductory session</th>
                    <td><a href="https://mymove-collective.github.io/supplementary/chi22/presentation-introductory.pdf" target="_blank">Download</a></td>
                </tr>
                <tr>
                    <th>A <b>presentation slide</b> used in the tutorial session</th>
                    <td><a href="https://mymove-collective.github.io/supplementary/chi22/presentation-tutorial.pdf" target="_blank">Download</a></td>
                </tr>
            </table>
        </Section>
        <Team title="Authors" hideRole={true} team = {[yhkim, diana, blee, margaret, amanda, david, hernisa, echoe]} />
    </>
}