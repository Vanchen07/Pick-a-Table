import React from 'react';

class MainHeader extends React.Component {

    smoothScroll(target) {
        let scrollContainer = target;
        do { //find scroll container
          scrollContainer = scrollContainer.parentNode;
          if (!scrollContainer) return;
          scrollContainer.scrollTop += 1;
        } while (scrollContainer.scrollTop === 0);
    
        let targetY = 0;
        do { //find the top of target relatively to the container
          if (target === scrollContainer) break;
          targetY += target.offsetTop;
        } while (target === target.offsetParent);
    
        const scroll = (c, a, b, i) => {
          i++; if (i > 30) return;
          c.scrollTop = a + (b - a) / 30 * i;
          setTimeout(function () { scroll(c, a, b, i); }, 20);
        };
        // start scrolling
        scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
      }
    
    render() {
        return (
            <div className="style2" >
               <ul className="main-header">
                   <li className="main-header-list-overview">
                        <a className="overview-link" href="#">
                            <span>Overview</span>
                        </a>
                   </li>
                   <li className="main-header-list-reservations">
                        <a className="overview-link-description" href="#" onClick={this.smoothScroll('Reservations')}>
                            <span>Reservations</span>
                        </a>
                   </li>
                   <li className="main-header-list-description">
                        <a className="overview-link-description" href="#overview">
                            <span>Description</span>
                        </a>
                   </li>
                   <li className="main-header-list-description">
                        <a className="overview-link-description" href="#overview">
                            <span>Details</span>
                        </a>
                   </li>
            
               </ul>
            </div>
        )
    }
}

export default MainHeader;