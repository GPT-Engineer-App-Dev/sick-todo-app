import React, { useState } from 'react';
import { Box, Heading, Input, Button, VStack, HStack, Text, Checkbox, IconButton } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((t, i) => 
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  return (
    <Box p={4} maxW="md" mx="auto">
      <Heading mb={4} textAlign="center">Todo App</Heading>
      <HStack mb={4}>
        <Input 
          placeholder="Add a new task" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
        />
        <Button onClick={addTask} colorScheme="teal">Add</Button>
      </HStack>
      <VStack spacing={4} align="stretch">
        {tasks.map((t, index) => (
          <HStack key={index} spacing={4}>
            <Checkbox 
              isChecked={t.completed} 
              onChange={() => toggleTaskCompletion(index)}
            />
            <Text 
              flex={1} 
              textDecoration={t.completed ? 'line-through' : 'none'}
            >
              {t.text}
            </Text>
            <IconButton 
              icon={<FaTrash />} 
              onClick={() => deleteTask(index)} 
              colorScheme="red" 
              aria-label="Delete task"
            />
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;