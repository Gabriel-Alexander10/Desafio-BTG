import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import interact  from 'interactjs';

import "./styles.css";

export const Resizable  = ({
    children,
    id,
    setGraphWidth,
    width
}) => {

    useEffect(() => {
        interact(`#${id}`)
            .resizable({
                edges: { top: true, left: true, bottom: true, right: true },
                listeners: {
                    move: function (event) {
                        let { x, y } = event.target.dataset

                        x = (parseFloat(x) || 0) + event.deltaRect.left
                        y = (parseFloat(y) || 0) + event.deltaRect.top

                        const containerWidth = 
                            width >= event.rect.width ? 
                            Math.ceil(event.rect.width / 100) * 100
                            : (Math.ceil(event.rect.width / 100) - 1)* 100;

                        const containerHeight = 
                            event.rect.height >= containerWidth * 0.5 ?
                            event.rect.height :
                            containerWidth * 0.5;

                        const maxHeight = 550;
                        const minWidth = 500;
                        const padding = 40;

                        const height = 
                            containerHeight >= maxHeight ?
                            maxHeight :
                            containerHeight;

                        Object.assign(event.target.style, {
                            width: `${containerWidth}px`,
                            height: `${height}px`,
                            transform: `translate(${x}px, ${y}px)`
                        })

                        if (containerWidth >= minWidth) {
                            setGraphWidth({
                                width: containerWidth - padding
                            });
                            Object.assign(event.target.dataset, { x, y })
                        }
                    }
                }
            })
    }, [id, setGraphWidth, width]);


    return (
        <div id={id} className="resizable">
            {children}
        </div>
    )
}

Resizable.propTypes = {
    id: PropTypes.string,
    width: PropTypes.number,
    setGraphWidth: PropTypes.func,
    children: PropTypes.node,
};