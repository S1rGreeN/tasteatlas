import './App.css'

import Grid from '@mui/material/Grid2' 
import DishTable from './components/DishTable'
import Student from './components/Student'

// PENDIENTE: Cree la interfaz
import { type Dish } from './interface/Dish.tsx'
import { useEffect, useState } from 'react'




function App() {

  let url = "https://raw.githubusercontent.com/aavendan/datos/refs/heads/main/tasteatlas/bestdishes100-2425.json"
  
  // PENDIENTE: Variable de estado y la función de modificación. 
  const [platitos, setPlatitos] = useState<Dish[]>([]);


  // PENDIENTE: 
  // Realizar una petición asíncrona a la URL. La respuesta es un JSON. 
  // Al recibir la respuesta, actualice la variable de estado.

  useEffect(() =>{
    const fetchPlatitos = async () => {
      try{
        const response = await fetch(url);
        if(!response.ok){
          throw new Error("valio profe");
        }
        const datita = await response.json();
        setPlatitos(datita);

      } catch(e){
        console.log("valio profe");
      }
    }
    fetchPlatitos();
  })


  return (
    <Grid container spacing={5}>

        {/* Student */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe sus datos (apellidos, nombres y paralelo) como props del componente */}
          <Student apellidos="Verdesoto Franco" nombres="Victor Alejandro" paralelo="2"></Student>

        </Grid>
        
        {/* DishTable */}
        <Grid size={{ xs: 12 }}>

          {/* PENDIENTE: Envíe la variable de estado como prop */}
          <DishTable data={platitos}></DishTable>
        
        </Grid>
        
       
    </Grid>
  )
}

export default App
