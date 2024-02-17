
import XIcon from '@duyank/icons/regular/X';
import { LayerId, SerializedLayers } from '@lidojs/design-core';
import { useEditor } from '@lidojs/design-editor';
import axios from 'axios';
import React, { FC, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useAsync } from 'react-use';
import { addCurriculumName, addGoal  } from 'src/constant/text-effects';


const DisplayCurriculum = ({curriculum, onClose}) => {
    
    const { actions } = useEditor();
    const handleAddText = (data: {
        rootId: LayerId;
        layers: SerializedLayers;
      }) => {
        actions.addLayerTree(data);
        if (isMobile) {
        }
      };
    return(
        <div
        css={{
            width: '100%',
            height: '100%',
            flexDirection: 'column',
            overflowY: 'auto',
            display: 'flex',
          }}
          >
            <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          height: 48,
          borderBottom: '1px solid rgba(57,76,96,.15)',
          padding: '0 20px',
        }}
      >
        <p
          css={{
            lineHeight: '48px',
            fontWeight: 600,
            color: '#181C32',
            flexGrow: 1,
          }}
        >
       CourScribe Curriculum Details
        </p>
        <div
          css={{
            fontSize: 20,
            flexShrink: 0,
            width: 32,
            height: 32,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={onClose}
        >
          <XIcon />
        </div>
      </div>
      <h4 css={{margin: '20px 6px 0px 6px', maxWidth: "320px"}}>Key:</h4>
      <div
            css={{
            display: 'flex',
            alignItems: 'center',
            maxWidth: "340px",
            }}
        >
            <KeyBox title="Curriculum" color="#e4786f" />
            <KeyBox title="Course" color="#E4B26F" />
            <KeyBox title="Module" color="#d3c05e" />
            <KeyBox title="Lesson" color="#d4bd7c" />
        </div>
      <div onClick={() => handleAddText(addCurriculumName(curriculum.name))}>
        <h3 
        css={{
            margin: '20px 6px 0px 6px',
            maxWidth: "320px",
            transform: "translate3d(-5px, calc(var(--levitate) * -5px), calc(var(--levitate) * 3rem)) rotate(-0.6deg) rotateX(calc(var(--levitate) * 6deg)) rotateY(calc(var(--levitate) * -3deg))",
            '&:first-letter': {
                fontSize: '1.4em',
            },
            padding: '6px 6px',
            position: 'relative',
            transformStyle: 'preserve-3d',
            cursor: 'pointer',
            transition: 'transform 0.3s',
            backgroundColor: '#e4786f',
            color: '#2a2a2b',
            '&::after': {
                content: '""',
                pointerEvents: 'none',
                display: 'block',
                position: 'absolute',
                width: '100%',
                height: '100%',
                left: 0,
                top: 0,
                opacity: 0,
                transition: 'opacity 0.3s',
                zIndex: 1,
                mixBlendMode: 'overlay',
                backgroundImage: 'linear-gradient(to left, #ffe4b2, #c8b188)',
            },
            '&:hover': {
                '--levitate': 1,

                '&::before': {
                transform: 'translate3d(6rem, 1rem, -1px) scale(calc(1 - var(--levitate) * 0.1)) rotate(1.5deg)',
                filter: 'blur(8px)',
                },

                '&::after': {
                opacity: 0.6,
                },
            },
            '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                width: '100%',
                left: 0,
                top: 0,
                transition: 'all 0.3s',
                height: 'calc(100% - 2px)',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                zIndex: -1,
                transformOrigin: 'bottom left',
                transform: 'translate3d(8px, 2px, -1px) rotate(1deg)',
                filter: 'blur(2px)',
            },
        }}
        >{curriculum.name}</h3>
        </div>

            <div className='curriculum-item' onClick={()=>handleAddText(addGoal(curriculum.goal))}>
            <p css={{ margin:'16px 6px'}}><span css={{fontWeight:600, paddingRight:'8px'}}>Curriculum Goal:</span>{curriculum.goal}</p>
            </div>
            
            <ul 
            css={{
                display: "grid",
                gridTemplateColumns: "max-content",
                zIndex: 1000,
                position: "relative",
                perspective: "50vw",
                transformStyle: "preserve-3d",
            }}
            >
                {curriculum.children &&  curriculum.children.length > 0 && curriculum.children.map((course) => {
                    return(
                        <li>
                            <h4
                            onClick={() => handleAddText(addCurriculumName(course.name))}
                            css={{
                                margin: '0px 6px',
                                maxWidth: "320px",
                                transform: "translate3d(-5px, calc(var(--levitate) * -5px), calc(var(--levitate) * 3rem)) rotate(-0.6deg) rotateX(calc(var(--levitate) * 6deg)) rotateY(calc(var(--levitate) * -3deg))",
                                '&:first-letter': {
                                    fontSize: '1.4em',
                                },
                                padding: '6px 6px',
                                position: 'relative',
                                transformStyle: 'preserve-3d',
                                cursor: 'pointer',
                                transition: 'transform 0.3s',
                                backgroundColor: '#E4B26F',
                                '&::after': {
                                    content: '""',
                                    pointerEvents: 'none',
                                    display: 'block',
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    left: 0,
                                    top: 0,
                                    opacity: 0,
                                    transition: 'opacity 0.3s',
                                    zIndex: 1,
                                    mixBlendMode: 'overlay',
                                    backgroundImage: 'linear-gradient(to left, #ffe4b2, #c8b188)',
                                },
                                '&:hover': {
                                    '--levitate': 1,
                              
                                    '&::before': {
                                      transform: 'translate3d(6rem, 1rem, -1px) scale(calc(1 - var(--levitate) * 0.1)) rotate(1.5deg)',
                                      filter: 'blur(8px)',
                                    },
                              
                                    '&::after': {
                                      opacity: 0.6,
                                    },
                                },
                                '&::before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    width: '100%',
                                    left: 0,
                                    top: 0,
                                    transition: 'all 0.3s',
                                    height: 'calc(100% - 2px)',
                                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                    zIndex: -1,
                                    transformOrigin: 'bottom left',
                                    transform: 'translate3d(8px, 2px, -1px) rotate(1deg)',
                                    filter: 'blur(2px)',
                                },
                            }}
                            >{course.name}</h4>
                            <p 
                            onClick={()=>handleAddText(addGoal(course.goal))}
                            css={{margin:"12px 6px", cursor: 'pointer', transition: 'transform 0.3s',}}
                            >
                                <span css={{fontWeight:600, marginRight:'8px'}}>Course Goal:</span>
                               {course.goal}
                            </p>
                            <ul>
                                {course.children && course.children.length > 0 && course.children.map((module) => {
                                    return(
                                        <li>
                                            <h4
                                            onClick={() => handleAddText(addCurriculumName(module.name))}
                                            css={{
                                                margin: '0px 6px',
                                                maxWidth: "320px",
                                                transform: "translate3d(-5px, calc(var(--levitate) * -5px), calc(var(--levitate) * 3rem)) rotate(-0.6deg) rotateX(calc(var(--levitate) * 6deg)) rotateY(calc(var(--levitate) * -3deg))",
                                                '&:first-letter': {
                                                    fontSize: '1.4em',
                                                },
                                                padding: '6px 6px',
                                                position: 'relative',
                                                transformStyle: 'preserve-3d',
                                                cursor: 'pointer',
                                                transition: 'transform 0.3s',
                                                backgroundColor: '#d3c05e',
                                                '&::after': {
                                                    content: '""',
                                                    pointerEvents: 'none',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    width: '100%',
                                                    height: '100%',
                                                    left: 0,
                                                    top: 0,
                                                    opacity: 0,
                                                    transition: 'opacity 0.3s',
                                                    zIndex: 1,
                                                    mixBlendMode: 'overlay',
                                                    backgroundImage: 'linear-gradient(to left, #ffe4b2, #c8b188)',
                                                },
                                                '&:hover': {
                                                    '--levitate': 1,
                                            
                                                    '&::before': {
                                                    transform: 'translate3d(6rem, 1rem, -1px) scale(calc(1 - var(--levitate) * 0.1)) rotate(1.5deg)',
                                                    filter: 'blur(8px)',
                                                    },
                                            
                                                    '&::after': {
                                                    opacity: 0.6,
                                                    },
                                                },
                                                '&::before': {
                                                    content: '""',
                                                    display: 'block',
                                                    position: 'absolute',
                                                    width: '100%',
                                                    left: 0,
                                                    top: 0,
                                                    transition: 'all 0.3s',
                                                    height: 'calc(100% - 2px)',
                                                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                                    zIndex: -1,
                                                    transformOrigin: 'bottom left',
                                                    transform: 'translate3d(8px, 2px, -1px) rotate(1deg)',
                                                    filter: 'blur(2px)',
                                                },
                                            }}
                                            >{module.name}
                                            </h4>
                                            <p 
                                            onClick={()=>handleAddText(addGoal(module.goal))}
                                            css={{margin:"12px 6px", cursor: 'pointer', transition: 'transform 0.3s',}}
                                            >
                                                <span css={{fontWeight:600, marginRight:'8px'}}>Module Goal:</span>
                                            {"   "} {module.goal}
                                            </p>
                                            <ul>
                                                {module.children && module.children.length > 0 && module.children.map((lesson) => {
                                                    return(
                                                        <li>
                                                            <h4
                                                            onClick={() => handleAddText(addCurriculumName(lesson.name))}
                                                            css={{
                                                                margin: '0px 6px',
                                                                maxWidth: "320px",
                                                                transform: "translate3d(-5px, calc(var(--levitate) * -5px), calc(var(--levitate) * 3rem)) rotate(-0.6deg) rotateX(calc(var(--levitate) * 6deg)) rotateY(calc(var(--levitate) * -3deg))",
                                                                '&:first-letter': {
                                                                    fontSize: '1.4em',
                                                                },
                                                                padding: '6px 6px',
                                                                position: 'relative',
                                                                transformStyle: 'preserve-3d',
                                                                cursor: 'pointer',
                                                                transition: 'transform 0.3s',
                                                                backgroundColor: '#d4bd7c',
                                                                '&::after': {
                                                                    content: '""',
                                                                    pointerEvents: 'none',
                                                                    display: 'block',
                                                                    position: 'absolute',
                                                                    width: '100%',
                                                                    height: '100%',
                                                                    left: 0,
                                                                    top: 0,
                                                                    opacity: 0,
                                                                    transition: 'opacity 0.3s',
                                                                    zIndex: 1,
                                                                    mixBlendMode: 'overlay',
                                                                    backgroundImage: 'linear-gradient(to left, #ffe4b2, #c8b188)',
                                                                },
                                                                '&:hover': {
                                                                    '--levitate': 1,
                                                            
                                                                    '&::before': {
                                                                    transform: 'translate3d(6rem, 1rem, -1px) scale(calc(1 - var(--levitate) * 0.1)) rotate(1.5deg)',
                                                                    filter: 'blur(8px)',
                                                                    },
                                                            
                                                                    '&::after': {
                                                                    opacity: 0.6,
                                                                    },
                                                                },
                                                                '&::before': {
                                                                    content: '""',
                                                                    display: 'block',
                                                                    position: 'absolute',
                                                                    width: '100%',
                                                                    left: 0,
                                                                    top: 0,
                                                                    transition: 'all 0.3s',
                                                                    height: 'calc(100% - 2px)',
                                                                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                                                                    zIndex: -1,
                                                                    transformOrigin: 'bottom left',
                                                                    transform: 'translate3d(8px, 2px, -1px) rotate(1deg)',
                                                                    filter: 'blur(2px)',
                                                                },
                                                            }}
                                                            >{lesson.name}</h4>
                                                            <p 
                                                            onClick={()=>handleAddText(addGoal(lesson.goal))}
                                                            css={{margin:"12px 6px", cursor: 'pointer', transition: 'transform 0.3s',}}
                                                            >
                                                                <span css={{fontWeight:600, marginRight:'8px'}}>Lesson Goal:</span>
                                                            {lesson.goal}
                                                            </p>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    )
                })}
            </ul>
        </div>
    )

}

const KeyBox = ({ title, color }) => (
    <div
      css={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '10px 2px 6px 2px',

      }}
    >
      <div
        css={{
          padding: '8px 12px',
          backgroundColor: color,
          borderRadius: '22px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '8px',
          color: '#2a2a2b',
          fontWeight: 600,
        }}
      >
        {title}
      </div>
    </div>
  );

  export default DisplayCurriculum;