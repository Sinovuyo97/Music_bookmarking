import React, { Fragment } from 'react';
const LinkTrack = props => {
  const handleDelete = nam => {
    props.delete(nam);
  };
  const displayTrack = props.songs
    .filter(val => {
      if (props.searc == '') {
        return val;
      } else if (val.searc.includes(props.searc)) {
        return val;
      }
      console.log(props.searc)
    })
    .map((tracks, i) => {
      if (i > 0) {
        return (
          <>
            <div className="linkTra">
              {' '}
              <div className="" />
              <a href="{tracks.link}">
                {tracks.SongName} {tracks.artist} {tracks.item_type}{' '}
                {tracks.yearReleased}
              </a>
            </div>
            <button onClick={() => handleDelete(tracks.SongName)}>
              delete
            </button>
          </>
        );
      }
    });
  return <Fragment>{displayTrack}</Fragment>;
};
export default LinkTrack;
