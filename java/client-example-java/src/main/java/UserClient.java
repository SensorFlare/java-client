import com.sensorflare.client.SensorflareClient;
import org.json.JSONException;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;
import java.util.Properties;

/**
 * Usage example for Sensorflare Java Client.
 */
public class UserClient {
    public static void main(final String[] args) throws IOException, JSONException {
        Properties properties = new Properties();
        properties.load(new FileInputStream("sensorflare.properties"));

        final String username = properties.getProperty("username");
        final String password = properties.getProperty("password");
        SensorflareClient sensorflareClient = new SensorflareClient();
        sensorflareClient.authenticate(username, password);
        final List<String> dashboards = sensorflareClient.dashboards();
        for (String dashboard : dashboards) {
            System.out.println(dashboard);
        }
    }
}
