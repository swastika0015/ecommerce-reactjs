import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div>
       
        <div class="sidebar flex-flow-column">
            <div class="sidebar-item categories">
                <h3>Categories</h3>
                <div class="radio-btns">
                    <input type="checkbox" value="#"/>
                    <label >Tops and Tees</label><br/>
                    <input type="checkbox" value="#"/>
                    <label >Jeans and Trousers</label><br/>
                    <input type="checkbox" value="#"/>
                    <label >Jewellery</label><br/>
                    <input type="checkbox" value="#"/>
                    <label >Crop Hoodie</label><br/>
                </div>
            </div>
            <div class="sidebar-item">
                <h3>Price</h3>
                <div class="slide-container radio-btns">
                    <input type="range" class="slider" min="500" max="10000" value="5000"/><br/>
                    <input type="checkbox" name="price" value="500 - 1500"/>
                    <label >500 - 1500</label><br/>
                    <input type="checkbox" name="price"  value="1500 - 3000"/>
                    <label >1500 - 3000</label><br/>  
                    <input type="checkbox" name="price" value="3000 - 5000"/>
                    <label >3000 - 5000</label><br/>
                </div>
            </div>
            <div class="sidebar-item">
                <h3>Colors</h3>
                <div class="colors-container radio-btns">
                    <input type="checkbox" value="#"/>
                    <label ><i class="fa fa-circle red"></i>Red</label><br/>
                    <input type="checkbox" value="#"/>
                    <label ><i class="fa fa-circle green"></i>Green</label><br/>  
                    <input type="checkbox" value="#"/>
                    <label ><i class="fa fa-circle blue"></i>Blue</label><br/>
                    <input type="checkbox" value="#"/>
                    <label ><i class="fa fa-circle  black"></i>Black</label><br/>
                    <input type="checkbox" value="#"/>
                    <label ><i class="fa fa-circle purple"></i>Purple</label><br/>
                    <input type="checkbox" value="#"/>
                    <label ><i class="fa fa-circle pink"></i>Pink</label><br/>
                    <input type="checkbox" value="#"/>
                    <label ><i class="fa fa-circle yellow"></i>Yellow</label><br/>
                </div>
            </div>
            <div class="sidebar-item">
                <h3>Ratings</h3>
                <div class="ratings-container radio-btns">
                    <input type="radio" name="ratings" value="4 stars and above"/>
                    <label >4 stars and above</label><br/>
                    <input type="radio" name="ratings" value="3 stars and above"/>
                    <label >or3 stars and above</label><br/>  
                    <input type="radio" name="ratings" value="2 stars and above"/>
                    <label >2 stars and above</label><br/>  
                    <input type="radio" name="ratings" value="Below 2 stars"/>
                    <label >Below 2 stars</label><br/>
                </div>
            </div>
        </div>
        </div>

  )
}

export default Sidebar;