import CellphoneSvg from '@/assets/svg/Cellphone'
import styles from '@/styles/home.module.scss'

const Cellphone = (): JSX.Element => {
  return (
    <div className={styles.cellphone}>
      <CellphoneSvg />
    </div>
  )
}
export default Cellphone
