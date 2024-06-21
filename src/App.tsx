import React from 'react';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MemoLab from './components/MemoLab';

const router = createBrowserRouter([
    {
        path: '/',
        element: <h1>React Lab</h1>
    },
    {
        path: '/memo',
        element: <MemoLab />
    }
])

function App() {
    return (
        <RouterProvider 
            router={router}
        />
    );
}

export default App;
