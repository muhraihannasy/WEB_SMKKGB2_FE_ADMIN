export function getPreloader(isLoading: boolean) {
  const preloader: any = document.getElementById('preloader');
  preloader.style.display = '';

  if (isLoading) preloader.style.display = 'none';
}

export function getToken() {
  return localStorage.getItem('acc_tkn_kgb');
}

export function setToken(token: string): void {
  localStorage.setItem('acc_tkn_kgb', token);

  const expired = new Date();
  expired.setTime(expired.getHours() + 1);
  localStorage.setItem('exp_kgb', expired.toISOString());
}
