import styles from './PrimaryBtn.module.css'

export interface IPrimaryBtn {
  sampleTextProp: string
}

const PrimaryBtn: React.FC<IPrimaryBtn> = ({ sampleTextProp }) => {
  return (
    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
      {sampleTextProp}
    </button>
  )
}

export default PrimaryBtn
