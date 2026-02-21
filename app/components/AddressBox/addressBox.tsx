export type AddressBoxTypes = {
    title: string;
    address1: string;
    address2?: string;
    tel?: string;
    tel2?: string;
    fax?: string;
}

const AddressBox = ({title, address1, address2,tel, tel2, fax}:AddressBoxTypes) => {
    return ( 
        <div className="text-sm">
            <h2 style={{color:'#e73127'}} className="font-bold py-2">{title}</h2>
            <p className="py-1">{address1}</p>
            {address2 && <p className="py-1">{address2}</p>}
            {tel && <p className="py-1">Tel: {tel}</p>}
            {tel2 && <p className="py-1">Tel: {tel2}</p>}
            {fax && <p className="py-1">Fax: {fax}</p>}
        </div>
     );
}
 
export default AddressBox;