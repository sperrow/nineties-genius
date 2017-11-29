import React from 'react';
import HtmlToReact from 'html-to-react';
import { convertLyrics } from '../../utils/helpers';

// Parses lyrics string from db into React
const htmlToReactParser = new HtmlToReact.Parser();
const isValidNode = () => true;
const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);

const Lyrics = ({ lyrics, fragment, handleClick }) => {
  // Configuration for parser
  const processingInstructions = [
    // Custom <a> processing
    {
      shouldProcessNode: node => {
        return node.name === 'a';
      },
      processNode: (node, children, index) => {
        let refId = node.attribs['ref-id'];
        return React.createElement(
          'a',
          {
            href: '#',
            key: index,
            className: `annotation-line ref-${refId}`,
            onClick: handleClick(refId)
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

  let htmlStr = convertLyrics(lyrics, fragment);

  return htmlToReactParser.parseWithInstructions(htmlStr, isValidNode, processingInstructions);
};

export default Lyrics;
