import { useState } from 'react'
import './App.css'

function App() {
  const [tasks, setTasks] = useState<string[]>([])
  const [inputValue, setInputValue] = useState('')

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue.trim()])
      setInputValue('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTask()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          todoリスト
        </h1>
        
        <div className="mb-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="タスクを入力してください"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleAddTask}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              追加
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center py-4">
              タスクがありません
            </p>
          ) : (
            tasks.map((task, index) => (
              <div
                key={index}
                className="p-3 bg-gray-50 rounded-md border border-gray-200"
              >
                {task}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default App
