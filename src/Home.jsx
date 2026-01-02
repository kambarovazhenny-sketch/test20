import End from './components/block1/HeadEnd/HeadEnd'
import Hero from './components/block1/hero'
import Header from './components/header/header'
import Block2 from './components/block2/block2'
import Block3 from './components/block3/block3'
import Block4 from './components/block4/block4'
import Block5 from './components/block5/block5' 
import Block6 from './components/block6/block6'
import Block7 from './components/block7/block7'
import Block8 from './components/block8/block8'


import { Routes, Route } from 'react-router-dom';

function Home (){
    return(<>

     <Hero></Hero>
     <End></End>
     <Block2></Block2>
      <Block3></Block3>
      <Block4></Block4>
      <Block5></Block5>
      <Block6></Block6>
      <Block7></Block7>
      <Block8></Block8>
      
      </>
    )

}
export default Home;