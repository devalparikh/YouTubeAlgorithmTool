#!/usr/bin/env python
# coding: utf-8

# In[22]:


from flask import Flask, request, jsonify, render_template
import pickle
from sklearn.feature_extraction.text import CountVectorizer


# In[23]:


app = Flask(__name__)
model = pickle.load(open('../YTModel/YTmodel_pickle', 'rb'))
count_vect = pickle.load(open('../YTModel/count_vect', 'rb'))


# In[24]:


@app.route('/predict', methods=['POST'])
def predict():
    '''
    Using serialized ML model to make a prediction
    '''
    inputs = request.get_json(force=True)
    inputFeatures = inputs['title']
    
    if(inputFeatures):
        predictedViewCount = model.predict(count_vect.transform([inputFeatures]))
        output = predictedViewCount[0]
    else:
        return jsonify({"error": "Invalid Input"})
    
    return jsonify({"prediction": str(output)})
    


# In[ ]:





# In[ ]:




