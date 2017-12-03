import React from 'react';
import HtmlToReact from 'html-to-react';
import { convertLyricsForm } from '../../utils/helpers';

// Parses lyrics string from db into React
const htmlToReactParser = new HtmlToReact.Parser();
const isValidNode = () => true;
const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);

const FormLyrics = ({ lyrics, referents, handleClick }) => {
  // Configuration for parser
  const processingInstructions = [
    // Custom <span> processing
    {
      shouldProcessNode: node => {
        return node.name === 'span';
      },
      processNode: (node, children, index) => {
        let refId = node.attribs['ref-id'];
        return React.createElement(
          'span',
          {
            key: index,
            className: `ref-${refId}`
          },
          children
        );
      }
    },
    // Custom <p> processing
    {
      shouldProcessNode: node => {
        return node.name === 'p';
      },
      processNode: (node, children, index) => {
        let className = 'line clickable';
        if (node.children.find(el => el.name === 'span')) {
          className = 'line disabled';
        }
        return React.createElement(
          'p',
          {
            key: index,
            'data-id': index / 2,
            className,
            onClick: handleClick
          },
          children
        );
      }
    },
    // Default processing
    {
      shouldProcessNode: node => {
        return true;
      },
      processNode: processNodeDefinitions.processDefaultNode
    }
  ];


  let htmlStr = convertLyricsForm(lyrics, referents);

  return htmlToReactParser.parseWithInstructions(htmlStr, isValidNode, processingInstructions);
};

export default FormLyrics;
