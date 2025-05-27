from flask import request, Flask
import math

app = Flask(__name__)

@app.route("/multiply")
def multiply():
	n = request.args.get("n")
	res = int(n)*2
	return {"result": res}

@app.route("/radius")
def areacirc():
	nat = request.args.get("nat")
	flop = request.args.get("flop")

	n = float(f"{nat}.{flop}")

	print(n)

	res = n**2 * math.pi
	return {"result": res}

app.run(debug=True)