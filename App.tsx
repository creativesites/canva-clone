import { FC } from 'react';
import ReactGA from 'react-ga4';
import Test from './src/Test';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Swal from 'sweetalert2';
import { ErrorBoundary } from "react-error-boundary";
import ViewPresentation from 'src/Jest';

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize('G-68BJDBYMLE');
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
  },
  {
    path: "/view",
    element: <ViewPresentation />,
  },
]);
const App: FC = () => {
  return (
    <ErrorBoundary 
    FallbackComponent={fallbackRender} 
    onError={(error)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `An error occured: ${error.message}. Check if you logged in to CourScribe and try again from the curriculum in CourScribe. If the problem persists, contact support at support@courscribe.com.`,
      })
      window.location.replace('http://localhost:3001/');
    }}
    >
  <RouterProvider router={router} />
  </ErrorBoundary>
  );
};

function fallbackRender({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>

    </div>
  );
}
export default App;
