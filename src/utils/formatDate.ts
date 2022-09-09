export const formatDate = () => {

    const dateFormat = new Intl.DateTimeFormat('ru-RU', {
        year: 'numeric', month: 'long', day: 'numeric',
        hour: 'numeric', minute: 'numeric',
    })

    const date = new Date()

    return dateFormat.format(date).replace('г.,', 'в')
}