import React, { Component } from 'react';
import { motion } from 'framer-motion';

export default class ToolPopup extends Component {
  static propTypes = {};

  render() {
    const {
      open,
      side,
      offsetTop,
      offsetHorizontal,
      name,
      url,
      description,
      releaseYear,
      language,
      fileFormats,
      creators,
      developerQuote,
      closePopup,
    } = this.props;

    const variants = {
      hidden: {
        opacity: 0,
        scale: 0.5,
        transitionEnd: {
          display: 'none',
        },
      },
      visible: {
        opacity: 1,
        scale: 1,
        display: 'block',
      },
    };

    const spring = {
      type: 'spring',
      damping: 50,
      stiffness: 500,
    };

    const style = {
      top: offsetTop,
      left: side === 'left' ? offsetHorizontal : 'unset',
      right: side === 'right' ? offsetHorizontal : 'unset',
    };

    return (
      <motion.div
        className={`popup-wrapper ${side}`}
        style={style}
        initial="hidden"
        animate={open ? 'visible' : 'hidden'}
        transition={spring}
        variants={variants}
      >
        <button className="close" onClick={closePopup} />
        <span className="box"></span>
        <div className="tool-popup">
          {/*<img src={image} alt={name} />*/}
          <div className="content">
            <a href={url} target={name}>
              <h2>{name}</h2>
            </a>
            <p>{description}</p>
            <span>
              <h4>Initial Release</h4>
              <h5>{releaseYear}</h5>
            </span>
            <span>
              <h4>Language{language ? (language.length > 1 ? 's' : '') : ''}</h4>
              <h5>
                {language
                  ? language.map((lang, i, arr) => {
                    if (arr.length - 1 === i) {
                      return lang + '.';
                    } else {
                      return lang + ', ';
                    }
                  })
                  : null}
              </h5>
            </span>
            <span>
              <h4>Creator(s)</h4>
              <h5>{creators}</h5>
            </span>
            {fileFormats && fileFormats.length > 0 ? (
              <span>
                <h4>Type{fileFormats.length > 1 ? 's' : ''}</h4>
                <h5>
                  {fileFormats
                    ? fileFormats.map((format, i, arr) => {
                      if (arr.length - 1 === i) {
                        return format + '.';
                      } else {
                        return format + ', ';
                      }
                    })
                    : null}
                </h5>
              </span>
            ) : null}
            {developerQuote ? (
              <span>
                <i>{developerQuote}</i>
              </span>
            ) : null}
          </div>
        </div>
      </motion.div>
    );
  }
}
