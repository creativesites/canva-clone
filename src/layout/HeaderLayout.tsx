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
import Swal from 'sweetalert2';

interface HeaderLayoutProps {
  openPreview: () => void;
  setShow: () => void;
  showView: boolean;
  curriculumId: string;
}

const courscribeSampleData = [
  {
    "layers": {
      "ROOT": {
        "type": {
          "resolvedName": "RootLayer"
        },
        "props": {
          "color": "rgb(239, 238, 238)",
          "image": null,
          "rotate": 0,
          "boxSize": {
            "width": 1640,
            "height": 924
          },
          "position": {
            "x": 0,
            "y": 0
          }
        },
        "locked": false,
        "child": [
          "4c2b097b-75ca-4b7e-a7e6-d2100b282f69",
          "7f86e708-f97f-4192-9535-31405455063a",
          "e917ee7e-fad6-4a68-bdf0-9a6fe93f8ef2",
          "6915d220-6349-4fb6-82d8-ed4fdbb6f704",
          "b7fd8510-8851-4c5b-90df-4a9f74a6e19f",
          "7c0eb6f5-5130-4cd2-af56-530298c754d8",
          "eb6b613c-3a5a-4387-8d70-214229c8577e",
          "bb84559a-44c2-4e58-8bbd-da633eca4028",
          "62660246-1bc4-42f6-8cfb-766150349276"
        ],
        "parent": null
      },
      "4c2b097b-75ca-4b7e-a7e6-d2100b282f69": {
        "type": {
          "resolvedName": "FrameLayer"
        },
        "props": {
          "image": {
            "url": "https://i.imgur.com/Vm0PVfp.jpg",
            "thumb": "https://i.imgur.com/Vm0PVfpm.jpg",
            "rotate": 0,
            "boxSize": {
              "width": 440.6849252942363,
              "height": 661.0273879413545
            },
            "position": {
              "x": -101.73995880314791,
              "y": -49.808885516534986
            }
          },
          "scale": 0.8463947234695957,
          "rotate": 0,
          "boxSize": {
            "x": 93.20655914691945,
            "y": 260.7946287519747,
            "width": 284.9049278671006,
            "height": 423.19736173479777
          },
          "clipPath": "M 336.62 0 L 215.49 500 H 0 L 119.72 0 H 336.62 Z",
          "position": {
            "x": 94.50197778830972,
            "y": 327.30330430989534
          }
        },
        "locked": false,
        "child": [],
        "parent": "ROOT"
      },
      "7f86e708-f97f-4192-9535-31405455063a": {
        "type": {
          "resolvedName": "FrameLayer"
        },
        "props": {
          "image": {
            "url": "https://i.imgur.com/iZ2cmsm.jpg",
            "thumb": "https://i.imgur.com/iZ2cmsmm.jpg",
            "rotate": 0,
            "boxSize": {
              "width": 336.61,
              "height": 506.89505882352944
            },
            "position": {
              "x": 0,
              "y": 0
            }
          },
          "scale": 0.8463947234695957,
          "rotate": 0,
          "boxSize": {
            "x": 93.20655914691945,
            "y": 260.7946287519747,
            "width": 284.9049278671006,
            "height": 423.19736173479777
          },
          "clipPath": "M 336.62 0 L 215.49 500 H 0 L 119.72 0 H 336.62 Z",
          "position": {
            "x": 308.2838349864708,
            "y": 239.6814311816677
          }
        },
        "locked": false,
        "child": [],
        "parent": "ROOT"
      },
      "e917ee7e-fad6-4a68-bdf0-9a6fe93f8ef2": {
        "type": {
          "resolvedName": "FrameLayer"
        },
        "props": {
          "image": {
            "url": "https://i.imgur.com/9pHKSeF.jpg",
            "thumb": "https://i.imgur.com/9pHKSeFm.jpg",
            "rotate": 0,
            "boxSize": {
              "width": 394.5026104349234,
              "height": 591.753915652385
            },
            "position": {
              "x": 0,
              "y": -34.26297352270976
            }
          },
          "scale": 0.8463947234695957,
          "rotate": 0,
          "boxSize": {
            "x": 93.20655914691945,
            "y": 260.7946287519747,
            "width": 284.9049278671006,
            "height": 423.19736173479777
          },
          "clipPath": "M 336.62 0 L 215.49 500 H 0 L 119.72 0 H 336.62 Z",
          "position": {
            "x": 478.7227693377513,
            "y": 325.6425566030247
          }
        },
        "locked": false,
        "child": [],
        "parent": "ROOT"
      },
      "6915d220-6349-4fb6-82d8-ed4fdbb6f704": {
        "type": {
          "resolvedName": "FrameLayer"
        },
        "props": {
          "image": {
            "url": "https://i.imgur.com/uSa1yQV.jpg",
            "thumb": "https://i.imgur.com/uSa1yQVm.jpg",
            "rotate": 0,
            "boxSize": {
              "width": 404.6205159655355,
              "height": 541.0783159403112
            },
            "position": {
              "x": -18.645993989828895,
              "y": 0
            }
          },
          "scale": 0.8463947234695957,
          "rotate": 0,
          "boxSize": {
            "x": 93.20655914691945,
            "y": 260.7946287519747,
            "width": 284.9049278671006,
            "height": 423.19736173479777
          },
          "clipPath": "M 336.62 0 L 215.49 500 H 0 L 119.72 0 H 336.62 Z",
          "position": {
            "x": 691.460328861764,
            "y": 238.8138601817034
          }
        },
        "locked": false,
        "child": [],
        "parent": "ROOT"
      },
      "b7fd8510-8851-4c5b-90df-4a9f74a6e19f": {
        "type": {
          "resolvedName": "FrameLayer"
        },
        "props": {
          "image": {
            "url": "https://i.imgur.com/wXPmETk.jpg",
            "thumb": "https://i.imgur.com/wXPmETkm.jpg",
            "rotate": 0,
            "boxSize": {
              "width": 367.3285279858777,
              "height": 550.2610618433865
            },
            "position": {
              "x": -30.71852798587771,
              "y": -40.17038275076316
            }
          },
          "scale": 0.8463947234695957,
          "rotate": 0,
          "boxSize": {
            "x": 93.20655914691945,
            "y": 260.7946287519747,
            "width": 284.9049278671006,
            "height": 423.19736173479777
          },
          "clipPath": "M 336.62 0 L 215.49 500 H 0 L 119.72 0 H 336.62 Z",
          "position": {
            "x": 862.692439919951,
            "y": 324.4840508306378
          }
        },
        "locked": false,
        "child": [],
        "parent": "ROOT"
      },
      "7c0eb6f5-5130-4cd2-af56-530298c754d8": {
        "type": {
          "resolvedName": "FrameLayer"
        },
        "props": {
          "image": {
            "url": "https://i.imgur.com/XsIiZRC.jpg",
            "thumb": "https://i.imgur.com/XsIiZRCm.jpg",
            "rotate": 0,
            "boxSize": {
              "width": 495.9196813647603,
              "height": 743.8174855596042
            },
            "position": {
              "x": 0,
              "y": -118.00469267401644
            }
          },
          "scale": 0.847423926404743,
          "rotate": 0,
          "boxSize": {
            "x": 1074.1345808025735,
            "y": 242.5859080076356,
            "width": 285.25136786710056,
            "height": 423.7119632023715
          },
          "clipPath": "M 336.62 0 L 215.49 500 H 0 L 119.72 0 H 336.62 Z",
          "position": {
            "x": 1074.1345808025735,
            "y": 242.5859080076356
          }
        },
        "locked": false,
        "child": [],
        "parent": "ROOT"
      },
      "eb6b613c-3a5a-4387-8d70-214229c8577e": {
        "type": {
          "resolvedName": "FrameLayer"
        },
        "props": {
          "image": {
            "url": "https://i.imgur.com/ZQ4CBCt.jpg",
            "thumb": "https://i.imgur.com/ZQ4CBCtm.jpg",
            "rotate": 0,
            "boxSize": {
              "width": 386.2322375156486,
              "height": 579.3483562734729
            },
            "position": {
              "x": 0,
              "y": -41.35186459637384
            }
          },
          "scale": 0.8463947234695957,
          "rotate": 0,
          "boxSize": {
            "x": 93.20655914691945,
            "y": 260.7946287519747,
            "width": 284.9049278671006,
            "height": 423.19736173479777
          },
          "clipPath": "M 336.62 0 L 215.49 500 H 0 L 119.72 0 H 336.62 Z",
          "position": {
            "x": 1246.9132314693925,
            "y": 327.21180098242166
          }
        },
        "locked": false,
        "child": [],
        "parent": "ROOT"
      },
      "bb84559a-44c2-4e58-8bbd-da633eca4028": {
        "type": {
          "resolvedName": "TextLayer"
        },
        "props": {
          "text": "<p style=\"text-align: center;font-family: Roboto;font-size: 68px;color: rgb(0, 0, 0);line-height: 1.4;letter-spacing: 0em;\"><strong><span style=\"color: rgb(0, 0, 0);\">Curriculum Development</span></strong></p>",
          "position": {
            "x": 277.41269006675674,
            "y": 73.66551274332735
          },
          "boxSize": {
            "width": 1014.634332890769,
            "height": 95,
            "x": 525.12102340009,
            "y": 261.582179409994
          },
          "scale": 1,
          "rotate": 0,
          "fonts": [
            {
              "name": "Roboto",
              "fonts": [
                {
                  "style": "Bold",
                  "urls": [
                    "https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"
                  ]
                },
                {
                  "style": "Bold_Italic",
                  "urls": [
                    "https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"
                  ]
                },
                {
                  "style": "Bold",
                  "urls": [
                    "https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"
                  ]
                },
                {
                  "urls": [
                    "https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"
                  ]
                },
                {
                  "style": "Italic",
                  "urls": [
                    "https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"
                  ]
                },
                {
                  "urls": [
                    "https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"
                  ]
                }
              ]
            }
          ],
          "colors": [
            "rgb(0, 0, 0)"
          ],
          "fontSizes": [
            68
          ]
        },
        "locked": false,
        "child": [],
        "parent": "ROOT"
      },
      "62660246-1bc4-42f6-8cfb-766150349276": {
        "type": {
          "resolvedName": "TextLayer"
        },
        "props": {
          "text": "<p style=\"text-align: center;font-family: Roboto;font-size: 38px;color: rgb(0, 0, 0);line-height: 1.4;letter-spacing: 0em;\"><strong><span style=\"color: rgb(0, 0, 0);\">Create Courses: Begin by brainstorming and creating unique courses that align with the curriculum's goal. </span></strong></p>",
          "position": {
            "x": 80.26109122260658,
            "y": 770.9332878766737
          },
          "boxSize": {
            "width": 1507.3034031454154,
            "height": 131.62499999999983,
            "x": 64.12303075946733,
            "y": 666.2978712100071
          },
          "scale": 1.2417452830188662,
          "rotate": 0,
          "fonts": [
            {
              "name": "Roboto",
              "fonts": [
                {
                  "style": "Bold",
                  "urls": [
                    "https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"
                  ]
                },
                {
                  "style": "Bold_Italic",
                  "urls": [
                    "https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"
                  ]
                },
                {
                  "style": "Bold",
                  "urls": [
                    "https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Bold.woff2"
                  ]
                },
                {
                  "urls": [
                    "https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"
                  ]
                },
                {
                  "style": "Italic",
                  "urls": [
                    "https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"
                  ]
                },
                {
                  "urls": [
                    "https://lidojs-fonts.s3.us-east-2.amazonaws.com/Roboto/Roboto-Regular.woff2"
                  ]
                }
              ]
            }
          ],
          "colors": [
            "rgb(0, 0, 0)"
          ],
          "fontSizes": [
            38
          ]
        },
        "locked": false,
        "child": [],
        "parent": "ROOT"
      }
    }
  }
]
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
    try {
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
        const slides = data?.data?.attributes?.slides;
        if(slides){
        actions.setData(slides);
        }
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      });
    }
    
  
  }
  useEffect(()=>{
    //actions.setData(courscribeSampleData);
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
