import './App.css'

import AutoForm from './AutoForm/AutoForm'
import AutoField from './AutoForm/AutoField'
import { schema } from './AutoForm/schema'
import SubmitField from './AutoForm/SubmitField'
import ErrorField from './AutoForm/ErrorField'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <AutoForm schema={schema} onSubmit={data => console.log(data)}>
          <AutoField name={'age'} />
          <ErrorField name={'age'} />
          <div>This will stay intact</div>
          <AutoField name={'gender'} />
          <div>
            <AutoField name={'agreed'} />
          </div>
          <SubmitField />
        </AutoForm>
      </header>
    </div>
  )
}

export default App
