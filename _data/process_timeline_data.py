
# %%
import pandas as pd
import json

data = pd.read_excel('timeline_data.xlsx')
data['End Date'] = data['End Date'].astype(str)
data = data.fillna('')


def transform(x):
    y = list(map(list, data.query(f'Category == "{x}"').to_records(
        index=False)))
    return y;


data_achieve = transform('Achievement')
data_pub = transform('Publication')
data_proj = transform('Project')
data_work = transform('Work')
data_other = transform('Other')

out = {
    "ac": data_achieve,
    "pu": data_pub,
    "pr": data_proj,
    "wo": data_work,
    "ot": data_other,
}

with open('timeline_data.json', 'w+') as fout:
    json.dump(out, fout)

# %%
