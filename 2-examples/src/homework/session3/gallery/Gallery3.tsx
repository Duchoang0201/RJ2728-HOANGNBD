import React, { useState } from 'react';

const App = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const images = [    'http://localhost:3000/static/media/GALLERY1.f9fb3fb9eee61e5f8706.jpg',    'http://localhost:3000/static/media/GALLERY2.a8c9fff8e7e718427d60.jpg',   'http://localhost:3000/static/media/GALLERY3.fcd6e9b70b3f1491c2ba.jpg'  ];
 
  const [tabs, setTabs] = useState([
    { id: 1, title: 'Tab 1', content: require('./IMG/GALLERY1.jpg') },
    { id: 2, title: 'Tab 2', content: require('./IMG/GALLERY2.jpg') },
    { id: 3, title: 'Tab 3', content: require('./IMG/GALLERY3.jpg') },
  ]);
  return (
    <>
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {images.map((image, index) => (
        <div 
          onClick={() => handleImageClick(index)} 
          style={{ width: '33.33%', padding: '5px' }}
        >
          <img 
            src={image} 
            style={{ width: '100%', cursor: 'pointer' }}
          />
        </div>
      ))}
      {selectedImage !== null && (
        <div style={{ position: 'fixed', top: 0, left: 0, bottom: 0, right: 0, background: 'rgba(0, 0, 0, 0.8)' }}>
          <img 
            src={images[selectedImage]} 
            style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '90%', maxHeight: '90%' }}
            onClick={() => setSelectedImage(null)}
          />
          <button
            style={{ position: 'fixed', top: 10, right: 300, zIndex: 1, background: 'rgba(0,0,0,0.1) ', color: "grey"  }}
            onClick={() => setSelectedImage(null)}
          >
            X
          </button>
          <button
            className='border-0'
            style={{ position: 'fixed', top: '50%', left: 300, background: 'rgba(0,0,0,0.1) ', color: "grey" }}
            onClick={() => setSelectedImage(selectedImage - 1 < 0 ? images.length - 1 : selectedImage - 1)}
            disabled={selectedImage === 0}
          >
            &lt;
          </button>
          <button
            className='border-0'
            style={{ position: 'absolute', top: '50%', right: 300, background: 'rgba(0,0,0,0.1) ', color: "grey" }}
            onClick={() => setSelectedImage((selectedImage + 1) % images.length)}
            disabled={selectedImage === images.length - 1}
          >
            &gt;
          </button>
        </div>
      )}

    </div>
   

    </>
  );
};

export default App;
