import styles from './PrimaryBtn.module.css'

export interface IPrimaryBtn {
  sampleTextProp: string
}

const PrimaryBtn: React.FC<IPrimaryBtn> = ({ sampleTextProp }) => {
  return <button className={styles.btn_primary}>{sampleTextProp}</button>
}

export default PrimaryBtn
