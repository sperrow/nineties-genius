import React from 'react';
import HtmlToReact from 'html-to-react';
import { convertLyrics } from '../../utils/helpers';

const handleClick = id => {
  return e => {
    e.preventDefault();
    console.log(id);
  };
};

// Parses lyrics string from db into React
const htmlToReactParser = new HtmlToReact.Parser();
const isValidNode = () => true;
const processNodeDefinitions = new HtmlToReact.ProcessNodeDefinitions(React);
const processingInstructions = [
  {
    // Custom <a> processing
    shouldProcessNode: function (node) {
      return node.name === 'a';
    },
    processNode: function (node, children, index) {
      let refId = node.attribs['ref-id'];
      return React.createElement(
        'a',
        {
          href: '#',
          key: index,
          className: 'annotation-line',
          onClick: handleClick(refId)
        },
        children
      );
    }
  },
  {
    // Default
    shouldProcessNode: function (node) {
      return true;
    },
    processNode: processNodeDefinitions.processDefaultNode
  }
];

const Lyrics = ({ lyrics, fragment }) => {
  let htmlStr = convertLyrics(lyrics, fragment);

  return htmlToReactParser.parseWithInstructions(htmlStr, isValidNode, processingInstructions);
};

export default Lyrics;
