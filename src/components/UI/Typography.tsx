import styled from '@emotion/styled';
import type { JSX, ReactNode } from 'react';

type TypographyVariant =
  | 'title1'
  | 'title2'
  | 'subtitle1'
  | 'subtitle2'
  | 'body1'
  | 'body2';
type TypographyWeight = 'regular' | 'medium' | 'bold';

interface TypographyProps {
  variant: TypographyVariant;
  weight?: TypographyWeight;
  color?: string;
  children: ReactNode;
  as?: keyof JSX.IntrinsicElements;
}

const Typography = ({
  variant,
  weight = 'regular',
  color,
  children,
  as = 'p',
}: TypographyProps) => {
  return (
    <StyledTypography as={as} variant={variant} weight={weight} color={color}>
      {children}
    </StyledTypography>
  );
};

export default Typography;

const StyledTypography = styled.p<{
  variant: TypographyVariant;
  weight: TypographyWeight;
  color?: string;
}>`
  font-size: ${({ theme, variant }) => theme.typography[variant].fontSize};
  line-height: ${({ theme, variant }) => theme.typography[variant].lineHeight};
  font-weight: ${({ theme, weight }) => theme.typography.fontWeight[weight]};
  color: ${({ theme, color }) => color ?? theme.colors.text.default};
`;
