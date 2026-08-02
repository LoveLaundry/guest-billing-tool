import { sampleBillInfo } from "../../data/constants";

const BillItemsTable=()=>{
    return(
        <div className="text-sm w-full h-full">
            <div className="flex flex-row items-center justify-center w-full">
                <div className="border w-full text-center">Description of Item</div>
                <div className="border w-20 text-center">QTY</div>
                <div className="border w-24 text-center">Rate</div>
                <div className="border w-36 text-center">Amount</div>
                <div className="border w-16 text-center">CTs.</div>
            </div>
            <div>
                {
                    sampleBillInfo.items.map((item, index) => (
                        <BillItem key={index} index={index} description={item.itemName} qty={item.quantity} rate={item.price} />
                    ))
                }
            </div>
            <div>
                <TotalRow totalQTY={120} totalAmount={1200} totalCents={0} />
            </div>
        </div>
    )
}

export default BillItemsTable;

const BillItem=({ index, description, qty, rate }: { index: number; description: string; qty: number; rate: number })=>{
    return(
        <div className="flex flex-row items-center justify-center w-full">
            <div className="w-full border"><span className="px-2">{index + 1}.</span> {description}</div>
            <div className="w-20 text-center border">{qty}</div>
            <div className="w-24 text-center border">{rate}</div>
            <div className="w-36 text-center border">{(qty * rate).toFixed(2)}</div>
            <div className="w-16 text-center border">{(((qty * rate) % 1 * 100).toString()+"00").slice(0, 2)}</div>
        </div>
    )
}

const TotalRow=({ totalQTY, totalAmount, totalCents }: { totalQTY: number; totalAmount: number; totalCents: number })=>{
    return(
        <div className="flex flex-row items-center justify-center w-full font-bold">
            <div className="w-full text-right flex justify-end items-center">
                <div className="font-bold border w-fit px-4">Total:</div>
            </div>
            <div className="w-20 text-center border">{totalQTY}</div>
            <div className="w-24 text-center border"></div>
            <div className="w-36 text-center border">{totalAmount.toFixed(2)}</div>
            <div className="w-16 text-center border">{totalCents.toString().padStart(2, '0')}</div>
        </div>
    )
}
