import { FontData } from '@lidojs/design-core';
import { Editor, GetFontQuery, PageControl } from '@lidojs/design-editor';
import axios from 'axios';
import { isArray } from 'lodash';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import AppLayerSettings from './layout/AppLayerSettings';
import HeaderLayout from './layout/HeaderLayout';
import Sidebar from './layout/Sidebar';
import EditorContent from './pages/EditorContent';
import PreviewModal from './PreviewModal';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ErrorBoundary } from "react-error-boundary";
import { Preview } from '@lidojs/design-editor';

function fallbackRender({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>

    </div>
  );
}

const sampleData = [{"layers":{"ROOT":{"type":{"resolvedName":"RootLayer"},"props":{"boxSize":{"width":1640,"height":924},"position":{"x":0,"y":0},"rotate":0,"color":"rgb(255, 255, 255)","image":null},"locked":false,"child":["48b6c9d4-4803-49c7-8a27-579fc9aa9be6","e8364cc3-8336-4889-b16e-4ba91816ae27","d486d61f-f1fa-43a3-8e52-7cd1b169476d","58e83d9c-235c-4b80-8652-5b5e5cab24f4"],"parent":null},"48b6c9d4-4803-49c7-8a27-579fc9aa9be6":{"type":{"resolvedName":"ShapeLayer"},"props":{"shape":"rectangle","position":{"x":-41,"y":652},"boxSize":{"width":1766,"height":296,"x":-41,"y":652},"rotate":0,"color":"rgb(253, 235, 207)"},"locked":false,"child":[],"parent":"ROOT"},"e8364cc3-8336-4889-b16e-4ba91816ae27":{"type":{"resolvedName":"TextLayer"},"props":{"text":"<p style=\"text-align: center;font-family: Roboto;font-size: 68px;color: rgb(0, 0, 0);line-height: 1.4;letter-spacing: 0em;\"><strong><span style=\"color: rgb(0, 0, 0);\">Learn gardening edited</span></strong></p>","position":{"x":143.35990744542556,"y":39.96055778837237},"boxSize":{"width":879.4570588425272,"height":95,"x":143.35990744542568,"y":39.96055778837237},"scale":1,"rotate":0,"fonts":[{"name":"Roboto","fonts":[{"style":"Bold","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"style":"Bold_Italic","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"style":"Bold","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]},{"style":"Italic","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]},{"urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]}]}],"colors":["rgb(0, 0, 0)"],"fontSizes":[68]},"locked":false,"child":[],"parent":"ROOT"},"d486d61f-f1fa-43a3-8e52-7cd1b169476d":{"type":{"resolvedName":"TextLayer"},"props":{"text":"<p style=\"text-align: center;font-family: Roboto;font-size: 38px;color: rgb(0, 0, 0);line-height: 1.4;letter-spacing: 0em;\"><strong><span style=\"color: rgb(0, 0, 0);\">to teach basic gardening skills</span></strong></p>","position":{"x":263.1837958499592,"y":153.96927618418755},"boxSize":{"width":666.4143387030329,"height":53,"x":356.1218952396715,"y":199.72341742219976},"scale":1,"rotate":0,"fonts":[{"name":"Roboto","fonts":[{"style":"Bold","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"style":"Bold_Italic","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"style":"Bold","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]},{"style":"Italic","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]},{"urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]}]}],"colors":["rgb(0, 0, 0)"],"fontSizes":[38]},"locked":false,"child":[],"parent":"ROOT"},"58e83d9c-235c-4b80-8652-5b5e5cab24f4":{"type":{"resolvedName":"TextLayer"},"props":{"text":"<p style=\"text-align: center;font-family: Roboto;font-size: 68px;color: rgb(0, 0, 0);line-height: 1.4;letter-spacing: 0em;\"><strong><span style=\"color: rgb(0, 0, 0);\">tgfvhf dhgcdghdcfyfd</span></strong></p>","position":{"x":160.51771040968026,"y":327.3537574396366},"boxSize":{"width":536.3009995574356,"height":95,"x":523.1390728476821,"y":259.9867549668875},"scale":1,"rotate":0,"fonts":[{"name":"Roboto","fonts":[{"style":"Bold","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"style":"Bold_Italic","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"style":"Bold","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]},{"style":"Italic","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]},{"urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]}]}],"colors":["rgb(0, 0, 0)"],"fontSizes":[68]},"locked":false,"child":[],"parent":"ROOT"}}}]

const Test = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const leftSidebarRef = useRef<HTMLDivElement>(null);
  const [openPreview, setOpenPreview] = useState(false);
  const [show, setShow] = useState(false);
  const [loadPage, setLoadPage] = useState(false);
  const [curriculum, setCurriculum] = useState(JSON.parse(queryParams.get('transformedCurriculum'))??null);
  const [role, setRole] = useState(null);
  const [user, setUser] = useState(null);
  const [action, setAction] = useState(null);
  const [transformedCurriculum, setTransformedCurriculum] = useState(null);
  const [token, setToken] = useState(null);
  const [showView, setShowView] = useState(false);
  const [editView, setEditView] = useState(false);
  const curriculumId = queryParams.get('id')??null;
  
  useEffect(() => {
    async function checkParams() {
      const id = queryParams.get('id');
      const type = queryParams.get('type');
     const edit = queryParams.get('edit');
      if (id && type) {
        if(type === 'view'){
          setShowView(true);
          
          return;
        }
        if(edit === 'true'){
          setEditView(true);
          return;
        }

        setLoadPage(true);
        try {
          const user = queryParams.get('user');
          const role = queryParams.get('role');
          const action = queryParams.get('action');
          const transformedCurriculum = queryParams.get('transformedCurriculum');
          const token = queryParams.get('token');
          const loggedInUser = await fetch(`http://64.4.160.24:1337/api/users/me`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json', 
            'Authorization': `Bearer ${token}`
        }});
        const userFromStrapi = await loggedInUser.json();
        console.log(userFromStrapi);
        if (userFromStrapi.id === parseInt(user)) {
          const curriculum1 = JSON.parse(transformedCurriculum);
          console.log(curriculum1);
          setCurriculum(curriculum1);
          setRole(role);
          setUser(userFromStrapi);
          setAction(action);
          setTransformedCurriculum(transformedCurriculum);
          setToken(token);
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You are not authorized to view this page',
          })
          setTimeout(() => {
            //window.location.href = 'http://localhost:3000/';
            //window.location.replace('http://localhost:3000/');
          }, 3000);
        }
        } catch (error) {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'You are not authorized to view this page',
          })
          setTimeout(() => {
            //window.location.href = 'http://localhost:3000/';
            //window.location.replace('http://localhost:3000/');
          }, 3000);
        }
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'You are not authorized to view this page',
        })
        setTimeout(() => {
          //window.location.href = 'http://localhost:3000/';
          //window.location.replace('http://localhost:3000/');
        }, 3000);
      }
    }
    if(queryParams){
      checkParams();
    }
  }, [queryParams]);
  const getFonts = useCallback((query: GetFontQuery) => {
    const buildParams = (data: Record<string, string | string[]>) => {
      const params = new URLSearchParams();

      Object.entries(data).forEach(([key, value]) => {
        if (isArray(value)) {
          value.forEach((v) => params.append(key, v));
        } else {
          params.append(key, value);
        }
      });

      return params;
    };
    return axios
      .get<FontData[]>(`/fonts?${buildParams(query)}`)
      .then((res) => res.data);
  }, []);
  const [viewPortHeight, setViewPortHeight] = useState<number>();
  useEffect(() => {
    const windowHeight = () => {
      setViewPortHeight(window.innerHeight);
    };
    window.addEventListener('resize', windowHeight);
    windowHeight();
    return () => {
      window.removeEventListener('resize', windowHeight);
    };
  }, []);
  //actions.setData(sampleData);
  return (
    <ErrorBoundary 
    FallbackComponent={fallbackRender} 
    onError={(error)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `An error occured: ${error.message}. Check if you logged in to CourScribe and try again from the curriculum in CourScribe. If the problem persists, contact support at support@courscribe.com.`,
      })
      window.location.replace('http://localhost:3000/');
    }}
    >
    
    {showView ? (
      <Editor
      config={{
        assetPath: './assets',
        frame: {
          defaultImage: {
            url: `./assets/images/frame-placeholder.png`,
            width: 1200,
            height: 800,
          },
        },
      }}
      getFonts={getFonts}
    >
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh',
          maxHeight: viewPortHeight ? `${viewPortHeight}px` : 'auto',
        }}
      >
       <HeaderLayout openPreview={() => setOpenPreview(true)} setShow={()=>setShow(true)} showView={showView} curriculumId={curriculumId}/>
       </div>
     <Preview />
    </Editor>
    ):(
      <Editor
      config={{
        assetPath: './assets',
        frame: {
          defaultImage: {
            url: `./assets/images/frame-placeholder.png`,
            width: 1200,
            height: 800,
          },
        },
      }}
      getFonts={getFonts}
    >
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh',
          maxHeight: viewPortHeight ? `${viewPortHeight}px` : 'auto',
        }}
      >
        <HeaderLayout openPreview={() => setOpenPreview(true)} setShow={()=>setShow(true)} showView={editView} curriculumId={curriculumId}/>
        {openPreview && <PreviewModal onClose={() => setOpenPreview(false)} />}
        <div
          css={{
            display: 'flex',
            flexDirection: 'row',
            flex: 'auto',
            overflow: 'auto',
            background: '#EBECF0',
            '@media (max-width: 900px)': {
              flexDirection: 'column-reverse',
            },
          }}
        >
          <div
            ref={leftSidebarRef}
            css={{
              display: 'flex',
              background: 'white',
            }}
          >
            {curriculum && <Sidebar curriculum={curriculum[0]}/> }
          </div>
          <div
            css={{
              flexGrow: 1,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'auto',
            }}
          >
            <AppLayerSettings />
            <div
              css={{
                flexGrow: 1,
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <EditorContent />
            </div>
            <div
              css={{
                height: 40,
                background: '#fff',
                borderTop: '1px solid rgba(57,76,96,.15)',
                display: 'grid',
                alignItems: 'center',
                flexShrink: 0,
                '@media (max-width: 900px)': {
                  display: 'none',
                },
              }}
            >
              <PageControl />
            </div>
          </div>
        </div>
      </div>
    </Editor>
    )}
    </ErrorBoundary>
  );
};

export default Test;
