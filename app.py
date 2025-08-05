from flask import Flask, jsonify
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

API_KEY = 'YOUR_NEWS_API_KEY'  # Replace with your actual News API key

@app.route("/news")
def get_news():
    url = f"https://newsapi.org/v2/top-headlines?category=technology&pageSize=5&language=en&apiKey={API_KEY}"
    try:
        response = requests.get(url)
        data = response.json()
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(port=5000)
