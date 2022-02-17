import type { NextPage } from 'next';
import React, { useState } from 'react';
import { Graph } from '../components/Graph';
import { WindGraph } from '../components/Graph/windGraph';
import { Header } from '../components/Header';
import { Modal } from '../components/Modal';
import { Resizable } from '../components/Resizable';
import styles from '../styles/Home.module.css';

import dynamic from 'next/dynamic'

const DraggableAndResizable = dynamic(() => import('../components/DraggableAndResizable'), {
    ssr: false
});


const Home: NextPage = () => {
  // const [graphWidth, setGraphWidth] = useState(500);
  const [windGraphWidth, setWindGraphWidth] = useState(500);
  const [windGraphDraggableWidth, setWindGraphDraggableWidth] = useState(450);
  const [graphDraggableWidth, setGraphDraggableWidth] = useState(450);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <Header />

      <main>
        <div className={styles.graphContainer}>
            <div className={styles.graph}>
              <WindGraph width={500} />

              <div className={styles.button}>
                <button onClick={() => setIsOpen(true)}>
                  Expand
                </button>
              </div>
            </div>
            
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed orci nulla, mattis in nisi at, commodo mollis ante. Integer in ex dolor. 
                Curabitur in dui mi. Phasellus non velit augue. Vestibulum sed eleifend est. 
                Maecenas in urna sed ipsum venenatis elementum feugiat et nisl. 
                Proin finibus lorem quis lacus consequat, vel mollis arcu vestibulum. 
                Pellentesque malesuada lacus sit amet ipsum mattis mollis.
                Donec auctor molestie enim ut maximus. Nullam ut quam libero. 
                Nullam porttitor lectus mollis, laoreet metus at, cursus nisl. 
                Vestibulum eget eros mollis, egestas urna nec, aliquet nibh. 
                Cras non tellus sed ligula lobortis hendrerit.
                Sed viverra elit rutrum nulla convallis, vitae commodo erat lobortis.
                Duis non elit vitae nisl accumsan venenatis vitae eget dui. 
                Nullam nisi erat, vestibulum a viverra eget, mollis eget erat.
                Sed vel nibh et turpis rhoncus vehicula finibus vitae ante.
                Vestibulum condimentum felis erat, varius vestibulum magna eleifend sed.
                Fusce faucibus metus vitae dapibus malesuada.
                Maecenas id arcu iaculis, efficitur dui et, facilisis risus.
                Etiam feugiat sagittis augue vel blandit. Suspendisse vel cursus est. 
              </p>
            </div>
        </div>

        <div className={styles.dragContainer}>
          <div>
            <DraggableAndResizable id="wind-graph-draggable" 
              setGraphWidth={setWindGraphDraggableWidth} 
              width={windGraphDraggableWidth}
            >
              <WindGraph width={windGraphDraggableWidth} />
            </DraggableAndResizable>

            <DraggableAndResizable id="graph-draggable" 
              setGraphWidth={setGraphDraggableWidth} 
              width={graphDraggableWidth}
            >
              <Graph width={graphDraggableWidth} />
            </DraggableAndResizable>
          </div>
        </div>
      </main>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <Resizable id="wind-graph" setGraphWidth={setWindGraphWidth} width={windGraphWidth}>
          <WindGraph width={windGraphWidth} />
        </Resizable>
      </Modal>
    </div>
  )
}

export default Home
