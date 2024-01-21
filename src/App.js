import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Box } from '@mui/system';
import { PasswordGeneratorCard } from './Components/PasswordGeneratorCard/PasswordGeneratorCard';
import style from "./style.module.css"

function App() {
  return (
    <div className="App">
      <Box className = {style.root}>
        <PasswordGeneratorCard />
      </Box>
    </div>
  );
}

export default App;
