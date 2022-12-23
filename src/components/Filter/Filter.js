import React from 'react'
import { FilterBTN } from "../FilterBTN/FilterBTN"

export const Filter = ({setStatus, setGender, setSpecies}) => {

  const statusData  = ["Alive", "Dead", "unknown"]
  const genderData = ["Male", "Female", "unknown", "Genderless"]
  const speciesData = ["Human", "Humanoid", "Poopybutthole", "unknown", "Disease", "Animal", 'Planet', "Alien", "Robot", "Cronenberg", "Mythological"]

    return (
    <div>
      <h3 className='text-center'>Filter</h3>
      <p style={{cursor:"pointer"}} className='text-center text-decoration-underline text-primary'>Clear All</p>
   <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Filter by status
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        {
          statusData.map((item, index ) => {
           return (
             <FilterBTN key={index} setState={setStatus} name= "status" text={item} index={index}/>
           )
          })
        }
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Filter by species
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       {
          speciesData.map((item, index ) => {
           return (
             <FilterBTN key={index} setState={setSpecies} name= "species" text={item} index={index}/>
           )
          })
        }
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Filter by gender
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        {
          genderData.map((item, index ) => {
           return (
             <FilterBTN setState={setGender} key={index} name="gender" text={item} index={index}/>
           )
          })
        }
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
