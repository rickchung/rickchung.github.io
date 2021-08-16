
# %%
import pandas as pd

data = pd.read_excel('timeline_data.xlsx')
data['End Date'] = data['End Date'].astype(str)
data = data.fillna('')


def transform(x, var):
    y = list(map(list, data.query(f'Category == "{x}"').to_records(
        index=False)))
    y_str = ',\n\t'.join([str(i) for i in y])
    rt = f'const {var} = [\n\t{y_str}\n];'
    return rt


data_achieve = transform('Achievement', 'data_achieve')
data_pub = transform('Publication', 'data_pub')
data_proj = transform('Project', 'data_proj')
data_work = transform('Work', 'data_work')
data_other = transform('Other', 'data_other')

with open('timeline_data.js', 'w+') as fout:
    fout.writelines([data_achieve, '\n', data_proj, '\n',
                    data_pub, '\n', data_work, '\n', data_other, '\n'])


# %%
