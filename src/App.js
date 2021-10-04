import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import LinkTrack from '../LinkTrack';

const App = () => {
  const [tracklist, setTrack] = useState([
    {
      SongName: '',
      artist: '',
      item_type: '',
      yearReleased: '',
      link: ''
    }
  ]);
  const [search, setSearch] = useState('');
  const [newTrack, setNewTrack] = useState({});

  const setSong = payload => {
    let oldArray = tracklist;
    let newArray = [...oldArray, payload];
    setTrack(newArray);
  };
const Susa = () =>{
  setNewTrack({
    SongName: '',
    artist: '',
    item_type: '',
    yearReleased: '',
    link: ''
  })
}

const handleDelete = val =>{
  setTrack(tracklist.filter(item=> item.SongName !== val))
}
  return (
    <Fragment>
      <main style={{ display: 'flex' }}>
        <div className="leftContent">
          <form className="p-1" onSubmit={e => e.preventDefault()}>
            <div
              className=" text-center"
              style={{ fontSize: '12px', color: 'silver' }}
            >
              {' '}
              ••••••••••{' '}
             
            </div>
            <div className="rightContent text-center"><input
            type="text"
            placeholder="Search"
            name="search"
            value={search}
            onChange={e => setSearch(e.currentTarget.value)}
          />
              <LinkTrack songs={tracklist} delete = {handleDelete} searc={search}/>
            </div>
            <div>
              <label htmlFor="validationServer01" className="formLabel">
                Track Name
              </label>
              <input
                className="mt-0"
                value={newTrack.SongName}
                onChange={e =>
                  setNewTrack({
                    ...newTrack,
                    SongName: e.currentTarget.value
                  })
                }
                type="text"
                name="linkTitle"
                placeholder=" "
                id="validationServer01"
              />
            </div>

            <div>
              <label htmlFor="linkTitle" className="formLabel ">
                Artist
              </label>
              <input
                className=""
                value={newTrack.artist}
                onChange={e =>
                  setNewTrack({
                    ...newTrack,
                    artist: e.currentTarget.value
                  })
                }
                type="text"
                name="linkTitle"
                placeholder=" "
              />
            </div>

            <div>
              <label htmlFor="linkTitle" className="formLabel ">
                Item Type
              </label>
              <input
                className=""
                value={newTrack.item_type}
                onChange={e =>
                  setNewTrack({
                    ...newTrack,
                    item_type: e.currentTarget.value
                  })
                }
                type="text"
                name="linkTitle"
                placeholder=" "
              />
            </div>

            <div>
              <label htmlFor="linkTitle" className="formLabel ">
                Year Released
              </label>
              <input
                className=""
                value={newTrack.yearReleased}
                onChange={e =>
                  setNewTrack({
                    ...newTrack,
                    yearReleased: e.currentTarget.value
                  })
                }
                type="text"
                name="linkTitle"
                placeholder=" "
              />
            </div>
            <div>
              <label htmlFor="linkHref" className="formLabel ">
                Track Link
              </label>

              <input
                className=""
                value={newTrack.link}
                onChange={e =>
                  setNewTrack({
                    ...newTrack,
                    link: e.currentTarget.value
                  })
                }
                type="text"
                name="linkHref"
                placeholder=""
              />
            </div>
            
            <button style={{width:'50%'}} className="mt-1" onClick={() => setSong(newTrack)}>
              Add Bookmark
            </button>
        
          </form>
        </div>
      </main>
    </Fragment>
  );
};
export default App;
