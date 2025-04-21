'use client';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import { Header } from '@digital-www-pwa/components';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import ZoomInIcon from '@mui/icons-material/ZoomIn';
import ZoomOutIcon from '@mui/icons-material/ZoomOut';
import ClearIcon from '@mui/icons-material/Clear';

export function MapPage() {
  return (
    <>
      <style>{`
        html, body {
          height: 100%;
        }

        #root {
          height: 100%;
        }

        #content {
          height: calc(100% - 64px);
        }
        `}
      </style>
      <Stack sx={{position: 'relative', height: '100%'}}>
        <TransformWrapper>
          {({ zoomIn, zoomOut, resetTransform }) => (
            <>
            <TransformComponent>
              <img src="/map.jpg" alt="2025 Lakes of Fire Map" style={{maxWidth: '100%', maxHeight: '100%'}} />
            </TransformComponent>
            <Stack direction="row" spacing={1} sx={{position: 'absolute', left: (theme) => theme.spacing(1), top: (theme) => theme.spacing(1)}}>
              <Fab size="small" onClick={() => zoomIn()} aria-label="Zoom In"><ZoomInIcon /></Fab>
              <Fab size="small" onClick={() => zoomOut()} aria-label="Zoom Out"><ZoomOutIcon /></Fab>
              <Fab size="small" onClick={() => resetTransform()} aria-label="Reset Zoom"><ClearIcon /></Fab>
            </Stack>
            </>
          )}
        </TransformWrapper>
      </Stack>
    </>
  );
}
