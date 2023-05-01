/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package controls.usuarios;

import DB.Domain.Usuarios.Usuario;
import DB.Domain.Usuarios.logSelect;
import utilidades.GsonUtils;

import com.google.gson.Gson;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author sirbon
 */
@WebServlet("/login")
public class login extends HttpServlet {

    private final GsonUtils gsonUtils = new GsonUtils();

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        Usuario usuario = (Usuario) gsonUtils.readFromJson(request, Usuario.class);

        Usuario logUsuario = new logSelect().logearUsuario(usuario);
        if (logUsuario != null) {
            System.out.println("se encontro un usuario");
            gsonUtils.sendAsJson(response, usuario);
        } else {
            System.out.println("no se encontro el usuario");
        }
    }
}
