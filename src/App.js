import './App.css';
import Sidebar from "./components/Sidebar";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"; 

const items = [
  {
    id: "item-0",
    content: "item_0"
  },
  {
    id: "item-1",
    content: "item_1"
  },
  {
    id: "item-2",
    content: "item_2"
  },
  {
    id: "item-3",
    content: "item_3"
  },
  {
    id: "item-4",
    content: "item_4"
  },
];

function App() {
  return (
    <div className="App">
       <p>
          <Sidebar />
        </p>
      <DragDropContext>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div {...provided.droppableProps} ref = {provided.innerRef}>
              {items.map((item , index) => (
                <Draggable key={item.id} draggableId={item.id} index = {index}> 
                  {(probided, snapshot) =>(
                  <div 
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandlePeops}
                  >
                    {item.content}
                
                  </div>
                  )}
                </Draggable>
             ))}
          </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default App;
