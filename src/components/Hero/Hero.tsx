import React, { MouseEvent, useMemo } from 'react';
import { DisplayType } from '../../store/store';
import classnames from 'classnames'
import { Domain } from "../../store/store";
import Card from '../Card/Card';
import './Hero.scss'

interface HeroProps {
    displayType: string
    onReadMore: (e: MouseEvent) => void
    onPin: (e: MouseEvent) => void
    onMore: (e: MouseEvent) => void
    domain: Domain,
    header: string
    body: string;
}

const Hero: React.FC<HeroProps> = ({ displayType, onReadMore, onPin, onMore, domain, header, body }) => {
    
    const isHeroLeft = useMemo(() => displayType === DisplayType.HeroLeft, [displayType])
    const isHeroRight = useMemo(() => displayType === DisplayType.HeroRight, [displayType])

    const classes = classnames('hero', {
        'heroLeft': isHeroLeft,
        'heroRight': isHeroRight
    })

    return (
        <div className={classes}>
            <div className="card-container">
                <Card 
                    onReadMore={onReadMore}
                    onPin={onPin}
                    onMore={onMore}
                    domain={domain}
                    bordersLeft={isHeroLeft}
                    bordersRight={isHeroRight}
                    header={header}
                    body={body}
                />
            </div>
        </div>
    )

}

export default Hero