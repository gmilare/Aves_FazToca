import sqlite3

# Conectar ao banco de dados
conn = sqlite3.connect('database.db')
cursor = conn.cursor()

# Nome que deseja apagar
nome_para_apagar = ''

# Executa o comando DELETE com parâmetro para evitar SQL Injection
cursor.execute("DELETE FROM aves WHERE nome = ?", (nome_para_apagar,))

# Salva as alterações no banco de dados
conn.commit()

# Fecha a conexão
conn.close()

print(f"Registro com nome '{nome_para_apagar}' apagado (se existia).")

