import React, {useState, useEffect, useContext, useReducer, useRef} from 'react';
import {Tabs, Tab } from 'react-bootstrap'
import UseStateComponent from './UseStateComponent';
const colors = {
  blue: "#03619c",
  yellow: "#8c8f03",
  red: "#9c0312",
  changeColor: function getRandomColor(){
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    this.blue = color;
    return this.blue;
  }
};

const people = [
  {name: 'Jay', alive: true},
  {name: 'Kailee', alive: true},
  {name: 'John', alive: true},
  {name: 'Mia', alive: true}
]
// const people = [];


const reducer = (people, action) => {
  console.log(people, action,'people, action')
  if(action.type == 'chomp') {
    return people.map(person => {
      if(person.name == action.payload) {
        console.log(action.payload,'sds')
        person.alive = false;
      }
      console.log(person);
      return person;
    })
  }
  if(action.type == 'revive') {
    return people.map(person => {
      if(person.name == action.payload) {
        console.log(action.payload,'sdasdass')
        person.alive = true;
      }
      return person;
    })
  }
}

const ColorContext = React.createContext(colors.blue);
const FeaturesHooks = () => {
  console.log(process.env,'$npm_package_name')
  const [key, setKey] = useState('useState')
  return (
    <div>
    <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)}>
    <Tab eventKey="useState" title="Use State">
      <UseStateComp />
    </Tab>
    <Tab eventKey="useEffect" title="use Effect">
      <UseEffectComp />
    </Tab>
    <Tab eventKey="useContext" title="use Context">
      <ColorContext.Provider value={colors}>
        <UseContextComp />
      </ColorContext.Provider>
    </Tab>
    <Tab eventKey="useReducer" title="use Reducer">
      <UseReducerComp />
    </Tab>
    <Tab eventKey="useCallback" title="use Callback">
      useCallback
    </Tab>
    <Tab eventKey="useMemo" title="use Memo">
      useMemo
    </Tab>
    <Tab eventKey="useRef" title="use Ref">
      <UseRefComp />
    </Tab>
  </Tabs>
    </div>
  );
}

export default FeaturesHooks;


const UseStateComp = () => {
const [count, setcount] = useState(0);
const [temp, setTemp ] = useTemp(5);
const increaseCount = () => {
  setcount(preState => preState + 1);
  setTemp(id => id - 1);

}
  return (
    <div>
      <button onClick = { () => increaseCount() }>Increase Count</button>
      <pre>Count = {count}</pre>
      <pre>temp = {temp}</pre>
    </div>
  );
}

const UseEffectComp = () => {
const [page, setPage] = useState(1);
const [data, setData] = useState([]);

const url = (page) =>  `https://opt-showcase-api-qa.optcentral.com/products?brand_ids=3,33,46,50,112,145,370,463,581,708,1119,1444,1797,1801,1809,1811,2086,2158,3512,3513,3522,3526,3528,3530&categories=earrings&limit=9&retailerId=143&showcase=OOO&sort=pricing.retail;desc&status=Active&page=${page}`;

useEffect(() => {
  if(page > 0) {
    fetch(url(page))
    .then((response) => response.json())
    .then((res) => {
      console.log(res)
      setData(res.data || [])
    })
  }
},[page ? page : 1]);

  return (
    <div>
      <button onClick={() => setPage((preState) => preState - 1)} disabled={ page <= 1} >prev</button>
      <button onClick={() => setPage(preState => preState + 1) }>Next</button>
      <ul className="product__list">
        {data.map(el => (
          <li key={el.id}>
            <div>
              <a href="#">
                <img src={el.images[0]}/>
              </a><br/>
              {el.brand.name}: {el.sku}
            </div>
          </li>
        ))}
        </ul>
    </div>
  );
}


function useTemp(id) {
  console.log(id,'id')
  const [temp, setTemp] = useState(id);
  useEffect(() => {
    setTemp(id => id + 1 );
  }, [id]);
  return [temp, setTemp ]
}


const UseContextComp = () => {
  const colors = useContext(ColorContext);
  const [color, setColor] = useState(colors.changeColor());

  const changeColor = () => {
    setColor(colors.changeColor())
  }
  return (
    <div>
      <button style={{ backgroundColor: color }}>Increase Count</button>
      <button onClick={() => changeColor()}>Change Color</button>
    </div>
  );
}

const UseReducerComp = () => {
  const [state, dispatch] = useReducer(reducer, people.length ? people : [{name:'temp',alive:true}]);
  console.log(state,'satte')
  return (
    <div>
    {state.map((person, idx) => (
      <div key={idx} style={{display: 'flex', width: '50%', justifyContent: 'space-around'}}>
        <div>{person.name}</div>
        {person.alive ?
        <div> ✨✨ ALIVE! ✨✨</div> :
        <div> ☠ ☠ DEAD ☠ ☠</div>}
        <button onClick={() => dispatch({type: person.alive ? 'chomp' : 'revive',payload:person.name})}>action</button>
      </div>
    ))}
    </div>
  )
}




const UseRefComp = () => {
  const textInput = useRef();

 const focusTextInput = () => textInput.current.focus();

  return (
    <div>
      <input type="text" ref={textInput} />
      <button onClick={() => focusTextInput() }>Focus the text input</button>
    </div>
  );
}

