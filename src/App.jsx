import "./App.css";
import { Header,MainContent,ProductSection,Footer,FAQ } from "./components/Wedsection";
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <ChakraProvider>
        <FAQ />
      </ChakraProvider>
      <Footer />
    </div>
  );
}

export default App;
