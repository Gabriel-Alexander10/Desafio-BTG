/* eslint-disable no-magic-numbers */
import React from 'react';
import PropTypes from 'prop-types';
import { Header } from './Header';
import './Home.css';

const Home = ({
    children,
    id,
    setProps,
    isOpen
}) => {
  // const [graphWidth, setGraphWidth] = useState(500);

  console.log("home", isOpen)

  return (
    <div className="container" id={id}>
      <Header />

      <main>
        <div className="graphContainer">
            <div className="graph">
              {children}

              <div className="button">
                <button onClick={() => setProps({ isOpen: true })}>
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
      </main>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />
    </div>
  )
}

Home.propTypes = {
    id: PropTypes.string,
    children:  PropTypes.node,
    setProps:  PropTypes.func,
    isOpen: PropTypes.bool,
}

export default Home;