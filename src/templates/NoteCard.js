import React from 'react';

import cls from './NotesTemplate.module.css';

const NoteCard = props => {
        if (props.image) {
                if (props.image.imgSide === 'left') {
                        return (
                                <div className={}>
                                        <div className={}>
                                        <Img className={}
                              fluid={
                                    props.image.imgSrc.childImageSharp
                                          .fluid
                              }
                              alt={props.image.name}
                        />
                                        </div>
                                        <div className={}>
                                                <p>{props.children}</p>
                                        </div>
                                </div>
                        );
                } else if (props.image.imgSide === 'right') {
                        return (
                                <div className={}>
                                        <div className={}>
                                                <p>{props.children}</p>
                                        </div>
                                        <div className={}>
                                        <Img className={}
                                        fluid={
                                              props.image.imgSrc.childImageSharp
                                                    .fluid
                                        }
                                        alt={props.image.name}
                                  />
                                        </div>
                                </div>
                        );
                }
        } else {
                return (
                        <div className={}>
                                <div className={}>
                                        <div>{props.children}</div>
                                </div>
                        </div>
                );
        }
};

export default NoteCard;