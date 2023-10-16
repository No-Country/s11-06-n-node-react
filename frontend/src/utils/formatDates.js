export function formatDate(inputDate) {
    const date = new Date(inputDate);
    const options = { day: 'numeric', month: 'short' };
    return date.toLocaleDateString('es-ES', options);
  }