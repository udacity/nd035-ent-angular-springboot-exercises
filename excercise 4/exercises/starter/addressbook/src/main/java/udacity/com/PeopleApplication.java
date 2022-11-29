package udacity.com;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import udacity.com.model.Person;
import udacity.com.repo.PersonRepo;

@SpringBootApplication
public class PeopleApplication implements CommandLineRunner {


    @Autowired
    private PersonRepo personRepo;

        public static void main(String[] args) {
            SpringApplication.run(PeopleApplication.class, args);
        }


        @Override
        public void run(String... args) throws Exception {
            // Populate the database with people
            System.out.println("Adding people");
            personRepo.save(new Person("Mikel","555-5555", "1111 11111 Custom street"));
            personRepo.save(new Person("Chery","555-5555", "1111 22222 Custom street"));
            personRepo.save(new Person("Alice","555-5555", "1111 33333 Custom street"));
            personRepo.save(new Person("Isla","555-5555", "1111 44444 Custom street"));
        }
}
