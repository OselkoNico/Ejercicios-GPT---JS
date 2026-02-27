function getUsers() {
  return new Promise(resolve => {
    setTimeout(() => resolve(["Ana", "Luis", "Carlos"]), 500);
  });
}

function sendEmail(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (user === "Luis") return reject(new Error("Email fallido"));
      resolve(`Email enviado a ${user}`);
    }, 400);
  });
}

async function notifyUsers() {
  try {
    const users = await getUsers();
    console.log("Usuarios a notificar:", users);

    for (const user of users) {
      try {
        const msg = await sendEmail(user);
        console.log(msg);
      } catch (err) {
        console.error(`Error al enviar a ${user}:`, err.message);
      }
    }

  } catch (err) {
    console.error("Error inesperado:", err.message);
  }
}

// ejecutar
notifyUsers();