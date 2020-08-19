
### Reverse engineering the YouTube algorithm by using historical data on videos throughout the platform. 

![Alt Text](https://github.com/devalparikh/YouTubeAlgorithmTool/blob/master/YTATGIF.gif?raw=true)

### v1
- Currently using extracting features out of titles of YouTube videos by using term frequency-inverse document frequency (tf-idf). 
- Using the document-term matrix to train multiple Machine Learning algorithms and applying model selection.
  - Naive Bayes
- What's next:
  - Expand on feature set by taking into consideration subscriber count, category, etc and compare.
  - Provide insight on biases within the results.
  - Obtain CPM data and attempt to predict Google Adsense for a given video.

### System Design
todo

### Dependencies
- Python3
- Anaconda
- [Exported Model with count_vect](#ytmodel-usage)

### Usage
- Run `./init.sh` to start services
- Run `./clean.sh` to shut down services
- `Python API Server` => `port 5000`
- `React Front End` => `port 3000`



### YTModel Usage
1. Call `YTModel.preprocessing()` to preprocess dataframe of training and test data
2. Call `YTModel.trainModelPROD()` to train ML model on preprocessed data
3. Call `YTModel.serialize_model()` to export ML model and count_vect

The serialized object file can be used in external use cases. This file is needed to run the backend server. If this is running on a local machine, be sure to create this object file during environment set up.

