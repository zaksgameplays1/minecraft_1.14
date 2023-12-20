package net.lax1dude.eaglercraft.*;
package io.eaglerdevs.eaglercraft.*;
package io.eaglerdevs.eaglercraft.relay.*;

import relay.eaglerdevs.github.io.*;
import net.lax1dude.eaglercraft.*;
import io.eaglerdevs.eaglercraft.*;
import io.eaglerdevs.eaglercraft.relay.*;

import javax.net.ssl.*;
import java.io.File;
import java.net.URI;
import java.net.URISyntaxException;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.cert.X509Certificate;

import java.io.IOException;
import java.io.PrintWriter;
import java.net.ServerSocket;
import java.net.Socket;

public class Relay {
private static Relay newRelay = null;
private static Relay currentRelay = null;
private static Relay newRelayport = null;

}

 public class setUpRelay {
 private static Relay setUp = null;
 private static Relay setUpNewRelayPort = true;
  
 }

public class startRelay {
private static Relay startRelay = null;
private static Relay relayWait = null;
private static Relay relayWSS = true;
private static Relay startWSS = null;

}

public class WSS {
private static WSS relayWSS = null;
private static WSS relayWSSStart = null;
private static WSS portRelayWSS = null;
 
}

public class newServerforRelayPort {
public static final int SERVER_PORT = 443;
  public static void main(String[] args) {
        try {
          
            ServerSocket serverSocket = new ServerSocket(PORT);
            System.out.println("Server has started on port " + PORT);

            while (true) {
                Socket clientSocket = serverSocket.accept();
                System.out.println("Client connected: " + clientSocket.getInetAddress());
             
                PrintWriter out = new PrintWriter(clientSocket.getOutputStream(), true);

                out.println("Hello, Client! This is the server for EaglerDevs Relay Port.");
 
                clientSocket.close();
            }
        } catch (IOException e) {
            e.printStackTrace();
       }
    }
}


    
