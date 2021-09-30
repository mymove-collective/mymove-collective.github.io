import React from 'react';
import { Section } from '../../Section';

export const Acknowledgment = () => {
    return <Section title="Acknowledgment" hashId="acknowledgment">
        <p>
            This project is supported by two collaborative National Science Foundation Awards:
            <ol>
                <li><a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1955568">#1955568 for University of Maryland (PI: Eun Kyoung Choe, Co-PIs: Hernisa Kacorri and Amanda Lazar)</a></li>
                <li><a href="https://www.nsf.gov/awardsearch/showAward?AWD_ID=1955590">#1955590 for the Pennsylvania State University (PI: David E. Conroy)</a></li>
            </ol>
        </p>
        <p>Illustrations on this website were created using free vector images from <a href="https://www.freepik.com/vectors/" target="_blank">Freepik</a> and <a href="https://www.vecteezy.com/free-vector/old-people">Vecteezy</a>. 
        </p>
    </Section>
}