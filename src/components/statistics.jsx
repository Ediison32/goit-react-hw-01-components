
import PropTypes from "prop-types";
import style from "../components/styles/statistics.module.css";

export default function Statistics({title, data}){
    

    const sumatoria=(datas)=>{
        console.log(datas);
        let count = {
            docx: 0,
            pdf: 0,
            mp3: 0,
            psd: 0
        };
    
        datas.forEach(element => {
            
            if (element.label === '.docx') {
                count.docx += element.percentage;
            } else if (element.label === '.pdf') {
                count.pdf += element.percentage;
            } else if (element.label === '.mp3') {
                count.mp3 += element.percentage;
            } else if (element.label === '.psd') {
                count.psd += element.percentage;
            }
        });
    
        return count;
    };

    const total = sumatoria(data)

    return(
        <section className={style.static}>
            <h2  className={style.title}>{title}</h2>

            <ul className={style.statList} >
                <li className={style.item}>
                    <span className={style.label}>.docx</span>
                    <span className={style.percentage}>{total.docx}%</span>
                </li>
                <li className={style.item}>
                    <span className={style.label}>.mp3</span>
                    <span className={style.percentage}>{total.mp3}%</span>
                </li>
                <li className={style.item}>
                    <span className={style.label}>.pdf</span>
                    <span className={style.percentage}>{total.pdf}%</span>
                </li>
                <li className={style.item}>
                    <span>.psd</span>
                    <span className={style.percentage}>{total.psd}%</span>
                </li>
            </ul>
        </section>
    )
};

Statistics.propTypes = {
    
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired
}
