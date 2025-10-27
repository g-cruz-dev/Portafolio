export const validateName = (name) => /^[A-Za-z\s]{3,50}$/.test(name.trim());

export const validateEmail = (email) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.trim());

export const validatePhone = (phone) => {
    if (!phone) return true;
    return /^\+?[0-9\s()-]{7,20}$/.test(phone.trim());
};

export const validateSubject = (subject) => subject.trim().length > 0;

export const validateBody = (body) => body.trim().length > 0;
