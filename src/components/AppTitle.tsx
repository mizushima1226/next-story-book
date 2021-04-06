export type Props = {
  text: string;
}

export const AppTitle = (props: Props) => {
  const { text } = props;

  return (
    <>
      <h2>{text}</h2>
      <style jsx>{`
          h2 {
            color: #0E6163;
            font-size: 50px;
            margin: 0px;
          }
        `}</style>
    </>
  )

};