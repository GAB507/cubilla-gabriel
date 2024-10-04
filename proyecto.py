import pyautogui
import pandas as pd
import time
import os

# Cargar el archivo Excel
df = pd.read_excel('datos.xlsx')  # Reemplaza 'datos.xlsx' con la ruta de tu archivo Excel

# Pausa entre cada pulsación para evitar errores de velocidad
pyautogui.PAUSE = 0.05

# para comenzar el script
print("pulse enter para empezar script...")

os.system("pause")

time.sleep(2)

# Simulación de pulsaciones de teclas
for index, row in df.iterrows():
    texto = str(row['nombre'])  # Reemplaza 'Texto' con el nombre de la columna que tiene los datos
    pyautogui.write(texto)     # Escribir en la pantalla
    pyautogui.press("enter")


os.system("pause")

'''

lo que necesito:

*RENG
*CAJAS, por ahora sin doble cajas
*PESO
*CANTIDAD
*MARCA
*ORIGEN

'''