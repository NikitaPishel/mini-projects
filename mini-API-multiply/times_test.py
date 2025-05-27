import unittest
import requests

class ApiTest(unittest.TestCase):
	def test_simple(self):
		req = requests.get("http://127.0.0.1:5000/multiply?n=2")
		self.assertEqual(req.status_code, 200)

	def test_wrong_dtype(self):
		nums = {
			"True": 500,
			"None": 500,
			"aaa": 500,
			}

		for n, expected_code in nums.items():
			req = requests.get(f"http://127.0.0.1:5000/multiply?n={n}")
			self.assertEqual(req.status_code, expected_code)

if __name__ == '__main__':
	unittest.main()