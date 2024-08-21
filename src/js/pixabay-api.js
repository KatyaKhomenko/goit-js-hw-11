const API_KEY = '45558059-b9821aa2a932c0b23c0858cef';
const BASE_URL = 'https://pixabay.com/api/';

// Функция для выполнения HTTP-запроса
export function fetchImages(query) {
    
    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                return Promise.reject(
                    `Network response was not ok: ${response.statusText}`
                    );
            }
            return response.json();
        });
}