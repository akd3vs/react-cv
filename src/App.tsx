import React, {useRef} from 'react';
import Layout, { Sidebar, Content } from './layout';
import HelperButtons from "./components/HelperButtons";

function App() {
    const pdfRef = useRef(null);

  return (
    <Layout rootRef={pdfRef}>
        {/*<HelperButtons pdfRef={pdfRef} />*/}
        <Sidebar />
        <Content />
    </Layout>
  );
}

export default App;
