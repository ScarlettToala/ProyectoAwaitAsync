import { onMounted, ref } from 'vue'

export function useFetch(url) {

    const data = ref(null)
    const error = ref(null)
    const loading = ref(false)

    /* Caja básica del composable*/
    const fetchData = async () => {
        loading.value = true
        error.value = null
        //por el objeto promersa se quiere saber 

        try {
            const res = await fetch(url.value)
            if (!res.ok) {
                throw new Error("Error en la peticio" + res.status)
            }
            data.value = await res.json();
        } catch (err) {
            error.value = err.mesage
        } finally {
            loading.value = false
        }

    }

    onMounted(fetchData);//Es un disparador que avisa que hasta no se monte el componente no se ejecutará la función

    return { data, error, loading, fetchData}
}