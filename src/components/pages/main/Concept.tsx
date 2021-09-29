import React from 'react'
import { Section } from '../../Section'
import './Concept.scss'

export const Concept = () => {
    return <Section title="Why We Do This Research" hashId="motivation">
        <div className="content-with-left-image">
            <div className="left-column">
                <span>Placeholder for image</span>
            </div>
            <div className="right-column">
                <h2>Existing activity recognition technologies are not well-suited for older adults.</h2>
                <p>
                    Current activity tracking technologies are less accurate when used by older adults (e.g., counting steps in slower gait speed) and rarely support recognizing types of activities they engage in and care about (e.g., gardening, vacuuming).
                </p>
            </div>
        </div>

        <div className="content-with-left-image">
            <div className="left-column">
                <span>Placeholder for image</span>
            </div>
            <div className="right-column">
                <h2>Model personalization is essential to better match their individualized lifestyles and patterns, but it requires each user's activity data.</h2>
                <p>
                    Since older adults' physiological characterisics and frequent activities are highly individualized, it is necessary to fine-tune the recognition models with each user's own activity data. However, providing labeled data takes time and effort especially for older adult users. 
                </p>
            </div>
        </div>

        <div className="content-with-left-image">
            <div className="left-column">
                <span>Placeholder for image</span>
            </div>
            <div className="right-column">
                <h2>Teachable interfaces + self-monitoring = Personalized activity trackers that are accessible by older adults!</h2>

                <p>
                    MyMove combines <i>teachable interfaces</i> with self-monitoring components to support low-burden and sustainable activity tracking. Under this overarching goal, we are conducting a series of research that investigates the feasibility of interaction and technology, generates benchmark dataset, and proposes computing systems.
                </p>
            </div>
        </div>
    </Section>
}