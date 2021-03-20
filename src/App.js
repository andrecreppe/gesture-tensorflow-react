import React, { useRef, useEffect } from 'react';
import * as tf from '@tensorflow/tfjs';
import Webcam from 'react-webcam';
import './App.css';
import * as utilities from './utilities';

function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runApp = async () => {
    // Loading model from the network
    const modelURL = 'https://tensorflowjs-model.s3.us-south.cloud-object-storage.appdomain.cloud/model.json';
    const net = await tf.loadGraphModel(modelURL);
    
    const detectionSpeed = 16.7;

    // Detection
    setInterval(() => {
      detect(net);
    }, detectionSpeed);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== 'undefined' &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const img = tf.browser.fromPixels(video);
      const resized = tf.image.resizeBilinear(img, [640, 480]);
      const casted = resized.cast('int32');
      const expanded = casted.expandDims(0);
      const obj = await net.executeAsync(expanded);
      const boxes = await obj[1].array();
      const classes = await obj[2].array();
      const scores = await obj[4].array();

      // Draw mesh
      const ctx = canvasRef.current.getContext('2d');
      requestAnimationFrame(() => {
        utilities.drawRect(boxes[0], classes[0], scores[0], 0.8, videoWidth, videoHeight, ctx);
      })
      
      // Memory cleanup
      tf.dispose(img)
      tf.dispose(resized)
      tf.dispose(casted)
      tf.dispose(expanded)
      tf.dispose(obj)
    }
  };

  useEffect(() => {
    runApp()
  }, []);

  return (
    <>
      <div className='App'>
        <header className='App-header'>
          <h2 style={{
            position: 'absolute',
            marginTop: '-800px'
          }}>Gesture detection - TensorflowJS</h2>

          <a 
            href='https://github.com/andrecreppe/gesture-tensorflow-react' 
            style={{
              position: 'absolute',
              marginTop: '-650px',
              fontSize: 30,
              color: 'red'
            }}>GitHub code</a>
          
          <Webcam
            ref={webcamRef}
            muted={true} 
            style={{
              position: 'absolute',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: 0,
              right: 0,
              textAlign: 'center',
              zindex: 9,
              width: 640,
              height: 480,
            }}
          />

          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              marginLeft: 'auto',
              marginRight: 'auto',
              left: 0,
              right: 0,
              textAlign: 'center',
              zindex: 8,
              width: 640,
              height: 480,
            }}
          />
        </header>
      </div>
    </>
  );
}

export default App;
