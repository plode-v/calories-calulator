import { useState } from "react"
import { CustomInput } from "../components"

const TipCalculator = () => {

    const [bill, setBill] = useState<number>();
    const [tipPercentage, setTipPercentage] = useState<number>();
    const [people, setPeople] = useState<number>(1);

    const handleBillChange = (e: any) => {
        setBill(parseFloat(e.target.value))
    }

    const handleTipChange = (e: any) => {
        setTipPercentage(parseFloat(e.target.value));
    }

    const handleSplit = (e:any) => {
        setPeople(parseFloat(e.target.value));
    }

    const calculateTipAmount = (): string => {
        if (bill === undefined || tipPercentage === undefined) {
            return "";
        }

        const tipAmount = (bill * tipPercentage) / 100;
        const formattedAmount = parseFloat(tipAmount.toFixed(2));
        return isNaN(formattedAmount) ? "" : formattedAmount.toFixed(2);
    }
    
    const calculateTotalAmount = (): string => {
        const totalAmount = bill !== undefined && tipPercentage !== undefined ? bill + parseFloat(calculateTipAmount()) : NaN;
        return isNaN(totalAmount) ? "" : (totalAmount).toFixed(2);
    }

    const calculatePerPerson = (): string => {
        const perPerson = bill !== undefined ? parseFloat(calculateTotalAmount()) / people : NaN;
        return isNaN(perPerson) ? "" : ((perPerson).toFixed(2)).toString();
    }

    return (
        <div className="flex items-center justify-center w-full h-[80vh] lg:h-[90vh]">
            <div className="md:w-1/2 3xl:w-1/4 w-3/4 justify-center flex flex-col shadow-[10px_10px_20px_-12px_grey] border">
                <div className="flex items-center justify-center pt-8 pb-[70px]">
                    <h1 className="text-[24px] font-[600]">Tip Calculator</h1>
                </div>
                <div className="items-center justify-center flex flex-col">
                    <CustomInput 
                        label="Total Bill"
                        type="number"
                        placeholder="100"
                        value={bill}
                        onChange={handleBillChange}
                        divStyle="grid w-max lg:w-1/2 pb-5"
                        labelStyle="font-[500] mb-1"
                        inputStyle="border focus:outline-none"
                        min="0"
                    />
                    <CustomInput 
                        label="Tip Percentage"
                        type="number"
                        placeholder="15%"
                        value={tipPercentage}
                        onChange={handleTipChange}
                        divStyle="grid w-max lg:w-1/2 pb-5"
                        labelStyle="font-[500] mb-1"
                        inputStyle="border focus:outline-none"
                        min="0"
                    />
                    <CustomInput 
                        label="People"
                        type="number"
                        placeholder="1"
                        value={people}
                        onChange={handleSplit}
                        divStyle="grid w-max lg:w-1/2 pb-5"
                        labelStyle="font-[500] mb-1"
                        inputStyle="border focus:outline-none"
                        min="1"
                    />
                </div>
                <div className="flex flex-col items-center py-10">
                    <p className="py-1">Tip Tip: <strong>{calculateTipAmount()}</strong></p>
                    <p className="py-1">Total Amount: <strong>{calculateTotalAmount()}</strong></p>
                    <p className="py-1">Total Per Person: <strong>{calculatePerPerson()}</strong></p>
                </div>
            </div>
        </div>
    )
}

export default TipCalculator