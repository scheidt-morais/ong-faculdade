
export const Validators = {
  isRequired: (value) => value !== null && value.toString().trim().length > 0,
  minLength: (value, n) => (value || "").trim().length >= n,
  isEmail: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  isPhone: (value) => /\d{10,}/.test(value.replace(/\D/g,'')),
  isCPF: (value) => {
  
    if (!/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value)) return false;
  
    const digits = value.replace(/\D/g,'');
    if (digits.length !== 11) return false;
  
    let sum = 0, rem;
    for (let i=1; i<=9; i++) sum += parseInt(digits.substring(i-1,i)) * (11 - i);
    rem = (sum * 10) % 11; if (rem === 10 || rem === 11) rem = 0;
    if (rem !== parseInt(digits.substring(9,10))) return false;
    sum = 0;
    for (let i=1; i<=10; i++) sum += parseInt(digits.substring(i-1,i)) * (12 - i);
    rem = (sum * 10) % 11; if (rem === 10 || rem === 11) rem = 0;
    if (rem !== parseInt(digits.substring(10,11))) return false;
    return true;
  }
};
