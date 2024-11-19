import pandas as pd
#
anime_dataset = pd.read_csv("./anime.csv", sep = '\t',on_bad_lines='skip')

anime_dataset.columns = anime_dataset.columns.str.lower()
anime_dataset.columns = anime_dataset.columns.str.replace(' ', '_')

#@title Filtrando


anime_dataset_filt = pd.DataFrame(anime_dataset[ anime_dataset["synopsis"].str.len() >= 250 ])
anime_dataset_filt.index = range(0,len(anime_dataset_filt)) 

# anime_dataset_descarted = pd.DataFrame(anime_dataset[ anime_dataset["synopsis"].str.len() < 250 ]) # animes descartados por la sinopsis  



col_delete_list = ["type", "source_type", "status", "num_episodes", "start_date",
                   "end_date", "season", "studios", "clubs", "score_01_count",
                   "score_02_count", "score_03_count", "score_04_count", "score_05_count",
                   "score_06_count", "score_07_count", "score_08_count", "score_09_count",
                   "score_10_count", "num_episodes", "favorites_count", "watching_count",
                   "completed_count","on_hold_count","dropped_count"]
filter_columns = list(filter(lambda x: True if x not in col_delete_list else False, list(anime_dataset_filt.columns)))

anime_dataset_filt = anime_dataset_filt[filter_columns] # dateFrame resultante despues de los filtros 





# SOLO ES PARR TENER CONTEO DE LOS NaN
numero_nan_genres = anime_dataset_filt['genres'].isna().sum()
numero_nan_score = anime_dataset_filt['score'].isna().sum()
numero_nan_score_count = anime_dataset_filt['score_count'].isna().sum()
numero_nan_score_rank = anime_dataset_filt['score_rank'].isna().sum()
numero_nan_popularity_rank = anime_dataset_filt['popularity_rank'].isna().sum()
numero_nan_pics = anime_dataset_filt['pics'].isna().sum()







# 
