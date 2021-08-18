import React from 'react'
import Style from './style'
import Buble from '../../assets/images/buble.png'
import People from '../../assets/images/people.png'
import Note from '../../assets/images/note.png'
import Circle from '../../assets/images/circle.png'
const index = () => {
    return (
        <Style className="px-medium">
            <img src={People} alt="" />
            <div className="contain">
                <img src={Note} alt="" />
                <p>
                    Rump spare ribs tail{' '}
                    <span className="text-blur">
                        pastrami ham hock turducken
                    </span>{' '}
                    fatback salami. Ham hock turducken fatback salami
                </p>
                <p>Avy Deluxer</p>
                <div className="art">
                    <img src={Buble} alt="" />
                    <img src={Circle} alt="" />
                </div>
            </div>
        </Style>
    )
}

export default index
