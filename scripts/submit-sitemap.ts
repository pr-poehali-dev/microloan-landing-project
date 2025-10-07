/**
 * Script to submit sitemap to search engines
 * Sends notifications to Yandex and Google when sitemap is updated
 */

const SITE_URL = 'https://mikrofinru.ru';
const SITEMAP_URL = `${SITE_URL}/sitemap.xml`;

async function submitToYandex(): Promise<void> {
  const yandexPingUrl = `https://webmaster.yandex.ru/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
  
  try {
    const response = await fetch(yandexPingUrl);
    if (response.ok) {
      console.log('✅ Яндекс: Sitemap успешно отправлен');
    } else {
      console.log('⚠️ Яндекс: Ошибка при отправке sitemap');
    }
  } catch (error) {
    console.log('❌ Яндекс: Не удалось отправить sitemap');
  }
}

async function submitToGoogle(): Promise<void> {
  const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(SITEMAP_URL)}`;
  
  try {
    const response = await fetch(googlePingUrl);
    if (response.ok) {
      console.log('✅ Google: Sitemap успешно отправлен');
    } else {
      console.log('⚠️ Google: Ошибка при отправке sitemap');
    }
  } catch (error) {
    console.log('❌ Google: Не удалось отправить sitemap');
  }
}

async function submitSitemap(): Promise<void> {
  console.log('🚀 Отправка sitemap в поисковые системы...');
  console.log(`📍 URL карты сайта: ${SITEMAP_URL}\n`);
  
  await Promise.all([
    submitToYandex(),
    submitToGoogle()
  ]);
  
  console.log('\n✨ Готово! Поисковые системы уведомлены об обновлении.');
  console.log('📌 Индексация может занять от нескольких часов до нескольких дней.');
}

submitSitemap();
