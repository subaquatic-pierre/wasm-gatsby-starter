import React, { useEffect } from 'react';
import { graphql, HeadFC } from 'gatsby';
import { Container } from 'react-bootstrap';

import Layout from '../layout';
import { INavLink } from '../types/NavLink';

interface ISiteMeta {
  site: {
    siteMetadata: {
      title: string;
      headerNavLinks: INavLink[];
    };
  };
}

interface Props {
  data: ISiteMeta;
}

const ContactPageQuery: React.FC = () => {
  return (
    <Layout>
      <Container>Contact Page</Container>
    </Layout>
  );
};

export default ContactPageQuery;

export const Head: HeadFC<ISiteMeta> = ({ data }: Props) => (
  <title>{data.site.siteMetadata.title}</title>
);

export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
