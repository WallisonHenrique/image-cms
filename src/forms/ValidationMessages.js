export const GetMessages = (elem) => {
    const messages = [];
    if (elem.validity.valueMissing) {
        messages.push("Preencha esse campo");
    }
    if (elem.validity.typeMismatch) {
        messages.push(`Inválido ${elem.type}`);                        
    }    
    return messages;
}
