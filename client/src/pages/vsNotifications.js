export function showErrorNotification($vs, error) {
  return $vs.notify({
    title: 'Error',
    text: error,
    position: 'top-right',
    color: 'danger',
  });
}

export function showSuccessNotification($vs, text) {
  return $vs.notify({
    title: 'Success',
    text,
    position: 'top-right',
    color: 'success',
  });
}

export default { showErrorNotification, showSuccessNotification };
