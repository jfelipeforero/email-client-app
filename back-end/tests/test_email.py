import pytest
from flaskr import create_app
from flaskr.models import User
from unittest.mock import patch


def test_get_emails_user(client, user_one):
    response = client.get("/email/user", query_string ={"user_id": "1"}) 
    assert response.status_code == 200
    data = response.get_json() 
    assert data["status"] == "success" 
    assert "sent" in data["data"]
    assert "received" in data["data"]


def test_get_all_emails(client):
    response = client.get("/email/users")
    assert response.status_code == 200
    data = response.get_json()
    assert "status" in data
    assert data["status"] == "success"
    assert "data" in data


"""
def test_send_email(client, user_one, user_two):
    payload = {
        "sender": "1",
        "recipient": "2",
        "subject": "Test Subject",
        "body": "Test Body",
    }
    response = client.post("/email/send", json=payload)  
    assert response.status_code == 201
    data = response.get_json()
    assert "status" in data
    assert data["status"] == "success"
    assert "data" in data
    assert "email" in data["data"]
    assert "sender" in data["data"]
    assert "recipient" in data["data"]
"""
