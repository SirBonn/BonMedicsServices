/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package utilidades;

import com.google.gson.Gson;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 *
 * @author sirbon
 * @param <T>
 */
public class GsonUtils<T> {
    
    private final Gson gson;

    public GsonUtils() {
        gson = new Gson();
    }

    public void sendAsJson(HttpServletResponse response, Object object) throws IOException {
        response.setContentType("application/json");

        String res = gson.toJson(object);

        PrintWriter out = response.getWriter();

        out.print(res);
    }

    public T readFromJson(HttpServletRequest request, Class<T> classT) throws IOException {
        StringBuilder buffer = new StringBuilder();
        BufferedReader reader = request.getReader();

        String line;
        while ((line = reader.readLine()) != null) buffer.append(line);

        String payload = buffer.toString();

        return gson.fromJson(payload, classT);
    }

    public String ReadString(HttpServletRequest request, Class<T> classT) throws IOException {
        StringBuilder buffer = new StringBuilder();
        BufferedReader reader = request.getReader();

        String line;
        while ((line = reader.readLine()) != null) buffer.append(line);

        return buffer.toString();
    }
    
}
