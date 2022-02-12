import React, { useEffect } from 'react';
import interact  from 'interactjs';

import styles from "./resize.module.css";

interface ResizableProps {
    id: string;
    setGraphWidth: (width: number) => void;
    width: number;
}

export const Resizable: React.FC<ResizableProps> = ({
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
                    move: function (event: any) {
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
                            containerWidth * 0.5
                        const height = 
                            containerHeight >= 500 ?
                            500 :
                            containerHeight;

                        Object.assign(event.target.style, {
                            width: `${containerWidth}px`,
                            height: `${height}px`,
                            transform: `translate(${x}px, ${y}px)`
                        })

                        if (containerWidth >= 500) {
                            setGraphWidth(containerWidth - 40);
                            Object.assign(event.target.dataset, { x, y })
                        }
                    }
                }
            })
    }, [id, setGraphWidth, width]);


    return (
        <div id={id} className={styles.resizable}>
            {children}
        </div>
    )
}