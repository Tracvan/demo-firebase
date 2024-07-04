import './App.css';
import { useState, useEffect } from 'react';
import { storage } from './firebase';
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage';
import { v4 } from 'uuid'

function App() {
  const [img, setImg] = useState(null);
  const [imgList, setImgList] = useState([])
  const imgRef = ref(storage, "images/");
  const uploadImage = () => {
    if (img == null) return;
    const imgRef = ref(storage, 'images/' + img.name + v4());
    uploadBytes(imgRef, img).then(() => {
      alert('Image uploaded')
    })
  };
  useEffect(() => {
    listAll(imgRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImgList((prev) => [...prev, url])
        })
      })
    })
  });



  return (
    <div className="App">
      <input type='file' onChange={(event) => { setImg(event.target.files[0]) }}></input>
      <button onClick={uploadImage}>upload imgae</button>

      {imgList.map((url) => {
        return <img src={url} />
      })}
    </div>
  );
}

export default App;
