package udacity.com.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import udacity.com.model.Person;

public interface PersonRepo extends JpaRepository<Person, Long> {

}
