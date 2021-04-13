import { ListItemSecondaryAction, Select } from "@material-ui/core";
import { React, useState } from "react";




export default function Create() {

  const [instances] = useState([
    { value: 't3.small',  label: 't3.small',},
    { value: 't3.medium', label: 't3.medium',},
    { value: 't3.large',  label: 't3.large',},
  ])
  const [workers] = useState([
    { value: '1',  label: '1',},
    { value: '2', label: '2',},
    { value: '3',  label: '3',},
  ])

  return (
    <div>
      <select>
        {instances.map(item => (
          <option
            key={item.value}
            value={item.value}
            >
            {item.label}
            
          </option>
        ))}
      </select> 
      <select>
        {workers.map(item => (
          <option
            key={item.value}
            value={item.value}
            >
            {item.label}
            
          </option>
        ))}
      </select> 
      
</div>


  );
  

}

