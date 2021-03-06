import Head from 'next/head';
import { colors, fonts } from '../../styles/theme';

type AppLayoutProps = {
  title?: string;
  children: React.ReactNode;
};

const AppLayout = ({ title, children }: AppLayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} | Aram Ceballos`
            : 'Aram Ceballos - Full Stack JavaScript Developer'}
        </title>
      </Head>
      <main>{children}</main>

      <style jsx>{`
        main {
          height: calc(100% - 60px);
        }
      `}</style>

      <style jsx global>{`
        * {
          outline: none;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          font-family: ${fonts.base};
          background-color: ${colors.darkGray};
        }

        a {
          text-decoration: none;
          display: inline;
          color: black;
        }
      `}</style>
    </>
  );
};

export default AppLayout;
