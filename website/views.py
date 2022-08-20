from flask import Blueprint, render_template, redirect, url_for, flash, request, jsonify

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template('home.html')
