import styles from "./Filter.module.css"


const Filter: React.FC = () : JSX.Element => {

return(
<div className={styles.container}>
<select className={styles.selectUno}>
<option value="like">Outstanding</option>
  <option value="All">More like</option>
  <option value="less">Less like</option>
</select>

<select className={styles.selectDos}>
<option>Publications</option>
<option value="news">Newest</option>
<option value="old">Older</option>   
</select>

<select className={styles.selectTres}>
  <option>Order</option>
  <option value="Asc">a-z</option>
  <option value="Desc">z-a</option>
</select>


</div>
)}



export default Filter