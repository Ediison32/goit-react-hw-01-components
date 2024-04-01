import style from "../components/styles/transaction.module.css"

export default function TransactionHistory(history){
    console.log("hola");
    console.log(history);
    
    console.log();
    return(
        <table className={style.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency </th>
                </tr>
            </thead>
            <tbody>
                {history.history.map(item=>(
                    <tr  key ={item.id} > 
                        <td className={style.center}>{item.type}</td>
                        <td className={style.center}>{item.amount}</td>
                        <td className={style.center}>{item.currency}</td>
                    </tr>
                    
                ))}
            </tbody>
        </table>
    )
}