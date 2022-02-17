import React, { useEffect } from 'react';
import interact  from 'interactjs';

import styles from "./resize.module.css";

interface ResizableProps {
    id: string;
    setGraphWidth: (width: number) => void;
    width: number;
}

export const DraggableAndResizable: React.FC<ResizableProps> = ({
    children,
    id,
    setGraphWidth,
    width
}) => {
    function dragMoveListener (event: any) {
        var target = event.target
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
      
        // translate the element
        target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'
      
        // update the posiion attributes
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
    }
      
    // this function is used later in the resizing and gesture demos
    //@ts-ignore 
    window.dragMoveListener = dragMoveListener


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
            .draggable({
                listeners: { move: dragMoveListener },
                inertia: true,
                modifiers: [
                  interact.modifiers.restrictRect({
                    restriction: 'parent',
                    endOnly: true
                  })
                ]
              })
    }, [id, setGraphWidth, width]);

    return (
        <div id={id} className={styles.resizable}>
            {children}
        </div>
    )
}

export default DraggableAndResizable;