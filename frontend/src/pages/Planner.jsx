"use client";

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useState } from "react";

const Planner = () => {
  const [activities, setActivities] = useState([
    "Visit Museum",
    "Go Hiking",
    "Dinner",
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(activities);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setActivities(items);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-10">
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">
        ✨ Plan Your Itinerary
      </h1>
      <p className="text-gray-600 mb-4">
        Drag and drop to organize your activities for the perfect itinerary!
      </p>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="activities">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="bg-gray-50 rounded-lg p-4 border border-gray-200 space-y-3"
            >
              {activities.map((activity, index) => (
                <Draggable key={activity} draggableId={activity} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="p-3 bg-white shadow-sm rounded-lg border flex items-center justify-between hover:bg-gray-100"
                    >
                      <span className="font-medium text-gray-700">
                        {activity}
                      </span>
                      <span className="text-gray-400 text-sm">Drag ⟶</span>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <button className="mt-6 w-full bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600">
        Save Itinerary
      </button>
    </div>
  );
};

export default Planner;