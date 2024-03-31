type TitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  order: 1 | 2 | 3 | 4 | 5 | 6;
};

export const Title = ({ order, ...rest }: TitleProps) => {
  const Component = `h${order}`;
  return <Component {...rest} />;
};
