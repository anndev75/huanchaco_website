import Main_Header from './components/fullscreen_header';
import Main_Footer from './components/main_footer';
import Content from './components/content'
import './App.css'

function App(){




    return(
        <div className='main'>
            <Main_Header/>
            <Content />
            <Main_Footer/>
            
        </div>
    )
}



export default App;