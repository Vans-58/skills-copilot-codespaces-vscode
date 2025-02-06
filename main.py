from flask import Flask, jsonify

app = Flask(__name__)

# Sample data
countries = {
    "USA": ["New York", "Los Angeles", "Chicago"],
    "France": ["Paris", "Lyon", "Marseille"],
    "Japan": ["Tokyo", "Osaka", "Kyoto"]
}

@app.route('/cities/<country>', methods=['GET'])
def get_cities(country):
    country = country.capitalize()
    if country in countries:
        return jsonify({country: countries[country]})
    else:
        return jsonify({"error": "Country not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)