# Mqtt medium guide: https://medium.com/python-point/mqtt-basics-with-python-examples-7c758e605d4
# Can create another publisher by copying everything from this file and only changing clientName
# Run with command: py .\MqttPublisher1.py
import paho.mqtt.client as mqtt
from random import randrange, uniform, choice
import string
import time

# Variables that we could get from elsewhere
topic = "AlphabetStream"
clientName = "Event Publisher 2"

# publicly available broker. We need our own
mqttBroker = "mqtt.eclipseprojects.io"  # Don't specify "https://"

client = mqtt.Client(clientName)
client.connect(mqttBroker)

while True:
    stringToSend = choice(string.ascii_letters)
    client.publish(topic, stringToSend)
    print(f"Just published {stringToSend} to topic {topic}")
    time.sleep(0.2)
