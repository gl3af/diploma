import parse, {
  type HTMLReactParserOptions,
  Element,
  domToReact,
  type DOMNode,
  attributesToProps,
} from "html-react-parser";
import { Box, Text, Title } from "./custom";

const options: HTMLReactParserOptions = {
  replace(domNode) {
    if (!(domNode instanceof Element) || !domNode.children || !domNode.attribs)
      return;

    const props = attributesToProps(domNode.attribs);

    if (domNode.tagName === "ol") {
      return (
        <Box as="ol" {...props} className="ml-4 list-decimal">
          {domToReact(domNode.children as DOMNode[], options)}
        </Box>
      );
    }

    if (domNode.tagName === "ul") {
      return (
        <Box as="ul" {...props} className="ml-4 list-disc">
          {domToReact(domNode.children as DOMNode[], options)}
        </Box>
      );
    }

    if (domNode.tagName === "li") {
      return (
        <Box as="li" {...props} className="ml-4 pl-2">
          {domToReact(domNode.children as DOMNode[], options)}
        </Box>
      );
    }

    if (domNode.tagName === "h1") {
      return (
        <Title order={1} {...props} className="text-xl md:text-2xl">
          {domToReact(domNode.children as DOMNode[], options)}
        </Title>
      );
    }

    if (domNode.tagName === "h2") {
      return (
        <Title order={2} {...props} className="text-lg md:text-xl">
          {domToReact(domNode.children as DOMNode[], options)}
        </Title>
      );
    }

    if (domNode.tagName === "h3") {
      return (
        <Title order={3} {...props} className="text-md md:text-lg">
          {domToReact(domNode.children as DOMNode[], options)}
        </Title>
      );
    }

    if (domNode.tagName === "p") {
      return (
        <Text {...props} className="text-md font-medium">
          {domToReact(domNode.children as DOMNode[], options)}
        </Text>
      );
    }
  },
};

export const HtmlContent = ({ content }: { content: string }) => {
  return <>{parse(content, options)}</>;
};
