import React, {useEffect, useState, useCallback} from "react";
import { Preview } from '@lidojs/design-editor';
import { useEditor } from '@lidojs/design-editor';
import { Editor, GetFontQuery, PageControl } from '@lidojs/design-editor';
import { FontData } from '@lidojs/design-core';
import axios from 'axios';
import { isArray } from 'lodash';

const ViewPresentation = () => {
    const { actions, query } = useEditor();
    const [show, setShow] = useState(false);
    //actions.setData(fileContent);
    useEffect(() => {
        //actions.setData(sampleData);
        setShow(true);
    }, [])
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
    return (
        <div>
            {show && (
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
                    <PageControl />
                </Editor>
            )}
        </div>
    )
}

const sampleData = [{"layers":{"ROOT":{"type":{"resolvedName":"RootLayer"},"props":{"boxSize":{"width":1640,"height":924},"position":{"x":0,"y":0},"rotate":0,"color":"rgb(255, 255, 255)","image":null},"locked":false,"child":["48b6c9d4-4803-49c7-8a27-579fc9aa9be6","e8364cc3-8336-4889-b16e-4ba91816ae27","d486d61f-f1fa-43a3-8e52-7cd1b169476d","58e83d9c-235c-4b80-8652-5b5e5cab24f4"],"parent":null},"48b6c9d4-4803-49c7-8a27-579fc9aa9be6":{"type":{"resolvedName":"ShapeLayer"},"props":{"shape":"rectangle","position":{"x":-41,"y":652},"boxSize":{"width":1766,"height":296,"x":-41,"y":652},"rotate":0,"color":"rgb(253, 235, 207)"},"locked":false,"child":[],"parent":"ROOT"},"e8364cc3-8336-4889-b16e-4ba91816ae27":{"type":{"resolvedName":"TextLayer"},"props":{"text":"<p style=\"text-align: center;font-family: Roboto;font-size: 68px;color: rgb(0, 0, 0);line-height: 1.4;letter-spacing: 0em;\"><strong><span style=\"color: rgb(0, 0, 0);\">Learn gardening edited</span></strong></p>","position":{"x":143.35990744542556,"y":39.96055778837237},"boxSize":{"width":879.4570588425272,"height":95,"x":143.35990744542568,"y":39.96055778837237},"scale":1,"rotate":0,"fonts":[{"name":"Roboto","fonts":[{"style":"Bold","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"style":"Bold_Italic","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"style":"Bold","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]},{"style":"Italic","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]},{"urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]}]}],"colors":["rgb(0, 0, 0)"],"fontSizes":[68]},"locked":false,"child":[],"parent":"ROOT"},"d486d61f-f1fa-43a3-8e52-7cd1b169476d":{"type":{"resolvedName":"TextLayer"},"props":{"text":"<p style=\"text-align: center;font-family: Roboto;font-size: 38px;color: rgb(0, 0, 0);line-height: 1.4;letter-spacing: 0em;\"><strong><span style=\"color: rgb(0, 0, 0);\">to teach basic gardening skills</span></strong></p>","position":{"x":263.1837958499592,"y":153.96927618418755},"boxSize":{"width":666.4143387030329,"height":53,"x":356.1218952396715,"y":199.72341742219976},"scale":1,"rotate":0,"fonts":[{"name":"Roboto","fonts":[{"style":"Bold","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"style":"Bold_Italic","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"style":"Bold","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]},{"style":"Italic","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]},{"urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]}]}],"colors":["rgb(0, 0, 0)"],"fontSizes":[38]},"locked":false,"child":[],"parent":"ROOT"},"58e83d9c-235c-4b80-8652-5b5e5cab24f4":{"type":{"resolvedName":"TextLayer"},"props":{"text":"<p style=\"text-align: center;font-family: Roboto;font-size: 68px;color: rgb(0, 0, 0);line-height: 1.4;letter-spacing: 0em;\"><strong><span style=\"color: rgb(0, 0, 0);\">tgfvhf dhgcdghdcfyfd</span></strong></p>","position":{"x":160.51771040968026,"y":327.3537574396366},"boxSize":{"width":536.3009995574356,"height":95,"x":523.1390728476821,"y":259.9867549668875},"scale":1,"rotate":0,"fonts":[{"name":"Roboto","fonts":[{"style":"Bold","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"style":"Bold_Italic","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"style":"Bold","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"]},{"urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]},{"style":"Italic","urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]},{"urls":["https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"]}]}],"colors":["rgb(0, 0, 0)"],"fontSizes":[68]},"locked":false,"child":[],"parent":"ROOT"}}}]
export default ViewPresentation;