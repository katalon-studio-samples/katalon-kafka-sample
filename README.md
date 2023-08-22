# Kafka Testing in Katalon Studio

This project demonstrates how to use Katalon Studio to test Kafka applications. It uses Katalon Studio's ability to import Java libraries to import the Kafka Java Client. It also includes custom keywords to simplify interacting with Kafka.

# Requirements

* [Katalon Studio][studio] 8.6.5 or later
* Gradle installed and configured
* Kafka installed and configured

# Setting up the default profile

This demonstration expects several global variables to be set in the default profile. These variables are used to configure the Kafka connections appropriately. The following variables are required:

* `kafka_topic` - Name of the Kafka topic to be used.
* `configFilePath` - Path to a configuration file, if needed for additional configurations.
* `kafka_bootstrap_servers` - A list of host/port pairs to use for establishing the initial connection to the Kafka cluster.
* `kafka_group_id` - A unique string that identifies the consumer group this consumer belongs to.
* `kafka_auto_offset_reset` - What to do when there is no initial offset in Kafka or if the current offset does not exist anymore on the server (e.g. because that data has been deleted).
* `kafka_acks` - The number of acknowledgments the producer requires the broker to receive before considering a request complete. "0" - no acknowledgments, "1" - only the leader, "all" - full ISR acknowledgment.

# Running the demo

You can view the demonstration by following these steps:

1. Install and configure the prerequisites listed above.
2. Start Katalon Studio
3. Open this project
4. Open the Test Suite "Kafka Test Suite"
5. Run the Test Suite

[studio]: https://katalon.com/katalon-studio  "Katalon Studio"
