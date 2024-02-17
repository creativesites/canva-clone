import PlayCircleIcon from '@duyank/icons/regular/PlayCircle';
import { useEditor } from '@lidojs/design-editor';
import React, {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  useRef,
  useState,
  useEffect
} from 'react';
import { downloadObjectAsJson } from '../utils/download';
import { set } from 'lodash';


interface HeaderLayoutProps {
  openPreview: () => void;
  setShow: () => void;
  showView: boolean;
  curriculumId: string;
}


const a = [{"layers":{"ROOT":{"type":{"resolvedName":"RootLayer"},"props":{"boxSize":{"width":1640,"height":924},"position":{"x":0,"y":0},"rotate":0,"color":"rgb(255, 255, 255)","image":null},"locked":false,"child":["48b6c9d4-4803-49c7-8a27-579fc9aa9be6","e8364cc3-8336-4889-b16e-4ba91816ae27","d486d61f-f1fa-43a3-8e52-7cd1b169476d","58e83d9c-235c-4b80-8652-5b5e5cab24f4"],"parent":null},"48b6c9d4-4803-49c7-8a27-579fc9aa9be6":{"type":{"resolvedName":"ShapeLayer"},"props":{"shape":"rectangle","position":{"x":-41,"y":652},"boxSize":{"width":1766,"height":296,"x":-41,"y":652},"rotate":0,"color":"rgb(253, 235, 207)"},"locked":false,"child":[],"parent":"ROOT"},"e8364cc3-8336-4889-b16e-4ba91816ae27":{"type":{"resolvedName":"TextLayer"},"props":{"text":"<p style=\"text-align: center;font-family: Roboto;font-size: 68px;color: rgb(0, 0, 0);line-height: 1.4;letter-spacing: 0em;\"><strong><span style=\"color: rgb(0, 0, 0);\">Learn gardening edited</span></strong></p>","position":{"x":143.35990744542556,"y":39.96055778837237},"boxSize":{"width":879.4570588425272,"height":95,"x":143.35990744542568,"y":39.96055778837237},"scale":1,"rotate":0,"fonts":[{"name":"Roboto","fonts":[{"style":"Bold","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"style":"Bold_Italic","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"style":"Bold","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]},{"style":"Italic","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]},{"urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]}]}],"colors":["rgb(0, 0, 0)"],"fontSizes":[68]},"locked":false,"child":[],"parent":"ROOT"},"d486d61f-f1fa-43a3-8e52-7cd1b169476d":{"type":{"resolvedName":"TextLayer"},"props":{"text":"<p style=\"text-align: center;font-family: Roboto;font-size: 38px;color: rgb(0, 0, 0);line-height: 1.4;letter-spacing: 0em;\"><strong><span style=\"color: rgb(0, 0, 0);\">to teach basic gardening skills</span></strong></p>","position":{"x":263.1837958499592,"y":153.96927618418755},"boxSize":{"width":666.4143387030329,"height":53,"x":356.1218952396715,"y":199.72341742219976},"scale":1,"rotate":0,"fonts":[{"name":"Roboto","fonts":[{"style":"Bold","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"style":"Bold_Italic","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"style":"Bold","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]},{"style":"Italic","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]},{"urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]}]}],"colors":["rgb(0, 0, 0)"],"fontSizes":[38]},"locked":false,"child":[],"parent":"ROOT"},"58e83d9c-235c-4b80-8652-5b5e5cab24f4":{"type":{"resolvedName":"TextLayer"},"props":{"text":"<p style=\"text-align: center;font-family: Roboto;font-size: 68px;color: rgb(0, 0, 0);line-height: 1.4;letter-spacing: 0em;\"><strong><span style=\"color: rgb(0, 0, 0);\">tgfvhf dhgcdghdcfyfd</span></strong></p>","position":{"x":160.51771040968026,"y":327.3537574396366},"boxSize":{"width":536.3009995574356,"height":95,"x":523.1390728476821,"y":259.9867549668875},"scale":1,"rotate":0,"fonts":[{"name":"Roboto","fonts":[{"style":"Bold","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"style":"Bold_Italic","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"style":"Bold","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]},{"style":"Italic","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]},{"urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]}]}],"colors":["rgb(0, 0, 0)"],"fontSizes":[68]},"locked":false,"child":[],"parent":"ROOT"}}}]
const HeaderLayout: ForwardRefRenderFunction<
  HTMLDivElement,
  HeaderLayoutProps
> = ({ openPreview, setShow, showView, curriculumId }, ref) => {
  const uploadRef = useRef<HTMLInputElement>(null);
  const { actions, query, state } = useEditor();
  console.log('state-query-actions', state, query, actions);
  const [savingText, setSavingText] = useState("Save Presentation");
  const handleExport = async() => {
    //downloadObjectAsJson('file', query.serialize());
   try {
    setSavingText("Saving...");
    const data = {
      data: {
        slides: query.serialize()
      }
    }
    const response = await fetch(`http://64.4.160.24:1337/api/curriculums/${curriculumId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.TOKEN_KEY,
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log('response from strapi', res);
    setSavingText("Saved Successfully");
    setTimeout(()=>{
      setSavingText("Save Presentation");
    }, 2000);
   } catch (error) {
    console.log('save error', error);
    setSavingText("Error Saving");
    setTimeout(()=>{
      setSavingText("Save Project");
    }, 2000);
   }
  };
  const getData = async () => {
    const res = await fetch(`http://64.4.160.24:1337/api/curriculums/${curriculumId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + process.env.TOKEN_KEY,
      },
    });
    const data = await res.json();
    console.log('curriculum data from strapi', data)
    if(data){
      const slides = data.data.attributes.slides;
      if(slides){
      actions.setData(slides);
      }
    }
    
  
  }
  useEffect(()=>{
    if(showView){
    getData();
    }
  },[showView])
  const handleImport = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        const fileContent = JSON.parse(reader.result as string);
        actions.setData(fileContent);
      };
      reader.readAsText(file);
      e.target.value = '';
    }
  };
  
  return (
    <div
      ref={ref}
      css={{
        background: '#2F2E30',
        padding: '12px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@media (max-width: 900px)': {
          padding: 12,
        },
      }}
    >
      
      <div
        css={{
          color: '#3d8eff',
          fontSize: 36,
        }}
      >
        <div
          css={{ color: 'white', height: 42, paddingTop: 6, paddingBottom: 6 }}
        >
          <img css={{ maxHeight: '100%' }} src={'./assets/logo.png'} />
        </div>
      </div>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <div
          css={{
            margin: '0 16px',
            cursor: 'pointer',
            color: '#fff',
            fontWeight: 700,
            ':hover': {
              textDecoration: 'underline',
            },
          }}
          onClick={() => uploadRef.current?.click()}
        >
          <input
            ref={uploadRef}
            accept="application/json"
            css={{ display: 'none' }}
            type="file"
            onChange={handleImport}
          />
          Import
        </div>
        <div
          css={{
            margin: '0 16px',
            cursor: 'pointer',
            color: '#fff',
            fontWeight: 700,
            ':hover': {
              textDecoration: 'underline',
            },
          }}
          onClick={() => handleExport()}
        >
          {savingText}
        </div>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
            lineHeight: 1,
            background: '#665442',
            padding: '8px 14px',
            borderRadius: 8,
            cursor: 'pointer',
            ':hover': {
              background: '#E4B26F',
              color: "#222"
            },
          }}
          onClick={openPreview}
        >
          <div css={{ marginRight: 4, fontSize: 20 }}>
            <PlayCircleIcon />
          </div>{' '}
          Preview
        </div>
        <div
          css={{
            margin: '0 16px',
            cursor: 'pointer',
            color: '#fff',
            fontWeight: 700,
            ':hover': {
              textDecoration: 'underline',
            },
            width:'100px'
          }}
          //onClick={setShow}
        >
          
        </div>
      </div>
    </div>
  );
};

export default forwardRef(HeaderLayout);
