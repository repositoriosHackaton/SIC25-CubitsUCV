* anime_dataset: DataFrame donde está el archibo anime.csv.
* anime_dataset_filt: DataFrame que contiene sólo los animes que cumplen con la longitud de la sinopsis (minimo 200 caracteres)
* anime_dataset_filt.sort_values(by='popularity_rank'): ordena anime_dataset_filt segun el rango
* col_delete_list: lista de las columnas que se van a eliminar de anime_dataset_filt
* filter_columns: lista de las columnas que se van a dejar en anime_dataset_filt
* anime_dataset_filt['genres'].apply(lambda x: x.split('|')): comvierte los string de la columna genero en una lista donde e stan los generos
* anime_dataset_filt['synopsis'].apply(len) crea una nueva columna para la longitud de la sinopsis
* mapa_nombres_a_ids: diccionario donde la clave es el "nombre" del genero y el valor el "id"
* anime_dataset_filt['genres'].apply(lambda lista: [mapa_nombres_a_ids[elemento] for elemento in lista]): remplaza los nombres de los generos por el ID
* df_exploded: expande anime_dataset_filt para dividir las listas de generos en filas individuales
* df_generos_count: Agrupamos por el género y contamos la cantidad de animes en cada uno
* pd.merge(data_generos, df_generos_count, on='genres_ID', how='left'): une la cantidad de anime segun el genero
* correlacion_longSynop_populRank: correlacion entre la longitud de la sinopsis y el rank de popularidad. conclusión: mientras más larga la sinopsis mas posibilidad de que esté mejor rankeado.
  ![Captura de pantalla 2024-11-19 212747](https://github.com/user-attachments/assets/ab505d6d-69e3-4e7f-a0fa-c5c8fc1053a6)
*  promedio_ranking_por_genero: el promedio de popularidad según el total de animes en anime_dataset
*  top_rango: el rango en que se van a evaluar los animes más populares
*  proporcion_alto_rango: la proporción de los generos en anime_dataset que pertenecen al top que se marcó.
*  frecuencia_top_genero: la cantidad de veces que aparece un genero en el top que se denotó

* plt muestra la grafica de puntos de popularidad segun la extención de la sinopsis 
