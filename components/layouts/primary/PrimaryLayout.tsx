import Head from 'next/head'

export interface IPrimaryLayout {
  children: any
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Primary Layout Example</title>
      </Head>
      <main className="text-white">{children}</main>
    </>
  )
}

export default PrimaryLayout
