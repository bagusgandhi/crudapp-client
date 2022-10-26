export default function Input({ name, placeholder, type, onChange, value, border  }){
    return(
        <>
            <input  
                className={`block rounded-xl bg-gray-50 w-full ${border} p-4 shadow-sm focus:outline-none focus:border-sky-500 focus:outline-none focus:bg-gray-100 mb-4`}
                placeholder={placeholder}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                required    
            />
        </>
    );
}