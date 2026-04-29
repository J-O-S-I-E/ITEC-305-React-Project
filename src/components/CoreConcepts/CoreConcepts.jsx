import { CORE_CONCEPTS } from '../../data';
import CoreConcept from './CoreConcept';

export default function CoreConcepts(){

    return(
    <section id="core-concepts">
              <h2>Time to get started!</h2>
              <ul>
                {
                  //I have an array of JS Objects
                  //But i need an array of HTML elements
                  CORE_CONCEPTS.map((conceptItem)=>
                      <CoreConcept key={conceptItem.title} {...conceptItem} />)            }
              </ul>
            </section>
    )
}